import React, { useState } from "react";
import { useCalculateHypothyroidRiskMutation } from "../../services/calculatorApi";

const HypothyroidCalculator = () => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    familyHistory: "",
    symptoms: "",
    autoimmuneDisease: "",
    tsh: "",
    freeT4OrT3: "",
    thyroidAntibodies: "",
  });

  const [consent, setConsent] = useState(false);
  const [result, setResult] = useState(null);

  const [
    calculateHypothyroidRisk,
    { isLoading },
  ] = useCalculateHypothyroidRiskMutation();

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
      const response = await calculateHypothyroidRisk({
        age: Number(formData.age),
        gender: formData.gender,
        familyHistory: formData.familyHistory,
        symptoms: formData.symptoms,
        autoimmuneDisease: formData.autoimmuneDisease,
        tsh: Number(formData.tsh),
        freeT4OrT3: formData.freeT4OrT3,
        thyroidAntibodies: formData.thyroidAntibodies,
      }).unwrap();

      console.log("Hypothyroid Result:", response);

      setResult(response.result);
    } catch (error) {
      console.error("Hypothyroid Calculator Error:", error);

      alert(
        error?.data?.message ||
          "Unable to calculate your hypothyroid risk. Please check your information."
      );
    }
  };

  const closeModal = () => {
    setResult(null);
  };

  const getRiskColor = (riskLevel) => {
    if (riskLevel === "Low") {
      return "text-green-600";
    }

    if (riskLevel === "Medium") {
      return "text-yellow-600";
    }

    return "text-red-600";
  };

  const getRiskMessage = (riskLevel) => {
    if (riskLevel === "Low") {
      return "Your assessment suggests a low risk based on the information provided. Continue routine health monitoring and discuss any new or persistent symptoms with a healthcare professional.";
    }

    if (riskLevel === "Medium") {
      return "Your assessment suggests a moderate risk. Consider discussing your thyroid test results, symptoms, and health history with a healthcare professional. Further evaluation may be appropriate.";
    }

    return "Your assessment suggests a high risk. It would be advisable to discuss these results with a qualified healthcare professional. They can review your thyroid tests, symptoms, medical history, and determine whether further testing or treatment is needed.";
  };

  return (
    <section className="min-h-screen bg-gray-300 p-5">

      {/* Header */}
      <div className="text-center py-10">

        <div className="inline-block bg-gradient-to-r from-[#0dcaf0] to-[#0b3ed8] text-white px-5 py-2 rounded-full text-sm font-medium shadow-md">
          THYROID HEALTH ASSESSMENT
        </div>

        <h1 className="mt-6 text-4xl md:text-5xl font-bold text-[#0b3ed8]">
          Hypothyroid Risk Calculator
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
          Enter your health information, symptoms, and thyroid test results
          to better understand your potential hypothyroid risk.
        </p>
      </div>

      {/* Form Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-md">

        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Enter Your Information
        </h2>

        <p className="mt-2 text-gray-500">
          Please provide accurate information for a more useful assessment.
        </p>

        <form onSubmit={handleSubmit} className="mt-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Age */}
            <div>
              <label
                htmlFor="age"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Age
              </label>

              <input
                id="age"
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

            {/* Gender */}
            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Gender
              </label>

              <select
                id="gender"
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

            {/* Family History */}
            <div>
              <label
                htmlFor="familyHistory"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Family History of Thyroid Disease
              </label>

              <select
                id="familyHistory"
                name="familyHistory"
                value={formData.familyHistory}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-[#0dcaf0]"
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Symptoms */}
            <div>
              <label
                htmlFor="symptoms"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Symptoms
              </label>

              <select
                id="symptoms"
                name="symptoms"
                value={formData.symptoms}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-[#0dcaf0]"
              >
                <option value="">Select symptoms</option>
                <option value="none">
                  No significant symptoms
                </option>
                <option value="mild">
                  Mild symptoms
                </option>
                <option value="moderate">
                  Moderate symptoms
                </option>
                <option value="severe">
                  Multiple or severe symptoms
                </option>
              </select>
            </div>

            {/* Autoimmune */}
            <div>
              <label
                htmlFor="autoimmuneDisease"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Autoimmune Disease
              </label>

              <select
                id="autoimmuneDisease"
                name="autoimmuneDisease"
                value={formData.autoimmuneDisease}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-[#0dcaf0]"
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* TSH */}
            <div>
              <label
                htmlFor="tsh"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                TSH Level
              </label>

              <input
                id="tsh"
                type="number"
                name="tsh"
                value={formData.tsh}
                onChange={handleChange}
                placeholder="Enter TSH level"
                min="0"
                step="0.01"
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#0dcaf0]"
              />

              <p className="text-xs text-gray-400 mt-1">
                Enter your latest TSH test result.
              </p>
            </div>

            {/* Free T4 / T3 */}
            <div>
              <label
                htmlFor="freeT4OrT3"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Free T4 / T3
              </label>

              <select
                id="freeT4OrT3"
                name="freeT4OrT3"
                value={formData.freeT4OrT3}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-[#0dcaf0]"
              >
                <option value="">
                  Select result
                </option>

                <option value="no">
                  Normal
                </option>

                <option value="yes">
                  Abnormal / Low
                </option>
              </select>

              <p className="text-xs text-gray-400 mt-1">
                Select whether your Free T4/T3 result is abnormal.
              </p>
            </div>

            {/* Thyroid Antibodies */}
            <div>
              <label
                htmlFor="thyroidAntibodies"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Thyroid Antibodies
              </label>

              <select
                id="thyroidAntibodies"
                name="thyroidAntibodies"
                value={formData.thyroidAntibodies}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-[#0dcaf0]"
              >
                <option value="">
                  Select an option
                </option>

                <option value="positive">
                  Positive
                </option>

                <option value="negative">
                  Negative
                </option>

                <option value="unknown">
                  Not tested / Unknown
                </option>
              </select>
            </div>

          </div>

          {/* Consent */}
          <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-4">

            <label
              htmlFor="thyroidConsent"
              className="flex items-start gap-3 cursor-pointer"
            >

              <input
                id="thyroidConsent"
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

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading || !consent}
            className="mt-8 w-full bg-gradient-to-r from-[#0dcaf0] to-[#0b3ed8] hover:from-[#0b3ed8] hover:to-[#0dcaf0] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition duration-300 shadow-md"
          >
            {isLoading
              ? "Calculating..."
              : "Calculate Hypothyroid Risk"}
          </button>

        </form>

        {/* Disclaimer */}
        <p className="mt-6 text-xs text-gray-400 text-center leading-relaxed">
          This calculator is intended for informational and risk-assessment
          purposes only. It is not a diagnosis and should not replace advice
          from a qualified healthcare professional.
        </p>

      </div>

      {/* ================= RESULT MODAL ================= */}

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
                🦋
              </div>

              <h2 className="mt-5 text-3xl font-bold text-[#0b3ed8]">
                Thyroid Risk Result
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

export default HypothyroidCalculator;