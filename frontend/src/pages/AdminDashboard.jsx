import { useEffect, useState } from "react";
import {
  getAllSweets,
  createSweet,
  updateSweet,
  deleteSweet,
  restockSweet
} from "../api/sweets.api";

export default function AdminDashboard() {
  const [sweets, setSweets] = useState([]);
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    quantity: ""
  });

  const fetchSweets = async () => {
    const data = await getAllSweets();
    setSweets(data);
  };

  useEffect(() => {
    fetchSweets();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    await createSweet({
      ...form,
      price: Number(form.price),
      quantity: Number(form.quantity)
    });
    setForm({ name: "", category: "", price: "", quantity: "" });
    fetchSweets();
  };

  const handleDelete = async (id) => {
    if (confirm("Delete this sweet?")) {
      await deleteSweet(id);
      fetchSweets();
    }
  };

  const handleRestock = async (id) => {
    const qty = prompt("Enter restock quantity");
    if (qty && Number(qty) > 0) {
      await restockSweet(id, Number(qty));
      fetchSweets();
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard </h1>

      <form
        onSubmit={handleCreate}
        className="grid grid-cols-2 gap-4 bg-white p-4 rounded shadow mb-8"
      >
        <input
          placeholder="Name"
          className="border p-2 rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          placeholder="Category"
          className="border p-2 rounded"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          className="border p-2 rounded"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          className="border p-2 rounded"
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
          required
        />
        <button
          type="submit"
          className="col-span-2 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Add Sweet
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sweets.map((sweet) => (
          <div
            key={sweet.id}
            className="border p-4 rounded shadow bg-white"
          >
            <h3 className="font-semibold">{sweet.name}</h3>
            <p className="text-sm text-gray-600">{sweet.category}</p>
            <p>₹ {sweet.price}</p>
            <p className="text-sm">Stock: {sweet.quantity}</p>

            <div className="mt-4 flex gap-2">
              <button
                onClick={() => handleRestock(sweet.id)}
                className="flex-1 bg-green-600 text-white py-1 rounded hover:bg-green-700"
              >
                Restock
              </button>

              <button
                onClick={() => handleDelete(sweet.id)}
                className="flex-1 bg-red-600 text-white py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
