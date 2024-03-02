import { LockIcon } from "@chakra-ui/icons";
import { Button, Image, VStack } from "@chakra-ui/react";
import sabinus from "assets/sabinus.png";
import { IoPencilOutline, IoPrintOutline } from "react-icons/io5";

const InfoCard = () => {
  return (
    <VStack spacing={"8px"}>
      <Image src={sabinus} mb={"17px"} w={"100%"} />
      <Button variant={"outline"} w={"full"} leftIcon={<IoPencilOutline />}>
        Edit your profile
      </Button>
      <Button variant={"outline"} w={"full"} leftIcon={<LockIcon />}>
        Change password
      </Button>
      <Button variant={"outline"} w={"full"} leftIcon={<IoPrintOutline />}>
        Print all assigned
      </Button>
    </VStack>
  );
};

export default InfoCard;
