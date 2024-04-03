/* eslint-disable @typescript-eslint/no-explicit-any */
import DashboardLayout from "layouts/DashboardLayout";
import {
  Box,
  Button,
  // Checkbox,
  Flex,
  HStack,
  Heading,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import CustomTable from "components/tables/CustomTable";
import { users, columns } from "./helpers";
import useSubHeaderComponentMemo from "components/common/useSubHeaderComponentMemo";
import FilterComponent from "./FilterComponent";
import { BG_LIGHT, BORDER_LIGHT } from "utils/color";
import { Link } from "react-router-dom";

const Index = () => {
  const { subHeaderComponentMemo } = useSubHeaderComponentMemo(FilterComponent);

  // const ChakraCheckbox = ({ checked, onChange }) => {
  //   return <Checkbox isChecked={checked} onChange={onChange} />;
  // };

  return (
    <DashboardLayout bg={BG_LIGHT}>
      <Stack>
        <HStack mb={"20px"}>
          <Heading variant={"h3Small"}>Users</Heading>
          <Spacer />
          <Flex gap={"7px"} mr={"30%"}>
            <Button variant={"outline"}>Custom export</Button>
            <Button
              variant={"primary"}
              leftIcon={<AddIcon />}
              as={Link}
              to={"/dashboard/assets/create-new"}
            >
              Create New
            </Button>
          </Flex>
        </HStack>
        <Box
          bg={"white"}
          p={"12px"}
          border={"1px solid"}
          borderColor={BORDER_LIGHT}
          borderRadius={"8px"}
        >
          <CustomTable
            columns={columns as any}
            data={users}
            selectableRows
            responsive={true}
            subHeaderComponent={subHeaderComponentMemo}
            // selectableRowsComponent={Checkbox}
            pagination
            paginationServer
          />
        </Box>
      </Stack>
    </DashboardLayout>
  );
};

export default Index;
