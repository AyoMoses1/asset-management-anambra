/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import AuthInput from "components/common/AuthInput";
import { BORDER_LIGHT } from "utils/color";
import { assetModelInputs, createAssetInputs } from "utils/data";
import { useForm } from "react-hook-form";
import { ChevronRightIcon } from "@chakra-ui/icons";
import ModalComponent from "components/modals/FormModal";
import { CheckIcon } from "icons";

const General = () => {
  const { control } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg={"white"}
      p={"24px"}
      width={"100%"}
      border={"1px solid"}
      borderColor={BORDER_LIGHT}
      borderRadius={"8px"}
    >
      <HStack justifyContent={"space-between"} mb={"24px"}>
        <Heading variant={"h5Small"} textTransform={"uppercase"}>
          Asset Tag
        </Heading>

        <Heading variant={"h5Small"} textTransform={"uppercase"}>
          1/2
        </Heading>
      </HStack>
      {createAssetInputs().map((input, idx) => (
        <Flex gap={"6px"}>
          <AuthInput
            key={idx}
            isFlexed
            control={control}
            name={input.name}
            mb={4}
            autoComplete={"none"}
            placeholder={input.placeholder}
            isIconComponent
            label={input.label}
            type={input.type}
            addNew={input.addNew}
            openAddNewModal={onOpen}
            bg={"transparent"}
            isPassword={input.type === "password"}
            isRequired={input.isRequired}
            rules={{
              required: input.rule,
              minLength: {
                value: input.minLength,
                message: input.message,
              },
            }}
          />
        </Flex>
      ))}
      <HStack justifyContent={"space-between"} mt={"24px"}>
        <Spacer />
        <Button rightIcon={<ChevronRightIcon />} variant={"outline"}>
          Next
        </Button>
      </HStack>
      <ModalComponent
        onClose={onClose}
        isOpen={isOpen}
        size="3xl"
        title="Create Asset Model"
      >
        {assetModelInputs().map((input, idx) => (
          <AuthInput
            key={idx}
            isFlexed
            control={control}
            name={input.name}
            autoComplete={"none"}
            placeholder={input.placeholder}
            isIconComponent
            label={input.label}
            type={input.type}
            bg={"transparent"}
            isPassword={input.type === "password"}
            isRequired={input.isRequired}
            rules={{
              required: input.rule,
              minLength: {
                value: input.minLength,
                message: input.message,
              },
            }}
          />
        ))}
        <Flex gap={"8px"} justifyContent={"flex-end"}>
          <Button variant={"outline"} onClick={onClose}>
            Cancel
          </Button>
          <Button leftIcon={<CheckIcon />}>Save</Button>
        </Flex>
      </ModalComponent>
    </Box>
  );
};

export default General;