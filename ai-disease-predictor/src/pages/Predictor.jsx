import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SymptomSelector from "../components/SymptomSelector";
import { predictDisease } from "../services/predictionService";

function Predictor() {
  const [symptoms, setSymptoms] = useState([]);

  const navigate = useNavigate();

  const handlePredict = async () => {
  try {
    const result = await predictDisease(
      symptoms
    );

    localStorage.setItem(
      "prediction",
      JSON.stringify(result)
    );

    const history =
      JSON.parse(
        localStorage.getItem("history")
      ) || [];

    history.push({
      ...result,
      symptoms: symptoms.map(
        (x) => x.value
      ),
      date: new Date().toLocaleString(),
    });

    localStorage.setItem(
      "history",
      JSON.stringify(history)
    );

    navigate("/results");
  } catch (error) {
    alert(
      "Unable to get prediction from server."
    );
  }
};

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-5">
        Disease Prediction
      </h2>

      <SymptomSelector
        selected={symptoms}
        setSelected={setSymptoms}
      />

      <button
        onClick={handlePredict}
        className="bg-green-600 text-white px-6 py-3 rounded mt-5"
      >
        Predict Disease
      </button>
    </div>
  );
}

export default Predictor;