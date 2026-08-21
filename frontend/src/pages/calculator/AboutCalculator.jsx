import React from "react";
import { Link } from "react-router-dom";

const AboutCalculator = () => {
  return (
    <section className="min-h-screen bg-gray-300 p-5">

      {/* Hero */}
      <div className="bg-white rounded-3xl px-6 py-14 md:px-12 text-center shadow-2xl shadow-gray-800">

        {/* Badge */}
        <div className="inline-block bg-gradient-to-r from-[#0dcaf0] to-[#0b3ed8] text-white px-5 py-2 rounded-full text-sm font-medium shadow-md">
          ABOUT NIROGGYAN CALCULATORS
        </div>

        {/* Heading */}
        <h1 className="mt-7 text-4xl md:text-6xl font-bold text-[#0b3ed8] leading-tight">
          Understand Your Health.
          <br />
          Make Informed Decisions.
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
          NirogGyan provides simple health risk calculators designed to
          help you understand important health indicators and potential
          health risks using information about your health, lifestyle,
          and test results.
        </p>

      </div>

      {/* What Are Our Calculators */}
      <div className="max-w-6xl mx-auto mt-8 bg-white rounded-3xl p-6 md:p-10">

        <h2 className="text-3xl font-bold text-[#0b3ed8]">
          What Are NirogGyan Health Calculators?
        </h2>

        <p className="mt-5 text-gray-600 leading-7">
          Health risk calculators are tools that use selected health,
          lifestyle, and medical information to provide an estimate of
          potential health risks. They can help you organize important
          health information and better understand factors that may
          influence your health.
        </p>

        <p className="mt-4 text-gray-600 leading-7">
          NirogGyan brings these assessments together in one place so
          users can explore different areas of their health through
          simple and easy-to-use forms.
        </p>

      </div>

      {/* How It Works */}
      <div className="max-w-6xl mx-auto mt-8 bg-white rounded-3xl p-6 md:p-10">

        <h2 className="text-3xl font-bold text-[#0b3ed8] text-center">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

          {/* Step 1 */}
          <div className="bg-[#f2f8fa] rounded-2xl p-6">
            <div className="w-12 h-12 rounded-full bg-[#0dcaf0] text-white flex items-center justify-center text-xl font-bold">
              1
            </div>

            <h3 className="mt-5 text-xl font-bold text-gray-800">
              Enter Your Information
            </h3>

            <p className="mt-3 text-gray-500 leading-6">
              Provide the health, lifestyle, and test information
              requested by the selected calculator.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-[#faf2f6] rounded-2xl p-6">
            <div className="w-12 h-12 rounded-full bg-[#0b3ed8] text-white flex items-center justify-center text-xl font-bold">
              2
            </div>

            <h3 className="mt-5 text-xl font-bold text-gray-800">
              Risk Assessment
            </h3>

            <p className="mt-3 text-gray-500 leading-6">
              The calculator processes the information you provide
              according to its assessment methodology.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-[#e3fffb] rounded-2xl p-6">
            <div className="w-12 h-12 rounded-full bg-[#0dcaf0] text-white flex items-center justify-center text-xl font-bold">
              3
            </div>

            <h3 className="mt-5 text-xl font-bold text-gray-800">
              Understand Your Result
            </h3>

            <p className="mt-3 text-gray-500 leading-6">
              Review your assessment result and use it as a starting
              point for understanding your health.
            </p>
          </div>

        </div>
      </div>

      {/* Available Calculators */}
      <div className="max-w-6xl mx-auto mt-8 bg-white rounded-3xl p-6 md:p-10">

        <h2 className="text-3xl font-bold text-[#0b3ed8]">
          Available Health Calculators
        </h2>

        <p className="mt-4 text-gray-600">
          Explore the health assessments currently available on
          NirogGyan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

          {/* Diabetes */}
          <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition">

            <h3 className="text-xl font-bold text-gray-800">
              Diabetes Risk
            </h3>

            <p className="mt-3 text-gray-500 leading-6">
              Explore factors associated with potential diabetes risk,
              including health measurements, lifestyle information,
              family history, and blood sugar results.
            </p>

            <Link
              to="/calculator/diabetes"
              className="inline-block mt-5 text-[#0b3ed8] font-semibold hover:text-[#0dcaf0] transition"
            >
              Try Calculator →
            </Link>

          </div>

          {/* Heart */}
          <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition">

            <h3 className="text-xl font-bold text-gray-800">
              Heart Risk
            </h3>

            <p className="mt-3 text-gray-500 leading-6">
              Assess selected cardiovascular risk factors using
              information such as cholesterol, blood pressure,
              smoking status, and diabetes.
            </p>

            <Link
              to="/calculator/heart"
              className="inline-block mt-5 text-[#0b3ed8] font-semibold hover:text-[#0dcaf0] transition"
            >
              Try Calculator →
            </Link>

          </div>

          {/* Hypothyroid */}
          <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition">

            <h3 className="text-xl font-bold text-gray-800">
              Hypothyroid Risk
            </h3>

            <p className="mt-3 text-gray-500 leading-6">
              Explore factors related to potential thyroid risk,
              including symptoms, family history, thyroid test results,
              and other health information.
            </p>

            <Link
              to="/calculator/hypothyroid"
              className="inline-block mt-5 text-[#0b3ed8] font-semibold hover:text-[#0dcaf0] transition"
            >
              Try Calculator →
            </Link>

          </div>

        </div>
      </div>

      {/* Why Use NirogGyan */}
      <div className="max-w-6xl mx-auto mt-8 bg-white rounded-3xl p-6 md:p-10">

        <h2 className="text-3xl font-bold text-[#0b3ed8]">
          Why Use NirogGyan?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

          <div className="p-6 rounded-2xl bg-[#f7faff]">
            <h3 className="text-xl font-bold text-gray-800">
              Simple to Use
            </h3>

            <p className="mt-3 text-gray-500 leading-6">
              Our calculators are designed with straightforward forms
              so you can enter your information without unnecessary
              complexity.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#f7faff]">
            <h3 className="text-xl font-bold text-gray-800">
              Multiple Health Areas
            </h3>

            <p className="mt-3 text-gray-500 leading-6">
              Explore different health assessments from one platform,
              making it easier to review areas that matter to you.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#f7faff]">
            <h3 className="text-xl font-bold text-gray-800">
              Easy-to-Understand Results
            </h3>

            <p className="mt-3 text-gray-500 leading-6">
              Results are presented in a simple format to help you
              understand what your assessment means.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#f7faff]">
            <h3 className="text-xl font-bold text-gray-800">
              Health Awareness
            </h3>

            <p className="mt-3 text-gray-500 leading-6">
              Use the assessments as a way to become more aware of
              health factors and discuss relevant concerns with a
              healthcare professional.
            </p>
          </div>

        </div>
      </div>

      {/* Important Disclaimer */}
      <div className="max-w-6xl mx-auto mt-8 mb-10 bg-[#fff8e7] border border-[#f1dfaa] rounded-3xl p-6 md:p-10">

        <h2 className="text-2xl font-bold text-gray-800">
          Important Information
        </h2>

        <p className="mt-4 text-gray-600 leading-7">
          NirogGyan calculators are intended for informational and
          health-risk assessment purposes. They are not intended to
          diagnose, treat, cure, or prevent any disease or medical
          condition.
        </p>

        <p className="mt-4 text-gray-600 leading-7">
          Your result should not be considered a medical diagnosis.
          If you have concerns about your health or your result,
          consult a qualified healthcare professional.
        </p>

      </div>

    </section>
  );
};

export default AboutCalculator;