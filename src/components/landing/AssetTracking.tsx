import { SimpleGrid, Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import t1 from "assets/t1.svg";
import t2 from "assets/Frame 2258.png";
import t3 from "assets/image 10.svg";
import { trackData, trackData2 } from "utils/data";
import TrackCard from "./TrackCard";

const AssetTracking = () => {
  return (
    <SimpleGrid
      columns={2}
      px={"150px"}
      py={"150px"}
      bg={"#252623"}
      rowGap={"100px"}
    >
      <Box>
        <Heading
          variant={"articleHeading"}
          position={"relative"}
          className="gradient-text-two"
        >
          Real-time Asset Tracking and Management Made Easy
        </Heading>
        <Text fontWeight={400} color={"others.white"} my={"33px"}>
          The Anambra State Asset Management Platform provides real-time
          tracking and management solutions to help you optimize your resources
          and streamline operations.
        </Text>
        <Flex columnGap={"16px"}>
          {trackData.map((item, idx) => (
            <TrackCard key={idx} item={item} />
          ))}
        </Flex>
      </Box>
      <Box>
        <Image src={t1} />
      </Box>
      <Box>
        <Image src={t2} w={"550px"} />
      </Box>
      <Box>
        <Heading
          variant={"articleHeading"}
          position={"relative"}
          className="gradient-text-two"
        >
          Transforming Asset Management for Optimal Results{" "}
        </Heading>
        <Text fontWeight={400} color={"others.white"} my={"33px"}>
          With advanced features and an intuitive interface, its easier to
          observe and manage assets from any location down to the smallest
          detail where necessary
        </Text>
        <Flex columnGap={"16px"}>
          {trackData.map((item, idx) => (
            <TrackCard item={item} key={idx} />
          ))}
        </Flex>
      </Box>
      <Box>
        <Heading
          position={"relative"}
          variant={"articleHeading"}
          className="gradient-text-two"
        >
          Building a More Accountable Government{" "}
        </Heading>
        <Text fontWeight={400} color={"others.white"} my={"33px"}>
          By being punctilious and committed to meticulous management of the
          state's resources, the Anambra state Government aims to be more
          accountable with the funds trusted to it by the public and to curb
          reckless spending.
        </Text>
        <Flex columnGap={"16px"}>
          {trackData2.map((item, idx) => (
            <TrackCard key={idx} item={item} />
          ))}
        </Flex>
      </Box>
      <Box>
        <Image src={t3} />
      </Box>
    </SimpleGrid>
  );
};

export default AssetTracking;
