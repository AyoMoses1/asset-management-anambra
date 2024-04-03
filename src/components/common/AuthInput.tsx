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
  Button,
  Stack,
  Checkbox,
  Text,
  Textarea,
  Select as ChakraSelect,
} from "@chakra-ui/react";
import React, { ComponentProps } from "react";
import { useController } from "react-hook-form";
import { IconType } from "react-icons";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Select from "react-select";
import { TEXT_PRIMARY, TINT_GREY } from "utils/color";
import { AddIcon } from "@chakra-ui/icons";

interface AuthInputProps extends InputProps {
  label?: string;
  control: any;
  Icon?: any;
  isIconComponent?: boolean;
  name: string;
  rules?: any;
  width?: string;
  isFlexed?: boolean;
  includePasswordIcon?: boolean;
  isPassword?: boolean;
  type?: string;
  iconProp?: IconProps;
  isSelect?: boolean;
  labelStyles?: FormLabelProps;
  isDisabled?: boolean;
  rightElement?: string;
  addNew?: IconType | string;
  openAddNewModal?: () => void;
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
  type,
  rightElement,
  addNew,
  width,
  openAddNewModal,
  // onChange,
  ...rest
}) => {
  // const { fontSize } = rest;
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

  if (type === "checkbox")
    return (
      <Stack spacing={5} direction="row" pl={"25%"} mb={"24px"}>
        <Checkbox>
          <Text fontWeight={"600"} color={TEXT_PRIMARY} fontSize={"16px"}>
            {label}
          </Text>
        </Checkbox>
      </Stack>
    );

  if (type === "file")
    return (
      <FormControl
        isInvalid={Boolean(error)}
        display={isFlexed ? "flex" : ""}
        gap={isFlexed ? "24px" : ""}
        alignItems={"center"}
        justifyContent={"start"}
      >
        {label && (
          <FormLabel
            color={`text.primary`}
            fontSize={"16px"}
            mb={1}
            fontWeight={"600"}
            htmlFor="file-upload"
            {...labelStyles}
            fontFamily={"'IBM Plex Sans', sans"}
            {...labelStyles}
            display={"flex"}
            w={"100%"}
            gap={"45px"}
          >
            <Box w={"20%"} display={"flex"} justifyContent={"end"}>
              {label}
            </Box>
            <Button as="span" variant={"outline"} cursor={"pointer"}>
              Select File...
            </Button>
            <Input
              {...rest}
              id={"file-upload"}
              type={type}
              isDisabled={isDisabled}
              {...field}
              placeholder="select ing"
              style={{ display: "none" }}
            />
          </FormLabel>
        )}
        {Boolean(error) && (
          <FormErrorMessage fontSize={"xs"}>{error?.message}</FormErrorMessage>
        )}
      </FormControl>
    );
  if (isSelect)
    return (
      <FormControl
        isInvalid={Boolean(error)}
        display={isFlexed ? "flex" : ""}
        gap={isFlexed ? "24px" : ""}
        alignItems={"center"}
        justifyContent={isFlexed ? "end" : ""}
      >
        <Flex alignItems={"center"} w={"30%"} justifyContent={"flex-end"}>
          {" "}
          {label && (
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
          )}
          {isRequired && (
            <Box
              bg={"main.red"}
              width={"7.36px"}
              height={"7.36px"}
              borderRadius={"50%"}
            ></Box>
          )}
        </Flex>
        <Flex w={"100%"} gap={"24px"}>
          <ChakraSelect placeholder="Select option" mb={4} w={width ?? width}>
            {data?.map((item) => (
              <option value={item.value}>{item.label}</option>
            ))}
          </ChakraSelect>
          {addNew &&
            (typeof addNew === "string" ? (
              <Button variant={"outline"}>{addNew}</Button>
            ) : (
              <IconButton
                variant={"outline"}
                icon={<AddIcon />}
                // onClick={onOpen}
                aria-label="add-new"
              />
            ))}
        </Flex>
        {Boolean(error) && (
          <FormErrorMessage fontSize={"xs"}>{error?.message}</FormErrorMessage>
        )}
      </FormControl>
    );

  if (type === "textarea")
    return (
      <FormControl isInvalid={Boolean(error)} display={"flex"} gap={"24px"}>
        {label && (
          <Flex alignItems={"center"} w={"30%"} justifyContent={"flex-end"}>
            <FormLabel
              color={`text.primary`}
              fontSize={"16px"}
              mb={1}
              textAlign={isFlexed ? "end" : "start"}
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
          {rightElement && (
            <InputRightElement
              bg={TINT_GREY}
              display={"flex"}
              alignItems={"center"}
              px={12}
            >
              {rightElement}
            </InputRightElement>
          )}
          <Textarea
            // {...rest}
            isDisabled={isDisabled}
            {...field}
          />
        </InputGroup>
        {Boolean(error) && (
          <FormErrorMessage fontSize={"xs"}>{error?.message}</FormErrorMessage>
        )}
      </FormControl>
    );

  if (isFlexed)
    return (
      <FormControl isInvalid={Boolean(error)} display={"flex"} gap={"24px"}>
        {label && (
          <Flex alignItems={"center"} w={"30%"} justifyContent={"flex-end"}>
            <FormLabel
              color={`text.primary`}
              fontSize={"16px"}
              mb={1}
              textAlign={isFlexed ? "end" : "start"}
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
          {rightElement && (
            <InputRightElement
              bg={TINT_GREY}
              display={"flex"}
              alignItems={"center"}
              px={12}
            >
              {rightElement}
            </InputRightElement>
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
          <Flex w={"100%"} gap={"24px"}>
            <Input
              {...rest}
              type={isPassword ? (isOpen ? "text" : "password") : type}
              isDisabled={isDisabled}
              {...field}
              width={type === "date" ? "204px" : "100%"}
            />
            {addNew &&
              (typeof addNew === "string" ? (
                <Button variant={"outline"}>{addNew}</Button>
              ) : (
                <IconButton
                  variant={"outline"}
                  icon={<AddIcon />}
                  onClick={openAddNewModal}
                  aria-label="add-new"
                />
              ))}
          </Flex>
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
          type={isPassword ? (isOpen ? "text" : "password") : type}
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
