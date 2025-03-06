import React, { useState } from "react";

import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { TiTick } from "react-icons/ti";
const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSubIndex, setActiveSubIndex] = useState(null);
  const [openSubIndex, setOpenSubIndex] = useState(null);
  const [openCorrection,setOpenCorrection]=useState(false);
  const[currentIndex,setCurrentIndex]=useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleSubDropdown = (subIndex) => {
    setOpenSubIndex(openSubIndex === subIndex ? null : subIndex);
  };

  const handleActive = (index) => {
    setActiveIndex(index);
    setActiveSubIndex(null);
  };

  const handleSubActive = (subIndex) => {
    setActiveSubIndex(subIndex);
  };

  const ServiceItem = [
    {
      id: 0,
      name: "Brake System Issue",
      
      subItems: [
        {
          name: "Brake Pad Replacement",
          partsCost: [
            { partNumber:"123456789AA",part: "Coolant",quantity:1,wtyMo:24,wtyMill:50000, cost: "40" },
            { partNumber:"123456789AA",part: "Coolant",quantity:1,wtyMo:24,wtyMill:50000, cost: "40" },
          ],
          laborCost: [
            {labourDescription:"Senior Engineer's Labor", hours:"4",rate:60.00,tax:15, taxper:45 },
            {labourDescription:"Senior Engineer's Labor", hours:"4",rate:60.00,tax:15, taxper:45 },
          ],
        },
        {
          name: "Brake Rotor Replacement",
          partsCost: [
            { partNumber:"123456789AA",part: "Coolant",quantity:1,wtyMo:24,wtyMill:50000, cost: "40" },
            { partNumber:"123456789AA",part: "Coolant",quantity:1,wtyMo:24,wtyMill:50000, cost: "40" },
          ],
          laborCost: [
            {labourDescription:"Senior Engineer's Labor",menu:"", hours:"4",rate:60.00,tax:15, taxper:45 },
            {labourDescription:"Senior Engineer's Labor",menu:"", hours:"4",rate:60.00,tax:15, taxper:45 },
          ],
        },
      ],
    },
    {
      id: 1,
      name: "Engine Overheating",
      subItems: [
        {
          name: "Cooling System Repair",
          partsCost: [
            { partNumber:"123456789AA",part: "Coolant",quantity:1,wtyMo:24,wtyMill:50000, cost: "40" },
            { partNumber:"876543219BB",part: "Radiator Hose",quantity:1,wtyMo:24,wtyMill:50000, cost: "15" },
          ],
          laborCost: [
            {labourDescription:"Senior Engineer's Labor",menu:"", hours:"4",rate:60.00,tax:15, taxper:45 },
            {labourDescription:" Engineer's Labor",menu:"", hours:"5",rate:50.00,tax:15, taxper:30 },
          ],
        },  
      ],
    },
    {
      id: 2,
      name: "Thermostat Replacement",
      subItems: [
        {
          name: "Coolant Leak Repair",
          partsCost: [
            { partNumber:"123456789AA",part: "Coolant",quantity:1,wtyMo:24,wtyMill:50000, cost: "40" },
            { partNumber:"876543219BB",part: "Radiator Hose",quantity:1,wtyMo:24,wtyMill:50000, cost: "15" },
          ],
          laborCost: [
            {labourDescription:"Senior Engineer's Labor",menu:"", hours:"4",rate:60.00,tax:15, taxper:45 },
            {labourDescription:" Engineer's Labor",menu:"", hours:"5",rate:50.00,tax:15, taxper:30 },
          ],
        },
      ],
    },
  ];

  return (
    <div className="items-center px-32">
    <div className="mt-24">
      <div className="flex justify-start gap-2  ">
      <h2 className="font-bold text-2xl">Services</h2>
      <p className="font-light mt-2">$1450</p></div>
      <ul className="text-lg space-y-3">
        {ServiceItem.map((item, index) => (
          <div key={item.id} className="py-2 ">
            <div className={`flex relative justify-between items-center cursor-pointer ${activeIndex === index ? "bg-gray-200  " : "hover:bg-gray-300 "}  `}>
             

            <button
              className={`w-full flex items-center gap-2 py-3 px-4 rounded-lg text-left text-2xl
                `}
              onClick={() => {
                handleActive(index);
                toggleDropdown(index);
              }}
            >
              {item.subItems.length > 0 ? (
                openIndex === index ? <IoMdRemove className="text-xl" /> : <IoMdAdd className="text-xl" />
              ) : null}
              {item.name}
              
            </button>
            
            <p className="underline underline-offset-6 font-light decoration-dashed" onMouseEnter={( )=>{setOpenCorrection(true)
              setCurrentIndex(index)
             }} onMouseLeave={()=>{
              setOpenCorrection(false)
              setCurrentIndex(index)

            }}>Complaint,cause,corection</p>
              { openCorrection && index===currentIndex &&
            <div className="absolute right-0 top-10  z-50 w-64 px-5" >
              <div className="bg-gray-200 mt-2"><p className="bg-light underline underline-offset-2 decoration-dashed">Complaint</p>
              <p>The car engine oveheats after driving for a short distance.</p></div>
              <div className="bg-gray-200 mt-2"> <p className="bg-light underline underline-offset-2 decoration-dashed">Cause</p>
              <p>Low cooling levels or malfunctioning raditior.</p></div>
              <div className="bg-gray-200 mt-2"><p className="bg-light underline underline-offset-2 decoration-dashed">
                Catuation</p> <p>Refill coolant and inspect the radiator for leaks or malfunctions.</p></div>
            </div>} 
            </div>
          
            {openIndex === index && item.subItems.length > 0 && (
              <div className="ml-6">
                {item.subItems.map((subItem, subIndex) => (
                  <div key={subIndex} className="py-2">
                    <button
                      className={`w-full flex items-center gap-2 py-2 px-4 rounded-lg text-xl 
                        ${activeSubIndex === subIndex ? "bg-gray-300" : "hover:bg-gray-300"}`}
                      onClick={() => {
                        handleSubActive(subIndex);
                        toggleSubDropdown(subIndex);
                      }}
                    >
                      

                      {openSubIndex === subIndex ? <IoMdRemove className="text-lg" /> : <IoMdAdd className="text-lg" />}
                      {subItem.name }

                      
                    </button>
                    {openSubIndex === subIndex && (
                      <div className="ml-6 mt-2">
                        {/* Parts Cost Table */}
                        <div className="bg-white p-4 rounded-lg shadow-md">
                          <h3 className="text-lg font-bold mb-2">Parts Cost</h3>
                          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <thead  className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                              <tr className="bg-gray-200">
                                <th className="px-4 py-6">Part Number</th>
                                <th className="px-4 py-6">Part</th>
                                <th className="px-4 py-6">Quantity</th>
                                <th className="px-4 py-6">Wty(Mo)</th>
                                <th className="px-4 py-6">Wty(Mill)</th>
                                <th className="px-4 py-6">Cost</th>
                              </tr>
                            </thead>
                            <tbody>
                              {subItem.partsCost.map((part, i) => (
                                <tr key={i}>
                                  <td className="px-4 py-6 font-bold">{part.partNumber}</td>
                                  <td className="px-4 py-6 font-bold">{part.part}</td>
                                  <td className="px-4 py-6 font-bold">{part.quantity}</td>
                                  <td className="px-4 py-6 font-bold">{part.wtyMo}</td>
                                  <td className="px-4 py-6 font-bold">{part.wtyMill}</td>
                                  <td className="px-4 py-6 font-bold">${part.cost}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                       
                        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
                          <h3 className="text-lg font-bold mb-2">Labor Cost</h3>
                          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead  className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                              <tr className="bg-gray-200">
                                <th className="px-6 py-6">Description</th>
                                <th className="px-6 py-6">Menu</th>
                                <th className="px-6 py-6">Hours</th>
                                <th className="px-6 py-6">Rate</th>
                                <th className="px-6 py-6">Tax(%)</th>
                                <th className="px-6 py-6">Tax Per</th>
                              </tr>
                            </thead>
                            <tbody>
                              {subItem.laborCost.map((service, i) => (
                                <tr key={i}>
                                  <td className="px-6 py-6 font-bold">{service.labourDescription}</td>
                                  <td className="px-6 py-6 font-bold"><TiTick/></td>
                                  <td className="px-6 py-6 font-bold">{service.hours}</td>
                                  <td className="px-6 py-6 font-bold">{service.rate}</td>
                                  <td className="px-6 py-6 font-bold">{service.tax}</td>
                                  <td className="px-6 py-6 font-bold">${service.taxper}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </ul>
    </div>
  </div>
  );
};

export default Services;
