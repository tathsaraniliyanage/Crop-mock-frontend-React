// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { updateCrop, saveCrop, removeCrop } from "../reducers/CropSlice.tsx";
// import { components } from "../components/CropAdd.tsx";

// export function Crop() {

//     const crops = useSelector((state) => state.crops.crops);
//     const dispatch = useDispatch();

//     // State for managing modal visibility
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     // Handlers
//     const openModal = () => setIsModalOpen(true);
//     const closeModal = () => setIsModalOpen(false);

//     const [newCrop, setNewCrop] = useState({
//         cropCode: "",
//         commonName: "",
//         scientificName: "",
//         category: "",
//         cropSeason: "",
//         fieldCode: "",
//         image: null,
//     });


//     return (
//         <>
//             {/* Main Content */}
//             <div className="mt-10 col-span-12 lg:col-span-10 p-4 fixed left-44 top-0 w-[calc(100%-176px)] h-screen p-4 overflow-y-auto">
//                 {/* <h1 className="text-2xl font-bold text-center my-4 ">Crop Management</h1> */}

//                 {/* <div className="flex justify-between items-center mb-3">
//                     <input
//                         type="text"
//                         className="form-input w-1/2 border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                         placeholder="Search Crop"
//                     />
//                     <button
//                         onClick={openModal}
//                         className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:ring-2 focus:ring-green-400"
//                     >
//                         + Crop
//                     </button>
//                 </div> */}



//                 {/* <div className="w-full max-w-sm min-w-[200px]">
//                 <div className="relative flex items-center"> */}

//                  <div className="flex flex-row justify-between items-center ml-7">
//                  <div className="relative flex items-center mb-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                     className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
//                   >
//                     <path
//                       fill-rule="evenodd"
//                       d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
//                       clip-rule="evenodd"
//                     />
//                   </svg>

//                   <input
//                     className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
//                     placeholder="Search Crop..."
//                   />

//                   <button
//                     className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
//                     type="button"
//                   >
//                     Search
//                   </button>
//                 </div>



//             {/* <div className=" justify-between items-center mb-3"> */}
//             <div className="relative flex items-center mb-4">     
//                     <button
//                         onClick={openModal}
//                         className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:ring-2 focus:ring-green-400"
//                     >
//                         + Crop
//                     </button>
//                 </div>

                

// {/* <button
//                 type="button"
//                 // onclick="showCropAddFromOnClick()"
//                 class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
//               >
//                 <img
//                   src="./acessst/image/icon/icons8-add-30.png"
//                   class="fill-current w-4 h-4 mr-2"
//                   alt=""
//                 />
//                 <span>Crop</span>
//               </button> */}

//               </div>



//                 <table className="table-auto w-full border border-gray-300 ml-5">
//                     <thead className="bg-gray-200 text-green-700">
//                     <tr>
//                         <th className="px-4 py-2 border">Select</th>
//                         <th className="px-4 py-2 border">Crop Code</th>
//                         <th className="px-4 py-2 border">Common Name</th>
//                         <th className="px-4 py-2 border">Scientific Name</th>
//                         <th className="px-4 py-2 border">Category</th>
//                         <th className="px-4 py-2 border">Season</th>
//                         <th className="px-4 py-2 border">Field Code</th>
//                         <th className="px-4 py-2 border">Image</th>
//                         <th className="px-4 py-2 border">Actions</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     {crops.map((crop, index) => (
//                         <tr key={index}>
//                             <td className="px-4 py-2 border">
//                                 <input type="checkbox"/>
//                             </td>
//                             <td className="px-4 py-2 border">{crop.cropCode}</td>
//                             <td className="px-4 py-2 border">{crop.commonName}</td>
//                             <td className="px-4 py-2 border">{crop.scientificName}</td>
//                             <td className="px-4 py-2 border">{crop.category}</td>
//                             <td className="px-4 py-2 border">{crop.cropSeason}</td>
//                             <td className="px-4 py-2 border">{crop.fieldCode}</td>
//                             <td className="px-4 py-2 border">{crop.image ? crop.image.name : "No Image"}</td>
//                             <td className="px-4 py-2 border">
//                                 <button
//                                     className="text-red-500"
//                                     onClick={() => dispatch(removeCrop(index))}
//                                 >
//                                     Delete
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                     </tbody>
//                 </table>
//             </div>

//             {/* Modal */}
//             {/* {isModalOpen && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//                     <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
//                         <div className="flex justify-between items-center px-4 py-2 border-b">
//                             <h5 className="text-lg font-bold">Crop Details</h5>
//                             <button
//                                 className="text-gray-500 hover:text-gray-700"
//                                 onClick={closeModal}
//                             >
//                                 &times;
//                             </button>
//                         </div>
//                         <div className="p-4">
//                             <form id="cropForm" className="space-y-4">
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                     <div>
//                                         <label htmlFor="cropCode" className="block font-medium">
//                                             Crop Code
//                                         </label>
//                                         <input
//                                             type="text"
//                                             className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                                             id="cropCode"
//                                             placeholder="Enter Crop Code"
//                                             value={newCrop.cropCode}
//                                             onChange={(e) => setNewCrop({...newCrop, cropCode: e.target.value})}
//                                         />
//                                     </div>
//                                     <div>
//                                         <label htmlFor="commonName" className="block font-medium">
//                                             Common Name
//                                         </label>
//                                         <input
//                                             type="text"
//                                             className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                                             id="commonName"
//                                             placeholder="Enter Common Name"
//                                             value={newCrop.commonName}
//                                             onChange={(e) => setNewCrop({...newCrop, commonName: e.target.value})}
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                     <div>
//                                         <label htmlFor="scientificName" className="block font-medium">
//                                             Scientific Name
//                                         </label>
//                                         <input
//                                             type="text"
//                                             className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                                             id="scientificName"
//                                             placeholder="Enter Scientific Name"
//                                             value={newCrop.scientificName}
//                                             onChange={(e) => setNewCrop({...newCrop, scientificName: e.target.value})}
//                                         />
//                                     </div>
//                                     <div>
//                                         <label htmlFor="category" className="block font-medium">
//                                             Category
//                                         </label>
//                                         <select
//                                             className="form-select w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                                             id="category"
//                                             value={newCrop.category}
//                                             onChange={(e) => setNewCrop({ ...newCrop, category: e.target.value })}
//                                         >
//                                             <option value="" disabled>
//                                                 Select Category
//                                             </option>
//                                             <option value="Rice">Rice</option>
//                                             <option value="Cowpea">Cowpea</option>
//                                             <option value="Green gram">Green gram</option>
//                                             <option value="Chickpea">Chickpea</option>
//                                             <option value="Sweet potato">Sweet potato</option>
//                                             <option value="Reddish">Reddish</option>
//                                             <option value="Cassava">Cassava</option>
//                                         </select>
//                                     </div>
//                                 </div>
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                     <div>
//                                         <label htmlFor="cropSeason" className="block font-medium">
//                                             Season
//                                         </label>
//                                         <input
//                                             type="text"
//                                             className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                                             id="cropSeason"
//                                             placeholder="Enter Season"
//                                             value={newCrop.cropSeason}
//                                             onChange={(e) => setNewCrop({...newCrop, cropSeason: e.target.value})}
//                                         />
//                                     </div>
//                                     <div>
//                                         <label htmlFor="fieldCode" className="block font-medium">
//                                             Field Code
//                                         </label>
//                                         <input
//                                             type="text"
//                                             className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                                             id="fieldCode"
//                                             placeholder="Enter Field Code"
//                                             value={newCrop.fieldCode}
//                                             onChange={(e) => setNewCrop({...newCrop, fieldCode: e.target.value})}
//                                         />
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <label className="block font-medium">Log Codes:</label>
//                                     <div className="space-y-1">
//                                         <label>
//                                             <input
//                                                 type="checkbox"
//                                                 name="logCode"
//                                                 value="logCode1"
//                                                 className="mr-2"
//                                             />
//                                             Log Code 1
//                                         </label>
//                                         <label>
//                                             <input
//                                                 type="checkbox"
//                                                 name="logCode"
//                                                 value="logCode2"
//                                                 className="mr-2"
//                                             />
//                                             Log Code 2
//                                         </label>
//                                         <label>
//                                             <input
//                                                 type="checkbox"
//                                                 name="logCode"
//                                                 value="logCode3"
//                                                 className="mr-2"
//                                             />
//                                             Log Code 3
//                                         </label>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <label htmlFor="cropImage" className="block font-medium">
//                                         Image
//                                     </label>
//                                     <input
//                                         type="file"
//                                         className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                                         id="image"
//                                         onChange={(e) => setNewCrop({...newCrop, image: e.target.files[0]})}
//                                     />
//                                 </div>
//                             </form>
//                         </div>
//                         <div className="flex justify-end space-x-2 px-4 py-2 border-t">
//                             <button
//                                 className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
//                                 onClick={() => dispatch(saveCrop(newCrop))}
//                             >
//                                 Save
//                             </button>
//                             <button
//                                 className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400"
//                                 onClick={() => dispatch(updateCrop(crops.code))}
//                             >
//                                 Update
//                             </button>
//                             <button
//                                 className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-400"
//                                 onClick={() => dispatch(removeCrop(crops.code))}
//                             >
//                                 Delete
//                             </button>
//                             <button
//                                 className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:ring-2 focus:ring-gray-400"
//                                 onClick={closeModal}
//                             >
//                                 Close
//                             </button>
//                         </div>
//                     </div>
//                 </div> */}
//             {/* )} */}
//         </>
//     );
// }






































import { Outlet, useNavigate } from "react-router-dom";

function Crop() {
  const navigate = useNavigate();

  function showCropAddFromOnClick() {
    navigate("crop-add");
  }

  return (
    <>
      <section className="absolute h-[80%] top-0 w-[70%] z-[1000]">
        <Outlet></Outlet>
      </section>
      {/* Crop Section  */}
      <section
        id="mainCropSection"
        className=" w-full mx-auto gap-4 p-6 flex flex-col ml-100 mt-10"
      >
        {/* search bar and close button section   */}
        <div className="flex flex-row justify-between items-center">
          {/* search bar */}
          <div className="w-full max-w-lg min-w-[200px] rounded-md">
            <div className="relative flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clip-rule="evenodd"
                />
              </svg>

              <input
                className="w-full bg-white bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Search Crop..."
              />

              <button
                className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                type="button"
              >
                Search
              </button>
            </div>
          </div>

          {/* <div className="flex-grow-500"></div> */}

          {/* close button  */}
          <button
            type="button"
            onClick={showCropAddFromOnClick}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-7 rounded inline-flex items-center ml-80 "
          >
            <img
              src="/src/assets/image/icon/icons8-add-30.png"
              // src="./assets/image/icon/icons8-add-30.png"
              className="fill-current w-4 h-4 mr-0"
              alt=""
            />
            <span className="text-xs">Crop</span>
          </button>
        </div>

        {/* table  */}

        <div className="w-full">
          <table className="w-full text-left table-auto min-w-max bg-white rounded-md">
            <thead>
              <tr>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                  <p className="text-gray-500 font-bold">@</p>
                </th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                  <p className="text-gray-500 font-bold">crop Common Name</p>
                </th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                  <p className="text-gray-500 font-bold">crop scientific Name</p>
                </th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                  <p className="text-gray-500 font-bold">crop season</p>
                </th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                  <p className="text-gray-500 font-bold">category</p>
                </th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50"></th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50"></th>
              </tr>
            </thead>
            <tbody id="fieldTbody"></tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default Crop;







