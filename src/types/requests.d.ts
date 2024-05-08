/* eslint-disable @typescript-eslint/no-explicit-any */

type ResponseDataType = {
  status: "success" | "error";
  isSuccess: boolean;
  message: string;
  data?: any;
  headers?: any;
};

type DashboardCard = {
  value: number;
  title: string;
  icon: string;
  link: string;
  color1: string;
  color2: string;
}
