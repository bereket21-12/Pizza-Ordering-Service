"use server";

import cloudinary from "../utils/cloudinary.ts";
import streamifier from "streamifier";

export async function uploadImage(file: File, folderName: string) {
  try {
    const result = new Promise(async (resolve, reject) => {
      const uploadStream = cloudinary.v2.uploader.upload_stream(
        {
          folder: folderName,
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const bufferStream = streamifier.createReadStream(buffer);
      bufferStream.pipe(uploadStream);
    });
    const uploadResult = (await result) as { secure_url: string };

    return uploadResult.secure_url;
  } catch (error) {
    console.error("Failed to upload image:", error);
    throw new Error("Image upload failed");
  }
}
