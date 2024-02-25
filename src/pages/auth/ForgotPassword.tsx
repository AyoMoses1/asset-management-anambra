import {
  Button,
  HStack,
  Heading,
  Stack,
  Image,
  Text,
  Box,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react";
import AuthInput from "components/common/AuthInput";
import AuthLayout from "layouts/AuthLayout";
import { useForm } from "react-hook-form";
import { forgotPasswordInputs } from "utils/data";
import logo from "assets/logo3.png";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";

const ForgotPassword = () => {
  const { control } = useForm({
    mode: "onSubmit",
  });
  const { isOpen, onToggle } = useDisclosure();

  return (
    <AuthLayout>
      <Stack
        bg={"white"}
        border={"1px solid #646464"}
        borderRadius={"8px"}
        p={6}
        spacing={"24px"}
      >
        <Box>
          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <Heading variant={"h4Small"} color={"main.black"} fontWeight={700}>
              RESET PASSWORD
            </Heading>
            <Image src={logo} />
          </HStack>
          <Text variant={"small"} color={"text.tertiary"}>
            Enter your username to be emailed your password reset link.
          </Text>
        </Box>
        {forgotPasswordInputs().map((input, idx) => (
          <AuthInput
            key={idx}
            control={control}
            name={input.name}
            autoComplete={"none"}
            placeholder={input.placeholder}
            isIconComponent
            label={input.label}
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

        <Button
          onClick={onToggle}
          variant={"link"}
          leftIcon={isOpen ? <TriangleUpIcon /> : <TriangleDownIcon />}
          justifyContent={"start"}
          color={"main.blue"}
          _hover={{ textDecor: "none" }}
        >
          Something you should note
        </Button>
        <Collapse in={isOpen} animateOpacity>
          <Box
            p="12px"
            color="text.tertiary"
            mt="8px"
            bg="#FBFBFB"
            rounded="md"
            shadow="md"
          >
            Your username and email address may or may not be the same depending
            on your configuration. If you cannot remember your username, contact
            your administrator.{" "}
            <Text fontWeight={700}>
              Usernames without an associated email address will not be emailed
              a password reset link
            </Text>
          </Box>
        </Collapse>

        <Button w={"full"}>Send Password Reset Link</Button>
      </Stack>
    </AuthLayout>
  );
};

export default ForgotPassword;
