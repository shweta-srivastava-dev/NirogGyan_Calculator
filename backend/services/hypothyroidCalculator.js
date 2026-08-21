const calculateHypothyroidRisk = (data) => {
  const {
    age,
    gender,
    familyHistory,
    symptoms,
    autoimmuneDisease,
    tsh,
    freeT4OrT3,
    thyroidAntibodies,
  } = data;


  if (
    age === undefined ||
    age === null ||
    age === "" ||
    gender === undefined ||
    gender === "" ||
    familyHistory === undefined ||
    symptoms === undefined ||
    symptoms === "" ||
    autoimmuneDisease === undefined ||
    tsh === undefined ||
    tsh === null ||
    tsh === "" ||
    freeT4OrT3 === undefined ||
    thyroidAntibodies === undefined ||
    thyroidAntibodies === ""
  ) {
    throw new Error("All fields are mandatory");
  }

  const ageValue = Number(age);
  const tshValue = Number(tsh);

  if (
    Number.isNaN(ageValue) ||
    Number.isNaN(tshValue)
  ) {
    throw new Error("Age and TSH must be valid numbers");
  }


  let ageScore = 0;

  if (ageValue > 35) {
    ageScore = 5;
  }



  let genderScore = 0;

  if (gender === "female") {
    genderScore = 10;
  }

  let familyHistoryScore = 0;

  if (
    familyHistory === true ||
    familyHistory === "true" ||
    familyHistory === "yes"
  ) {
    familyHistoryScore = 10;
  }



  let symptomsScore = 0;

  if (symptoms === "none") {
    symptomsScore = 0;
  } else if (symptoms === "mild") {
    symptomsScore = 5;
  } else if (symptoms === "moderate") {
    symptomsScore = 10;
  } else if (symptoms === "severe") {
    symptomsScore = 15;
  }



  let autoimmuneDiseaseScore = 0;

  if (
    autoimmuneDisease === true ||
    autoimmuneDisease === "true" ||
    autoimmuneDisease === "yes"
  ) {
    autoimmuneDiseaseScore = 10;
  }


  let tshScore = 0;

  if (tshValue > 4.5) {
    tshScore = 20;
  }



  let freeT4OrT3Score = 0;

  if (
    freeT4OrT3 === true ||
    freeT4OrT3 === "true" ||
    freeT4OrT3 === "yes"
  ) {
    freeT4OrT3Score = 10;
  }

 
  let thyroidAntibodiesScore = 0;

  if (
    thyroidAntibodies === true ||
    thyroidAntibodies === "true" ||
    thyroidAntibodies === "positive"
  ) {
    thyroidAntibodiesScore = 15;
  }



  const totalScore =
    ageScore +
    genderScore +
    familyHistoryScore +
    symptomsScore +
    autoimmuneDiseaseScore +
    tshScore +
    freeT4OrT3Score +
    thyroidAntibodiesScore;



  let riskLevel;

  if (totalScore <= 15) {
    riskLevel = "Low";
  } else if (totalScore <= 35) {
    riskLevel = "Medium";
  } else {
    riskLevel = "High";
  }

  

  return {
    totalScore,
    riskLevel,

    breakdown: {
      age: ageScore,
      gender: genderScore,
      familyHistory: familyHistoryScore,
      symptoms: symptomsScore,
      autoimmuneDisease: autoimmuneDiseaseScore,
      tsh: tshScore,
      freeT4OrT3: freeT4OrT3Score,
      thyroidAntibodies: thyroidAntibodiesScore,
    },
  };
};

export default calculateHypothyroidRisk;