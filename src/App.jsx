
import { useLoaderData } from 'react-router-dom'
import './App.css'

function App() {

  const coffees = useLoaderData();
  console.log(coffees);

  return (
    <>
      <h1 className='text-6xl text-purple-600'>Coffee Store {coffees.length}</h1>
    
    </>
  )
}

export default App
