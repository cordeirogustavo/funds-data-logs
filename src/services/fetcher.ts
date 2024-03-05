import axios from 'axios';
import { endpoints, type LogsEndpoints } from './endpoints';
// const bearerToken = import.meta.env.VITE_BAERER_TOKEN;

const apiInstance = axios.create({
  headers: {
    'mz-internal-app': 1,
    // Authorization: `Bearer ${bearerToken}`,
    'content-type': 'application/json',
  },
  withCredentials: true,
});

export const fetcher = async (
  endpoint: string,
  params?: Record<string, string>,
) => {
  const url = buildUrl(endpoint, params);
  try {
    const response = await apiInstance.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const buildUrl = (
  endpoint: string,
  params?: Record<string, string>,
): string => {
  let url = endpoints.logs[endpoint as keyof LogsEndpoints];

  if (params != null) {
    const queryParams = Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    url += `?${queryParams}`;
  }

  return url;
};

export const reprocessLogs = async (ids: string[]) => {
  try {
    const response = await apiInstance.post(endpoints.logs.reprocess, {
      ids,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
