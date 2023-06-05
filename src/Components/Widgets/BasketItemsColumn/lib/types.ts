import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { CartItem_T } from "../../../Shared/types";
import { SerializedError } from "@reduxjs/toolkit";

export type BasketItemsColumn_T = ({ cart_items }: {
    cart_items: CartItem_T[] | undefined;
    error: FetchBaseQueryError | SerializedError | undefined
}) => JSX.Element