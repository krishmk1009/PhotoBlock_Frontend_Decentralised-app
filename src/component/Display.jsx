import React, { useState } from 'react'

import "./Display.css"
const Display = ({ contract, account }) => {
  const [data, setData] = useState("")
  const getData = async () => {
    let dataArray;
    const OtherAddress = document.querySelector(".address").value;

    try {
      if (OtherAddress) {
        dataArray = await contract.display(OtherAddress);
        console.log(dataArray);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      alert("You don't have access");
    }

    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      // console.log(str)
      // console.log(str_array)

      const images = str_array.map((item, i) => {
        return (
          <div className=''>


            <a href={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`} key={i} target="_blank">
              <img
                key={i}
                src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
                alt="new"
                className="image-list ml-60 h-40  "
              ></img>
            </a>
          </div>
        )
      })
      setData(images)
    }

    else {
      // console.log(account)
      alert("no image to display")
    }
  }


  return (
    <>



      <div className='image-list'>{data}</div>
      <input type='text' placeholder='Enter Address' className='address rounded mt-10  bg-white text-black w-90 h-12' />
      <button className='center button mt-10' onClick={getData}>Get data</button>

    </>
  )
}

export default Display