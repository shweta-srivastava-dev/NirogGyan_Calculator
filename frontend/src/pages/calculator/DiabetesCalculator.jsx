import React, { useState } from "react";
import { useCalculateDiabetesRiskMutation } from "../../services/calculatorApi";

const DiabetesCalculator = () => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    waistCircumference: "",
    physicalActivity: "",
    familyHistory: "",
    hba1c: "",
    ppSugar: "",
    fastingBloodSugar: "",
  });

  const [consent, setConsent] = useState(false);
  const [result, setResult] = useState(null);

  const [
    calculateDiabetesRisk,
    { isLoading },
  ] = useCalculateDiabetesRiskMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!consent) {
      return;
    }

    try {
      const response = await calculateDiabetesRisk({
        age: Number(formData.age),
        gender: formData.gender,
        waistCircumference: Number(formData.waistCircumference),
        physicalActivity: formData.physicalActivity,
        familyHistory: formData.familyHistory,
        hba1c: Number(formData.hba1c),
        ppSugar: formData.ppSugar,
        fastingBloodSugar: Number(formData.fastingBloodSugar),
      }).unwrap();

      console.log("Diabetes Result:", response);

      setResult(response.result);
    } catch (error) {
      console.error("Diabetes Calculator Error:", error);

      alert(
        error?.data?.message ||
          "Unable to calculate your diabetes risk. Please check your information."
      );
    }
  };

  const closeModal = () => {
    setResult(null);
  };

  const getRiskColor = (riskLevel) => {
    if (riskLevel === "Low Risk") {
      return "text-green-600";
    }

    if (riskLevel === "Moderate Risk") {
      return "text-yellow-600";
    }

    return "text-red-600";
  };

  const getRiskMessage = (riskLevel) => {
    if (riskLevel === "Low Risk") {
      return "Your assessment suggests a low risk based on the information provided. Continue maintaining healthy eating habits, regular physical activity, and routine health checkups.";
    }

    if (riskLevel === "Moderate Risk") {
      return "Your assessment suggests a moderate risk. Consider discussing your results and lifestyle factors with a healthcare professional and focus on improving your diet, physical activity, weight management, and regular health monitoring.";
    }

    return "Your assessment suggests a high risk. It would be advisable to discuss these results with a qualified healthcare professional. They can evaluate your blood sugar levels, health history, and other risk factors more thoroughly.";
  };

  return (
    <section className="min-h-screen bg-gray-300 p-5">

      <div className="text-center py-10">

        <div className="inline-block bg-gradient-to-r from-[#0dcaf0] to-[#0b3ed8] text-white px-5 py-2 rounded-full text-sm font-medium shadow-md">
          DIABETES RISK ASSESSMENT
        </div>

        <h1 className="mt-6 text-4xl md:text-5xl font-bold text-[#0b3ed8]">
          Diabetes Risk Calculator
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
          Enter your health and lifestyle information to understand
          your potential risk of diabetes.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-md">

        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Enter Your Information
        </h2>

        <p className="mt-2 text-gray-500">
          Please provide accurate information for a more useful assessment.
        </p>

        <form onSubmit={handleSubmit} className="mt-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Age
              </label>

              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter your age"
                min="1"
                max="120"
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#0dcaf0]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Gender
              </label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-[#0dcaf0]"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Waist Circumference
              </label>

              <input
                type="number"
                name="waistCircumference"
                value={formData.waistCircumference}
                onChange={handleChange}
                placeholder="Enter waist circumference"
                min="0"
                step="0.1"
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#0dcaf0]"
              />

              <p className="text-xs text-gray-400 mt-1">
                Enter your waist circumference measurement.
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Physical Activity
              </label>

              <select
                name="physicalActivity"
                value={formData.physicalActivity}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-[#0dcaf0]"
              >
                <option value="">Select activity level</option>
                <option value="sedentary">Sedentary</option>
                <option value="moderate">Moderate</option>
                <option value="regular">Regular</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Family History of Diabetes
              </label>

              <select
                name="familyHistory"
                value={formData.familyHistory}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-[#0dcaf0]"
              >
                <option value="">Select an option</option>
                <option value="none">No family history</option>
                <option value="one-parent">One parent</option>
                <option value="both-parents">Both parents</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                HbA1c
              </label>

              <input
                type="number"
                name="hba1c"
                value={formData.hba1c}
                onChange={handleChange}
                placeholder="Enter HbA1c value"
                min="0"
                step="0.1"
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#0dcaf0]"
              />

              <p className="text-xs text-gray-400 mt-1">
                Enter your HbA1c result.
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Post-Prandial Blood Sugar
              </label>

              <select
                name="ppSugar"
                value={formData.ppSugar}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-[#0dcaf0]"
              >
                <option value="">Select category</option>
                <option value="normal">Normal</option>
                <option value="borderline">Borderline</option>
                <option value="high">High</option>
              </select>

              <p className="text-xs text-gray-400 mt-1">
                Select the category based on your test result.
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Fasting Blood Sugar
              </label>

              <input
                type="number"
                name="fastingBloodSugar"
                value={formData.fastingBloodSugar}
                onChange={handleChange}
                placeholder="Enter fasting blood sugar"
                min="0"
                step="0.1"
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#0dcaf0]"
              />

              <p className="text-xs text-gray-400 mt-1">
                Enter your fasting blood sugar value.
              </p>
            </div>

          </div>

          <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <label
              htmlFor="diabetesConsent"
              className="flex items-start gap-3 cursor-pointer"
            >
              <input
                id="diabetesConsent"
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-5 w-5 accent-[#0b3ed8] cursor-pointer"
              />

              <span className="text-sm text-gray-600 leading-6">
                I consent to sharing the information I provide with{" "}
                <span className="font-semibold text-gray-800">
                  Nirogyan
                </span>{" "}
                for the purpose of this health risk assessment.
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading || !consent}
            className="mt-8 w-full bg-gradient-to-r from-[#0dcaf0] to-[#0b3ed8] hover:from-[#0b3ed8] hover:to-[#0dcaf0] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition duration-300 shadow-md"
          >
            {isLoading
              ? "Calculating..."
              : "Calculate Diabetes Risk"}
          </button>

        </form>

        <p className="mt-6 text-xs text-gray-400 text-center leading-relaxed">
          This calculator is intended for informational and risk-assessment
          purposes only. It is not a diagnosis and should not replace advice
          from a qualified healthcare professional.
        </p>
      </div>


      {result && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">

          <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 relative">

            <button
              onClick={closeModal}
              className="absolute top-4 right-5 text-2xl text-gray-400 hover:text-gray-700"
            >
              ×
            </button>

            <div className="text-center">

              <div className="mx-auto w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl">
                🩺
              </div>

              <h2 className="mt-5 text-3xl font-bold text-[#0b3ed8]">
                Diabetes Risk Result
              </h2>

              <p className="mt-2 text-gray-500">
                Your assessment has been completed.
              </p>

              <div className="mt-8 bg-gray-50 rounded-2xl p-6">

                <p className="text-sm text-gray-500">
                  Your Risk Level
                </p>

                <p
                  className={`mt-2 text-4xl font-bold ${getRiskColor(
                    result.riskLevel
                  )}`}
                >
                  {result.riskLevel}
                </p>

                <div className="mt-6 border-t border-gray-200 pt-5">
                  <p className="text-sm text-gray-500">
                    Risk Score
                  </p>

                  <p className="mt-1 text-2xl font-bold text-gray-800">
                    {result.totalScore}
                  </p>
                </div>

                <p className="mt-6 text-sm text-gray-600 leading-6">
                  {getRiskMessage(result.riskLevel)}
                </p>
              </div>

              <button
                onClick={closeModal}
                className="mt-7 w-full bg-gradient-to-r from-[#0dcaf0] to-[#0b3ed8] text-white font-semibold py-3 rounded-xl"
              >
                Done
              </button>

              <p className="mt-5 text-xs text-gray-400 leading-5">
                This result is for informational purposes only and is not a
                medical diagnosis. Please consult a qualified healthcare
                professional for medical advice.
              </p>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default DiabetesCalculator;