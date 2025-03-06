import React, { useState, useRef } from "react";
import { TiTick } from "react-icons/ti";
import { Dropzone } from "@mantine/dropzone";
import { CiBank } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import CustomModal from "../CommonUi/Modal";
import ConfirmationModal from "../Components/FinalSubmit"; 
import InvoiceSelector from "./InvoiceSelector";

const Submit = ({ isOpen, closeModal }) => {
  const openRef = useRef(null);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false); 

  
  const handleSubmit = () => {
    closeModal(); 
    setConfirmationModalOpen(true); 
  };

  return (
    <>
     
      <CustomModal isOpen={isOpen} closeModal={closeModal}>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="font-bold text-2xl mb-2">Submit for Payment</h2>
          <p className="font-bold mb-4">
            You need to upload an invoice and confirm the payment method.
          </p>

          <div className="flex justify-between items-center border-2 p-4 rounded-md">
            <p className="text-2xl font-semibold flex gap-1">
              <TiTick className="bg-green-500 text-white text-3xl rounded-full mt-1" />$
              300
            </p>
            <p className="font-light text-2xl">Invoice total</p>
          </div>

          <div className="mt-4">
            <p className="mb-2 font-medium">Upload Invoice</p>
            <Dropzone openRef={openRef} onDrop={() => {}}>
              <div className="p-10 text-center border-dashed border-2 border-gray-400 rounded-md">
                Drag and drop any files related to this claim{" "}
                <p className="font-bold underline"> or click here to upload.</p>
                <p className="font-light">Word, PDF, JPEG, PNG (Max 4MB)</p>
              </div>
            </Dropzone>
            <div>

            </div>
             <div className="flex justify-between">
              <p>Select invoice from files</p>
              <p>See All</p>
             </div>
             <div>
              <InvoiceSelector/>
             </div>
            <div className="flex justify-between mt-3">
              <p>Payment method</p>
              <p className="font-light underline">Edit</p>
            </div>

            <div className="flex justify-between border rounded-md py-2 mt-3">
              <p className="flex">
                <CiBank className="mt-1" /> Wire Transfer
              </p>
              <p className="font-light flex gap-1">
                Ending in 9536 <IoIosArrowDown className="mt-1" />
              </p>
            </div>

            <div className="py-2">
              <input type="checkbox" />
              <label className="ml-2">All related invoices are provided</label>
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <button className="border rounded-2xl px-4 py-2" onClick={closeModal}>
                Cancel
              </button>
              <button onClick={handleSubmit} className="border rounded-full px-3 bg-black text-white py-2">
                Submit for Payment
              </button>
            </div>
          </div>
        </div>
      </CustomModal>

      <ConfirmationModal
        isOpen={confirmationModalOpen}
        closeModal={() => setConfirmationModalOpen(false)}
      />
    </>
  );
};

export default Submit;
