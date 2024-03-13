import { Button, Image, VStack } from "@chakra-ui/react";
import mouse from "assets/mouse.png";
import { BiTrash } from "react-icons/bi";
import { IoPencilOutline } from "react-icons/io5";
import { MAIN_RED } from "utils/color";

const InfoCard = () => {
  return (
    <VStack spacing={"8px"}>
      <Image src={mouse} mb={"17px"} w={"100%"} />
      <Button variant={"outline"} w={"full"} leftIcon={<IoPencilOutline />}>
        Check-in asset
      </Button>
      <Button variant={"outline"} w={"full"} leftIcon={<IoPencilOutline />}>
        Edit asset
      </Button>
      <Button variant={"outline"} w={"full"} leftIcon={<IoPencilOutline />}>
        Clone asset
      </Button>
      <Button variant={"outline"} w={"full"} leftIcon={<IoPencilOutline />}>
        Audit
      </Button>
      <Button
        variant={"outline"}
        w={"full"}
        leftIcon={<BiTrash />}
        color={"#fff"}
        bg={MAIN_RED}
      >
        Delete
      </Button>
    </VStack>
  );
};

export default InfoCard;
