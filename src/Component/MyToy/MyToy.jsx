import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";


const MyToy = () => {
  const [allData, setAllData] = useState([]);
  const { user } = useContext(AuthContext);
  const [myData, setMyData] = useState([]);

  console.log(myData);

  useEffect(() => {
    fetch("http://localhost:5000/toyStores")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  useEffect(() => {
    const result = allData.filter((data) => data.sellerEmail === user.email);
    setMyData(result);
  }, [allData]);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
      {myData?.map((data) => (
        <div className="card card-compact w-96 bg-base-100 shadow-xl" key={data.id}>
          <figure>
            <img src={data?.picture} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{data?.toyName}</h2>
            <p>Price: {data?.price}</p>
            <p>Available Quantity:{data?.availableQuantity}</p>
            <p>{data?.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">X</button>
              <button className="btn btn-primary">Update</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyToy;
