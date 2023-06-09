import { SerializedError } from "@reduxjs/toolkit"
import { CartItem_T } from "../../../Shared/types"
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query"

export type BasketSummary_T = ({ cart_items }: {
    cart_items: CartItem_T[] | undefined,
    error: FetchBaseQueryError | SerializedError | undefined
}) => JSX.Element