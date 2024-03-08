/* eslint-disable @typescript-eslint/no-explicit-any */
import DashboardLayout from "layouts/DashboardLayout";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import CustomTable from "components/tables/CustomTable";
import { mainAssets, mainColumns } from "pages/user/helpers";
import useSubHeaderComponentMemo from "components/common/useSubHeaderComponentMemo";
import FilterComponent from "./FilterComponent";
import { BORDER_LIGHT } from "utils/color";
import { Link } from "react-router-dom";

const Index = () => {
  const { subHeaderComponentMemo } = useSubHeaderComponentMemo(FilterComponent);
  return (
    <DashboardLayout>
      <Stack>
        <HStack>
          <Heading variant={"h3Small"}>All Assets</Heading>
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
            columns={mainColumns as any}
            data={mainAssets}
            selectableRows
            responsive={true}
            subHeaderComponent={subHeaderComponentMemo}
            pagination
            paginationServer
          />{" "}
        </Box>
      </Stack>
    </DashboardLayout>
  );
};

export default Index;
