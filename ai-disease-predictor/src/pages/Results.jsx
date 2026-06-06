import PredictionCard from "../components/PredictionCard";

function Results() {
  const prediction = JSON.parse(
    localStorage.getItem("prediction")
  );

  if (!prediction) {
    return (
      <div className="p-8 text-center">
        No prediction found.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <PredictionCard
        disease={prediction.disease}
        confidence={prediction.confidence}
        description={
          prediction.description
        }
        causes={
          prediction.causes || "-"
        }
        precautions={
          prediction.precautions || []
        }
        doctor={
          prediction.doctor ||
          "General Physician"
        }
        medications={
          prediction.medications || []
        }
      />
    </div>
  );
}

export default Results;