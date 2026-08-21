import calculateDiabetesRisk from "../services/diabetesCalculator.js";
import calculateHypothyroidRisk from "../services/hypothyroidCalculator.js";
import calculateHeartRisk from "../services/heartCalculator.js";

export const calculateDiabetes = (req, res) => {
  try {
    const data = req.body;

    const result = calculateDiabetesRisk(data);

    res.status(200).json({
      success: true,
      calculator: "Diabetes Risk Calculator",
      result,
    });
  } catch (error) {
    console.error("Diabetes calculation error:", error);

    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const calculateHypothyroid = (req, res) => {
  try {
    const data = req.body;

    const result = calculateHypothyroidRisk(data);

    res.status(200).json({
      success: true,
      calculator: "Hypothyroid Risk Calculator",
      result,
    });
  } catch (error) {
    console.error("Hypothyroid calculation error:", error);

    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};



export const calculateHeart = (req, res) => {
  try {
    const data = req.body;

    const result = calculateHeartRisk(data);

    res.status(200).json({
      success: true,
      calculator: "Heart Risk Calculator",
      result,
    });

  } catch (error) {
    console.error("Heart calculation error:", error);

    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};