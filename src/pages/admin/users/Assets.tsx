/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@chakra-ui/react";
import CustomTable from "components/tables/CustomTable";
import { assets } from "./helpers";
import useSubHeaderComponentMemo from "components/common/useSubHeaderComponentMemo";
import FilterComponent from "components/common/FilterComponent";
import { columns } from "./../assets/helpers";

const Assets = () => {
  const { subHeaderComponentMemo } = useSubHeaderComponentMemo(FilterComponent);
  return (
    <Box>
      <CustomTable
        columns={columns as any}
        data={assets}
        subHeaderComponent={subHeaderComponentMemo}
        pagination
        paginationServer
      />
    </Box>
  );
};

export default Assets;
