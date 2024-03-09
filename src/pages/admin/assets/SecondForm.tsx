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
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import AuthInput from "components/common/AuthInput";
import { CheckIcon } from "icons";
import { BORDER_LIGHT } from "utils/color";
import ModalComponent from "components/modals/FormModal";
import {
  createAssetInputsTwo,
  createAssetInputsThree,
  assetModelInputs,
} from "utils/data";
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
  const { isOpen, onOpen, onClose } = useDisclosure();

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
                    {input.addNew &&
                      (typeof input.addNew === "string" ? (
                        <Button variant={"outline"}>{input.addNew}</Button>
                      ) : (
                        <IconButton
                          variant={"outline"}
                          icon={<input.addNew />}
                          aria-label="add-new"
                        />
                      ))}
                  </Flex>
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
                    {input.addNew &&
                      (typeof input.addNew === "string" ? (
                        <Button variant={"outline"} onClick={onOpen}>
                          {input.addNew}
                        </Button>
                      ) : (
                        <IconButton
                          variant={"outline"}
                          icon={<input.addNew />}
                          aria-label="add-new"
                        />
                      ))}
                  </Flex>
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

export default SecondForm;
