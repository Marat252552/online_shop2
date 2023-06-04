import { UploadFile, UploadProps } from "antd";
import { FieldErrors, UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { Inputs_T } from "../../../lib/types";

export type ReturnUploadProps_T = (
    setFileList: React.Dispatch<React.SetStateAction<UploadFile<any>[]>>,
    registerFieldData: UseFormRegisterReturn<"mainImageUID">,
    session_id: string
) => UploadProps<any>

export type UploadMainImageField_T = ({ session_id, register, errors }: {
    register: UseFormRegister<Inputs_T>;
    session_id: string;
    errors: FieldErrors<Inputs_T>
}) => JSX.Element