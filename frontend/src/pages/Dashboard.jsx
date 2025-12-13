import { useEffect, useState } from "react";
import SweetCard from "../components/SweetCard";
import { getAllSweets, searchSweets, purchaseSweet } from "../api/sweets.api";

export default function Dashboard() {
  const [sweets, setSweets] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchSweets = async () => {
    setLoading(true);
    const data = search
      ? await searchSweets({ name: search })
      : await getAllSweets();
    setSweets(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchSweets();
  }, []);

  const handlePurchase = async (id) => {
    try {
      await purchaseSweet(id, 1); // purchase 1 unit
      fetchSweets(); // refresh stock
    } catch (err) {
      alert(err.response?.data?.message || "Purchase failed");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Available Sweets 🍬</h1>

      <input
        type="text"
        placeholder="Search sweets..."
        className="border p-2 rounded mb-6 w-64"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyUp={fetchSweets}
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sweets.map((sweet) => (
            <SweetCard
              key={sweet.id}
              sweet={sweet}
              onPurchase={handlePurchase}
            />
          ))}
        </div>
      )}
    </div>
  );
}
