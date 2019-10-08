export const storeApiKey = (key: string) =>
  sessionStorage.setItem("travis-api-key", key);

export const getApiKey = () => sessionStorage.getItem("travis-api-key");
