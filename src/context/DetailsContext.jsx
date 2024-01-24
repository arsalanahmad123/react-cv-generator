import { createContext, useState, useContext } from "react";

const DetailsContext = createContext();

export const DetailsProvider = ({ children }) => {
  const [templateId, setTemplateId] = useState("");

  const [personalDetails, setPersonalDetails] = useState({
    firstname: "",
    surname: "",
    profession: "",
    city: "",
    country: "",
    zip: "",
    phone: "",
    email: "",
  });
  const [image, setImage] = useState(null);
  const [workDetails, setWorkDetails] = useState({
    jobtitle: "",
    company: "",
    startingYear: "",
    endingYear: "",
    details: "",
  });
  const [educationDetails, setEducationDetails] = useState({
    institutionName: "",
    degree: "",
    fieldofstudy: "",
    graduationEndMonth: "",
    graduationEndYear: "",
  });

  const [skills, setSkills] = useState([]);

  const updatePersonalDetails = (newDetails) => {
    setPersonalDetails(newDetails);
  };

  const updateWorkDetails = (newDetails) => {
    setWorkDetails(newDetails);
  };

  const updateEducationDetails = (newDetails) => {
    setEducationDetails(newDetails);
  };

  const updateSkills = (newSkills) => {
    setSkills(newSkills);
  };

  const updateImage = (newImage) => {
    setImage(newImage);
  };

  const updateTemplateId = (newId) => {
    setTemplateId(newId);
    if (newId) {
      localStorage.setItem("selectedTemplate", newId);
    }
  };

  return (
    <DetailsContext.Provider
      value={{
        personalDetails,
        updatePersonalDetails,
        image,
        updateImage,
        workDetails,
        updateWorkDetails,
        educationDetails,
        updateEducationDetails,
        skills,
        updateSkills,
        templateId,
        updateTemplateId,
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
};

export const useDetails = () => {
  const context = useContext(DetailsContext);
  if (!context) {
    throw new Error(
      "useDetails must be used within a DetailsProvider. Wrap your component in <DetailsProvider />"
    );
  }
  return context;
};
