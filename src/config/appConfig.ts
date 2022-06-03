const {
  REACT_APP_BASE_URL: baseUrl,
  REACT_APP_PORT: port,
  REACT_APP_BACKEND_URL: backendUrl,
} = process.env;

const getValueByName = (value: string | undefined, defaultValue = '') => {
  return value || defaultValue;
};

export const appConfig = {
  baseUrl: getValueByName(baseUrl, 'http://localhost:8080'),
  port: getValueByName(port),
  backendUrl: getValueByName(backendUrl),
};
