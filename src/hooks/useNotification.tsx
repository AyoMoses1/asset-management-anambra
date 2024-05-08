import { useToast, ToastPosition } from "@chakra-ui/react";

interface ToastProps {
  position?: ToastPosition;
  isClosable?: boolean;
  variant?: string;
  status: "info" | "warning" | "success" | "error" | "loading";
  title: string;
}
const useNotification = () => {
  const toast = useToast();
  const showToast = ({
    position = "bottom-right",
    isClosable = true,
    variant = "subtle",
    status,
    title,
  }: ToastProps) => {
    return toast({
      position,
      isClosable,
      variant,
      status,
      title,
    });
  };

  return showToast;
};

export default useNotification;
