import {
  Button,
  HStack,
  Heading,
  Stack,
  Image,
  Checkbox,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import AuthInput from "components/common/AuthInput";
import { Link as ReactLink, useNavigate } from "react-router-dom";
import AuthLayout from "layouts/AuthLayout";
import { useForm } from "react-hook-form";
import { loginInputs } from "utils/data";
import logo from "assets/logo3.png";
import ROUTES from "utils/routeNames";
import useNotification from "hooks/useNotification";
import { useAppDispatch } from "store/hooks";
import { executeLogin } from "apis/auth";
import { populateAccount, populateToken } from "store/slice/accountSlice";

const Signin = () => {
  const { control, getValues, trigger } = useForm({
    mode: "onSubmit",
  });

  const {
    isOpen: isLoading,
    onOpen: openLoading,
    onClose: closeLoading,
  } = useDisclosure();

  const navigate = useNavigate();
  const toast = useNotification()
  const dispatch = useAppDispatch()

  const handleLogin = async () => {
    try {
      if (!(await trigger())) return;
      openLoading();
      const payload: LoginData = {
        username: getValues("email").trim(),
        password: getValues("password").trim(),
      };
      const result = await executeLogin(payload);
      if (result.isSuccess === false) throw new Error(result.message);
      toast({
        status: "success",
        title: result.message,
      });
      dispatch(populateToken(result.data.token));
      dispatch(populateAccount(result.data.account));
      navigate("/dashboard");
    } catch (error: any) {
      console.log("ERROR:", error.message);
      toast({
        status: "error",
        title: error.message,
      });
    } finally {
      closeLoading();
    }
  };

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
        <Button
          w={"full"}
          fontWeight={700}
          onClick={handleLogin}
          isLoading={isLoading}
        >
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
