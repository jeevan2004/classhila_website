export const GetImageUrl = async (fileData) => {
  if (!fileData || !fileData.file) {
    return "";
  }

  const fileUrl = fileData.file;
  const isImage = /\.(jpeg|jpg|gif|png|webp)$/i.test(fileUrl); // Check if it's an image

  if (isImage) {
    return fileUrl; // Return the image URL directly
  }

  // If it's a PDF or other file, you need to generate an image preview
  return generateImageFromFile(fileUrl);
};

// Function to generate an image preview from a file (if needed)
const generateImageFromFile = (fileUrl) => {
  return `https://docs.google.com/viewer?url=${encodeURIComponent(
    fileUrl
  )}&embedded=true`;
};
