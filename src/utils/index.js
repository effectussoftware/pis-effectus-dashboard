import { IMAGE } from '../components/Communication/consts';

const convertFileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;

    reader.readAsDataURL(file.rawFile);
  });

export const formImageDataToBase64 = async (formData) => {
  if (!formData.hasOwnProperty(IMAGE)) {
    return formData;
  }
  let new_image;
  if (formData[IMAGE] === null) {
    new_image = { _destroy: true };
  } else {
    new_image =
      typeof formData[IMAGE] !== 'string'
        ? { data: await convertFileToBase64(formData[IMAGE]) }
        : undefined;
  }
  return {
    ...formData,
    [IMAGE]: new_image,
  };
};
