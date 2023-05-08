
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {

  const coffees = useLoaderData();
  console.log(coffees);

  return (
    <div>
     <div className=''>
     <h1 className='text-6xl text-center text-purple-600'>Coffee Store {coffees.length}</h1>
     </div>
    <div className='grid md:grid-cols-2 p-20 gap-6'>
    {
      coffees.map(coffee => <CoffeeCard key={coffee._id}
      coffee={coffee}></CoffeeCard>)
    }
    </div>
    </div>
  )
}

export default App
