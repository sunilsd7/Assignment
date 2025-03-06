import React from "react";
import CustomModal from "../CommonUi/Modal";
import { FaCheck } from "react-icons/fa";

const FinalSubmit = ({ isOpen, closeModal }) => {
  return (
    <CustomModal isOpen={isOpen} closeModal={closeModal}>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <div>
        <h2 className="font-bold text-2xl mb-4 ">You are all set.</h2>
        <p>Feel free to send us a message with any extra details or files.</p></div>
            <div className="flex justify-center">
            <FaCheck size={300} color="black" className="icon"/>
            </div>

        <div>
        <ul className="text-left mt-4">
          <li className="flex justify-between border-b">
            <span>Invoice reviewing</span>
            <span>29 July</span>
          </li>
          <li className="flex justify-between border-b">
            <span> Payment release</span>
            <span>29July</span></li>
          <li className="flex justify-between border-b">
          <span>Money on your account </span>
          <span> 30 July</span></li>
        </ul>
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <button className="border rounded-2xl px-4 py-2" onClick={closeModal}>
            Close
          </button>
          <button className="border rounded-full px-4 py-2 bg-black text-white">
            Confirm
          </button>
        </div>
      </div>
    </CustomModal>
  );
};

export default FinalSubmit;
