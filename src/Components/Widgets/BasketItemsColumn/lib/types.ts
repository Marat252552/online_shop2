import { CartItem_T, FavoriteItem_T } from "../../../Shared/types";

export type BasketItemsColumn_T = ({ cart_items }: {
    cart_items: CartItem_T[] | undefined;
}) => JSX.Element