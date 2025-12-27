export default function robots() {
  const url = process.env.URL_PUBLIC;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${url}/sitemap.xml`,
  };
}
