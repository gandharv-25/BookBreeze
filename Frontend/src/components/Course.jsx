import React from 'react'
import list from "../../public/list.json";
import Cards from '../components/Cards'
import { Link } from 'react-router-dom';
function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 item-centre justify-centre text-center'>
          <h1 className='text-2xl  md:text-4xl'>We are delighted to have you <span className='text-pink-500'>here!:)</span> </h1>
          <p className='mt-12'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores minima consequuntur ut et vel blanditiis delectus iure vero eveniet ex pariatur aperiam exercitationem, quibusdam tempora placeat. Ea esse aliquid aspernatur laborum facilis quaerat debitis assumenda, iure expedita dolorum ratione perferendis dolores maxime. Deserunt, quaerat vero.
          </p>
          <Link to={"/"}>
          <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink700 duration-700 mt-6'>Back</button>
          </Link>
        </div>
        <div className='mt=12 grid grid-cols-1 md:grid-cols-4'>
         {
          list.map((item)=> (
            <Cards key={item.id} item={item} />
          ))
         }
        </div>
      </div>
    </>
  )
}

export default Course
