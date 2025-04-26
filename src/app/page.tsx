"use client";
import { useEffect } from "react";

const Home = () => {
  return (
    <>
      <form className="flex p-3 bg-primary justify-center gap-3 ">
        <input
        className=" 
          border
         border-red-100
         rounded-sm
         bg-amber-600 
         "
        type="search" />
        <input
          className="bg-red-500
           p-2
           hover:bg-red-800
           cursor-pointer
           rounded-sm shadow-md shadow-rose-500"
          value={"Submit"}
          type="submit"
        />
      </form>
    </>
  );
};
export default Home;
