import { FavoriteItem_T } from "../../../Shared/types";

export type FavoriteItemsColumn_T = ({ favorite_items }: {
    favorite_items: FavoriteItem_T[] | undefined,
    isError: boolean
}) => JSX.Element