import axios from "axios";
//NOTE - loader function
const homeLoader = async () => {
  const movies = await fetchData("https://blog-api-a11.vercel.app/blogposts");
  return { movies };
};
export default homeLoader;

export const allBlogsLoader = async () => {
  const movies = await fetchData("https://blog-api-a11.vercel.app/blogposts");
  return { movies };
};

//  fetch function
async function fetchData(url) {
  const data = await axios.get(url, { withCredentials: true });
  return data.data;
}
