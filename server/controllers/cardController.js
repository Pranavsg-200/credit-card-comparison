import Card from "../models/Card.js";

export const handleQuery = async (req, res) => {
  const { query } = req.body;

  if (!query || query.trim() === "") {
    return res.status(400).json({ message: "Query is required" });
  }

  const regex = new RegExp(query, "i"); // case-insensitive

  try {
    const cards = await Card.find({
      $or: [
        { bankName: regex },
        { cardName: regex },
        { cardType: regex },
        { "cashback.fuel": regex },
        { "cashback.groceries": regex },
        { "cashback.dining": regex },
        { "cashback.onlineShopping": regex },
        { benefits: { $elemMatch: { description: regex } } },
        { welcomeBonus: regex },
      ],
    });

    if (cards.length === 0) {
      return res.status(404).json({ message: "No cards found" });
    }

    res.status(200).json(cards);
  } catch (err) {
    console.error("Query error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
