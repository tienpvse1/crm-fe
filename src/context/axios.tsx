import axios, { AxiosInstance } from 'axios';
import { createContext, FC, useEffect, useState } from 'react';
import { TOKEN } from '../constance/cookie';

const baseURL = import.meta.env.VITE_BE_BASE_URL;

interface IAxiosContext {
  instance: AxiosInstance | undefined;
  setInstance: unknown;
  cookie: unknown;
  setCookie: unknown;
}

export const AxiosContext = createContext<IAxiosContext>({
  instance: undefined,
  setInstance: undefined,
  cookie: undefined,
  setCookie: undefined,
});

export const AxiosProvider: FC = ({ children }) => {
  const [instance, setInstance] = useState<AxiosInstance>();
  const [cookie, setCookie] = useState();

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      setInstance(
        axios.create({
          baseURL,
          headers: {
            Authorization: cookie ? cookie[TOKEN] : '',
          },
        })
      );
    }

    return () => {
      mounted = false;
    };
  }, []);

  const value: IAxiosContext = {
    instance,
    setInstance,
    cookie,
    setCookie,
  };

  return (
    <AxiosContext.Provider value={value}>{children}</AxiosContext.Provider>
  );
};
