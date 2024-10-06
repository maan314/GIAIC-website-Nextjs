import React from "react";
import Link from "next/link";
export default function Home() {
  return (
    <>
       <div className="flex flex-col md:flex-row w-full">
      <div className="md:w-1/2 p-2">
        <h1 className="text-4xl font-bold ml-36 mt-5 text-green-500">Governer Sindh</h1>
        <h2 className="text-2xl ml-36 mb-4 text-green-600">Kamran Khan Tessori</h2>
        <h1 className="text-4xl font-bold ml-36 mb-4 text-blue-600">Initiative for <br />
        Artificial Intelligence <br />
        Web 3.0 & Metaverse
        </h1>
        <h2 className="text-2xl font-bold ml-36 text-green-700">Earn Upto $5000/Month</h2>
        <p className="text-2xl font-bold ml-36">
          Opening the Governer House and Removing Barriers to Educate the
          Youth of Sindh
        </p>
        <Link href="/courses">
      <button className="text-1xl border-spacing-5 w-28 h-10 mt-3 bg-green-600 rounded-lg font-bold ml-36 hover:bg-blue-700">Apply Now</button>
      </Link>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <img src="https://www.app.com.pk/wp-content/uploads/2022/12/APP54-041222Karachi.jpg" className="rounded-xl" alt="governer-image" />
      </div>
    </div>
    <h1 className="text-2xl font-bold ml-60">
      Certified AI, Metaverse, and Web 3.0 Developer and Solopreneur 
      </h1>
      <h1 className="text-2xl font-bold ml-64"> Developing Billion-Dollar Valued Developers & Solopreneurs</h1>
    </>
  );
}
