/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Center, HStack, Icon, IconButton, Input, InputGroup, InputRightElement, Spacer } from '@chakra-ui/react';
import { BORDER_LIGHT, ICON_DARK, TINT_GREY } from 'utils/color';
import { SearchIcon } from '@chakra-ui/icons';
import { ExportIcon, MaximiseIcon, MingCuteIcon, RefreshIcon } from 'icons';


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

export default FilterComponent