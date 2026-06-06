import React from "react";
import { FaHeartbeat, FaUserMd, FaShieldAlt } from "react-icons/fa";

const PredictionCard = ({
  disease,
  confidence,
  description,
  causes,
  precautions,
  doctor,
  medications,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-4">
        <FaHeartbeat className="text-red-500 text-3xl" />
        <h2 className="text-2xl font-bold text-blue-700">
          {disease}
        </h2>
      </div>

      <div className="mb-4">
        <p className="font-semibold">Confidence Score</p>
        <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: `${confidence}%` }}
          ></div>
        </div>
        <p className="mt-1 text-green-600 font-semibold">
          {confidence}%
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-bold text-lg">Description</h3>
          <p>{description}</p>
        </div>

        <div>
          <h3 className="font-bold text-lg">Common Causes</h3>
          <p>{causes}</p>
        </div>

        <div>
          <h3 className="font-bold text-lg flex items-center gap-2">
            <FaShieldAlt />
            Precautions
          </h3>

          <ul className="list-disc pl-5">
            {precautions?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg flex items-center gap-2">
            <FaUserMd />
            Recommended Doctor
          </h3>

          <p>{doctor}</p>
        </div>

        <div>
          <h3 className="font-bold text-lg">
            Suggested Medications
          </h3>

          <ul className="list-disc pl-5">
            {medications?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
        <p className="text-sm">
          <strong>Disclaimer:</strong> This prediction is for educational
          purposes only and should not be considered a medical diagnosis.
          Please consult a healthcare professional.
        </p>
      </div>
    </div>
  );
};

export default PredictionCard;