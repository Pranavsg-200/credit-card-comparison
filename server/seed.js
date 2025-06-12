import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Card from './models/Card.js';
import connectDB from './config/db.js';

dotenv.config();
await connectDB();

const sampleCards = [
  {
    bankName: "HDFC Bank",
    cardName: "HDFC Regalia",
    cardImage: "https://example.com/hdfc-regalia.jpg",
    cardType: "Premium",
    annualFee: {
      type: "Annual",
      amount: 2500,
      description: "Waived off on spending ₹5L in a year"
    },
    joiningFee: {
      type: "One-time",
      amount: 1000,
      description: "₹1000 + GST"
    },
    interestRate: 3.4,
    rewardRate: "4 reward points per ₹150 spent",
    minCreditLimit: 50000,
    maxCreditLimit: 500000,
    incomeRequirement: 1800000,
    creditScoreRequirement: 750,
    benefits: [
      {
        category: "Travel",
        description: "Complimentary airport lounge access",
        value: "4 per quarter"
      },
      {
        category: "Shopping",
        description: "Discounts on e-commerce platforms",
        value: "10% on Amazon, Flipkart"
      }
    ],
    loungeAccess: true,
    loungeAccessDetails: "4 complimentary visits per quarter",
    cashback: {
      fuel: "1%",
      groceries: "2%",
      dining: "5%",
      onlineShopping: "10%",
      other: "1%"
    },
    rewardPoints: {
      conversionRate: "1 RP = ₹0.50",
      partners: ["Amazon", "Taj Hotels", "MakeMyTrip"]
    },
    welcomeBonus: "5000 reward points on spending ₹50,000 in first 3 months",
    renewalConditions: "Annual fee waived on spending ₹5L in previous year",
    foreignTransactionFee: "2%"
  }
];

try {
  await Card.deleteMany({});
  await Card.insertMany(sampleCards);
  console.log('✅ Database seeded successfully');
  process.exit(0);
} catch (err) {
  console.error('❌ Error seeding database:', err);
  process.exit(1);
}
