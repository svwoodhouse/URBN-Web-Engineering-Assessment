import { useSelector } from 'react-redux';

const CheckOut = () => {
    const { cart } = useSelector((state: any) => state)

    return (
        <div className="checkout-container">
            <div>
                {
                    cart.cartItems.map((item: any)=>{
                        return(
                            <div>
                                <div>{item.name}</div>
                                <div>{item.price}</div>
                                <div>{item.quantity}</div>
                            </div>
                        )
                    })
                }                    
            </div>
            <div>{cart.cartTotal}</div>
        </div>
    )
}

export default CheckOut;