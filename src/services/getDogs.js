import axios from "axios";

export const getAllDogs = async (breedName) => {
  console.log(breedName)
  const URL = `https://dog.ceo/api/breed/${breedName}/images/random/10`;

  return await axios.request(URL).then((response) => response.data.message);
};
