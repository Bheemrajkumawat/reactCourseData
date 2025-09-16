import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
export const getpost = () => {
  return api.get("/posts");
};

// delete Apisss
export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
};

// postApis

export const postdata = (post) => {
  return api.post("/posts",post);
};

export const UPdateData =(id,post)=>{
  return  api.put(`/posts/${id}`,post)
}