import { useState } from "react";
import { Heading, Stack } from "@chakra-ui/react";
import DashboardLayout from "layouts/DashboardLayout";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";

const CreateNew = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      name: "First Form",
      component: (
        <FirstForm setActiveStep={setActiveStep} activeStep={activeStep} />
      ),
    },
    {
      name: "Second Form",
      component: (
        <SecondForm setActiveStep={setActiveStep} activeStep={activeStep} />
      ),
    },
  ];

  return (
    <DashboardLayout>
      <Stack>
        <Heading variant={"h3Small"}>Create Assets</Heading>
        {steps[activeStep].component}
      </Stack>
    </DashboardLayout>
  );
};

export default CreateNew;
