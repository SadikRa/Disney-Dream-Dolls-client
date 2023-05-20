import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import UseTitle from "../hooks/UseTitle";

const SingleToyDetailsPage = () => {
    UseTitle('Details')
    const singleData = useLoaderData()
    const {picture, toyName, sellerName, sellerEmail, subCategory, price, rating, availableQuantity, description } = singleData;
    return (
        <div className="my-16">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <img className="rounded" src={picture} alt="" />
                </div>
                <div className="flex items-center">
                   <div>
                   <h1 className="text-5xl">Toy Name : {toyName}</h1>
                    <h1 className="text-4xl my-5">Seller Name  : {sellerName}</h1>
                    <p className="text-2xl">Seller Email : {sellerEmail}</p>
                    <p className="my-5 text-2xl">Sub Category : {subCategory}</p>
                    <p className="text-2xl">Price : {price}</p>
                    <p className="my-5 text-2xl"> Rating: 
                  <Rating
                        placeholderRating={rating}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                  </p>
                  <p className="text-2xl">Available Quantity : {availableQuantity}</p>
                  <p className="my-5">{description}</p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToyDetailsPage;