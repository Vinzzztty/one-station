"use client";

import { useState } from "react";
import Link from "next/link";
import { updateProjectAction } from "../../create/actions";
import { Project } from "@/app/generated/prisma/client";

type Category = {
  id: string;
  name: string;
};

interface EditProjectFormProps {
  project: Project;
  categories: Category[];
}

export default function EditProjectForm({ project, categories }: EditProjectFormProps) {
  const [isPending, setIsPending] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  
  // State for existing images (URLs)
  const [existingImages, setExistingImages] = useState<string[]>(project.imageUrls || []);
  
  // State for new image previews
  const [newImagePreviews, setNewImagePreviews] = useState<string[]>([]);

  const handleNewImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newPreviews: string[] = [];
      Array.from(files).forEach((file) => {
        if (file.size > 5 * 1024 * 1024) {
          alert(`File ${file.name} too large (max 5MB)`);
          return;
        }
        newPreviews.push(URL.createObjectURL(file));
      });
      setNewImagePreviews(newPreviews);
    }
  };

  const removeExistingImage = (urlToRemove: string) => {
    setExistingImages(existingImages.filter(url => url !== urlToRemove));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    
    // Append existing images that weren't deleted
    existingImages.forEach(url => {
      formData.append("existingImages", url);
    });

    const result = await updateProjectAction(project.id, formData);

    if (result?.error) {
      setErrorMsg(result.error);
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto pb-20">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Edit Project
          </h1>
          <p className="text-muted mt-1">Update project details</p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/contents/projects"
            className="px-5 py-2.5 rounded-lg border border-border text-foreground font-medium hover:bg-background transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={isPending}
            className="bg-primary hover:bg-primary-dark text-white px-8 py-2.5 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all disabled:opacity-70 flex items-center gap-2"
          >
            {isPending ? (
              <>
                <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Saving...
              </>
            ) : (
              "Save Changes"
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-surface border border-border rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Project Details
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Title
                </label>
                <input
                  name="title"
                  type="text"
                  required
                  defaultValue={project.title}
                  placeholder="e.g. E-commerce Platform"
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Project URL
                </label>
                <input
                  name="urlProject"
                  type="url"
                  defaultValue={project.urlProject}
                  placeholder="https://example.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Category
                </label>
                <select
                  name="category"
                  defaultValue={project.category || ""}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                >
                  <option value="" disabled>Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Description
                </label>
                <textarea
                  name="description"
                  required
                  rows={6}
                  defaultValue={project.description}
                  placeholder="Describe your project..."
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-surface border border-border rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Project Images
            </h3>
            
            {/* Existing Images */}
            {existingImages.length > 0 && (
              <div className="mb-6 space-y-2">
                 <p className="text-sm font-medium text-foreground">Current Images</p>
                 <div className="grid grid-cols-2 gap-2">
                    {existingImages.map((src, idx) => (
                      <div key={idx} className="relative aspect-video rounded-lg overflow-hidden border border-border group">
                        <img
                          src={src}
                          alt={`Existing ${idx}`}
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removeExistingImage(src)}
                          className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          title="Remove image"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                      </div>
                    ))}
                 </div>
              </div>
            )}

            <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors bg-background/50 cursor-pointer relative group">
              <input
                type="file"
                name="images"
                accept="image/*"
                multiple
                onChange={handleNewImageChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    Add more images
                  </p>
                  <p className="text-sm text-muted mt-1">
                    SVG, PNG, JPG or GIF (max 5MB)
                  </p>
                </div>
              </div>
            </div>

            {newImagePreviews.length > 0 && (
              <div className="mt-4 space-y-2">
                <p className="text-sm font-medium text-foreground">New Images to Upload</p>
                <div className="grid grid-cols-2 gap-2">
                  {newImagePreviews.map((src, idx) => (
                    <div key={idx} className="relative aspect-video rounded-lg overflow-hidden border border-border">
                      <img
                        src={src}
                        alt={`Preview ${idx}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {errorMsg && (
        <div className="fixed bottom-8 right-8 bg-red-500 text-white px-6 py-4 rounded-xl shadow-2xl animate-in slide-in-from-bottom-5">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <p className="font-medium">{errorMsg}</p>
          </div>
        </div>
      )}
    </form>
  );
}
