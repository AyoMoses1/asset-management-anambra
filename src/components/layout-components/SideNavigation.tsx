import React, { useState } from "react";
import Sidebar from "../layout-components/Sidebar";
import { Flex } from "@chakra-ui/react";

interface SideNavigationProps {
  onClose?: () => void;
}
const SideNavigation: React.FC<SideNavigationProps> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const onToggle = () => setIsOpen((prev) => !prev);



  return (
    <Flex h={"full"}>
      <Sidebar
        isSecondaryBarOpen={isOpen}
        toggleSecondaryBar={onToggle}
        onClose={onClose}
      />
    </Flex>
  );
};

export default SideNavigation;
