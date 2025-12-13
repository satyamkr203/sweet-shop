import client from "./client";

export const getAllSweets = async () => {
  const res = await client.get("/sweets");
  return res.data;
};

export const searchSweets = async (params) => {
  const res = await client.get("/sweets/search", { params });
  return res.data;
};

export const purchaseSweet = async (id, quantity) => {
  const res = await client.post(`/sweets/${id}/purchase`, { quantity });
  return res.data;
};

export const createSweet = async (data) => {
  const res = await client.post("/sweets", data);
  return res.data;
};

export const updateSweet = async (id, data) => {
  const res = await client.put(`/sweets/${id}`, data);
  return res.data;
};

export const deleteSweet = async (id) => {
  const res = await client.delete(`/sweets/${id}`);
  return res.data;
};

export const restockSweet = async (id, quantity) => {
  const res = await client.post(`/sweets/${id}/restock`, { quantity });
  return res.data;
};