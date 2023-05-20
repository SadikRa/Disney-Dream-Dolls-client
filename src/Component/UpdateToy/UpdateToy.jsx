import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import UseTitle from "../../hooks/UseTitle";

const UpdateToy = () => {
    const data = useLoaderData();
    const { _id, price, availableQuantity, description } = data;
    UseTitle('Update Toy')
    const handleUpdate = (event) =>{
        event.preventDefault();

        const form = event.target;
        const price = form.price.value;
        const availableQuantity = form.availableQuantity.value;
        const description = form.description.value;
        const updateToy = {price, availableQuantity, description }


        fetch(`https://assessment-11-server.vercel.app/toyStores/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">

   <form onSubmit={handleUpdate}>

   <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">price</span>
          </label>
          <input type="text" defaultValue={price} name="price" placeholder="price" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input type="text" defaultValue={availableQuantity} name="availableQuantity" placeholder="Available Quantity" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
         <textarea name="description" defaultValue={description} cols="30" rows="10"></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update</button>
        </div>
      </div>
    </div>

   </form>
  </div>
</div>
        </div>
    );
};

export default UpdateToy;