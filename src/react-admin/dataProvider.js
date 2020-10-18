import httpClient from "./httpClient";

async function deleteOneforEach(currentValue, index, array) {
  const id = currentValue;
  const resource = this;
  const url = `${resource}/${id}`;
  const { json } = await httpClient(url, { method: "DELETE" }); // JSON llega undefined
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
    const { json } = await httpClient(url);
    return { data: json };
  },

  getMany: (resource, params) => Promise,

  getManyReference: (resource, params) => Promise,

  create: async (resource, { data }) => {
    const url = `${resource}`;
    const { json } = await httpClient(url, {
      method: "POST",
      body: JSON.stringify(data),
    });
    return { data: json, id: json.id };
  },

  update: async (resource, params) => {
    const { id, data } = params;
    const url = `${resource}/${id}`;
    const { json } = await httpClient(url, {
      method: "PUT",
      body: JSON.stringify(data),
    });
    return { data: json };
  },

  updateMany: (resource, params) => Promise,

  delete: async (resource, { id }) => {
    const url = `${resource}/${id}`;
    const { json } = await httpClient(url, { method: "DELETE" });
    return { data: json };
  },

  deleteMany: async (resource, { ids }) => {
    const data = await Promise.all(ids.map(deleteOneforEach, resource));
    return { data };
  },
};
