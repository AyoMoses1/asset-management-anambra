/* eslint-disable @typescript-eslint/no-explicit-any */

type ResponseDataType = {
  status: "success" | "error";
  message: string;
  data?: any;
  code?: number;
};