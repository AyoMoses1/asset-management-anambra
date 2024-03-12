import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import AuthInput from "components/common/AuthInput";
import DashboardLayout from "layouts/DashboardLayout";
import { BORDER_LIGHT } from "utils/color";
import { assetModelInputs, checkoutAssetInputs } from "utils/data";
import ModalComponent from "components/modals/FormModal";
import { CheckIcon } from "icons";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Checkout = () => {
  const { control } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeStep, setActiveStep] = useState(0);
  console.log({ activeStep, onOpen });

  return (
    <DashboardLayout>
      <Stack>
        <Heading variant={"h5Small"}>Checkout Assets</Heading>
        <Box
          bg={"white"}
          p={"24px"}
          maxW={"842px"}
          border={"1px solid"}
          borderColor={BORDER_LIGHT}
          borderRadius={"8px"}
        >
          <Heading variant={"h5Small"} textTransform={"uppercase"} mb={"24px"}>
            Asset Tag
          </Heading>
          {checkoutAssetInputs().map((input, idx) => (
            <Flex gap={"6px"} w={"100%"}>
              <AuthInput
                key={idx}
                isFlexed
                control={control}
                name={input.name}
                addNew={input.addNew}
                mb={4}
                autoComplete={"none"}
                placeholder={input.placeholder}
                isIconComponent
                label={input.label}
                type={input.type}
                data={input.data}
                bg={"transparent"}
                isSelect={input.type === "select"}
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
            <Button
              onClick={() => setActiveStep((prev: number) => prev + 1)}
              rightIcon={<ChevronRightIcon />}
              variant={"outline"}
            >
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
      </Stack>
    </DashboardLayout>
  );
};

export default Checkout;
