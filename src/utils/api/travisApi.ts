import { getApi } from "./apiUtils";
import { Build, User } from "../../common/types";

const baseUrl = process.env.TRAVIS_API_URL;

export async function testApiConnection(auth: string): Promise<User> {
  return await getApi<User>(`${baseUrl}/user`, null, auth).catch(error => {
    throw error;
  });
}

export async function getBuilds(): Promise<Build[]> {
  return await getApi<Build[]>(`${baseUrl}/builds`).catch(error => {
    throw error;
  });
}
