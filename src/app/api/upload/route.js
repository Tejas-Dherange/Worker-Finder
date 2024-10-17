import { v2 as cloudinary } from 'cloudinary';
import uniqid from 'uniqid';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function POST(req) {
  const formData = await req.formData();

  if (formData.has("file")) {
    const file = formData.get("file");

    const randomId = uniqid();
    const ext = file.name.split(".").pop();
    const newFilename = randomId + "." + ext;

    // Convert file stream to buffer
    const chunks = [];
    for await (const chunk of file.stream()) {
      chunks.push(chunk);
    }
    const fileBuffer = Buffer.concat(chunks);

    return new Promise((resolve, reject) => {
      try {
        // Upload to Cloudinary using upload_stream
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            resource_type: "auto", // Automatically detects file type (image, video, etc.)
            public_id: newFilename,
            folder: "uploads", // Optional: define a folder in Cloudinary
            upload_preset: "new-preset", // Add your preset name here
          },
          (error, result) => {
            if (error) {
              reject(
                new Response(
                  JSON.stringify({ error: error.message }),
                  {
                    status: 500,
                    headers: { "Content-Type": "application/json" },
                  }
                )
              );
            }
            const link = result.secure_url; // Cloudinary provides a secure link for the uploaded file
            resolve(
              new Response(
                JSON.stringify({ url: link }),
                {
                  headers: { "Content-Type": "application/json" },
                }
              )
            );
          }
        );

        // Pass the file buffer to the upload stream
        uploadStream.end(fileBuffer);
      } catch (error) {
        reject(
          new Response(
            JSON.stringify({ error: error.message }),
            {
              status: 500,
              headers: { "Content-Type": "application/json" },
            }
          )
        );
      }
    });
  }
}
