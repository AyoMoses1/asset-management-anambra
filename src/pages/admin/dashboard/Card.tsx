import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Heading, Stack, Text, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface CardProps {
  value: number;
  title: string;
  icon: string;
  link: string;
  color1: string;
  color2: string;
}

const Card: React.FC<CardProps> = ({
  value,
  title,
  link,
  icon,
  color1,
  color2,
}) => {
  return (
    <Box
      style={{
        background: `linear-gradient(275.42deg,${color1} 3.31%,${color2} 116.11%)`,
      }}
      width={"100%"}
      borderRadius={"8px"}
      px={"24px"}
      py={"13px"}
      position={"relative"}
    >
      <Stack color={"#fff"}>
        <Heading variant={"h2"}>{value}</Heading>
        <Text
          variant={"large"}
          mt={"10px"}
          mb={"18px"}
          textTransform={"capitalize"}
        >
          {title}
        </Text>
        <Button
          as={Link}
          to={link}
          variant={"outline"}
          borderRadius={"50px"}
          w={"100px"}
          color={"#fff"}
          rightIcon={<ChevronRightIcon />}
        >
          View all
        </Button>
        <Image
          src={icon}
          w={"65.25px"}
          position={"absolute"}
          right={0}
          top={"30%"}
        />
      </Stack>
    </Box>
  );
};

export default Card;
