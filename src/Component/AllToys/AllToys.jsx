import { useLoaderData } from "react-router-dom";
import AllToysData from "./AllToysData";

const AllToys = () => {
  const allData = useLoaderData();
  console.log(allData);
  return (
    <div className="my-8">
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
