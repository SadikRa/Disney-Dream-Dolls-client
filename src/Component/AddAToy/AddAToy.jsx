import Swal from 'sweetalert2'
import UseTitle from '../../hooks/UseTitle';
const AddAToy = () => {

    UseTitle('Add A Toy')
    const handlePostData = (event) =>{
        event.preventDefault();
        const form = event.target;
        const picture = form.picture.value;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.availableQuantity.value;
        const description = form.description.value;
        const data = {
            picture, toyName, sellerName, sellerEmail, subCategory, price, rating, availableQuantity, description
        }
        console.log(data)
        fetch('https://assessment-11-server.vercel.app/toyStores', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                      })
                }
                form.reset()
            })

      
    }



    return (
        <div className="my-8">
            <form onSubmit={handlePostData}>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full">
                <p className="my-3">Picture URL</p>
            <input type="text" name="picture" placeholder="Picture URL" className="input input-bordered w-full" />
            </div>
            <div className="w-full">
                <p className="my-3">Toy Name</p>
            <input type="text" name="toyName" placeholder="Toy Name" className="input input-bordered w-full" />
            </div>
            </div>

            

            
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full">
                <p className="my-3">Seller Name</p>
            <input type="text" name="sellerName" placeholder="Seller Name" className="input input-bordered w-full" />
            </div>
            <div className="w-full">
                <p className="my-3">Seller Email</p>
            <input type="text" name="sellerEmail" placeholder="Seller Email" className="input input-bordered w-full" />
            </div>
            </div>

            

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full">
                <p className="my-3">Sub Category</p>
            <input type="text" name="subCategory" placeholder="Sub Category" className="input input-bordered w-full" />
            </div>
            <div className="w-full">
                <p className="my-3">Price</p>
            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
            </div>
            </div>

            

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full">
                <p className="my-3">Rating</p>
            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
            </div>
            <div className="w-full">
                <p className="my-3">Available Quantity</p>
            <input type="text" name="availableQuantity" placeholder="Available Quantity" className="input input-bordered w-full" />
            </div>
            </div>

            

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full">
                <p className="my-3">Detail Description</p>
            <input type="text" name="description" placeholder="Detail Description" className="input input-bordered w-full" />
            </div>
            </div>

            
            <input className="btn btn-primary w-full my-5" type="submit" value="Post Data" />


            </form>
        </div>
    );
};

export default AddAToy;