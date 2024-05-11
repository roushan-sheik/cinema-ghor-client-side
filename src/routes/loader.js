import axios from "axios";
//NOTE - loader function
const homeLoader = async () => {
  const movies = await fetchData("/movie.json");
  return { movies };
};
export default homeLoader;

//  fetch function
async function fetchData(url) {
  const data = await axios.get(url);
  console.log(data);
  return data.data;
}
