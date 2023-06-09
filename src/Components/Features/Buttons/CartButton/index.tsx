import RestAPI from "../../../../API/RestAPI"
import { Item_T } from "../../../Shared/types"
import AlreadyAddedButton from "./modules/AlreadyAddedButton"
import NotAddedButton from "./modules/NotAddedButton"



const CartButton = ({ item }: { item: Item_T }) => {
    let [addItemToCart, {isLoading: isLoadingAdd}] = RestAPI.useAddToCartMutation()
    let [removeFromCart, {isLoading: isLoadingRemove}] = RestAPI.useRemoveFromCartMutation()

    let { data: cartItemAmountData, refetch, isError } = RestAPI.useGetCartItemAmountQuery({ item_id: item._id })

    let increment = async () => {
        await addItemToCart({ item_id: item._id })
        refetch()
    }

    let decrement = async () => {
        await removeFromCart({ item_id: item._id })
        refetch()
    }

    // This enables default button while getting 401 error (when user is not logged in)
    if(isError) {
        return <div><NotAddedButton /></div>
    }

    let amount = cartItemAmountData?.amount || 0

    return <>
        <div>
            {
                (amount > 0) ?
                    <AlreadyAddedButton isLoadingAdd={isLoadingAdd} isLoadingRemove={isLoadingRemove} amount={amount} increment={increment} decrement={decrement}/>
                    :
                    <div onClick={increment}>
                        <NotAddedButton />
                    </div>
            }
        </div>
    </>
}

export default CartButton