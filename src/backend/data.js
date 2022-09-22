import { get } from "./HttpSevice";

// Endpoint from back-end Wordpress
//const BACK_END_URL =
// ("https://calebedesign.com.br/vallecor/wp-json/wp/v2/pages/8");

const BACK_END_URL = "https://artesplasticas.art.br/_react_backend/vallecor";
const BASE_API_URL = "/wp-json/wp/v2/";

export async function loadDataSite(partUrl) {
  const allData = await get(BACK_END_URL + BASE_API_URL + partUrl);
  return allData;
}

// Routes
// Endpoints for images
// https://calebedesign.com.br/vallecor/wp-json/wp/v2/media/41

// Route of page Home
// https://artesplasticas.art.br/_react_backend/vallecor/wp-json/wp/v2/pages/8

// https://artesplasticas.art.br/_react_backend/vallecor/wp-json/contact-form-7/v1/contact-forms/5/feedback/

// back-end
// https://artesplasticas.art.br/_react_backend/vallecor/
// cd_vallecor
