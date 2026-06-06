import Select from "react-select";

const symptomOptions = [
  { value: "Fever", label: "Fever" },
  { value: "Cough", label: "Cough" },
  { value: "Fatigue", label: "Fatigue" },
  { value: "Headache", label: "Headache" },
  { value: "Body Pain", label: "Body Pain" },
  { value: "Sneezing", label: "Sneezing" },
  { value: "Runny Nose", label: "Runny Nose" },
  { value: "Chest Pain", label: "Chest Pain" },
  { value: "Breathlessness", label: "Breathlessness" },
  { value: "Chills", label: "Chills" },
  { value: "Sweating", label: "Sweating" },
  { value: "Nausea", label: "Nausea" },
  { value: "Vomiting", label: "Vomiting" },
  { value: "Diarrhea", label: "Diarrhea" },
  { value: "Dizziness", label: "Dizziness" },
  { value: "Weight Loss", label: "Weight Loss" },
  { value: "Frequent Urination", label: "Frequent Urination" },
  { value: "Loss of Appetite", label: "Loss of Appetite" },
  { value: "Sore Throat", label: "Sore Throat" },
  { value: "Wheezing", label: "Wheezing" },
];

function SymptomSelector({ selected, setSelected }) {
  return (
    <Select
      isMulti
      options={symptomOptions}
      value={selected}
      onChange={setSelected}
    />
  );
}

export default SymptomSelector;