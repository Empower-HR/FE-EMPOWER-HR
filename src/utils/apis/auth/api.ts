import { Response } from "@/utils/types/apis";
import { openAPI } from "../axiosWithConfig";
import { RegisterSchema } from "./type";

export const userRegister = async (
  body: RegisterSchema
): Promise<Response<any>> => {
  try {
    const resp = await openAPI.post<Response<any>>("/admin", body);
    return resp.data;
  } catch (error: any) {
    if (error.resp && error.resp.data) {
      const { message } = error.resp.data;
      throw new Error(message);
    }
    throw error;
  }
};
