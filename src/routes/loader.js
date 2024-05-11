import axios from "axios";
//NOTE - loader function
const loader = async () => {
  const data = await fetchData("/luxury.json");
  return { data };
};
export default loader;
export const specialLoader = async () => {
  const data = await fetchData("/special.json");
  return { data };
};
export const blogLoader = async () => {
  const data = await fetchData("/blog.json");
  return { data };
};

//  fetch function
async function fetchData(url) {
  const data = await axios.get(url);
  return data.data;
}
