import { Suspense } from "react";
import { useDetails } from "../context/DetailsContext";
const GeneratePDF = ({ Template }) => {
  const { personalDetails, image, workDetails, educationDetails, skills } =
    useDetails();

  return (
    <section className="flex flex-col mt-5 w-full">
      <Suspense fallback={<div>Loading...</div>}>
        {Template && <Template />}
      </Suspense>
    </section>
  );
};

export default GeneratePDF;
