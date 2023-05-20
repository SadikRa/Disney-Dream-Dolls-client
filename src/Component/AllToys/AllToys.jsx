
import UseTitle from "../../hooks/UseTitle";
import AllToysData from "./AllToysData";
import { useEffect, useState } from "react";

const AllToys = () => {
  const [allData, setAllData] = useState([])
  const [searchText, setSearchText] = useState("");

  UseTitle('All toy')
  useEffect(() => {
    fetch('https://assessment-11-server.vercel.app/toyStores')
    .then(res => res.json())
    .then(data =>{
        setAllData(data)
    })
  }, [])

  const handleSearch = () =>{
    fetch(`https://assessment-11-server.vercel.app/getSearchToy/${searchText}`)
    .then(res => res.json())
    .then(data =>{
        setAllData(data)
    })
  }


  return (
    <div className="my-8">
        <div className="my-5">
        <input  onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search By Sub category and Toy name" className="input input-bordered w-full max-w-xs" />
        <button onClick={handleSearch} className="btn btn-outline btn-primary">Search</button>
        </div>
         <table className="table w-full">
      <thead>
        <tr>
         <th>Numbers</th>
          <th>Seller Name</th>
          <th>Toy Name</th>
          <th>Sub-category</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Details button</th>
        </tr>
      </thead>
      {
            allData.map((data, index) => <AllToysData index={index + 1} data={data} key={data._id}></AllToysData>)
      }
      </table>
    </div>
  );
};

export default AllToys;
