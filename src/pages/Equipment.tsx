// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { updateEquipment, saveEquipment, removeEquipment } from "../reducers/EquipmentSlice.tsx";

// export function Equipment() {
//     const equipments = useSelector((state) => state.equipments.equipments);
//     const dispatch = useDispatch();
  
//     // State for managing modal visibility
//     const [isModalOpen, setIsModalOpen] = useState(false);
  
//     // Handlers
//     const openModal = () => setIsModalOpen(true);
//     const closeModal = () => setIsModalOpen(false);
  
//     const [newEquipment, setNewEquipment] = useState({
//         equipmentId: "",
//         name: "",
//         type: "",
//         status: "",
//         staffId: "",
//         fieldCode: "",
    
//     });
   


// import { Outlet, useNavigate } from "react-router-dom";

// function Equipment() {
//   const navigate = useNavigate();

//   function showEquipmentAddFromOnClick() {
//     navigate("equipment-add");
//   }

//     return (
//         <>
           
//            {/* Equipment Section  */}
//           <section
//             id="mainEquipmentSection"
//             // style="display: none"
//             className=" w-full mx-auto  p-6 flex gap-4 flex-col ml-100 mt-10"
//           >
//             {/* search bar and close button section   */}
//             <div className="flex flex-row justify-between items-center">
              
          
//               {/* search bar */}
//               <div className="w-full max-w-lg min-w-[200px] ml-40">
//                 <div className="relative flex items- ml-40">
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
//                     placeholder="Search Equipment..."
//                   />

//                   <button
//                     className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
//                     type="button"
//                   >
//                     Search
//                   </button>
//                 </div>
//               </div>

//               {/* <div className="flex-grow-500"></div> */}

//              {/* close button  */}
//               <button
//                 type="button"
//                 onClick={showEquipmentAddFromOnClick}
//                 className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-7 rounded inline-flex items-center ml-80 "
//               >
//                 <img
//                  src="/src/assets/image/icon/icons8-add-30.png"
//                   // src="./assets/image/icon/icons8-add-30.png"
//                   className="fill-current w-4 h-4 mr-0"
//                   alt=""
//                 />
//                 <span className="text-xs">Equipment</span>
//               </button>
//             </div>

//             {/* table  */}
         

//             <div
//               className="relative flex flex-col w-full h-full overflow-auto text-gray-700 bg-white shadow-md rounded-xl bg-clip-border p-3 mt-1 ml-60 "
//             >
//               <table className="w-full text-left table-auto min-w-max">
//                 <thead>
//                   <tr>
//                     <th
//                       className="p-4 border-b border-blue-gray-100 bg-blue-gray-50"
//                     >
//                       <p
//                         className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"
//                       >
//                        @
    
//                       </p>
//                     </th>
//                     <th
//                       className="p-4 border-b border-blue-gray-100 bg-blue-gray-50"
//                     >
//                       <p
//                         className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"
//                       >
//                        name
//                       </p>
//                     </th>
//                     <th
//                       className="p-4 border-b border-blue-gray-100 bg-blue-gray-50"
//                     >
//                       <p
//                         className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"
//                       >
//                         type
//                       </p>
//                     </th>
//                     <th
//                       className="p-4 border-b border-blue-gray-100 bg-blue-gray-50"
//                     >
//                       <p
//                         className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"
//                       >
//                         status
//                       </p>
//                     </th>
//                     <th
//                       className="p-4 border-b border-blue-gray-100 bg-blue-gray-50"
//                     >
//                       <p
//                         className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"
//                       >
//                        staff
//                       </p>
//                     </th>
//                     <th
//                       className="p-4 border-b border-blue-gray-100 bg-blue-gray-50"
//                     >
//                       <p
//                         className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"
//                       >
//                        field
    
//                       </p>
//                     </th>
//                     <th
//                       className="p-4 border-b border-blue-gray-100 bg-blue-gray-50"
//                     ></th>
//                     <th
//                       className="p-4 border-b border-blue-gray-100 bg-blue-gray-50"
//                     ></th>
//                   </tr>
//                 </thead>
//                 <tbody id="fieldTbody"></tbody>
//               </table>
//             </div>

      

                
//                {/* close and save button  */}
               
            
//           </section>



//         </>
//     );
// }

// export default Equipment;








import { Outlet, useNavigate } from "react-router-dom";

function Equipment() {
  const navigate = useNavigate();

  function showEquipmentAddFromOnClick() {
    navigate("equipment-add");
  }

  return (
    <>
      <section className="absolute h-[80%] top-0 w-[70%] z-[1000]">
        <Outlet></Outlet>
      </section>
      {/* Equipment Section  */}
      <section
        id="mainEquipmentSection"
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
                placeholder="Search Equipment..."
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
            onClick={showEquipmentAddFromOnClick}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-7 rounded inline-flex items-center ml-80 "
          >
            <img
              src="/src/assets/image/icon/icons8-add-30.png"
              // src="./assets/image/icon/icons8-add-30.png"
              className="fill-current w-4 h-4 mr-0"
              alt=""
            />
            <span className="text-xs">Equipment</span>
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
                  <p className="text-gray-500 font-bold">name</p>
                </th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                  <p className="text-gray-500 font-bold">type</p>
                </th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                  <p className="text-gray-500 font-bold">status</p>
                </th>
                <th className="p-4 border-b bordeFieldr-blue-gray-100 bg-blue-gray-50">
                  <p className="text-gray-500 font-bold">staff</p>
                </th>
                <th className="p-4 border-b bordeFieldr-blue-gray-100 bg-blue-gray-50">
                  <p className="text-gray-500 font-bold">field</p>
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

export default Equipment;
