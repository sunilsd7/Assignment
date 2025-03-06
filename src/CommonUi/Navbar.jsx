import React, { useState } from "react";
import { Link } from "react-router-dom";
import Submit from "../Components/Submit"; 

const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <nav>
        <div className="flex justify-around top-0 py-4">
          <div className="items-center">
            <ul className="flex gap-20 py-3 nav-hover">
              <li><a className="hover:underline">Actions</a></li>
              <li><a className="hover:underline">Sublets</a></li>
              <li><Link to="/services" className="hover:underline">Services</Link></li>
              <li><a className="hover:underline">Totals</a></li>
              <li><a className="hover:underline">Others</a></li>
            </ul>
          </div>
          <button onClick={() => setModalIsOpen(true)} className="bg-black text-white rounded-2xl text-2xl px-5">
            Submit Payment
          </button>
        </div>
      </nav>

      <Submit isOpen={modalIsOpen} closeModal={() => setModalIsOpen(false)} />
    </div>
  );
};

export default Navbar;
