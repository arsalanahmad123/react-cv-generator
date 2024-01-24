import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col">
        <h1 className="text-7xl font-bold text-center text-indigo-600 uppercase">
          React CV Generator
        </h1>
        <Link to="/select-template" className="mt-10">
          <button className="text-3xl font-bold text-center text-white bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-200">
            Generate
          </button>
        </Link>
      </div>
    </>
  );
}

export default App;
