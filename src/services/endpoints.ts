const API_BASE_URL = import.meta.env.VITE_BASE_URL;

export interface LogsEndpoints {
  all: string;
  endDate: string;
  externalId: string;
  cnpj: string;
  reprocess: string;
}

export const endpoints: {
  logs: LogsEndpoints;
} = {
  logs: {
    all: `${API_BASE_URL}/documents/logs`,
    endDate: `${API_BASE_URL}/documents/logs`,
    externalId: `${API_BASE_URL}/documents/logs/`,
    cnpj: `${API_BASE_URL}/documents/logs`,
    reprocess: `${API_BASE_URL}/documents/logs/reprocess-list`,
  },
};
