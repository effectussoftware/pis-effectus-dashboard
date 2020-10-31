import { IMAGE } from '../components/Communication/consts';

const convertFileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;

    reader.readAsDataURL(file.rawFile);
  });

export const formImageDataToBase64 = async (formData) => ({
  ...formData,
  [IMAGE]: (formData[IMAGE] && typeof formData[IMAGE] !== 'string')
    ? { "data": await convertFileToBase64(formData[IMAGE]) }
    : undefined,
});
