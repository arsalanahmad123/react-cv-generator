import { useDetails } from "../context/DetailsContext";
import { lazy, Suspense } from "react";
const GeneratePDF = ({ id }) => {
  const { personalDetails, image, workDetails, educationDetails, skills } =
    useDetails();

  console.log(id);

  const Template = lazy(() => import(`../templates/${id}`));

  return (
    <section className="flex flex-col mt-5 w-full">
      <Suspense fallback={<div>Loading...</div>}>
        <Template />
      </Suspense>
    </section>
  );
};

export default GeneratePDF;
