import { UploadProps } from "antd";
import { FieldErrors, UseFormGetValues, UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { Inputs_T } from "../../../lib/types";

export type ReturnUploadProps_T = (
    registerFieldData: UseFormRegisterReturn<"imagesUIDs">,
    session_id: string,
    getValues: UseFormGetValues<Inputs_T>
) => UploadProps<any>

export type UploadOtherImagesField_T = ({ session_id, register, errors }: {
    errors: FieldErrors<Inputs_T>;
    session_id: string;
    register: UseFormRegister<Inputs_T>;
    getValues: UseFormGetValues<Inputs_T>
}) => JSX.Element