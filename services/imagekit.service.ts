import { imagekit } from "@/lib/imagekit";

export async function uploadImageToImageKit(file: File) {
  const buffer = Buffer.from(await file.arrayBuffer());

  const result = await imagekit.upload({
    file: buffer,
    fileName: file.name,
    folder: "/onestation",
  });

  return {
    url: result.url,
    fileId: result.fileId,
    path: result.filePath,
  };
}

export async function deleteImageFromImageKit(fileId: string) {
  await imagekit.deleteFile(fileId);
}
