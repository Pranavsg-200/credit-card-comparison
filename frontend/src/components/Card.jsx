export default function Card({ card }) {
  return (
    <div className="bg-gray-100 text-black rounded-2xl p-4 shadow-md hover:scale-105 transition-all">
      <h2 className="text-xl font-bold text-blue-700">{card.cardName}</h2>
      <p className="text-sm text-gray-600">{card.bankName}</p>
      <p className="text-green-600 mt-2">Annual Fee: ₹{card.annualFee?.amount}</p>
      <p className="text-gray-800">Interest Rate: {card.interestRate}%</p>
      <p>{card.loungeAccess ? "✔ Lounge Access" : "✖ No Lounge Access"}</p>
      <p>Welcome Bonus: {card.welcomeBonus}</p>
      <p className="mt-2 italic text-sm text-gray-500">{card.loungeAccessDetails}</p>
    </div>
  );
}
