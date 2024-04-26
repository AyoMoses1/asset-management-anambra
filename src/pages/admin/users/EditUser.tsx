import { Heading, Stack } from "@chakra-ui/react";
import DashboardLayout from "layouts/DashboardLayout";
import { useParams } from "react-router-dom";
import EditForm from "./components/EditForm";

const EditUser = () => {
  const name = useParams().name;
  return (
    <DashboardLayout>
      <Stack>
        <Heading variant={"h3Small"}>Edit User {name}</Heading>
        <EditForm />
      </Stack>
    </DashboardLayout>
  );
};

export default EditUser;
