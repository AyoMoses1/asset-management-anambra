/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import AuthInput from "components/common/AuthInput";
import { CheckIcon } from "icons";
import { BORDER_LIGHT } from "utils/color";
import { createAssetInputsTwo } from "utils/data";
import { useForm } from "react-hook-form";
import { ChevronLeftIcon } from "@chakra-ui/icons";

interface SecondFormProps {
  setActiveStep: (no: any) => void;
  activeStep: number;
}

const SecondForm: React.FC<SecondFormProps> = ({ setActiveStep }) => {
  const { control } = useForm();
  return (
    <Box
      bg={"white"}
      p={"24px"}
      maxW={"842px"}
      border={"1px solid"}
      borderColor={BORDER_LIGHT}
      borderRadius={"8px"}
    >
      {createAssetInputsTwo().map((input, idx) => (
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
      <HStack justifyContent={"space-between"} mt={"24px"}>
        <Button
          variant={"outline"}
          leftIcon={<ChevronLeftIcon />}
          onClick={() => setActiveStep((prev: number) => prev - 1)}
        >
          Prev
        </Button>
        <Flex gap={"8px"}>
          <Button variant={"outline"}>Cancel</Button>
          <Button leftIcon={<CheckIcon />}>Save</Button>
        </Flex>
      </HStack>
    </Box>
  );
};

export default SecondForm;
