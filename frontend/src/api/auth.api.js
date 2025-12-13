import client from "./client";

export const loginApi = async (data) => {
  const res = await client.post("/auth/login", data);
  return res.data;
};

export const registerApi = async (data) => {
  const res = await client.post("/auth/register", data);
  return res.data;
};
