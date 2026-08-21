import React, { useState } from "react";
import { useCalculateHeartRiskMutation } from "../../services/calculatorApi";

const HeartCalculator = () => {
  const [formData, setFormData] = useState({
    age: "",
    hdl: "",
    totalCholesterol: "",
    sbp: "",
    sbpTreated: "",
    smoker: "",
    diabetic: "",
    triglycerides: "",
  });

  const [consent, setConsent] = useState(false);
  const [result, setResult] = useState(null);

  const [
    calculateHeartRisk,
    { isLoading },
  ] = useCalculateHeartRiskMutation();

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
      const response = await calculateHeartRisk({
        age: Number(formData.age),
        hdl: Number(formData.hdl),
        totalCholesterol: Number(formData.totalCholesterol),
        sbp: Number(formData.sbp),
        sbpTreated: formData.sbpTreated,
        smoker: formData.smoker,
        diabetic: formData.diabetic,
        triglycerides: Number(formData.triglycerides),
      }).unwrap();

      console.log("Heart Result:", response);

      setResult(response.result);
    } catch (error) {
      console.error("Heart Calculator Error:", error);

      alert(
        error?.data?.message ||
          "Unable to calculate your heart risk. Please check your information."
      );
    }
  };

  const closeModal = () => {
    setResult(null);
  };

  const getRiskColor = (riskLevel) => {
    if (
      riskLevel === "Low Risk"
    ) {
      return "text-green-600";
    }

    if (
      riskLevel === "Intermediate Risk" ||
      riskLevel === "Moderate Risk"
    ) {
      return "text-yellow-600";
    }

    return "text-red-600";
  };

  const getRiskMessage = (riskLevel) => {
    if (riskLevel === "Low Risk") {
      return "Your assessment suggests a low cardiovascular risk based on the information provided. Continue healthy lifestyle habits and routine health checkups.";
    }

    if (
      riskLevel === "Intermediate Risk" ||
      riskLevel === "Moderate Risk"
    ) {
      return "Your assessment suggests an intermediate cardiovascular risk. Consider discussing your results with a healthcare professional and reviewing your blood pressure, cholesterol, smoking status, diabetes risk, physical activity, and other heart-health factors.";
    }

    return "Your assessment suggests a high cardiovascular risk. Please consider discussing these results with a qualified healthcare professional for a more complete evaluation and personalized medical advice.";
  };

  return (
    <section className="min-h-screen bg-gray-300 p-5">

      <div className="text-center py-10">

        <div className="inline-block bg-gradient-to-r from-[#0dcaf0] to-[#0b3ed8] text-white px-5 py-2 rounded-full text-sm font-medium shadow-md">
          HEART HEALTH ASSESSMENT
        </div>

        <h1 className="mt-6 text-4xl md:text-5xl font-bold text-[#0b3ed8]">
          Heart Risk Calculator
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
          Enter your health information to assess your potential
          cardiovascular risk and better understand your heart health.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-md">

        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Enter Your Information
        </h2>

        <p className="mt-2 text-gray-500">
          Please provide accurate information for your assessment.
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
                HDL Cholesterol
              </label>

              <input
                type="number"
                name="hdl"
                value={formData.hdl}
                onChange={handleChange}
                placeholder="Enter HDL cholesterol"
                min="0"
                step="0.1"
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#0dcaf0]"
              />

              <p className="text-xs text-gray-400 mt-1">
                Enter your HDL cholesterol value.
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Total Cholesterol
              </label>

              <input
                type="number"
                name="totalCholesterol"
                value={formData.totalCholesterol}
                onChange={handleChange}
                placeholder="Enter total cholesterol"
                min="0"
                step="0.1"
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#0dcaf0]"
              />

              <p className="text-xs text-gray-400 mt-1">
                Enter your total cholesterol value.
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Systolic Blood Pressure
              </label>

              <input
                type="number"
                name="sbp"
                value={formData.sbp}
                onChange={handleChange}
                placeholder="Enter systolic BP"
                min="50"
                max="250"
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#0dcaf0]"
              />

              <p className="text-xs text-gray-400 mt-1">
                Enter the upper number of your BP reading.
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Blood Pressure Treatment
              </label>

              <select
                name="sbpTreated"
                value={formData.sbpTreated}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-[#0dcaf0]"
              >
                <option value="">Select an option</option>
                <option value="yes">
                  Yes, I take medication
                </option>
                <option value="no">
                  No, I don't take medication
                </option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Smoking Status
              </label>

              <select
                name="smoker"
                value={formData.smoker}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-[#0dcaf0]"
              >
                <option value="">Select an option</option>
                <option value="yes">
                  Yes, I currently smoke
                </option>
                <option value="no">
                  No, I don't smoke
                </option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Diabetes
              </label>

              <select
                name="diabetic"
                value={formData.diabetic}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-[#0dcaf0]"
              >
                <option value="">Select an option</option>
                <option value="no">
                  No, I don't have diabetes
                </option>
                <option value="borderline">
                  Borderline
                </option>
                <option value="high">
                  Yes / High
                </option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Triglycerides
              </label>

              <input
                type="number"
                name="triglycerides"
                value={formData.triglycerides}
                onChange={handleChange}
                placeholder="Enter triglycerides"
                min="0"
                step="0.1"
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#0dcaf0]"
              />

              <p className="text-xs text-gray-400 mt-1">
                Enter your triglyceride value.
              </p>
            </div>

          </div>

          <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <label
              htmlFor="heartConsent"
              className="flex items-start gap-3 cursor-pointer"
            >
              <input
                id="heartConsent"
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
              : "Calculate Heart Risk"}
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
                ❤️
              </div>

              <h2 className="mt-5 text-3xl font-bold text-[#0b3ed8]">
                Heart Risk Result
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
                    {result.totalPoints}
                  </p>

                  {result.cvdRisk && (
                    <p className="mt-2 text-sm text-gray-500">
                      Estimated cardiovascular risk:{" "}
                      <span className="font-semibold text-gray-700">
                        {result.cvdRisk}
                      </span>
                    </p>
                  )}

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

export default HeartCalculator;