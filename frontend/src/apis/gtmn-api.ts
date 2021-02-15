import axios from "axios";

const $http = axios.create({ baseURL: "https://gtmn-api.booyah.dev" });

export interface ServerStatus {
  status: string;
  version: string;
  checktimestamp: number;
}

export interface PlayerStatus {
  now: number;
  max: number;
  players: string[];
}

export function fetchServerStatus() {
  return $http.get<ServerStatus>("/status").then(response => response.data);
}

export function fetchPlayerStatus() {
  return $http.get<PlayerStatus>("/players").then(response => response.data);
}
