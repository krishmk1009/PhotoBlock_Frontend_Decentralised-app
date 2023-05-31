import React, { useEffect } from 'react'
import "./Modal.css"

const Modal = ({ contract, setModalOpen }) => {

  const sharing = async () => {
    const address = document.querySelector(".address").value;
    await contract.allow(address);
    setModalOpen(false)

  };

  useEffect(() => {
    const accessList = async () => {
      const addressList = await contract.shareAccess();
      let select = document.querySelector("#selectNumber");
      const options = addressList;

      for (let i = 0; i < options.length; i++) {
        let opt = options[i];
        let e1 = document.createElement("option");
        e1.textContent = opt;
        e1.value = opt;
        select.appendChild(e1);
      }
    };
    contract && accessList();
  }, [contract]);
  return (
    <>
      <div className="modalBackground ">
        <div className="modalContainer h-60 bg-gray-400 rounded">
          <div className="title "> <h2> Share with </h2> </div>
          <div className="body">
            <input
              type="text"
              className="address border text-md  bg-gray-300 rounded p-5 mb-5"
              placeholder="Enter Address"
            ></input>
          </div>
          <form id="myForm">
            <select id="selectNumber " className='bg-gray-300 rounded pt-2 pb-2 w-30'>
              <option className="address w-10 ">People With Access</option>
            </select>
          </form>
          <div className='footer'>
            <button onClick={() => setModalOpen(false)} id='cancelBtn' className='rounded'>Cancel </button>
            <button onClick={() => sharing()} >Share </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default Modal