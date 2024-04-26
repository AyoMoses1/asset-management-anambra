import { Button, Image, VStack } from "@chakra-ui/react";
import sabinus from "assets/sabinus.png";
import { BiTrash } from "react-icons/bi";
import { IoPencilOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { MAIN_RED } from "utils/color";

interface InfoCardProps {
  buttons: NavButtons[];
}

const InfoCard: React.FC<InfoCardProps> = ({ buttons }) => {
  const navigate = useNavigate();
  return (
    <VStack spacing={"8px"}>
      <Image src={sabinus} mb={"17px"} w={"100%"} />
      {buttons.map((button) => (
        <Button
          onClick={() => navigate(button.link)}
          variant={"outline"}
          w={"full"}
          leftIcon={<IoPencilOutline />}
        >
          {button.name}
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
