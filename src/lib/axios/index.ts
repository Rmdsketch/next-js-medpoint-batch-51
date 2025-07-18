import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
} from 'axios';

class HttpClient {
  private axiosInstance: AxiosInstance;

  constructor(config: CreateAxiosDefaults) {
    this.axiosInstance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_SUPABASE_URL,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      ...config,
    });

    const intercept = {
      requestFulfilled: async (config: InternalAxiosRequestConfig<string>) => {
        const token = 'ACCESS TOKEN';

        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
          config.headers['apikey'] = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
        }
        return config;
      },
      requestFailed: (error: AxiosError) => Promise.reject(error),
      responseFulfilled: (
        response:
          | AxiosResponse<string, string>
          | Promise<AxiosResponse<string, string>>
      ) => response,
      responseFailed: (error: AxiosError) => Promise.reject(error),
    };

    this.axiosInstance.interceptors.request.use(
      intercept.requestFulfilled,
      intercept.requestFailed
    );
    this.axiosInstance.interceptors.response.use(
      intercept.responseFulfilled,
      intercept.responseFailed
    );
  }

  public async get(endpoint: string, params = {}) {
    if (!this.axiosInstance) throw new Error('API not initialized');
    const response = await this.axiosInstance.get(endpoint, { params });
    return response.data;
  }

  public async post(endpoint: string, data: unknown = {}) {
    if (!this.axiosInstance) throw new Error('API not initialized');

    const headers =
      data instanceof FormData
        ? { 'Content-Type': 'multipart/form-data' }
        : { 'Content-Type': 'application/json' };

    const response = await this.axiosInstance.post(endpoint, data, { headers });
    return response.data;
  }

  public async put(endpoint: string, data: unknown = {}) {
    if (!this.axiosInstance) throw new Error('API not initialized');

    const headers =
      data instanceof FormData
        ? { 'Content-Type': 'multipart/form-data' }
        : { 'Content-Type': 'application/json' };

    const response = await this.axiosInstance.put(endpoint, data, { headers });
    return response.data;
  }

  public async patch(endpoint: string, data: unknown = {}) {
    if (!this.axiosInstance) throw new Error('API not initialized');

    const headers =
      data instanceof FormData
        ? { 'Content-Type': 'multipart/form-data' }
        : { 'Content-Type': 'application/json' };

    const response = await this.axiosInstance.patch(endpoint, data, {
      headers,
    });
    return response.data;
  }

  public async delete(endpoint: string) {
    if (!this.axiosInstance) throw new Error('API not initialized');

    const response = await this.axiosInstance.delete(endpoint);
    return response.data;
  }
}

export default HttpClient;
