import {
  Box,
  HStack,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { UploadIcon } from "icons";
import { useDropzone } from "react-dropzone";
import { FileWithPath } from "react-dropzone";
import { BORDER_LIGHT } from "utils/color";
import { TEXT_SECONDARY } from "./../../../utils/color";

const DropZone = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file: FileWithPath) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <Box mt={"24px"}>
      <Box
        {...getRootProps({ className: "dropzone" })}
        bg={"#FBFBFB"}
        display={"flex"}
        justifyContent={"center"}
        py={"24.5px"}
        border={`1px dashed ${BORDER_LIGHT}`}
        cursor={"pointer"}
      >
        <Stack>
          <input {...getInputProps()} />
          <HStack>
            <UploadIcon />
            <Text variant={"small"} fontWeight={500}>
              Select File or drag here
            </Text>
          </HStack>
        </Stack>
      </Box>
      <aside>
        <Text variant={"xs"} color={TEXT_SECONDARY}>
          Accepted filetypes is CSV
        </Text>
        <UnorderedList fontSize={"12px"} color={TEXT_SECONDARY}>
          {files}
        </UnorderedList>
      </aside>
    </Box>
  );
};

export default DropZone;
