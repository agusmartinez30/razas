import axios, { AxiosRequestConfig } from "axios";

export const getAllDogs = async (breedName: string) => {
  const URL: any = `https://dog.ceo/api/breed/${breedName}/images/random/20`;

  return await axios.request(URL).then((response) => response.data.message);
};
