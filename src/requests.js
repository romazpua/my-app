import * as axios from "axios";

export async function getUsers(){
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return await response;
}