import React, { useState } from 'react'
import axios from "axios"
import "./FileUpload.css"

const FileUpload = ({ contract, account, provider }) => {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("No image selected")

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            'pinata_api_key':import.meta.env.VITE_PINATA_API_KEY,
            'pinata_secret_api_key': import.meta.env.VITE_PINATA_SECRET_API_KEY,
            "Content-Type": "multipart/form-data"
          },
        });

        const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
        contract.add(account, ImgHash)
        alert("image uploaded to ipfs succesfully")
        setFileName("no image selected")
        setFile(null)



      } catch (e) {
        console.log("unable to upload the image to ipfs " + " " + e)
        alert("unable to upload the image to ipfs ")
      }
    }
  }

  const retrieveFile = (e) => {

    const data = e.target.files[0];
    console.log(data);

    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data)
    reader.onloadend = () => {
      setFile(e.target.files[0]);

    }

    setFileName(e.target.files[0].name);
    e.preventDefault();

  }
  return (


    <div className="top ">
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor='file-upload' className='bg-blue-500 mt-1  p-4 mr-5 pt-3 pb-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'> Choose Image </label>
        <input
          disabled={!account}
          type="file"
          id="file-upload"
          name="data"
          onChange={retrieveFile}
        />
        <span className='textArea text-black'>File: {fileName}</span>
        <button type="submit" className="upload bg-green-600 text-black" disabled={!file}>
          Upload File 
        </button>
        
      </form>
    </div>

  )

}
export default FileUpload