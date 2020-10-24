import httpClient from './httpClient';

async function deleteOneforEach(currentValue, index, array) {
  const id = currentValue;
  const resource = this;
  const url = `${resource}/${id}`;
  const { json } = await httpClient(url, { method: 'DELETE' });
  return { data: json };
}

export default {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const { filter } = params;
    const page_url = `page=${page}&per_page=${perPage}`;
    const sort_url = `sort=["${field}","${order}"]`;
    var filter_url = "";

    // Agrego el filtro para cada campo de filter
    const filter_fields = Object.keys(filter);
    filter_fields.forEach(
      (element) => {filter_url = filter_url + `&${element}=${filter[element]}`}
    );

    // Armo la url
    const url = `${resource}?${page_url}&${sort_url}${filter_url}`;
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
