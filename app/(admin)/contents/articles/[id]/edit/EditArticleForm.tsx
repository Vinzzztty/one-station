"use client";

import { useState, useRef, useActionState } from "react";
import MDEditor from "@uiw/react-md-editor";
import Link from "next/link";
import { updateArticleAction } from "../../create/actions";
import { Article, Category } from "@/app/generated/prisma/client";

interface Props {
  article: Article;
  categories: Category[];
}

export default function EditArticleForm({ article, categories }: Props) {
  const updateWithId = updateArticleAction.bind(null, article.id);
  const [state, dispatch, isPending] = useActionState(updateWithId, null);
  const [title, setTitle] = useState(article.title);
  const [slug, setSlug] = useState(article.slug);
  const [content, setContent] = useState(article.content);
  const [excerpt, setExcerpt] = useState(article.excerpt);
  const [tags, setTags] = useState<string[]>((article.tags as string[]) || []);
  const [imagePreview, setImagePreview] = useState<string | null>(
    article.coverImage
  );

  const [tagInput, setTagInput] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isNewCategory, setIsNewCategory] = useState(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
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
      if (file.size > 5 * 1024 * 1024) return alert("Max 5MB");
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <form action={dispatch} className="max-w-7xl mx-auto pb-20">
      <input type="hidden" name="content" value={content} />
      <input type="hidden" name="tags" value={JSON.stringify(tags)} />
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Edit Article</h2>
          <p className="text-muted mt-1">Make changes to your content.</p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/contents/articles"
            className="px-5 py-2.5 text-sm font-medium text-muted hover:text-foreground"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={isPending}
            className="bg-primary hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium shadow-sm transition-all flex items-center gap-2 disabled:opacity-50"
          >
            {isPending ? "Updating..." : "Update Article"}
          </button>
        </div>
      </div>

      {/* {state?.error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg">
          {state.error}
        </div>
      )} */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT: Editor */}
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-2">
            <input
              name="title"
              value={title}
              onChange={handleTitleChange}
              required
              className="w-full text-4xl font-bold text-foreground border-none bg-transparent focus:outline-none px-0"
            />
            {/* Slug bisa diedit manual */}
            <div className="flex items-center gap-2 bg-surface px-3 py-2 rounded border border-border">
              <span className="text-sm text-muted">slug:</span>
              <input
                name="slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="bg-transparent border-none text-sm text-primary w-full focus:outline-none"
              />
            </div>
          </div>

          <div className="bg-surface p-6 rounded-xl border border-border shadow-sm">
            <label className="block text-sm font-semibold text-foreground mb-2">
              Short Description
            </label>
            <textarea
              name="excerpt"
              rows={3}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              maxLength={160}
              required
              className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm focus:ring-1 focus:ring-primary resize-none"
            ></textarea>
          </div>

          <div className="rounded-xl border border-border shadow-sm overflow-hidden bg-surface">
            <div className="p-4 border-b border-border bg-surface/30">
              <label className="block text-sm font-semibold text-foreground">
                Content
              </label>
            </div>
            <MDEditor
              value={content}
              onChange={(val) => setContent(val || "")}
              preview="edit"
              height={500}
            />
          </div>
        </div>

        {/* RIGHT: Sidebar */}
        <div className="space-y-6">
          {/* Category */}
          <div className="bg-surface p-5 rounded-xl border border-border shadow-sm">
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
                placeholder="New category name..."
                className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm"
              />
            ) : (
              <select
                name="categoryId"
                defaultValue={article.categoryId}
                className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm"
              >
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* Tags */}
          <div className="bg-surface p-5 rounded-xl border border-border shadow-sm">
            <label className="block text-sm font-semibold text-foreground mb-1">
              Tags
            </label>
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagKeyDown}
              disabled={tags.length >= 5}
              placeholder="Add tag..."
              className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm mb-3"
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

          {/* Image */}
          <div className="bg-surface p-5 rounded-xl border border-border shadow-sm">
            <label className="block text-sm font-semibold text-foreground mb-3">
              Featured Image
            </label>
            <input
              type="file"
              name="coverImage"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
            />
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-border rounded-xl p-4 text-center cursor-pointer relative overflow-hidden h-[200px] flex items-center justify-center"
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <p className="text-sm text-muted">Click to upload</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
