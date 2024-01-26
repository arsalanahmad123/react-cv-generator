import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDetails } from "../context/DetailsContext";
function SelectTemplate() {
  const navigate = useNavigate();
  const { updateTemplateId } = useDetails();

  const [active, setActive] = useState({
    id: "",
    status: false,
  });

  const handleActive = (id) => {
    if (active.id === id) {
      setActive({
        id: "",
        status: false,
      });
    } else {
      setActive({
        id,
        status: true,
      });
      updateTemplateId(id);
      setTimeout(() => {
        navigate(`/cv-generating/`);
      }, 1000);
    }
  };

  return (
    <>
      <div className="flex justify-center h-screen  flex-col">
        <h1 className="text-7xl font-bold text-center text-indigo-600 pb-10">
          Select Template
        </h1>
        <div className="flex justify-center items-center gap-5">
          <div
            className={`mt-10 flex justify-center items-center  p-10 hover:shadow-xl transition-all duration-300 group cursor-pointer  ${
              active.status &&
              active.id === "template-1" &&
              "border border-indigo-600 shadow-3xl"
            }`}
            id="template-1"
            onClick={() => handleActive("template-1")}
          >
            <img
              src="/src/assets/template-1.jpeg"
              alt=""
              className="bg-contain group-hover:scale-105 transition-all duration-300"
            />
          </div>
          <div
            className={`mt-10 flex justify-center items-center p-10 hover:shadow-xl transition-all duration-300 group cursor-pointer ${
              active.status &&
              active.id === "template-2" &&
              "border border-indigo-600 shadow-3xl"
            }`}
            id="template-2"
            onClick={() => handleActive("template-2")}
          >
            <img
              src="/src/assets/template-1.jpeg"
              alt=""
              className="bg-contain group-hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectTemplate;
