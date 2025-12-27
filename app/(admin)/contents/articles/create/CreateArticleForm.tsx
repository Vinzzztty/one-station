"use client";

import { useState, useRef } from "react";
import MDEditor from "@uiw/react-md-editor";
import Link from "next/link";
import { publishArticleAction } from "./actions"; // Import server action
import { CategoryModel as Category } from "@/app/generated/prisma/models/Category"; // Updated import path

interface CreateArticleFormProps {
  categories: Category[];
}

export default function CreateArticleForm({
  categories,
}: CreateArticleFormProps) {
  // State Utama
  const [isPending, setIsPending] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // State Form
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("**Hello world!**");
  const [excerpt, setExcerpt] = useState("");

  // State Tags
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  // State Image
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // State Category
  const [isNewCategory, setIsNewCategory] = useState(false);

  // --- Handlers ---

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setTitle(val);
    setSlug(
      val
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "")
    );
  };

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newTag = tagInput.trim();
      if (newTag && !tags.includes(newTag) && tags.length < 5) {
        setTags([...tags, newTag]);
        setTagInput("");
      }
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File too large (max 5MB)");
        return;
      }
      const url = URL.createObjectURL(file);
      setImagePreview(url);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);

    // Append manual data (content & tags) ke formData
    formData.set("content", content || "");
    formData.set("tags", JSON.stringify(tags));

    const result = await publishArticleAction(formData);

    if (result?.error) {
      setErrorMsg(result.error);
      setIsPending(false);
    }
    // Jika sukses, action akan melakukan redirect otomatis
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-7xl mx-auto pb-20">
      {/* HEADER ACTION */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-foreground">
            Write New Article
          </h2>
          <p className="text-muted mt-1">
            Create compelling content for your audience.
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/contents/articles"
            className="px-5 py-2.5 text-sm font-medium text-muted hover:text-foreground transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={isPending}
            className="bg-primary hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium shadow-sm transition-all hover-lift flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? "Publishing..." : "Publish Article"}
          </button>
        </div>
      </div>

      {errorMsg && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg">
          {errorMsg}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* === LEFT COLUMN: Main Editor === */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title Input */}
          <div className="space-y-2">
            <input
              name="title"
              type="text"
              placeholder="Enter article title..."
              value={title}
              onChange={handleTitleChange}
              required
              className="w-full text-4xl font-bold text-foreground placeholder:text-muted/40 border-none bg-transparent focus:ring-0 focus:outline-none px-0"
            />
            {/* Hidden Slug Input untuk dikirim ke server */}
            <input type="hidden" name="slug" value={slug} />

            <div className="text-sm text-muted font-mono bg-surface inline-block px-2 py-1 rounded">
              slug:{" "}
              <span className="text-primary">{slug || "article-url-slug"}</span>
            </div>
          </div>

          {/* Short Description */}
          <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
            <label className="block text-sm font-semibold text-foreground mb-2">
              Short Description (Excerpt)
            </label>
            <textarea
              name="excerpt"
              rows={3}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              maxLength={160}
              required
              placeholder="Write a catchy summary..."
              className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
            ></textarea>
            <div className="flex justify-end mt-2">
              <span className="text-xs text-muted">
                {excerpt.length}/160 characters
              </span>
            </div>
          </div>

          {/* MARKDOWN EDITOR */}
          <div
            className="rounded-xl border border-border shadow-sm overflow-hidden bg-white"
            data-color-mode="light"
          >
            <div className="p-4 border-b border-border bg-surface/30">
              <label className="block text-sm font-semibold text-foreground">
                Content
              </label>
            </div>
            {/* MDEditor tidak support name attribute standard, jadi kita handle via state & append di onSubmit */}
            <MDEditor
              value={content}
              onChange={(val) => setContent(val || "")}
              preview="edit"
              height={500}
            />
          </div>
        </div>

        {/* === RIGHT COLUMN: Settings Sidebar === */}
        <div className="space-y-6">
          {/* Category */}
          <div className="bg-white p-5 rounded-xl border border-border shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <label className="block text-sm font-semibold text-foreground">
                Category
              </label>
              <button
                type="button"
                onClick={() => setIsNewCategory(!isNewCategory)}
                className="text-xs text-primary hover:underline"
              >
                {isNewCategory ? "Select Existing" : "+ Create New"}
              </button>
            </div>

            {isNewCategory ? (
              <input
                type="text"
                name="newCategoryName"
                placeholder="Type new category name..."
                required={isNewCategory}
                className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm focus:ring-1 focus:ring-primary"
              />
            ) : (
              <div className="relative">
                <select
                  name="categoryId"
                  defaultValue=""
                  required={!isNewCategory}
                  className="w-full appearance-none rounded-lg border border-border bg-surface px-4 py-2.5 text-sm focus:ring-1 focus:ring-primary"
                >
                  <option value="" disabled>
                    Select a category...
                  </option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-4 top-3 text-muted">
                  ▼
                </div>
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="bg-white p-5 rounded-xl border border-border shadow-sm">
            <label className="block text-sm font-semibold text-foreground mb-1">
              Tags (Max 5)
            </label>
            <p className="text-xs text-muted mb-3">Press Enter to add.</p>  

            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagKeyDown}
              disabled={tags.length >= 5}
              placeholder={tags.length >= 5 ? "Max tags reached" : "Add tag..."}
              className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm focus:ring-1 focus:ring-primary mb-3"
            />

            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium"
                >
                  #{tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="hover:text-red-500"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Featured Image Upload */}
          <div className="bg-white p-5 rounded-xl border border-border shadow-sm">
            <label className="block text-sm font-semibold text-foreground mb-3">
              Featured Image
            </label>

                       {/* --- NEW: IMAGE GUIDELINES NOTE --- */}
            <div className="mb-4 bg-blue-50 border border-blue-100 rounded-lg p-3 text-xs text-blue-800 space-y-1">
              <p className="font-semibold flex items-center gap-1">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                Recommended Size:
              </p>
              <ul className="list-disc list-inside space-y-0.5 ml-1 opacity-90">
                <li>
                  <strong>1920x1080px</strong> (Ratio 16:9)
                </li>
                <li>Format: JPG, PNG, or WebP</li>
                <li>Max File Size: 5MB</li>
              </ul>
              <p className="mt-2 text-blue-600/80 italic border-t border-blue-200/50 pt-2">
                Note: Image will be cropped to <strong>21:9</strong> on the
                Detail Page. Keep important content centered vertically.
              </p>
            </div>
            {/* ---------------------------------- */}

            {/* Hidden File Input */}
            <input
              type="file"
              name="coverImage"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
              required
            />

            {/* Upload Zone / Preview */}
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-border rounded-xl p-4 text-center hover:bg-surface transition-all cursor-pointer relative overflow-hidden group min-h-[200px] flex flex-col items-center justify-center"
            >
              {imagePreview ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-sm font-medium">
                      Click to change
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center mb-3">
                    <svg
                      className="text-muted"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2 2v-4"></path>
                      <polyline points="17 8 12 3 7 8"></polyline>
                      <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    Click to upload image
                  </p>
                  <p className="text-xs text-muted mt-1">
                    Format: JPG, PNG, WebP
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
