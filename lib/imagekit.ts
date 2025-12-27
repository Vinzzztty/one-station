import ImageKit from "imagekit";

export const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY!,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT!,
});

export function imageKitUrl(path?: string | null) {
  if (!path) return "/placeholder.png";

  return `${process.env.IMAGEKIT_URL_ENDPOINT}${path}`;
}
