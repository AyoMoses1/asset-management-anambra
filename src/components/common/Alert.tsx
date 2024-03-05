import { WarningTwoIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  useDisclosure,
  CloseButton,
  Button,
  Circle,
  Spacer,
  Link,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { DARK, TEXT_DARK_GRAY } from "utils/color";

interface AlertProps {
  title: string;
}

const AlertComponent = ({ title }: AlertProps) => {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true });

  return isVisible ? (
    <Alert status="warning" bg={"#FFF8EB"} border={"1px solid #F59E0B"}>
      <Circle bg={"#FFF0D4"} size={12}>
        <AlertIcon as={WarningTwoIcon} color={"#FCBB4D"} m={"auto"} />
      </Circle>
      <Box ml={2}>
        <AlertTitle
          fontSize={14}
          lineHeight={"21px"}
          fontWeight={500}
          color={DARK}
        >
          {title.toUpperCase()}
        </AlertTitle>
        <AlertDescription
          color={TEXT_DARK_GRAY}
          fontSize={14}
          lineHeight={"21px"}
        >
          You have 4 items requiring acceptance.{" "}
          <Link
            fontSize={"sm"}
            as={ReactLink}
            to={"/account/accept"}
            fontWeight={700}
            color={TEXT_DARK_GRAY}
            mx={"auto"}
          >
            Click here
          </Link>{" "}
          to accept or decline them.
        </AlertDescription>
      </Box>
      <Spacer />
      <CloseButton onClick={onClose} />
    </Alert>
  ) : (
    <Button onClick={onOpen}>Show Alert</Button>
  );
};

export default AlertComponent;
