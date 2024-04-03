import React, { useMemo } from "react";
import { Checkbox } from "@chakra-ui/react";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const ChakraCheckbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  const handleChange = useMemo(
    () => (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.checked);
    },
    [onChange]
  );

  return <Checkbox isChecked={checked} onChange={handleChange} />;
};

export default ChakraCheckbox;
