import { appConfig } from "@/lib/config";

export interface HealthResponse {
  status: string;
  service: string;
  database: "up" | "down";
  timestamp: string;
}

export async function fetchApi<T>(
  path: string,
  init?: RequestInit
): Promise<T> {
  const response = await fetch(`${appConfig.apiBaseUrl}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export function fetchHealth() {
  return fetchApi<HealthResponse>("/health", {
    method: "GET",
  });
}
