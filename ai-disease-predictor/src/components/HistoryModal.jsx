import React from "react";

function HistoryModal({
  isOpen,
  onClose,
  prediction,
}) {
  if (!isOpen || !prediction) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white p-6 rounded-xl shadow-xl w-[600px]">

        <h2 className="text-2xl font-bold mb-4">
          Prediction Details
        </h2>

        <p>
          <strong>Disease:</strong>{" "}
          {prediction.disease}
        </p>

        <p>
          <strong>Confidence:</strong>{" "}
          {prediction.confidence}%
        </p>

        <p>
          <strong>Date:</strong>{" "}
          {prediction.date}
        </p>

        <div className="mt-3">
          <strong>Symptoms:</strong>

          <div className="flex flex-wrap gap-2 mt-2">
            {prediction.symptoms?.map((s) => (
              <span
                key={s}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-5 bg-red-500 text-white px-5 py-2 rounded"
        >
          Close
        </button>

      </div>

    </div>
  );
}

export default HistoryModal;