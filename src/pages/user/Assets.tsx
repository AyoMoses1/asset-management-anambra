/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Box,
  Center,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spacer,
} from "@chakra-ui/react";
import CustomTable from "components/tables/CustomTable";
import { columns, assets } from "./helpers";
import { IoArrowUndoCircle, IoRefresh, IoRefreshCircle } from "react-icons/io5";
import CustomButton from "components/common/CustomButton";
import { BsPlus } from "react-icons/bs";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { BORDER_LIGHT, ICON_DARK, TINT_GREY } from "utils/color";
import { ExportIcon, MaximiseIcon, MingCuteIcon, RefreshIcon } from "icons";

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

interface FilterComponentProp {
  onFilter: (e: any) => void;
  onClear: () => void;
  filterText: string;
  // handleScheduleInspection: () => void;
  // handleFilter: () => void;
}
const FilterComponent: React.FC<FilterComponentProp> = ({
  onFilter,
  filterText,
  // handleScheduleInspection,
  // handleFilter,
}) => {
  return (
    <HStack
      flexWrap={"wrap"}
      flexDir={["column-reverse", "column-reverse", "row"]}
      spacing={"16px"}
      alignItems={["flex-start", "flex-start", "center"]}
      w={"full"}
    >
      <Spacer />

      <InputGroup flex={1} maxW={["full", "full", 234]}>
        <InputRightElement as={Center} bg={TINT_GREY}>
          <Icon as={SearchIcon} fontSize={"17px"} color={ICON_DARK} />
        </InputRightElement>
        <Input
          fontSize={"sm"}
          onChange={onFilter}
          value={filterText}
          placeholder="Search by asset tag"
          bg={"white"}
        />
      </InputGroup>
      <HStack spacing={0} width={"232px"}>
        <IconButton
          aria-label="Search database"
          icon={<RefreshIcon />}
          variant={"outline"}
          borderColor={BORDER_LIGHT}
          borderRadius={0}
          width={"full"}
        />
        <IconButton
          aria-label="Search database"
          icon={<MaximiseIcon />}
          variant={"outline"}
          borderColor={BORDER_LIGHT}
          borderRadius={0}
          width={"full"}
        />
        <IconButton
          aria-label="Search database"
          icon={<MingCuteIcon />}
          variant={"outline"}
          borderColor={BORDER_LIGHT}
          borderRadius={0}
          width={"full"}
        />

        <IconButton
          aria-label="Search database"
          icon={<ExportIcon />}
          borderColor={BORDER_LIGHT}
          variant={"outline"}
          borderRadius={0}
          width={"full"}
        />
      </HStack>
    </HStack>
  );
};

export default Assets;
