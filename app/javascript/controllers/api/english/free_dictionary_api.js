import "axios";
import { defaultHeaders, origin } from "../base_api";

export const FreeDictionaryApi = {

  show({word, params, headers} = {}) {
    return axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`, { params: params, headers: {...defaultHeaders, ...headers} })
  }

}