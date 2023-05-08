import { FaEdit, FaEye, FaRev } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {
  const {_id,  name, quantity, supplier, taste, category, details, photo } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
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
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'delete'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount>0){
                   Swal.fire(
             'Deleted!',
             'Your file has been deleted.',
             'success'
           )
            }
        }) 
    }
      })

  }
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={photo}
          alt="Movie"
        />
      </figure>
      <div className="flex justify-between w-full items-center p-8">
        <div className=''>
        <h2 className="card-title">{name}</h2>
        <p>{quantity}</p>
        <p>{supplier}</p>
        <p>{taste}</p>
        <p>{category}</p>
        </div>
        <div className="card-actions flex-col justify-end">
          <button ><FaEye  style={{width: '2rem', height: '2rem'}}/></button>
          <Link to={`/updatecoffee/${_id}`}><button><FaEdit style={{width: '2rem', height: '2rem'}}/></button></Link>
          <button ><FaRev onClick={()=> handleDelete(_id)} style={{width: '2rem', height: '2rem'}}/></button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
