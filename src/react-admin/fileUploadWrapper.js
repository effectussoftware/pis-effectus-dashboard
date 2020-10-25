import { IMAGE } from '../components/Communication/consts';

const convertFileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;

    reader.readAsDataURL(file.rawFile);
  });

export default (dataProvider) => {
  const convertCommunicationImageTo64 = (method) => async (
    resource,
    params
  ) => {
    console.log('PARAMS', params);
    if (resource !== 'communications' || !params.data[IMAGE]) {
      // fallback to the default implementation
      return dataProvider[method](resource, params);
    }

    const imageBase64 = await convertFileToBase64(params.data[IMAGE]);
    return dataProvider[method](resource, {
      ...params,
      data: {
        ...params.data,
        [IMAGE]: imageBase64,
      },
    });
  };

  return {
    ...dataProvider,
    create: convertCommunicationImageTo64('create'),
    update: convertCommunicationImageTo64('update'),
  };
};
