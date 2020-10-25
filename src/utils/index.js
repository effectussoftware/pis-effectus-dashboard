const convertFileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;

    reader.readAsDataURL(file.rawFile);
  });

export const formImageDataToBase64 = async (formData) => ({
  ...formData,
  [IMAGE]: formData.image
    ? await convertFileToBase64(formData.image)
    : undefined,
});
