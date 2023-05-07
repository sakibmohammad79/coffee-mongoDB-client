import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleInput = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, taste, category, details, photo};
        console.log(newCoffee);

       fetch('http://localhost:5000/coffee', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newCoffee)
       } )
       .then(res => res.json())
       .then(data => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'success!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
       })
    }
    // https://i.postimg.cc/wBCMvSM9/2.png
    // https://i.postimg.cc/VvRkKvRN/3.png
    // https://i.postimg.cc/52j2mxFx/4.png
    // https://i.postimg.cc/nc3L7srR/5.png
    // https://i.postimg.cc/TYdwpjd5/6.png
  return (
    <div className="bg-[#F4F3F0] py-16 px-24">
        <h2 className="text-4xl font-extrabold text-center text-purple-600 mb-3">Add Coffee</h2>
      <form onSubmit={handleInput}>
        {/* form name and quantity row */}
        <div className="md:flex">
        <div className="form-control md:w-1/2 me-5 mb-6">
          <label className="label">
            <span className="label-text text-2xl font-bold">Coffee Name</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="Coffee Name"
              name="name"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text font-bold text-2xl">Available Quantity</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="Available Quantity"
              name="quantity"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        </div>
        {/* form supplier and taste row */}
        <div className="md:flex ">
        <div className="form-control md:w-1/2 me-5 mb-6">
          <label className="label">
            <span className="label-text text-2xl font-bold">Supplier Name</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="Supplier"
              name="supplier"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text font-bold text-2xl">Taste</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="Taste"
              name="taste"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex ">
        <div className="form-control md:w-1/2 me-5">
          <label className="label">
            <span className="label-text text-2xl font-bold">Category</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="Category"
              name="category"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="form-control md:w-1/2 mb-6">
          <label className="label">
            <span className="label-text font-bold text-2xl">Details</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="Details"
              name="details"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        </div>
        {/* form photo url row */}
        <div className=" ">
        <div className="form-control w-full mb-5">
          <label className="label">
            <span className="label-text text-2xl font-bold">Photo URL</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="Photo URL"
              name="photo"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        </div>
        
        <input type="submit" className="btn btn-block"  value="ADD COFFEE" />
      </form>
    </div>
  );
};

export default AddCoffee;
