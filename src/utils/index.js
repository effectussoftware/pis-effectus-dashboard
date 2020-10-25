const convertFileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;

    reader.readAsDataURL(file.rawFile);
  });

export const formImageDataToBase64 = async (formData) => {
  if (formData.image) {
    const { image } = formData;
    const base64Image = await convertFileToBase64(image);
    formData.image = base64Image;
  }
  return formData;
};
