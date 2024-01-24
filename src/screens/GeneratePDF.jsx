import { Suspense } from "react";
import { useDetails } from "../context/DetailsContext";
const GeneratePDF = ({ Template }) => {
  const { personalDetails, image, workDetails, educationDetails, skills } =
    useDetails();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {Template && (
        <Template
          personalDetails={personalDetails}
          image={image}
          workDetails={workDetails}
          educationDetails={educationDetails}
          skills={skills}
        />
      )}
    </Suspense>
  );
};

export default GeneratePDF;
