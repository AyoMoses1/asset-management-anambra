/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@chakra-ui/react";
import CustomTable from "components/tables/CustomTable";
import { columns, assets } from "./helpers";
import useSubHeaderComponentMemo from "components/common/useSubHeaderComponentMemo";

const Assets = () => {
  const { subHeaderComponentMemo } = useSubHeaderComponentMemo();
  return (
    <Box>
      <CustomTable
        columns={columns as any}
        data={assets}
        // paginationResetDefaultPage={resetPaginationToggle}
        subHeaderComponent={subHeaderComponentMemo}
        // progressPending={loadingData}
        pagination
        paginationServer
        // paginationTotalRows={totalRows}
        // onChangeRowsPerPage={handlePerRowsChange}
        // onChangePage={handlePageChange}
      />
    </Box>
  );
};

export default Assets;
