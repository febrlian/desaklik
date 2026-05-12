const DEFAULT_API_URL = "http://localhost:4000";

export const appConfig = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_URL ?? DEFAULT_API_URL,
};
