export default function SweetCard({ sweet, onPurchase }) {
  const outOfStock = sweet.quantity === 0;

  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <h3 className="text-lg font-semibold">{sweet.name}</h3>
      <p className="text-sm text-gray-600">{sweet.category}</p>
      <p className="mt-2">₹ {sweet.price}</p>
      <p className="mt-1 text-sm">
        Stock:{" "}
        <span className={outOfStock ? "text-red-500" : "text-green-600"}>
          {sweet.quantity}
        </span>
      </p>

      <button
        disabled={outOfStock}
        onClick={() => onPurchase(sweet.id)}
        className={`mt-4 w-full py-2 rounded ${
          outOfStock
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-indigo-600 text-white hover:bg-indigo-700"
        }`}
      >
        {outOfStock ? "Out of Stock" : "Purchase"}
      </button>
    </div>
  );
}
