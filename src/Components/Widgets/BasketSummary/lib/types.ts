import { CartItem_T } from "../../../Shared/types"

export type BasketSummary_T = ({ cart_items }: {
    cart_items: CartItem_T[] | undefined
}) => JSX.Element