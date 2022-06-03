import axios, { Method } from 'axios';
import { useState, useCallback } from 'react';

interface IRequestArgs {
  URL: string;
  method: Method;
  data?: Object;
}

export const useRequest = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const request = useCallback(async ({ URL, method, data }: IRequestArgs) => {
    setLoading(true);
    const response = await axios({
      url: URL,
      method: method,
      data: data,
    }).then((data) => {
      return data;
    });
    setLoading(false);
    return response;
  }, []);

  return { loading, request };
};
