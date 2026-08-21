import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gray-300 p-[5px] mt-5 min-h-screen ">

      <div className="bg-white min-h-[500px] rounded-3xl flex flex-col items-center text-center p-10 m-4 shadow-2xl shadow-gray-700">

        <div className="bg-gradient-to-r from-[#0dcaf0] to-[#0b3ed8] text-white px-5 py-2 rounded-full text-sm font-medium">
          SMART HEALTH RISK ASSESSMENT
        </div>


        <h1 className="mt-8 max-w-4xl text-4xl md:text-6xl font-bold text-[#0b3ed8] leading-tight">
          Understand Your Health Risk,
          <br />
          Take Early Action
        </h1>

        <p className="mt-6 max-w-2xl text-gray-600 text-base md:text-lg leading-relaxed">
          Assess your health risks with simple, easy-to-use calculators. Get a
          clearer understanding of your health indicators and take informed
          steps toward better health.
        </p>


        <button className="mt-8 bg-[#0dcaf0] hover:bg-[#0b3ed8] shadow-gray-600 shadow-2xl text-white font-semibold px-7 py-3 rounded-full transition">
          Explore Risk Calculators
        </button>
      </div>


      <div className="mt-8 flex flex-wrap justify-evenly gap-6 px-4 pb-10 pt-7">

        <div className="bg-[#faf2f6] rounded-xl p-6 w-80 h-[280px] pt-13 ">
          <h3 className="text-2xl font-bold text-[#0b3ed8]">Diabetes Risk</h3>

          <p className="text-base text-gray-500 mt-3">
            Understand your diabetes risk and learn more about your health.
          </p>

          <Link
            to="/calculator/diabetes"
            className="inline-block mt-6 text-cyan-500 font-semibold hover:text-blue-700 transition"
          >
            Calculate →
          </Link>
        </div>

        <div className="bg-[#f2f8fa] rounded-xl p-6 w-80 h-[280px] pt-13">
          <h3 className="text-2xl font-bold text-[#0b3ed8]">Heart Risk</h3>

          <p className="text-base text-gray-500 mt-3">
            Assess your cardiovascular risk and understand your heart health.
          </p>

          <Link
            to="/calculator/heart"
            className="inline-block mt-6 text-cyan-500 font-semibold hover:text-blue-700 transition"
          >
            Calculate →
          </Link>
        </div>

        <div className="bg-[#e3fffb] rounded-xl p-6 w-80 h-[280px] pt-13">
          <h3 className="text-2xl font-bold text-[#0b3ed8]">Hypothyroid</h3>

          <p className="text-base text-gray-500 mt-3">
            Check your Hypothyroid category and stay aware of your health.
          </p>

          <Link
            to="/calculator/hypothyroid"
            className="inline-block mt-6 text-cyan-500 font-semibold hover:text-blue-700 transition"
          >
            Calculate →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
