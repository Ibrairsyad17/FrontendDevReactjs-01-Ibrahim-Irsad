import axios, { AxiosError } from "axios";

const httpClient =
  ({ baseUrl }: { baseUrl: string }) =>
  async ({
    url,
    method,
    data,
    params,
  }: {
    url: string;
    method: string;
    data?: Record<string, unknown>;
    params?: Record<string, unknown>;
  }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export default httpClient;
