import httpClient from './httpClient';

async function deleteOneforEach(currentValue, index, array) {
  const id = currentValue;
  const resource = this;
  const url = `${resource}/${id}`;
  const { json } = await httpClient(url, { method: 'DELETE' }); // JSON llega undefined
  return { data: json };
}

export default {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const url = `${resource}?page=${page}&per_page=${perPage}`;
    try {
      const { json } = await httpClient(url);
      return { data: json[resource], total: json.pagination.count };
    } catch (error) {
      console.error(error);
    }
  },

  getOne: async (resource, { id }) => {
    const url = `${resource}/${id}`;
    const {
      json: { [resource.slice(0, -1)]: data },
    } = await httpClient(url);
    return { data };
  },

  getMany: (resource, params) => Promise,

  getManyReference: (resource, params) => Promise,

  create: async (resource, { data }) => {
    const url = `${resource}`;
    if (data.image) {
      const { image } = data;
      const base64Image = await convertFileToBase64(image);
      data.image = base64Image;
    }
    const {
      json: { [resource.slice(0, -1)]: newItem },
    } = await httpClient(url, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return { data: newItem, newItem: newItem?.id };
  },

  update: async (resource, params) => {
    const { id, data } = params;
    const url = `${resource}/${id}`;
    if (data.image) {
      const { image } = data;
      const base64Image = await convertFileToBase64(image);
      data.image = base64Image;
    }
    const {
      json: { [resource.slice(0, -1)]: updatedItem },
    } = await httpClient(url, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
    return { data: updatedItem };
  },

  updateMany: (resource, params) => Promise,

  delete: async (resource, { id }) => {
    const url = `${resource}/${id}`;
    await httpClient(url, { method: 'DELETE' });
    return { data: { id } };
  },

  deleteMany: async (resource, { ids }) => {
    const data = await Promise.all(ids.map(deleteOneforEach, resource));
    return { data };
  },
};

const convertFileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;

    reader.readAsDataURL(file.rawFile);
  });
