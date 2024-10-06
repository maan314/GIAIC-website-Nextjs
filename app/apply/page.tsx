import Link from 'next/link';
import React from 'react'

function Apply() {
  return (
   <>
    <div className="flex flex-col md:flex-row w-full">
      <div className="md:w-1/2 p-4 mt-24 mb-64">
        
<form className="max-w-sm mx-auto">
  <label htmlFor="countries" className="block mb-2 text-xl font-bold text-gray-900 dark:text-white">Select Course</label>
  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

    <option>Artificial Intelligence</option>
    <option>Metaverse</option>
    <option>Web 3.0</option>
    <option>Cloud Computing</option>
  </select>
  <Link href="/apply">
      <button className="text-1xl border-spacing-5 w-56 h-10 mt-5 bg-blue-600 text-black rounded-lg font-bold ml- hover:bg-green-400">Enroll </button>
      </Link>
</form>

      </div>
      <div className="md:w-1/2 p-4 flex justify-center items-center">
        <img src="https://assets.entrepreneur.com/content/3x2/2000/1597821086-artificial-intelligence-4715585.jpg" className="rounded-s-3xl" alt="governer-image" />
      </div>
    </div>

   </>
  )
}

export default Apply;