/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Box } from "@chakra-ui/react";
import CustomTable from "components/tables/CustomTable";
import { columns, assets } from "./helpers";
import FilterComponent from "components/common/FilterComponent";

const Assets = () => {
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e: any) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
        // handleScheduleInspection={onOpen}
        // handleFilter={openDrawer}
      />
    );
    // eslint-disable-next-line
  }, [filterText, resetPaginationToggle]);
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
