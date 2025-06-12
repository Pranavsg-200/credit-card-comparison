import Card from "../components/Card";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CardList() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/cards");
        setCards(response.data);
      } catch (err) {
        setError("Server not responding or an error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (loading) {
    return <p className="text-center text-blue-500">Loading cards...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (cards.length === 0) {
    return <p className="text-center text-red-500">No cards found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-gray-100 text-black">
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
}
