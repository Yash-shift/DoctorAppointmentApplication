import React from "react";
import { specialityData } from "../assests/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div id="speciality" className="flex flex-col items-center gap-4 py-16 text-gray-800">
      <h1 className="text-3xl font-medium">Find By Speciality</h1>
      <p className="text-center text-sm sm:w-1/3">
        Simply browse through our extensive list of trusted doctors,schedule
        your appointment .
      </p>
      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-hidden">
        {specialityData.map(( item,index) => (
          <Link  className="flex flex-col  items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500" key={index} to={`/doctors/${item.speciality}`}>
            <img className="w-16 sm:w-24 mb-2" src={item.image}></img>
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
