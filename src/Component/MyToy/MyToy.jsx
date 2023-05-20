import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import UseTitle from "../../hooks/UseTitle";


const MyToy = () => {
  const [allData, setAllData] = useState([]);
  const { user } = useContext(AuthContext);
  const [myData, setMyData] = useState([]);
  const [myToy , setMyToy] = useState()
  UseTitle('My Toy')
  useEffect(() => {
    fetch("https://assessment-11-server.vercel.app/toyStores")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  useEffect(() => {
    const result = allData.filter((data) => data.sellerEmail === user.email);
    setMyData(result);
  }, [allData]);


  const handleDelete = (_id) =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
      if (result.isConfirmed) {
          fetch(`https://assessment-11-server.vercel.app/toyStores/${_id}`, {
              method: 'DELETE'
          })
              .then(res => res.json())
              .then(data => {
                  console.log(data);
                  if (data.deletedCount > 0) {
                      Swal.fire(
                          'Deleted!',
                          'Your toy has been deleted.',
                          'success'
                      )
                      const remaining = myData.filter(toy => toy._id !== _id);
                      setMyData(remaining);
                      const remainingToys = myToy.filter(toy => toy._id !== _id);
                      setMyToy(remainingToys);
                  }
              })

      }
  })
  }


  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 my-12">
      {myData?.map((data) => (
        <div className="card card-compact w-96 bg-base-100 shadow-xl" key={data._id}>
          <figure>
            <img className="h-96" src={data?.picture} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{data?.toyName}</h2>
            <p>Price: {data?.price}</p>
            <p>Available Quantity:{data?.availableQuantity}</p>
            <p>{data?.description}</p>
            <div className="card-actions justify-end">
              <button onClick={() => handleDelete(data._id)} className="btn btn-primary">X</button>
             <Link to={`/updateToy/${data._id}`}> <button className="btn btn-primary">Update</button></Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyToy;
