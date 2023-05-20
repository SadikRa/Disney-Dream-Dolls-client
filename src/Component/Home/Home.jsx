import Banner from "./Banner";
import Gallery from "./Gallery";
import CategoryShop from "./CategoryShop";
import ShopToy from "./shopToy";
import UseTitle from "../../hooks/UseTitle";

const Home = () => {
    UseTitle('Home')
    return (
        <div>
            <div className="my-5">
                <Banner></Banner>
            </div>
            <div className="my-20">
                <Gallery></Gallery>
            </div>
            <div>
                <CategoryShop></CategoryShop>
            </div>
            <div className="mb-12">
                <h1 className="text-5xl text-center my-5">Buy Your favorite Toys</h1>
                <ShopToy></ShopToy>
            </div>
            <div className="mb-12">
                <h1 className="text-4xl my-5">Share Your Opinions</h1>
                <textarea className="w-full rounded" name="" id="" cols="30" rows="10"></textarea><br />
                <button className="btn btn-primary">Submit</button>
            </div>
        </div>
    );
};

export default Home;