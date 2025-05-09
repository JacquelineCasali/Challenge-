import axios from "axios";

const API_URL = "https://dev.codeleap.co.uk/careers/";


export const getPosts = () => axios.get(API_URL);
export const createPost = (post) => axios.post(API_URL, post);
export const updatePost = (id, data) => axios.patch(`${API_URL}${id}/`, data);
export const deletePost = (id) => axios.delete(`${API_URL}${id}/`);