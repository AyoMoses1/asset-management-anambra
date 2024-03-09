/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Box, Button, HStack, Spacer } from "@chakra-ui/react";
import AuthInput from "components/common/AuthInput";
import { BORDER_LIGHT } from "utils/color";
import { createAssetInputs } from "utils/data";
import { useForm } from "react-hook-form";
import { ChevronRightIcon } from "@chakra-ui/icons";

interface FirstFormProps {
  setActiveStep: (no: any) => void;
  activeStep: number;
}

const FirstForm: React.FC<FirstFormProps> = ({ setActiveStep }) => {
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
      {createAssetInputs().map((input, idx) => (
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
        <Spacer/>
        <Button
          onClick={() => setActiveStep((prev: number) => prev + 1)}
          rightIcon={<ChevronRightIcon />}
          variant={"outline"}
        >
          Next
        </Button>
      </HStack>
    </Box>
  );
};

export default FirstForm;
