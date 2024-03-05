/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Center,
  FormControl,
  FormErrorMessage,
  Icon as ChakraIcon,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
  useDisclosure,
  FormLabelProps,
  IconProps,
  Flex,
  Box,
} from "@chakra-ui/react";
import React, { ComponentProps } from "react";
import { useController } from "react-hook-form";
import { IconType } from "react-icons";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { TEXT_DARK } from "utils/color";
import Select from "react-select";
import CustomSelect from "./CustomSelect";

interface AuthInputProps extends InputProps {
  label?: string;
  control: any;
  Icon?: any;
  isIconComponent?: boolean;
  name: string;
  rules?: any;
  isFlexed?: boolean;
  includePasswordIcon?: boolean;
  isPassword?: boolean;
  iconProp?: IconProps;
  isSelect?: boolean;
  labelStyles?: FormLabelProps;
  isDisabled?: boolean;
  data?: { label: string; value: string | number }[];
  selectProps?: ComponentProps<Select> & { isCreatable?: boolean };
}

const AuthInput: React.FC<AuthInputProps> = ({
  label,
  value,
  iconProp,
  isIconComponent,
  rules,
  labelStyles,
  selectProps,
  control,
  data,
  isPassword,
  isSelect,
  isFlexed,
  includePasswordIcon,
  name,
  Icon,
  isDisabled,
  isRequired,
  // onChange,
  ...rest
}) => {
  const { fontSize } = rest;
  const {
    field,
    fieldState: { error },
  } = useController({
    defaultValue: value || "",
    control,
    name,
    rules,
  });

  const { isOpen, onToggle } = useDisclosure();

  if (isSelect)
    return (
      <FormControl isInvalid={Boolean(error)}>
        {label && (
          <FormLabel
            color={TEXT_DARK}
            fontSize={"14px"}
            mb={1}
            fontWeight={"600"}
            {...labelStyles}
            fontFamily={"'IBM Plex Sans', sans"}
          >
            {label}
          </FormLabel>
        )}
        <CustomSelect
          classNamePrefix={"custom"}
          className="custom-select"
          isSearchable={true}
          options={data}
          // onChange={onChange}
          isDisabled={isDisabled}
          fontSize={fontSize as any}
          {...selectProps}
          {...field}
        />
        {Boolean(error) && (
          <FormErrorMessage fontSize={"xs"}>{error?.message}</FormErrorMessage>
        )}
      </FormControl>
    );

  if (isFlexed)
    return (
      <FormControl isInvalid={Boolean(error)} display={"flex"}>
        {label && (
          <Flex alignItems={"center"} minW={"150px"}>
            <FormLabel
              color={`text.primary`}
              fontSize={"16px"}
              mb={1}
              fontWeight={"600"}
              {...labelStyles}
              fontFamily={"'IBM Plex Sans', sans"}
              {...labelStyles}
            >
              {label}
            </FormLabel>
            {isRequired && (
              <Box
                bg={"main.red"}
                width={"7.36px"}
                height={"7.36px"}
                borderRadius={"50%"}
              ></Box>
            )}
          </Flex>
        )}
        <InputGroup alignItems={"center"}>
          {Icon && (
            <InputLeftElement
              as={Center}
              h={"full"}
              w={12}
              color={"gray.400"}
              fontSize={"lg"}
            >
              {isIconComponent ? (
                Icon
              ) : (
                <ChakraIcon
                  as={Icon as IconType}
                  fontSize={"24px"}
                  {...iconProp}
                />
              )}
            </InputLeftElement>
          )}

          {isPassword && includePasswordIcon && (
            <InputRightElement
              variant={"link"}
              as={IconButton}
              h={"full"}
              w={12}
              color={isOpen ? "brand.500" : "gray.400"}
              fontSize={"lg"}
              onClick={onToggle}
              aria-label="Show password"
              icon={
                isOpen ? (
                  <ChakraIcon fontSize={"20px"} as={IoEyeOffOutline} />
                ) : (
                  <ChakraIcon fontSize={"20px"} as={IoEyeOutline} />
                )
              }
            />
          )}
          <Input
            {...rest}
            type={isPassword ? (isOpen ? "text" : "password") : rest.type}
            isDisabled={isDisabled}
            {...field}
          />
        </InputGroup>
        {Boolean(error) && (
          <FormErrorMessage fontSize={"xs"}>{error?.message}</FormErrorMessage>
        )}
      </FormControl>
    );
  return (
    <FormControl isInvalid={Boolean(error)}>
      {label && (
        <Flex alignItems={"center"}>
          <FormLabel
            color={`text.primary`}
            fontSize={"16px"}
            mb={1}
            fontWeight={"600"}
            {...labelStyles}
            fontFamily={"'IBM Plex Sans', sans"}
            {...labelStyles}
          >
            {label}
          </FormLabel>
          {isRequired && (
            <Box
              bg={"main.red"}
              width={"7.36px"}
              height={"7.36px"}
              borderRadius={"50%"}
            ></Box>
          )}
        </Flex>
      )}
      <InputGroup alignItems={"center"}>
        {Icon && (
          <InputLeftElement
            as={Center}
            h={"full"}
            w={12}
            color={"gray.400"}
            fontSize={"lg"}
          >
            {isIconComponent ? (
              Icon
            ) : (
              <ChakraIcon
                as={Icon as IconType}
                fontSize={"24px"}
                {...iconProp}
              />
            )}
          </InputLeftElement>
        )}

        {isPassword && (
          <InputRightElement
            variant={"link"}
            as={IconButton}
            h={"full"}
            w={12}
            color={isOpen ? "brand.500" : "gray.400"}
            fontSize={"lg"}
            onClick={onToggle}
            aria-label="Show password"
            icon={
              isOpen ? (
                <ChakraIcon fontSize={"20px"} as={IoEyeOffOutline} />
              ) : (
                <ChakraIcon fontSize={"20px"} as={IoEyeOutline} />
              )
            }
          />
        )}
        <Input
          {...rest}
          type={isPassword ? (isOpen ? "text" : "password") : rest.type}
          isDisabled={isDisabled}
          {...field}
        />
      </InputGroup>
      {Boolean(error) && (
        <FormErrorMessage fontSize={"xs"}>{error?.message}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default AuthInput;
