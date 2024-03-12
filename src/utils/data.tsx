import planning from "assets/Planning.svg";
import route from "assets/Route.svg";
import allocation from "assets/Allocation.svg";
import track1 from "assets/majesticons_map-marker-path-line.svg";
import track2 from "assets/material-symbols_manage-search.svg";
import track3 from "assets/Vector.svg";
import track4 from "assets/grommet-icons_compliance.svg";
import s1 from "assets/Frame 2076.svg";
import s2 from "assets/Frame 2077.svg";
import s3 from "assets/Frame 2078.svg";
import s4 from "assets/Frame 2079.svg";
import dc1 from "assets/dc1.png";
import dc2 from "assets/dc2.png";
import dc3 from "assets/dc3.png";
import dc4 from "assets/dc4.png";
import dc5 from "assets/dc5.png";

import {
  AccessoriesIcon,
  AssetsIcon,
  ComponentsIcon,
  ConsumablesIcon,
  DashboardIcon,
  EditProfileIcon,
  ImportIcon,
  KitsIcon,
  LicenseIcon,
  LogoutIcon,
  PadlockIcon,
  ReportsIcon,
  RequestablesIcon,
  SettingsIcon,
  UsersIcon,
  CheckIcon,
  Assets2Icon,
  ExportIcon,
  MingCuteIcon,
  MaximiseIcon,
  RefreshIcon,
} from "icons";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

export const loginInputs = (): AuthInput[] => {
  return [
    {
      name: "username",
      label: "Username",
      rule: "Username is required",
      placeholder: "Enter your username",
      isRequired: true,
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      rule: "Password must be entered",
      isRequired: true,
      type: "password",
      placeholder: "*********",
    },
  ];
};

export const forgotPasswordInputs = (): AuthInput[] => {
  return [
    {
      name: "username",
      label: "Username",
      rule: "Username is required",
      placeholder: "Enter your username",
      isRequired: true,
      type: "email",
    },
  ];
};

export const changePaswordInputs = (): AuthInput[] => {
  return [
    {
      name: "currentPassword",
      label: "Current Pasword",
      rule: "Current password is required",
      isRequired: true,
      type: "password",
    },
    {
      name: "newPassword",
      label: "New Pasword",
      rule: "Please enter a new password",
      isRequired: true,
      type: "password",
    },
    {
      name: "currentPassword",
      label: "Confirm Pasword",
      rule: "Current password is required",
      isRequired: true,
      type: "password",
    },
  ];
};

export const createAssetInputs = (): AuthInput[] => {
  return [
    {
      name: "mds",
      label: "MDA",
      isRequired: false,
      type: "select",
    },
    {
      name: "tag1",
      label: "Asset Tag",
      rule: "Please enter a tag",
      isRequired: true,
      type: "number",
      addNew: <AddIcon />,
    },
    {
      name: "serial",
      label: "Serial",
      isRequired: false,
      type: "text",
    },
    {
      name: "tag2",
      label: "Asset Tag 2",
      rule: "Please enter a second tag",
      isRequired: true,
      type: "number",
      addNew: <MinusIcon />,
    },
    {
      name: "serial2",
      label: "Serial 2",
      isRequired: false,
      type: "text",
    },
    {
      name: "model",
      label: "Model",
      rule: "Please select a model",
      placeholder: "Select a Model",
      isRequired: true,
      type: "select",
      addNew: "New",
    },
    {
      name: "status",
      label: "Status",
      rule: "Please select a second tag",
      placeholder: "Select Status",
      isRequired: true,
      type: "select",
      addNew: "New",
    },
    {
      name: "notes",
      label: "Notes",
      placeholder: "Enter note here...",
      isRequired: false,
      type: "textarea",
    },
    {
      name: "location",
      label: "Default Location",
      rule: "Please select a location",
      placeholder: "Select a Location",
      isRequired: true,
      type: "select",
      addNew: "New",
    },
    {
      name: "requestable",
      label: "Requestable",
      isRequired: false,
      type: "checkbox",
    },
    {
      name: "user",
      label: "User",
      placeholder: "Select a file",
      isRequired: false,
      type: "file",
    },
  ];
};

export const checkoutAssetInputs = (): AuthInput[] => {
  return [
    {
      name: "user",
      label: "User",
      rule: "Please select a user",
      isRequired: true,
      type: "select",
      addNew: "Create New",
      data: [
        { name: "sssssss", value: 444 },
        { name: "sssssss", value: 444 },
      ],
    },
    {
      name: "asset",
      label: "Asset",
      rule: "Please select an asset",
      isRequired: false,
      type: "select",
      data: [
        { name: "sssssss", value: 444 },
        { name: "sssssss", value: 444 },
      ],
    },
    {
      name: "checkoutDate",
      label: "Checkout Date",
      isRequired: false,
      type: "date",
    },
    {
      name: "checkinDate",
      label: "Expected CheckIn Date",
      isRequired: false,
      type: "date",
    },
    {
      name: "details",
      label: "Details",
      isRequired: false,
      type: "textarea",
    },
  ];
};

export const createAssetInputsTwo = (): AuthInput[] => {
  return [
    {
      name: "name",
      label: "Asset Name",
      isRequired: false,
      type: "text",
    },
    {
      name: "warranty",
      label: "Warranty",
      isRequired: false,
      type: "number",
      rightElement: "months",
    },
    {
      name: "byod",
      label: "BYOD (This device is owned by the user)",
      isRequired: false,
      type: "checkbox",
    },
  ];
};

export const createAssetInputsThree = (): AuthInput[] => {
  return [
    {
      name: "orderNumber",
      label: "Order Number",
      isRequired: false,
      type: "number",
    },
    {
      name: "purchaseDate",
      label: "Purchase Date",
      isRequired: false,
      type: "date",
    },
    {
      name: "eolDate",
      label: "EOL Date",
      isRequired: false,
      type: "date",
    },
    {
      name: "supplier",
      label: "Supplier",
      placeholder: "Select a Supplier",
      isRequired: false,
      data: [
        { name: "sssssss", value: 444 },
        { name: "sssssss", value: 444 },
      ],
      type: "select",
      addNew: "New",
    },
    {
      name: "purchaseCost",
      label: "Purchase Cost",
      isRequired: false,
      type: "number",
      rightElement: "NGN",
    },
  ];
};

export const profileInputs = (): AuthInput[] => {
  return [
    {
      name: "firstName",
      label: "First Name",
      rule: "First name is required",
      isRequired: true,
      type: "text",
    },
    {
      name: "lastName",
      label: "Last Name",
      rule: "Last name is required",
      isRequired: true,
      type: "text",
    },
    {
      name: "language",
      label: "Language",
      placeholder: "Please select a language",
      isRequired: false,
      type: "select",
      data: [
        { name: "sssssss", value: 444 },
        { name: "sssssss", value: 444 },
      ],
    },
    {
      name: "phone",
      label: "Phone",
      isRequired: false,
      type: "text",
    },
    {
      name: "website",
      label: "Website",
      isRequired: false,
      type: "text",
    },
    {
      name: "email",
      label: "Gravatar Email addres (Private)",
      isRequired: false,
      type: "email",
    },
  ];
};

export const assetModelInputs = (): AuthInput[] => {
  return [
    {
      name: "name",
      label: "Name",
      rule: "Name of model is required",
      isRequired: true,
      type: "text",
    },
    {
      name: "category",
      label: "Category",
      placeholder: "Please select a category",
      isRequired: true,
      type: "select",
      data: [
        { name: "sssssss", value: 444 },
        { name: "sssssss", value: 444 },
      ],
    },
    {
      name: "manufacturer",
      label: "Manufacturer",
      placeholder: "Please select a manufacturer",
      isRequired: true,
      type: "select",
      data: [
        { name: "sssssss", value: 444 },
        { name: "sssssss", value: 444 },
      ],
    },
    {
      name: "modelNumber",
      label: "Model No",
      isRequired: false,
      type: "text",
    },
    {
      name: "fieldset",
      label: "Fieldset",
      placeholder: "No custom fields",
      isRequired: false,
      type: "select",
      data: [
        { name: "sssssss", value: 444 },
        { name: "sssssss", value: 444 },
      ],
    },
  ];
};

export const navDropDown = [
  {
    label: "View Assigned Assets",
    icon: Assets2Icon,
    link: "/account/accept",
  },
  {
    label: "Accept/Reject Assets",
    icon: CheckIcon,
    link: "/account/accept",
  },
  {
    label: "Edit Profile",
    icon: EditProfileIcon,
    link: "/dashboard/licenses",
  },
  {
    label: "Change Password",
    icon: PadlockIcon,
    link: "/account/change-password",
  },
  {
    label: "Logout",
    icon: LogoutIcon,
    link: "/login",
  },
];

export const nicheData: NicheProps[] = [
  {
    image: allocation,
    title: `Asset Allocation Made Easy`,
    data: `Efficiently allocating assets to organizations and employees to optimize returns`,
  },
  {
    image: route,
    title: `Track assets in Real-time`,
    data: `Monitor the performance of Govt’s investments with up-to-date data.`,
  },
  {
    image: planning,
    title: `Manage Risks Effectively`,
    data: `Mitigate risks and protect Govt’s investments with advanced risk management tools.`,
  },
];

export const trackData: NicheProps[] = [
  {
    image: track1,
    title: `Track`,
    data: `Track and monitor your assets in real-time, ensuring maximum efficiency and productivity`,
  },
  {
    image: track2,
    title: `Manage`,
    data: `Efficiently manage your assets from procurement to maintenance with our intuitive platform.`,
  },
];

export const trackData2: NicheProps[] = [
  {
    image: track3,
    title: `Maximize Returns`,
    data: `Having a record of all assets used by the government aids maximum utilization of these assets.`,
  },
  {
    image: track4,
    title: `Ensure Compliance`,
    data: `Asset management encourages compliance with rules of proper management of these assets.`,
  },
];

export const faq = [
  {
    question: `How does it work?`,
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit, justo et commodo tristique, tortor neque aliquam justo, a ultricies ipsum augue vel nisi. Fusce vel metus ac dolor malesuada gravida. Suspendisse potenti. Integer ultricies, libero id aliquam tempor, sem erat vestibulum nibh.`,
  },
  {
    question: `Is it free?`,
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit, justo et commodo tristique, tortor neque aliquam justo, a ultricies ipsum augue vel nisi. Fusce vel metus ac dolor malesuada gravida. Suspendisse potenti. Integer ultricies, libero id aliquam tempor, sem erat vestibulum nibh.`,
  },
  {
    question: `How can I join?`,
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit, justo et commodo tristique, tortor neque aliquam justo, a ultricies ipsum augue vel nisi. Fusce vel metus ac dolor malesuada gravida. Suspendisse potenti. Integer ultricies, libero id aliquam tempor, sem erat vestibulum nibh.`,
  },
];

export const socialLinks = [
  {
    link: "",
    icon: s1,
  },
  {
    link: "",
    icon: s2,
  },
  {
    link: "",
    icon: s3,
  },
  {
    link: "",
    icon: s4,
  },
];

export const sidebarContents: SidebarContentType[] = [
  {
    name: "dashboard",
    link: "/dashboard",
    icon: DashboardIcon,
  },
  {
    name: "assets",
    link: "/dashboard/assets",
    icon: AssetsIcon,
  },
  {
    name: "licenses",
    link: "/dashboard/licenses",
    icon: LicenseIcon,
  },
  {
    name: "accessories",
    link: "/dashboard/accessories",
    icon: AccessoriesIcon,
  },
  {
    name: "consumables",
    link: "/dashboard/consumables",
    icon: ConsumablesIcon,
  },
  {
    name: "components",
    link: "/dashboard/components",
    icon: ComponentsIcon,
  },
  {
    name: "predefined kits",
    link: "/dashboard/predefined-kits",
    icon: KitsIcon,
  },
  {
    name: "users",
    link: "/dashboard/users",
    icon: UsersIcon,
  },
  {
    name: "import",
    link: "/dashboard/import",
    icon: ImportIcon,
  },
  {
    name: "settings",
    link: "/dashboard/settings",
    icon: SettingsIcon,
  },
  {
    name: "reports",
    link: "/dashboard/reports",
    icon: ReportsIcon,
  },
  {
    name: "requestables",
    link: "/dashboard/requestables",
    icon: RequestablesIcon,
  },
];

export const dashboardCards: DashboardCard[] = [
  {
    title: "Assets",
    value: 200,
    color1: "#8595EE",
    color2: "#1E33A5",
    link: "",
    icon: dc1,
  },
  {
    title: "Licenses",
    value: 24,
    color1: "#85EE8F",
    color2: "#21A51E",
    link: "",
    icon: dc2,
  },
  {
    title: "Accessories",
    value: 32,
    color1: "#EE8585",
    color2: "#A51E1E",
    link: "",
    icon: dc3,
  },
  {
    title: "Consumables",
    value: 69,
    color1: "#85EEEE",
    color2: "#1EA59D",
    link: "",
    icon: dc4,
  },
  {
    title: "Components",
    value: 144,
    color1: "#C685EE",
    color2: "#821EA5",
    link: "",
    icon: dc5,
  },
];

export const tableFilters = () => [
  {
    icon: RefreshIcon,
    ariaLabel: "Export Icon",
  },
  {
    icon: MaximiseIcon,
    ariaLabel: "Export Icon",
  },
  {
    icon: MingCuteIcon,
    ariaLabel: "Export Icon",
  },
  {
    icon: ExportIcon,
    ariaLabel: "Export Icon",
  },
];
