import mongoose from 'mongoose';

const benefitSchema = new mongoose.Schema({
  category: String,
  description: String,
  value: String,
});

const feeSchema = new mongoose.Schema({
  type: String,
  amount: Number,
  description: String,
});

const cashbackSchema = new mongoose.Schema({
  fuel: String,
  groceries: String,
  dining: String,
  onlineShopping: String,
  other: String,
});

const rewardPointsSchema = new mongoose.Schema({
  conversionRate: String,
  partners: [String],
});

const cardSchema = new mongoose.Schema({
  bankName: String,
  cardName: String,
  cardImage: String,
  cardType: String,
  annualFee: feeSchema,
  joiningFee: feeSchema,
  interestRate: Number,
  rewardRate: String,
  minCreditLimit: Number,
  maxCreditLimit: Number,
  incomeRequirement: Number,
  creditScoreRequirement: Number,
  benefits: [benefitSchema],
  loungeAccess: Boolean,
  loungeAccessDetails: String,
  cashback: cashbackSchema,
  rewardPoints: rewardPointsSchema,
  welcomeBonus: String,
  renewalConditions: String,
  foreignTransactionFee: String,
});

const Card = mongoose.model("Card", cardSchema);

export default Card;
