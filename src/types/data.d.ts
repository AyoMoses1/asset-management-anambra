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
  rightElement?: string;
  data?:  T[]
};

type SidebarContentType = {
  name: string;
  link: string;
  icon: IconType | string;
};

interface FilterComponentProp {
  onFilter: (e: any) => void;
  onClear: () => void;
  filterText: string;
}