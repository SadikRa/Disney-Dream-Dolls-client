import Banner from "./Banner";
import Gallery from "./Gallery";
import CategoryShop from "./CategoryShop";
import ShopToy from "./shopToy";

const Home = () => {

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
        </div>
    );
};

export default Home;