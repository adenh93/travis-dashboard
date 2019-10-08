import { getApiKey } from "../browserStorageUtils";

export async function getApi<T>(
  url: string,
  param?: any,
  auth?: string
): Promise<T> {
  const getUrl = param ? `${url}/${param}` : url;
  const headers = getAuthHeaders(auth);
  const response = await fetch(getUrl, headers).catch(error => {
    throw new Error(error);
  });
  return handleResponse<T>(response);
}

function handleResponse<T>(response: Response) {
  if (!response.ok) throw new Error(response.statusText);
  return response.json().then(json => {
    return json as T;
  });
}

const getAuthHeaders = (authHeader?: string) => {
  const auth = authHeader ? authHeader : getApiKey();
  return {
    headers: {
      Authorization: `token ${auth}`,
      "Travis-API-Version": "3"
    }
  };
};
