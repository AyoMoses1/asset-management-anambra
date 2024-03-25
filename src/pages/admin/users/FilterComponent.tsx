/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Button,
  Center,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Spacer,
} from "@chakra-ui/react";
import { BORDER_LIGHT, ICON_DARK, TINT_GREY } from "utils/color";
import { SearchIcon } from "@chakra-ui/icons";
import { tableFilters } from "utils/data";

interface FilterComponentProp {
  onFilter: (e: any) => void;
  onClear: () => void;
  filterText: string;
}
const FilterComponent: React.FC<FilterComponentProp> = ({
  onFilter,
  filterText,
}) => {
  return (
    <HStack
      spacing={"16px"}
      alignItems={["flex-start", "flex-start", "center"]}
      w={"full"}
    >
      <Flex gap={"6px"}>
        <Select placeholder="Select a bulk action" />
        <Button variant={"outline"}>Go</Button>
      </Flex>
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
        {tableFilters().map((item) => (
          <IconButton
            aria-label={item.ariaLabel}
            icon={<item.icon />}
            variant={"outline"}
            borderColor={BORDER_LIGHT}
            borderRadius={0}
            width={"full"}
          />
        ))}
      </HStack>
    </HStack>
  );
};

export default FilterComponent;
