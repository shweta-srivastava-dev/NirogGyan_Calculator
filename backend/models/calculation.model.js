import mongoose from "mongoose";

const calculationSchema = new mongoose.Schema(
  {
    calculatorType: {
      type: String,
      required: true,
      enum: ["diabetes", "heart", "hypothyroid"],
    },

    inputData: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },

    totalScore: {
      type: Number,
      required: true,
    },

    riskLevel: {
      type: String,
      required: true,
    },

    breakdown: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Calculation = mongoose.model(
  "Calculation",
  calculationSchema
);

export default Calculation;