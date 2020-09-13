import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

const apiUrl = 'https://jsonplaceholder.typicode.com';
const httpClient = fetchUtils.fetchJson;

export default {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      _sort: JSON.stringify([field, order]),
      _page: JSON.stringify(page),
      _limit: JSON.stringify(perPage),
      _filter: JSON.stringify(params.filter),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    const { json, headers } = await httpClient(url);
    return { data: json, total: Number(headers.get('x-total-count')) };
  },
  getOne: (resource, params) => Promise,
  getMany: async (resource, params) => {
    const resources = (
      await Promise.all(
        params.ids.map((id) => httpClient(`${apiUrl}/${resource}/${id}`))
      )
    ).map(({ json }) => json);
    return { data: resources };
  },
  getManyReference: (resource, params) => Promise,
  create: (resource, params) => Promise,
  update: (resource, params) => Promise,
  updateMany: (resource, params) => Promise,
  delete: (resource, params) => Promise,
  deleteMany: (resource, params) => Promise,
};
