import { Button, Image, VStack } from "@chakra-ui/react";
import sabinus from "assets/sabinus.png";
import { BiTrash } from "react-icons/bi";
import { IoPencilOutline } from "react-icons/io5";
import { MAIN_RED } from "utils/color";

interface InfoCardProps {
  buttons: string[];
}

const InfoCard: React.FC<InfoCardProps> = ({ buttons }) => {
  return (
    <VStack spacing={"8px"}>
      <Image src={sabinus} mb={"17px"} w={"100%"} />
      {buttons.map((button: string) => (
        <Button variant={"outline"} w={"full"} leftIcon={<IoPencilOutline />}>
          {button}
        </Button>
      ))}
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
