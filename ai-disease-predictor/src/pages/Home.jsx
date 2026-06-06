import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mx-auto p-10">

      <div className="text-center">

        <h1 className="text-5xl font-bold text-blue-700">
          AI Disease Predictor
        </h1>

        <p className="mt-5 text-lg">
          Predict diseases based on symptoms using AI.
        </p>

        <Link to="/predictor">
          <button className="bg-blue-600 text-white px-6 py-3 mt-5 rounded">
            Start Prediction
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Home;