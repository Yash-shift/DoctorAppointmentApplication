import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assests/assets'




const Appointments = () => {

  const{docId}=useParams()
  const{doctors}=useContext(AppContext)
  const[docInfo,setDocInfo]=useState(null)
  const[docSlots,setDocSlots]=useState([])
  const[slotIndex,setSlotIndex]=useState(0)
  const[slotTime,setSlotTime]=useState('')

  const fetchDocInfo=async()=>{
    const docInfo =doctors.find(doc=>doc._id===docId)
  }

  const getAvailableSlots=async()=>{

  }

  useEffect(()=>{
    fetchDocInfo
  },[doctors,docId])

  useEffect(()=>{
    getAvailableSlots()
  },[docInfo])
  
  return (

    <div>
      {/* doctor detaiils */}
      <div>
        <div>
          <img src={docInfo.image} />
        </div>
        <div>
          <p>
            {docInfo.name}
            <img src={assets.verified_icon} />
          </p>
          <div>
            <p>{docInfo.degree}-{docInfo.speciliaty}</p>
            <button>{docInfo.experience}</button>
          </div>
          {/* doctor about */}
          <div>
            <p>About <img src={assets.info_icon}></img></p>
            <p className='text-sm text-gray-500 max-w-[700px]'>{docInfo.about}</p>
          </div>
          <p>
            Appointments fee:<span>{docInfo.fees}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Appointments
