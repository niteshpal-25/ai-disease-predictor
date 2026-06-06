import { useEffect, useState } from "react";

import {
  FaTrash,
  FaEye,
  FaSearch,
} from "react-icons/fa";

import HistoryModal from "../components/HistoryModal";

function History() {
  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");

  const [selectedPrediction,
    setSelectedPrediction] = useState(null);

  const [openModal,
    setOpenModal] = useState(false);

  useEffect(() => {
    const stored =
      JSON.parse(
        localStorage.getItem("history")
      ) || [];

    setHistory(stored);
  }, []);

  const deleteRecord = (index) => {
    const updated =
      history.filter((_, i) => i !== index);

    setHistory(updated);

    localStorage.setItem(
      "history",
      JSON.stringify(updated)
    );
  };

  const clearHistory = () => {
    localStorage.removeItem("history");
    setHistory([]);
  };

  const filteredHistory = history.filter(
    (item) =>
      item.disease
        ?.toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-8">

      <div className="flex justify-between items-center">

        <h1 className="text-5xl font-bold">
          Prediction History
        </h1>

        <button
          onClick={clearHistory}
          className="bg-red-600 text-white px-5 py-3 rounded-lg"
        >
          Clear All
        </button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 mb-8">

        <div className="bg-blue-600 text-white p-5 rounded-xl">
          <h3>Total Predictions</h3>
          <p className="text-3xl font-bold">
            {history.length}
          </p>
        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl">
          <h3>High Confidence</h3>
          <p className="text-3xl font-bold">
            {
              history.filter(
                (x) => x.confidence >= 80
              ).length
            }
          </p>
        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl">
          <h3>Predicted Diseases</h3>
          <p className="text-3xl font-bold">
            {
              new Set(
                history.map(
                  (x) => x.disease
                )
              ).size
            }
          </p>
        </div>

        <div className="bg-orange-500 text-white p-5 rounded-xl">
          <h3>Average Confidence</h3>
          <p className="text-3xl font-bold">
            {history.length
              ? Math.round(
                  history.reduce(
                    (a, b) =>
                      a + b.confidence,
                    0
                  ) / history.length
                )
              : 0}
            %
          </p>
        </div>

      </div>

      <div className="relative mb-6">

        <FaSearch className="absolute left-3 top-4 text-gray-400" />

        <input
          type="text"
          placeholder="Search Disease..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="border w-full pl-10 pr-4 py-3 rounded-lg"
        />

      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>
              <th className="p-4">Date</th>
              <th>Disease</th>
              <th>Confidence</th>
              <th>Symptoms</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>
  {filteredHistory.map((item, index) => (
    <tr
      key={index}
      className="border-b hover:bg-gray-50 text-center"
    >
      <td className="p-4">
        {item.date}
      </td>

      <td className="p-4 font-medium">
        {item.disease}
      </td>

      <td className="p-4">
        <span
          className={`px-3 py-1 rounded-full text-white ${
            item.confidence >= 80
              ? "bg-green-500"
              : item.confidence >= 50
              ? "bg-yellow-500"
              : "bg-red-500"
          }`}
        >
          {item.confidence}%
        </span>
      </td>

      <td className="p-4">
        <div className="flex justify-center flex-wrap gap-2">
          {item.symptoms?.map((symptom) => (
            <span
              key={symptom}
              className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs"
            >
              {symptom}
            </span>
          ))}
        </div>
      </td>

      <td className="p-4">
  <div className="flex justify-center gap-2">

    <button
      onClick={() => {
        setSelectedPrediction(item);
        setOpenModal(true);
      }}
      className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
    >
      <FaEye />
    </button>

    <button
      onClick={() => deleteRecord(index)}
      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded"
    >
      <FaTrash />
    </button>

  </div>
</td>
    </tr>
  ))}
</tbody>

        </table>

      </div>

      <HistoryModal
        isOpen={openModal}
        prediction={selectedPrediction}
        onClose={() =>
          setOpenModal(false)
        }
      />

    </div>
  );
}

export default History;