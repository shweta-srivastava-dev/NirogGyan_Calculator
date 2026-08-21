const calculateDiabetesRisk = (data) => {
  const {
    age,
    gender,
    waistCircumference,
    physicalActivity,
    familyHistory,
    hba1c,
    ppSugar,
    fastingBloodSugar,
  } = data;

  if (
    age === undefined ||
    gender === undefined ||
    waistCircumference === undefined ||
    physicalActivity === undefined ||
    familyHistory === undefined ||
    hba1c === undefined ||
    ppSugar === undefined ||
    fastingBloodSugar === undefined
  ) {
    throw new Error("All fields are mandatory");
  }

  const ageValue = Number(age);
  const waistValue = Number(waistCircumference);
  const hba1cValue = Number(hba1c);
  const fastingValue = Number(fastingBloodSugar);

  if (
    Number.isNaN(ageValue) ||
    Number.isNaN(waistValue) ||
    Number.isNaN(hba1cValue) ||
    Number.isNaN(fastingValue)
  ) {
    throw new Error("Invalid numeric value");
  }

  let ageScore = 0;

  if (ageValue <= 35) {
    ageScore = 0;
  } else if (ageValue >= 36 && ageValue <= 49) {
    ageScore = 20;
  } else if (ageValue >= 50) {
    ageScore = 30;
  }

  let waistScore = 0;

  if (gender === "male" && waistValue > 90) {
    waistScore = 10;
  }

  if (gender === "female" && waistValue > 80) {
    waistScore = 10;
  }

  let physicalActivityScore = 0;

  if (physicalActivity === "sedentary") {
    physicalActivityScore = 30;
  } else if (physicalActivity === "moderate") {
    physicalActivityScore = 3;
  } else if (physicalActivity === "regular") {
    physicalActivityScore = 0;
  }

  let familyHistoryScore = 0;

  if (familyHistory === "none") {
    familyHistoryScore = 0;
  } else if (familyHistory === "one-parent") {
    familyHistoryScore = 10;
  } else if (familyHistory === "both-parents") {
    familyHistoryScore = 20;
  }

  let hba1cScore = 0;

  if (hba1cValue < 5.7) {
    hba1cScore = 0;
  } else if (hba1cValue >= 5.7 && hba1cValue <= 6.4) {
    hba1cScore = 10;
  } else if (hba1cValue >= 6.5) {
    hba1cScore = 20;
  }

  let ppSugarScore = 0;

  if (ppSugar === "normal") {
    ppSugarScore = 0;
  } else if (ppSugar === "borderline") {
    ppSugarScore = 10;
  } else if (ppSugar === "high") {
    ppSugarScore = 20;
  }

  let fastingBloodSugarScore = 0;

  if (fastingValue < 100) {
    fastingBloodSugarScore = 0;
  } else if (fastingValue >= 100 && fastingValue <= 125) {
    fastingBloodSugarScore = 10;
  } else if (fastingValue >= 126) {
    fastingBloodSugarScore = 20;
  }

  const glycemicIndex = Math.max(
    hba1cScore,
    ppSugarScore,
    fastingBloodSugarScore,
  );

  const totalScore =
    ageScore +
    waistScore +
    physicalActivityScore +
    familyHistoryScore +
    glycemicIndex;

  let riskLevel;

  if (totalScore < 40) {
    riskLevel = "Low Risk";
  } else if (totalScore <= 70) {
    riskLevel = "Moderate Risk";
  } else {
    riskLevel = "High Risk";
  }

  return {
    totalScore,
    riskLevel,

    breakdown: {
      age: ageScore,
      waistCircumference: waistScore,
      physicalActivity: physicalActivityScore,
      familyHistory: familyHistoryScore,

      hba1c: hba1cScore,
      ppSugar: ppSugarScore,
      fastingBloodSugar: fastingBloodSugarScore,

      glycemicIndex,
    },
  };
};

export default calculateDiabetesRisk;
