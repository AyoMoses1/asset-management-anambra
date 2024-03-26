import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import DashboardLayout from "layouts/DashboardLayout";
import { BG_LIGHT } from "utils/color";

const index = () => {
  return (
    <DashboardLayout bg={BG_LIGHT}>
      <Stack>
        <HStack flexDirection={"column"} alignItems={"start"}>
          <Heading variant={"h3Small"} mb={"28.5px"}>
            Update predefined kit
          </Heading>
          <Flex gap={"6px"} alignItems={"end"}>
            <FormControl gap={"24px"}>
              <FormLabel fontWeight={600}>Name of Kit</FormLabel>
              <Input type={"text"} bg={"white"} />{" "}
            </FormControl>
            <Button variant={"primary"} height={"45px"} width={"82px"}>
              Save
            </Button>
          </Flex>
        </HStack>
      </Stack>
    </DashboardLayout>
  );
};

export default index;
