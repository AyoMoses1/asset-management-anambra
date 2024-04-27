/* eslint-disable @typescript-eslint/no-explicit-any */

type NicheProps = {
  title: string;
  data: string;
  image:  string;
}

type AuthInput = {
  name: string;
  label: string;
  rule?: string;
  message?: string;
  minLength?: number;
  placeholder?: string;
  isRequired: boolean;
  type: string;
  addNew?: IconType | string;
  rightElement?: string;
  checkboxData?: string;
  data?:  T[]
};

type SecondaryBarType = {
  name: string;
  link: string;
  icon: IconType | string;
  tag: string;
}

type SidebarContentType = {
  name: string;
  link: string;
  icon: IconType | string;
  secondaryBar?: SecondaryBarType[]
};

interface FilterComponentProp {
  onFilter: (e: any) => void;
  onClear: () => void;
  filterText: string;
}

type NavButtons = {
  name: string;
  link: string
}