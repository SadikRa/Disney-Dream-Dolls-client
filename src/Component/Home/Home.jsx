import Banner from "./Banner";
import Gallery from "./Gallery";
import CategoryShop from "./CategoryShop";

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
        </div>
    );
};

export default Home;