/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
} from "@chakra-ui/react";
import AuthInput from "components/common/AuthInput";
import { CheckIcon } from "icons";
import { BORDER_LIGHT } from "utils/color";
import { createAssetInputsTwo, createAssetInputsThree } from "utils/data";
import { useForm } from "react-hook-form";
import {
  ChevronLeftIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from "@chakra-ui/icons";
import { TINT_GREY } from "utils/color";

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
      <HStack justifyContent={"space-between"} mb={"24px"}>
        <Heading variant={"h5Small"} textTransform={"uppercase"}>
          Asset Tag
        </Heading>
        <Heading variant={"h5Small"} textTransform={"uppercase"}>
          2/2
        </Heading>
      </HStack>
      <Accordion allowMultiple>
        <AccordionItem mb={4}>
          {({ isExpanded }) => (
            <>
              <AccordionButton bg={TINT_GREY} _hover={{ bg: TINT_GREY }}>
                {isExpanded ? (
                  <TriangleUpIcon fontSize="12px" />
                ) : (
                  <TriangleDownIcon fontSize="12px" />
                )}
                <Box as="span" flex="1" textAlign="left" ml={4}>
                  Section 2 title
                </Box>
              </AccordionButton>
              <AccordionPanel pb={4}>
                {createAssetInputsTwo().map((input, idx) => (
                  <AuthInput
                    key={idx}
                    isFlexed
                    control={control}
                    name={input.name}
                    mb={4}
                    autoComplete={"none"}
                    rightElement={input.rightElement}
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
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <AccordionButton bg={TINT_GREY} _hover={{ bg: TINT_GREY }}>
                {isExpanded ? (
                  <TriangleUpIcon fontSize="12px" />
                ) : (
                  <TriangleDownIcon fontSize="12px" />
                )}
                <Box as="span" flex="1" textAlign="left" ml={4}>
                  Section 2 title
                </Box>
              </AccordionButton>
              <AccordionPanel pb={4}>
                {createAssetInputsThree().map((input, idx) => (
                  <AuthInput
                    key={idx}
                    isFlexed
                    control={control}
                    name={input.name}
                    mb={4}
                    autoComplete={"none"}
                    rightElement={input.rightElement}
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
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
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
