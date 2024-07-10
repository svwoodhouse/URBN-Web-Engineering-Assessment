import { Products } from "./Main";

const Card: React.FC<Products> = ({images, title, brand, price, rating}: Products) => {
    return (
        <div className="card">
            <img className="card-image" src={images[0]}></img>
            <div className="card-body">
                <div className="card-title">{title}</div>
                <div className="card-brand">{brand}</div>
                <div className="card-price">${price}</div>
                <div className="card-rating">{rating} stars</div>
            </div>
        </div>
    )
}

export default Card