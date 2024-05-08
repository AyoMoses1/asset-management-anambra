/* eslint-disable @typescript-eslint/no-explicit-any */

type NicheProps = {
  title: string;
  data: string;
  image: string;
};

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
  data?: T[];
};

type AccountData = {
  id: number;
  email: string;
  permissions: any;
  activated: 1;
  created_by: null | any;
  activation_code: null | any;
  activated_at: null | any;
  last_login: string;
  persist_code: null | any;
  reset_password_code: null | any;
  first_name: string;
  last_name: string;
  created_at: string;
  updated_at: string;
  deleted_at: null | any;
  website: null | any;
  country: null | any;
  gravatar: string;
  location_id: null | any;
  phone: string;
  jobtitle: null | any;
  manager_id: null | any;
  employee_num: null | any;
  avatar: null | any;
  username: string;
  notes: null | any;
  company_id: null | any;
  remember_token: string;
  ldap_import: number;
  locale: string;
  show_in_list: number;
  two_factor_secret: null | any;
  two_factor_enrolled: number;
  two_factor_optin: number;
  department_id: null | any;
  address: null | any;
  city: null | any;
  state: null | any;
  zip: null | any;
  skin: null | any;
  remote: number;
  start_date: null | any;
  end_date: null | any;
  scim_externalid: null | any;
  autoassign_licenses: number;
  vip: number;
};


type TokenData = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

type LoginData = {
  username: string;
  password: string;
}

type SecondaryBarType = {
  name: string;
  link: string;
  icon: IconType | string;
  tag: string;
};

type SidebarContentType = {
  name: string;
  link: string;
  icon: IconType | string;
  secondaryBar?: SecondaryBarType[];
};

interface FilterComponentProp {
  onFilter: (e: any) => void;
  onClear: () => void;
  filterText: string;
}

type NavButtons = {
  name: string;
  link: string;
};
