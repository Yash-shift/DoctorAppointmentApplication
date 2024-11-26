import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router";
import AppContext from "../context/AppContext";
import { useContext } from "react";
import { doctors } from "../assests/assets";
const doctor = () => {
  // const { speciality } = useParams();
  // const {doctors}= useContext(AppContext)
  // console.log(doctors);
  // const navigate = useNavigate();

  // const [filterDoc, setFilterDoc] = useState([]);
  // const[showFilter,setFilter]=useState(false)

  // const applyfilter = () => {
  //   if (speciality) {
  //     setFilterDoc(doctors.filter((doc) => doc.speciality == speciality));
  //   } else {
  //     setFilterDoc(doctors);
  //   }
  // };

  // useEffect(() => {
  //   applyfilter();
  // }, [doctors, speciality]);

  console.log(doctors);
  return (
    <div className="flex flex-col ">
      <p className="text-red-600 animate-pulse text-3xl flex font-bold mx-auto"> We ARE SORRY FOR INCONVIENCE WE WORKING ON THE UI </p>
      {/* <p className="flex text-center items-center text-2xl mx-auto">Browse Through the doctors specialist</p>
      <div className="flex flex-row px-2 py-2 gap-4"> */}
        {/* <button>Filter</button> */}
        {/* <div className="flex-col gap-7 text-sm text-gray-600">
          <p onClick={()=>navigate('/doctors/General Physician')}  className="`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer">General Physician</p>
          <p  onClick={()=>navigate('/doctors/Gynecologist')}  className="`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer">Gynecologist</p>
          <p onClick={()=>navigate('/doctors/Dermatologist')}   className="`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer">Dermatologist</p>
          <p  onClick={()=>navigate('/doctors/')}  className="`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer">Pediatrician</p>
          <p  onClick={()=>navigate('/doctors/')}  className="`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer">Neurologist</p>
          <p  onClick={()=>navigate('/doctors/')}  className="`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer">Gastrologist</p>
        </div> */}
        {/* <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">   */}
          {
            doctors.map((item, index) => {
              return (
                <div  className=' flex flex-col border border-blue-200 rounded-xl  mt-4 mx-3 px-3 py-3 overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index} grid grid-auto>
                  <p className="text-gray-900 text-sm font-medium">
                    {item.name}
                  </p>
                  <img className='bg-blue-200' src={item.image} alt={item.name}/>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
              );
            })
            //   filterDoc.map((item,index)=>{
            //     return <div  onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
            //         <img className='bg-blue-200' src={item.image} alt={item.name}/>
            //         <div className='p-4'>
            //             <div className='flex items-center gap-2 text-sm text-center text-green-500'>
            //                 <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
            //             </div>
            //             <p  className='text-gray-900 text-lg font-medium'>{item.name}</p>
            //             <p className='text-gray-600 text-sm'>{item.speciality}</p>
            //         </div>

            //     </div>

            // })
          }
        {/* </div>
      </div> */}
    </div>
  );
};

export default doctor;
