import { useEffect, useState } from "react";
import Card from "./Card";

export interface Products {
    images: string[],
    title: string,
    brand: string,
    price: number,
    rating: number
}

const Main: React.FC = () => {
    const [products, setProducts] = useState<Products[]>([{
        images: [],
        title: '',
        brand: '',
        price: 0,
        rating: 0
    }])

    useEffect(() =>{
        async function fetchData(){
            const response = await fetch('https://dummyjson.com/products')
            const data = await response.json()
            console.log(data)
            setProducts([...data.products])
        }
        fetchData()        
    },[])

    
    return (
        <div className="main-page">
            {
                products.map((product)=>{
                    return (<Card {...product}/>)
                })
            }
        </div>
    )
}

export default Main;