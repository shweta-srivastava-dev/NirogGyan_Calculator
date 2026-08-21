const calculateHeartRisk = (data) => {
  const {
    age,
    hdl,
    totalCholesterol,
    sbp,
    sbpTreated,
    smoker,
    diabetic,
    triglycerides,
  } = data;

  if (
    age === undefined ||
    hdl === undefined ||
    totalCholesterol === undefined ||
    sbpTreated === undefined ||
    smoker === undefined ||
    diabetic === undefined ||
    triglycerides === undefined
  ) {
    throw new Error("All required fields are mandatory");
  }

  const ageValue = Number(age);
  const hdlValue = Number(hdl);
  const cholesterolValue = Number(totalCholesterol);
  const triglyceridesValue = Number(triglycerides);

  if (
    Number.isNaN(ageValue) ||
    Number.isNaN(hdlValue) ||
    Number.isNaN(cholesterolValue) ||
    Number.isNaN(triglyceridesValue)
  ) {
    throw new Error("Invalid numeric value");
  }

  let ageScore = 0;

  if (ageValue < 35) {
    ageScore = 0;
  } else if (ageValue <= 39) {
    ageScore = 2;
  } else if (ageValue <= 44) {
    ageScore = 4;
  } else if (ageValue <= 49) {
    ageScore = 5;
  } else if (ageValue <= 54) {
    ageScore = 7;
  } else if (ageValue <= 59) {
    ageScore = 8;
  } else if (ageValue <= 64) {
    ageScore = 9;
  } else if (ageValue <= 69) {
    ageScore = 10;
  } else if (ageValue <= 74) {
    ageScore = 11;
  } else {
    ageScore = 12;
  }

  let hdlScore = 0;

  if (hdlValue >= 60) {
    hdlScore = -2;
  } else if (hdlValue >= 50) {
    hdlScore = -1;
  } else if (hdlValue >= 45) {
    hdlScore = 0;
  } else if (hdlValue >= 35) {
    hdlScore = 1;
  } else {
    hdlScore = 2;
  }

  let cholesterolScore = 0;

  if (cholesterolValue < 160) {
    cholesterolScore = 0;
  } else if (cholesterolValue <= 199) {
    cholesterolScore = 1;
  } else if (cholesterolValue <= 239) {
    cholesterolScore = 3;
  } else if (cholesterolValue <= 279) {
    cholesterolScore = 4;
  } else {
    cholesterolScore = 5;
  }

  let sbpScore = 0;

  if (sbp !== undefined && sbp !== null && sbp !== "") {
    const sbpValue = Number(sbp);

    if (Number.isNaN(sbpValue)) {
      throw new Error("Invalid SBP value");
    }

    if (sbpTreated === true || sbpTreated === "yes") {
      if (sbpValue < 120) {
        sbpScore = -1;
      } else if (sbpValue <= 129) {
        sbpScore = 2;
      } else if (sbpValue <= 139) {
        sbpScore = 3;
      } else if (sbpValue <= 149) {
        sbpScore = 5;
      } else if (sbpValue <= 159) {
        sbpScore = 6;
      } else {
        sbpScore = 7;
      }
    } else {
      if (sbpValue < 120) {
        sbpScore = -3;
      } else if (sbpValue <= 129) {
        sbpScore = 0;
      } else if (sbpValue <= 139) {
        sbpScore = 1;
      } else if (sbpValue <= 149) {
        sbpScore = 2;
      } else if (sbpValue <= 159) {
        sbpScore = 4;
      } else {
        sbpScore = 5;
      }
    }
  } else {
    sbpScore = 0;
  }

  let smokerScore = 0;

  if (smoker === true || smoker === "yes") {
    smokerScore = 3;
  }

  let diabeticScore = 0;

  if (diabetic === "normal" || diabetic === "no") {
    diabeticScore = 0;
  } else if (diabetic === "borderline") {
    diabeticScore = 1;
  } else if (diabetic === "high") {
    diabeticScore = 4;
  }

  let triglyceridesScore = 0;

  if (triglyceridesValue < 150) {
    triglyceridesScore = 0;
  } else if (triglyceridesValue <= 200) {
    triglyceridesScore = 1;
  } else if (triglyceridesValue <= 500) {
    triglyceridesScore = 2;
  } else {
    triglyceridesScore = 5;
  }

  const totalPoints =
    ageScore +
    hdlScore +
    cholesterolScore +
    sbpScore +
    smokerScore +
    diabeticScore +
    triglyceridesScore;

  let cvdRisk;

  if (totalPoints <= -2) {
    cvdRisk = "<1%";
  } else if (totalPoints === -1) {
    cvdRisk = "1%";
  } else if (totalPoints === 0) {
    cvdRisk = "1.2%";
  } else if (totalPoints === 1) {
    cvdRisk = "1.5%";
  } else if (totalPoints === 2) {
    cvdRisk = "1.7%";
  } else if (totalPoints === 3) {
    cvdRisk = "2%";
  } else if (totalPoints === 4) {
    cvdRisk = "2.4%";
  } else if (totalPoints === 5) {
    cvdRisk = "2.8%";
  } else if (totalPoints === 6) {
    cvdRisk = "3.3%";
  } else if (totalPoints === 7) {
    cvdRisk = "3.9%";
  } else if (totalPoints === 8) {
    cvdRisk = "4.5%";
  } else if (totalPoints === 9) {
    cvdRisk = "5.3%";
  } else if (totalPoints === 10) {
    cvdRisk = "6.3%";
  } else if (totalPoints === 11) {
    cvdRisk = "7.3%";
  } else if (totalPoints === 12) {
    cvdRisk = "8.6%";
  } else if (totalPoints === 13) {
    cvdRisk = "10%";
  } else if (totalPoints === 14) {
    cvdRisk = "11.7%";
  } else if (totalPoints === 15) {
    cvdRisk = "13.7%";
  } else if (totalPoints === 16) {
    cvdRisk = "16.9%";
  } else if (totalPoints === 17) {
    cvdRisk = "18.5%";
  } else if (totalPoints === 18) {
    cvdRisk = "21.5%";
  } else if (totalPoints === 19) {
    cvdRisk = "24.8%";
  } else if (totalPoints === 20) {
    cvdRisk = "28.5%";
  } else {
    cvdRisk = ">30%";
  }

  let riskLevel;

  const riskNumber = parseFloat(cvdRisk);

  if (totalPoints <= 12) {
    riskLevel = "Low Risk";
  } else if (totalPoints <= 17) {
    riskLevel = "Intermediate Risk";
  } else {
    riskLevel = "High Risk";
  }

  return {
    totalPoints,
    cvdRisk,
    riskLevel,

    breakdown: {
      age: ageScore,
      hdl: hdlScore,
      totalCholesterol: cholesterolScore,
      sbp: sbpScore,
      smoker: smokerScore,
      diabetic: diabeticScore,
      triglycerides: triglyceridesScore,
    },
  };
};

export default calculateHeartRisk;
