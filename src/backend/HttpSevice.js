//https://www.youtube.com/watch?v=s-oFo2Z0gTQ
//https://www.youtube.com/watch?v=vfrEAz0BSbA
//https://www.youtube.com/watch?v=DsN83XP9JEY
// https://www.youtube.com/watch?v=uNFB9EbQz90

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
