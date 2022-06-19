import { get } from "./httpService";

export async function apiGetAllCities() {
  const allCities = await get("/cities");
  return allCities;
}

export async function getCityDetails(cityId) {
  const cityDetails = await get(`/cities/${cityId}`);
  return cityDetails;
}

export async function getCandidates() {
  const allCandidates = await get("/candidates");
  return allCandidates;
}

export async function getElectionsDetails(cityId) {
  const electionDetails = await get(`/election?cityId=${cityId}`);
  return electionDetails;
}
