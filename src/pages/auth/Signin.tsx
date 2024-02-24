import {
  Button,
  HStack,
  Heading,
  Stack,
  Image,
  Checkbox,
  Link,
} from "@chakra-ui/react";
import AuthInput from "components/common/AuthInput";
import { Link as ReactLink } from "react-router-dom";
import AuthLayout from "layouts/AuthLayout";
import { useForm } from "react-hook-form";
import { loginInputs } from "utils/data";
import logo from "assets/logo3.png";
import ROUTES from "utils/routeNames";

const Signin = () => {
  const { control } = useForm({
    mode: "onSubmit",
  });

  return (
    <AuthLayout>
      <Stack
        bg={"white"}
        border={"1px solid #646464"}
        borderRadius={"8px"}
        p={6}
        spacing={"24px"}
      >
        <HStack justifyContent={"space-between"} alignItems={"center"}>
          <Heading variant={"h4Small"} color={"main.black"}>
            LOGIN
          </Heading>
          <Image src={logo} />
        </HStack>
        {loginInputs().map((input, idx) => (
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
        <Checkbox>Remember me</Checkbox>
        <Button w={"full"} fontWeight={700}>
          Login
        </Button>
        <Link
          fontSize={"sm"}
          as={ReactLink}
          to={ROUTES.FORGOT_PASSWORD_ROUTE}
          color={"main.blue"}
          mx={"auto"}
        >
          Forgot Password?
        </Link>
      </Stack>
    </AuthLayout>
  );
};

export default Signin;
