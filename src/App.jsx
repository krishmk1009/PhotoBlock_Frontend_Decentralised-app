import Upload from "./artifacts/contracts/Upload.sol/Upload.json"
import { useState, useEffect } from "react"
import { ethers } from "ethers";


import FileUpload from "./component/FileUpload"
import Modal from "./component/Modal"
import Display from "./component/Display"

import './App.css';
import Navbar from "./component/Navbar";
import Sidebar from "./component/SideBar";

function App() {

  const [account, setAccount] = useState("")
  const [contract, setContract] = useState(null)
  const [provider, setProvider] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)


  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0x3C16BC7202DEeDaf665f2d8A7C4aE9125B9540FB";

        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );
        console.log(import.meta.env.VITE_SOME_KEY) // 123
console.log(import.meta.env.DB_PASSWORD) // undefined

        console.log(contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);
  return (
    <>
      <Navbar setModalOpen={setModalOpen} />
      <Sidebar />
      {!modalOpen ? (<button className="share" onClick={() => setModalOpen(true)}>Share</button>) : (<Modal setModalOpen={setModalOpen} contract={contract}></Modal>)}
      <div className="App bg-gray-200">
        <div className="bg-white rounded inline-block mt-5 p-5 ">
          <img src="src/assets/logo.png" alt="logo" className="h-12 m-auto" />


          <p className="mt-5 bg-blue-100 inline-block p-3 rounded shadow-sm">
            Account :{account ? account : "Not Connected"}
          </p>

          <FileUpload contract={contract} account={account} provider={provider} />

        </div>
        <div>

          <Display contract={contract} account={account} />
        </div>
      </div>

    </>
  );
}

export default App;
