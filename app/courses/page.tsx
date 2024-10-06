import Link from 'next/link';
import React from 'react'

function Courses() {
  return (
    <>
     <div className="flex flex-col md:flex-row w-full">
      <div className="md:w-1/2 p-4 mt-20 mb-32">
        <h1 className="text-2xl font-bold ml-36 text-blue-600">Web 3.0</h1>
        <h2 className="text-2xl font-bold ml-36 text-blue-600">Metaverse</h2>
        <h1 className="text-2xl font-bold ml-36 text-blue-600">Artificial Intelligence<br />
        </h1>
        <h2 className="text-2xl font-bold ml-36 text-green-500">Register Yourself for the Test</h2>
        <p className="text-xl font-bold ml-36">
          Choose a Course and secure your future in the Free GIAIC courses <br />
          IT industries biggest Initiative for Free in Sindh Pakistan
        </p>
        <Link href="/apply">
      <button className="text-1xl border-spacing-5 w-56 h-10 mt-5 bg-yellow-300 text-black rounded-lg font-bold ml-60 hover:bg-green-400">Enroll Course </button>
      </Link>
      </div>
      <div className="md:w-1/2 p-4 flex justify-center items-center">
        <img src="https://assets.entrepreneur.com/content/3x2/2000/1597821086-artificial-intelligence-4715585.jpg" className="rounded-s-3xl" alt="governer-image" />
      </div>
    </div>

    </>
  )
}

export default Courses;