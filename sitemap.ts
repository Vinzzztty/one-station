import { getAllBlogs } from "@/services/blogs.service";

export default async function sitemap() {
  const blogs = await getAllBlogs();
  const url = process.env.URL_PUBLIC;
  const blogUrls = blogs.map((blog) => ({
    url: `${url}/articles/${blog.slug}`,
    // lastModified: new Date(blog.updatedAt),
  }));

  return [
    { url: `${url}`, lastModified: new Date() },
    { url: `${url}/contact`, lastModified: new Date() },
    { url: `${url}/articles`, lastModified: new Date() },
    ...blogUrls,
  ];
}
