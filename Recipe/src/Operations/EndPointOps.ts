import type { Method } from 'axios';
import { api } from './api-axios';

export const sendRequest = async <T>(
  method: Method,
  endpoint: string,
  options: {
    params?: Record<string, unknown>;
    data?: Record<string, unknown>;
  } = {},
): Promise<T> => {
  const res = await api.request<T>({
    method,
    url: endpoint,
    params: options.params,
    data: options.data,
  });

  return res.data;
};
