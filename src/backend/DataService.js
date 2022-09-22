import axios from "axios";

export async function get(url) {
  //let err = null;
  const { data } = await axios.get(url).catch((error) => {
    if (error.response) {
      // console.log(error.response.data);
      console.log(error.response.status);
      // console.log(error.response.headers);
    }
  });
  return data;
}
