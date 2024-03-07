/* eslint-disable @typescript-eslint/no-explicit-any */

type ResponseDataType = {
  status: "success" | "error";
  message: string;
  data?: any;
  code?: number;
};

type DashboardCard = {
  value: number;
  title: string;
  icon: string;
  link: string;
  color1: string;
  color2: string;
}
