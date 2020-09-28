import { fetchUtils } from 'react-admin';


const apiUrl = process.env.REACT_APP_API_URL + '/admin/';
const httpClient = fetchUtils.fetchJson;


async function deleteOneforEach(currentValue, index, array) {
  const id = currentValue;
  const resource = this;
  const url = `${apiUrl}${resource}/${id}`;
  const { json } = await httpClient(url, { method: 'DELETE' });  // JSON llega undefined
  return { data: json };
};

export default {
  getList: async (resource, params) => {
    const url = `${apiUrl}${resource}`;
    try {
      const { json } = await httpClient(url);
      return { data: json, total: json.length };
    } catch (error) {
      console.error(error);
    }
  },

  getOne: async (resource, { id }) => {
    const url = `${apiUrl}${resource}/${id}`;
    const { json } = await httpClient(url);
    return { data: json };
  },

  getMany: (resource, params) => Promise,

  getManyReference: (resource, params) => Promise,

  create: async (resource, { data }) => {
    const url = `${apiUrl}${resource}`;
    await httpClient(url, { method: 'POST', body: JSON.stringify(data) });
    return { data: data, id: 1 };  // Falta el id que tendria que venir en el JSON
  },

  update: async (resource, params) => {
    const {id, data} = params;
    const url = `${apiUrl}${resource}/${id}`;
    const { json } = await httpClient(url, { method: 'PUT', body: JSON.stringify(data)});
    return { data: json };
  },

  updateMany: (resource, params) => Promise,

  delete: async (resource, { id }) => {
    const url = `${apiUrl}${resource}/${id}`;
    const { json } = await httpClient(url, { method: 'DELETE' });
    return { data: json }; // El JSON llega undefined
  },

  deleteMany: async (resource, { ids }) => {
    const data = await Promise.all(ids.map(deleteOneforEach, resource));
    return { data };
  },
};
