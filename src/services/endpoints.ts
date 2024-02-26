const API_BASE_URL = import.meta.env.VITE_BASE_URL;

export interface LogsEndpoints {
  all: string;
  date: string;
  id: string;
  cnpj: string;
}

export const endpoints: {
  logs: LogsEndpoints;
} = {
  logs: {
    all: `${API_BASE_URL}/documents/logs`,
    date: `${API_BASE_URL}/documents/logs`,
    id: `${API_BASE_URL}/documents/logs/`,
    cnpj: `${API_BASE_URL}/documents/logs`,
  },
};
