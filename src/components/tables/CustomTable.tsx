/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import DataTable, { TableProps } from "react-data-table-component";
import { DARK, TEXT_DARK_GRAY, TEXT_PRIMARY, TINT_GREY } from "utils/color";
import { CircularProgress, HStack, Text } from "@chakra-ui/react";
import CustomPagination from "./CustomPagination";
import EmptyTable from "./EmptyTable";

interface CustomTableProps extends TableProps<any> {}
const CustomTable: React.FC<CustomTableProps> = (props) => {
  return (
    <DataTable
      pagination
      customStyles={{
        rows: {
          style: {
            "&:not(:last-of-type)": { border: 0 },
            "&:selected": {
              background: "red",
            },
          },
        },
        tableWrapper: {
          style: {
            background: "inherit",
          },
        },
        subHeader: {
          style: {
            padding: 0,
          },
        },
        table: {
          style: {
            borderBottom: 0,
            marginTop: 24,
            borderRadius: 0,
            color: "red",
            fontSize: ".9rem",
          },
        },
        headRow: {
          style: {
            backgroundColor: TINT_GREY,
            borderTopRightRadius: 4,
            borderTopLeftRadius: 4,
            border: "0px",
          },
        },
        headCells: {
          style: {
            textTransform: "capitalize",
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "18.2px",
            color: TEXT_PRIMARY,
          },
        },
        cells: {
          style: {
            color: DARK,
            fontSize: "324px",
          },
        },
      }}
      subHeader
      noDataComponent={<EmptyTable />}
      persistTableHead
      progressComponent={
        <HStack py={6}>
          <CircularProgress isIndeterminate color="brand.300" size={6} />
          <Text color={TEXT_DARK_GRAY} fontSize={"sm"}>
            Loading data...
          </Text>
        </HStack>
      }
      paginationComponent={(props: any) => <CustomPagination {...props} />}
      {...props}
    />
  );
};

export default CustomTable;
