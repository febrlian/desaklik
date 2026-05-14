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

// Ensure proper implementation is in place, since the original file was missing these we need to add them to fetch from real API.
export function fetchLetterById(id: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return fetchApi<any>(`/letters/${id}`, {
    method: "GET",
  });
}

export function fetchNews() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return fetchApi<any>("/news", {
    method: "GET",
  });
}

export function fetchNewsBySlug(slug: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return fetchApi<any>(`/news/${slug}`, {
    method: "GET",
  });
}

export function verifyLetter(token: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return fetchApi<any>(`/verify?token=${token}`, {
    method: "GET",
  });
}
