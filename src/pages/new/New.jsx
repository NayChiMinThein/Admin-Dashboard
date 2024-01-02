/* eslint-disable react/prop-types */
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { MdDriveFolderUpload } from "react-icons/md";
import { useState } from "react";

const New = ({inputs, title}) => {
  const [file, setFile] = useState("")

  let imgUrl;
  if(file instanceof Blob || file instanceof File){
    imgUrl = URL.createObjectURL(file)
  } else {
    imgUrl = "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
  }

  return (
    <div className="flex">
      <Sidebar/>
      <div className="w-full">
        <Navbar/>
        <div className="mx-6 mt-9 shadow-md p-6 dark:text-white">
          <h2 className="text-2xl text-neutral-400 font-bold mb-12 text-center">{title}</h2>
          <div className="flex">
            <div className="w-1/3">
              <img src={imgUrl}
              className="w-36 rounded-full mx-auto mb-4 object-cover"
            />
            <div>
              <label htmlFor="file" className="flex justify-center items-center">Image : 
                <MdDriveFolderUpload className="text-2xl ms-3 cursor-pointer"/>
              </label>
              <input type="file" className="hidden" id="file" onChange={e => setFile(e.target.files[0])}/>
            </div>
            </div>
            <div className="w-2/3">
              <form className="grid grid-cols-2 gap-6">
                {inputs.map(input => {
                  return (
                    <div className="flex flex-col" key={input.id}>
                      <label className="mb-1">{input.label}</label>
                      <input
                        type={input.type}
                        className="border border-transparent border-b-slate-300 p-1 dark:bg-transparent"
                        placeholder={input.placeholder}/>
                    </div>
                  )
                })}
                <button className="bg-violet-600 text-white font-bold w-40 h-11 mt-4 mx-auto rounded-md">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New