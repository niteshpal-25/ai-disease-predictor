import axios from "axios";

const API =
  "http://localhost:8000";

export const predictDisease = async (
  selectedSymptoms
) => {
  const symptoms =
    selectedSymptoms.map(
      (item) => item.value
    );

  const response =
    await axios.post(
      `${API}/predict`,
      {
        symptoms,
      }
    );

  return response.data;
};