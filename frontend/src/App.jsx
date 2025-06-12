import { useState } from "react";

export default function App() {
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Please enter a query.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost:5000/api/cards/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();
      if (res.ok) {
        setCards(data);
      } else {
        setError("Error: " + (data.message || "Query failed"));
        setCards([]);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl mx-auto mb-6">
        <h1 className="text-3xl font-bold text-center mb-4 text-blue-700">Credit Card Finder</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search by benefits, bank, cashback..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow p-2 border rounded-lg"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Search
          </button>
        </div>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      </div>

      {loading && <p className="text-center text-gray-500">Loading...</p>}

      {cards.length === 0 && !loading && !error && (
        <p className="text-center text-gray-500">Use the search bar to find credit cards.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-4 shadow-md hover:scale-105 transition-all"
          >
            <h2 className="text-xl font-bold text-blue-700">{card.cardName}</h2>
            <p className="text-sm text-gray-600">{card.bankName}</p>
            <p className="text-green-600 mt-2">
              Annual Fee: ₹{card.annualFee?.amount}
            </p>
            <p className="text-gray-800">
              Cashback on Fuel: {card.cashback?.fuel}
            </p>
            <p>
              {card.loungeAccess ? "✔ Lounge Access" : "✖ No Lounge Access"}
            </p>
            <p className="mt-2 italic text-sm text-gray-500">
              {card.welcomeBonus}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
