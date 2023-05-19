// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const CategoryShop = () => {
  const [shopData, setShopData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);

  useEffect(() => {
    fetch("https://assessment-11-server.vercel.app/toyStores")
      .then((res) => res.json())
      .then((data) => setShopData(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const filterData = shopData.filter(
      (data) => data.subCategory === "Disney Princes"
    );
    setSubCategoryData(filterData);
  }, [shopData]);

  const handleCategory = (category) => {
    const filterData = shopData.filter((data) => data.subCategory === category);
    setSubCategoryData(filterData);
  };

  return (
    <div className="my-28">
        <h1 className="text-5xl text-center">Shop by category </h1>
      <Tabs>
        <TabList>
          <Tab onClick={() => handleCategory("Disney Princes")}>
            Disney Princes
          </Tab>
          <Tab onClick={() => handleCategory("Frozen Dolls")}>Frozen Dolls</Tab>
          <Tab onClick={() => handleCategory("Animation Characters")}>
            Animation Characters
          </Tab>
        </TabList>

        <TabPanel>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 my-5">
        {subCategoryData.map((item) => (
            <div className="my-5" key={item._id}>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img className="w-96 h-96" src={item.picture} alt={item.toyName} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.toyName}</h2>
                  <p>{item.price}</p>
                  <p>
                  <Rating
                        placeholderRating={item.rating}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                  </p>
                  
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </TabPanel>
        <TabPanel>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 my-5">
          {subCategoryData.map((item) => (
            <div key={item._id}>
             <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img className="w-96 h-96" src={item.picture} alt={item.toyName} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.toyName}</h2>
                  <p>{item.price}</p>
                  <p>
                  <Rating
                        placeholderRating={item.rating}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                  </p>
                  
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
           
          ))}
           </div>
        </TabPanel>
        <TabPanel>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 my-5">
          {subCategoryData.map((item) => (
            <div key={item._id}>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img className="w-96 h-96" src={item.picture} alt={item.toyName} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.toyName}</h2>
                  <p>{item.price}</p>
                  <p>
                  <Rating
                        placeholderRating={item.rating}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                  </p>
                  
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </TabPanel>
        
      </Tabs>
    </div>
  );
};

export default CategoryShop;
