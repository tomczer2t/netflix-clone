import { axios } from '../api/axios';
import { AxiosRequestConfig } from 'axios';

interface Config extends AxiosRequestConfig {
  sent?: boolean;
}

export const useAxiosApiKey = () => {
  const endPointWithApiKey = 'api_key=6d97f9564d79cfe1711501d4f2d16938&language=en-US';

  axios.interceptors.request.use(
    (config: Config) => {
      if (config.sent) {
        return config;
      }
      if(!config.url?.includes('image')) {
        let char: string;
        if (config.url.includes('with') || config.url.includes('append_to_response') || config.url.includes('query')) {
          char = '&';
        }  else {
          char = '?';
        }
        config.url = config.url + char + endPointWithApiKey;
        config.sent = true;
      }
      return config
    },
    (err) => Promise.reject(err),
  );

  return axios;
};

