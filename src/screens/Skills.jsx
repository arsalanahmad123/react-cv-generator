import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDetails } from "../context/DetailsContext";

const SkillsPage = () => {
  const { updateSkills } = useDetails();
  const navigate = useNavigate();
  const [skills, setSkills] = useState([]);

  const handleAddSkill = (newSkill) => {
    setSkills([...skills, newSkill]);
    updateSkills([...skills, newSkill]);
    localStorage.setItem("skills", JSON.stringify([...skills, newSkill]));
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
    updateSkills(updatedSkills);
    localStorage.setItem("skills", JSON.stringify(updatedSkills));
  };

  const handleNext = () => {
    localStorage.setItem("skills", JSON.stringify(skills));
    navigate("/summary");
  };

  useEffect(() => {
    const storedSkills = localStorage.getItem("skills");
    if (storedSkills) {
      setSkills(JSON.parse(storedSkills));
    }
  }, []);

  return (
    <>
      <div className="p-5 bg-slate-200 rounded-md min-h-screen w-[600px]">
        <h1 className="text-4xl font-bold text-center text-indigo-600 uppercase">
          Choose your skills
        </h1>
        <SkillsList skills={skills} onRemoveSkill={handleRemoveSkill} />
        <SkillsInput onAddSkill={handleAddSkill} />
        <div className="mt-10">
          <NavLink
            to={"/cv-generating/education-details"}
            className="text-xl font-bold text-center text-white bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-200 float-start mt-5"
          >
            Previous
          </NavLink>
          <button
            onClick={handleNext}
            className="text-xl font-bold text-center text-white bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-200 float-end mt-5"
            type="submit"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

const SkillsList = ({ skills, onRemoveSkill }) => {
  return (
    <ul className="mt-2 pt-10">
      {skills.map((skill, index) => (
        <li
          key={index}
          className="flex items-center mb-2 bg-slate-300 p-2 rounded justify-between"
        >
          <span className="mr-2 font-bold">{skill}</span>
          <button
            type="button"
            onClick={() => onRemoveSkill(index)}
            className="ml-2 text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

const SkillsInput = ({ onAddSkill }) => {
  const [newSkill, setNewSkill] = useState("");

  const handleSkillChange = (e) => {
    setNewSkill(e.target.value);
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      onAddSkill(newSkill);
      setNewSkill("");
    }
  };

  return (
    <div>
      <label htmlFor="skills" className="block text-gray-700 font-bold mb-2">
        Skills
      </label>
      <div className="flex flex-row gap-2">
        <input
          type="text"
          id="skills"
          name="skills"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Add a skill"
          value={newSkill}
          onChange={handleSkillChange}
        />
        <button
          type="button"
          onClick={handleAddSkill}
          className="text-white bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-200"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default SkillsPage;
