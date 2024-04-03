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
  Spacer,
} from "@chakra-ui/react";
import { BORDER_LIGHT, ICON_DARK, TINT_GREY } from "utils/color";
import { SearchIcon } from "@chakra-ui/icons";
import { tableFilters } from "utils/data";
import AuthInput from "components/common/AuthInput";
import { useForm } from "react-hook-form";

interface FilterComponentProp {
  onFilter: (e: any) => void;
  onClear: () => void;
  filterText: string;
}
const FilterComponent: React.FC<FilterComponentProp> = ({
  onFilter,
  filterText,
}) => {
  const { control } = useForm();
  return (
    <HStack
      spacing={"16px"}
      alignItems={["flex-start", "flex-start", "center"]}
      w={"full"}
    >
      <Flex gap={"6px"}>
        <AuthInput
          width="243px"
          isFlexed
          control={control}
          name={"bulk action"}
          mb={4}
          autoComplete={"none"}
          placeholder="Select a bulk action"
          isIconComponent
          isSelect
          data={[
            { label: "Edit", value: 444 },
            { label: "Check-in", value: 444 },
            { label: "Merge-users", value: 444 },
            { label: "Send password reset link", value: 444 },
            { label: "Delete", value: 444 },
          ]}
          bg={"transparent"}
        />
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
