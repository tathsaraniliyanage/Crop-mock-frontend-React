// import {Outlet} from "react-router";
// import {Navigation} from "./SideNavigationBar.tsx";


// export const EquipmentAdd = () => {
//     return (
//         <>


// <form
//   id="equipmentAddForm"
//   style="display: none"
//   className="fixed top-0 bottom-0 left-0 right-[100px] m-auto z-10 bg-[#fdffff] rounded-lg shadow-lg flex flex-col gap-4 w-[50%] h-fit p-3 overflow-auto"
// >
//   {/* name tag and close button  */}
//   <div className="flex flex-row items-center justify-between">
//      {/* name tag  */}
//     <label className="font-semibold text-lg text-green-600">
//       equipment
//     </label>
//      {/* close button  */}
//     <button
//       type="button"
//       className="w-5"
//       onclick="showEquipmentAddFromOnClick()"
//     >
//       <img src="./acessst/image/icon/icons8-close.svg" alt="" />
//     </button>
//   </div>

//    {/* equipment id and name  */}
//   <div className="flex flex-row gap-3">
//     {/* < equipment id   */}
//     <div className="sm:col-span-3 flex-grow-[1]">
//       <label
//         for="equipment-id"
//         className="block text-sm/6 font-medium text-gray-900"
//         >vehicle Code</label
//       >
//       <div className="mt-2">
//         <input
//           type="text"
//           name="equipment-id"
//           id="equipment-id"
//           autocomplete="given-name"
//           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
//         />
//       </div>
//     </div>

//     {/* equipment name  */}
//     <div className="sm:col-span-3 flex-grow-[1]">
//       <label
//         for="equipment-name"
//         className="block text-sm/6 font-medium text-gray-900"
//         >equipment name</label
//       >
//       <div className="mt-2">
//         <input
//           type="text"
//           name="equipment-name"
//           id="equipment-name"
//           autocomplete="given-name"
//           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
//         />
//       </div>
//     </div>
//   </div>

//   <div className="flex flex-row gap-3">
//      {/* Type  */}
//     <div className="sm:col-span-3 flex-grow-[1]">
//       <label
//         for="type"
//         className="block text-sm/6 font-medium text-gray-900"
//         >Equipment Type</label
//       >
//       <div className="mt-2 w-[50%]">
//         <select name="type" id="equipment-type">
//           <option value="ELECTRICAL">ELECTRICAL</option>
//           <option value="MECHANICAL">MECHANICAL</option>
//         </select>
//       </div>
//     </div>

//      {/* status  */}
//     <div className="sm:col-span-3 flex-grow-[1]">
//       <label
//         for="status"
//         className="block text-sm/6 font-medium text-gray-900"
//         >Available Status</label
//       >
//       <div className="mt-2 w-[50%]">
//         <select name="status" id="equipment-status">
//           <option value="AVAILABLE">AVAILABLE</option>
//           <option value="OUT_OF_SERVICE">OUT_OF_SERVICE</option>
//         </select>
//       </div>
//     </div>
//   </div>

//   <div className="flex flex-row gap-3">
//     {/* Staff Member  */}
//     <div className="sm:col-span-3 flex-grow-[1]">
//       <label
//         for="staff-member"
//         className="block text-sm/6 font-medium text-gray-900"
//         >Staff Member</label
//       >
//       <div className="mt-2 w-full">
//         <select
//           name="equipment-staff-id"
//           id="equipment-staff-id"
//         ></select>
//       </div>
//     </div>

//     {/* Field  */}
//     <div className="sm:col-span-3 flex-grow-[1]">
//       <label
//         for="field"
//         className="block text-sm/6 font-medium text-gray-900"
//         >Field</label
//       >
//       <div className="mt-2 w-full">
//         <select
//           name="equipment-fieldCode"
//           id="equipment-fieldCode"
//         ></select>
//       </div>
//     </div>
//   </div>


//     {/* close and save button  */}
//               <div className="flex justify-end gap-4">
//                 {/* close button */}
//                 <button
//                   type="button"
//                   onclick="fieldClose()"
//                   className="bg-gray-300 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded inline-flex items-center gap-4 w-fit"
//                 >
//                   <span>Close</span>
//                 </button>
//                  {/* save button  */}
//                 <button
//                   type="button"
//                   onclick="staffSave()"
//                   className="bg-green-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded inline-flex items-center gap-4 w-fit"
//                 >
//                   <span id="staff-button-done-text">Done</span>
//                   <img
//                     src="./acessst/image/icon/icons8-done-64.png"
//                     className="fill-current w-5 h-4 mr-2"
//                     alt=""
//                   />
//                 </button>
//               </div>
//               </form> 


//         </>
//     );
// };







import { useNavigate } from "react-router-dom";

const EquipmentAdd = () => {

  const navigate = useNavigate();
  function submitEquipmentForm() {
    
  }
  function closeEquipmentAddForm() {
    navigate("..");
  }
  return (
    <>
      {/* Equipment Section  */}
      <section
        id="mainEquipmentSection"
        className="p-6 flex gap-4 flex-col h-[50vh] w-[50vw] ml-100 mt-10"
      >
        {/* from section  */}
        <form
          id="equipmentForm"
          encType="multipart/form-data" 
        >
          <div
            id="equipmentAddForm"
            // style="display: none"
            className="fixed top-0 bottom-0 left-0 right-[100px] m-auto z-10 bg-[#fdffff] rounded-lg shadow-lg flex flex-col gap-4 w-[50%] h-[80%] p-3 overflow-auto"
          >
            {/* name tag and close button */}
            <div className="flex flex-row items-center justify-between">
              {/* name tag  */}
              <label className="font-semibold text-lg text-green-600">
              Equipment
              </label>
              {/* close button  */}
              <button
                type="button"
                className="w-5"
               onClick={closeEquipmentAddForm}
              >
                <img src="./acessst/image/icon/icons8-close.svg" alt="" />
              </button>
            </div>

            {/* equipment id and name  */}
            <div className="flex flex-row gap-3">
              {/* Equipment id  */}
              <div className="sm:col-span-3 flex-grow-[1]">
                <label
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Equipment id
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="equipmentid"
                    id="equipmentid"
                    className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              {/* equipment name  */}
              <div className="sm:col-span-3 flex-grow-[1]">
                <label
                  // for="equipment-name"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Equipment Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="equipmentName"
                    id="equipmentName"
                    // autocomplete="given-name"
                    className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
            {/* equipment type  */}
            <div className="col-span-full">
              <label
                // for="equipmentType"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Equipment type
              </label>
              <div className="mt-2">
                <textarea
                  id="equipmentType"
                  name="equipmentType"
                  rows={3}
                  className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                ></textarea>
              </div>
            </div>

            {/* available status  */}
            <div className="sm:col-span-3 flex-grow-[1]">
              <label
                // for="availableStatus"
                className="block text-sm/6 font-medium text-gray-900"
              >
                available status
              </label>
              <div className="mt-2 w-[50%]">
                <input
                  type="text"
                  name="availableStatus"
                  id="availableStatus"
                  className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>


              {/* staff members */}
            <div className="sm:col-span-3 flex-grow-[1]">
              <label
                // for="staffMembers"
                className="block text-sm/6 font-medium text-gray-900"
              >
                staff members
              </label>
              <div className="mt-2 w-[50%]">
                <input
                  type="text"
                  name="staffMembers"
                  id="staffMembers"
                  className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>


              {/* field */}
            <div className="sm:col-span-3 flex-grow-[1]">
              <label
                // for="field"
                className="block text-sm/6 font-medium text-gray-900"
              >
                field
              </label>
              <div className="mt-2 w-[50%]">
                <input
                  type="text"
                  name="field"
                  id="field"
                  className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>



            {/* image section */}
            {/* <div className="flex flex-row gap-6">
              <div className="flex flex-row gap-6">
                <div className="col-span-full">
                  <label
                    // for="fieldImage1"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Cover photo
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <img
                        id="field-img1-previewImage"
                        className="mx-auto"
                        // style="height: 200px"
                        src="/src/acessst/image/icon/9812024.png"
                        alt="Preview"
                      />
                      <div className="mt-4 flex text-sm/6 text-gray-600">
                        <label
                          // for="fieldImage1"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="fieldImage1"
                            name="fieldImage1"
                            type="file"
                            className="sr-only"
                            accept="image/png, image/jpeg, image/gif"
                            // onchange="feildUpdateImage1Preview(event)"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs/5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}


              {/* <div className="flex flex-row gap-6">
                <div className="col-span-full">
                  <label
                    // for="fieldImage2"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Cover photo
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <img
                        id="field-img2-previewImage"
                        className="mx-auto"
                        // style="height: 200px"
                        src="/src/acessst/image/icon/9812024.png"
                        alt="Preview"
                      />
                      <div className="mt-4 flex text-sm/6 text-gray-600">
                        <label
                          // for="fieldImage2"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="fieldImage2"
                            name="fieldImage2"
                            type="file"
                            className="sr-only"
                            accept="image/png, image/jpeg, image/gif"
                            // onchange="feildUpdateImage2Preview(event)"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs/5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* close and save button  */}
            <div className="flex justify-end gap-4">
              {/* close button */}
              <button
                type="button"
                onClick={closeEquipmentAddForm}
                className="bg-gray-300 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded inline-flex items-center gap-4 w-fit"
              >
                <span>Close</span>
              </button>
              {/* save button  */}
              <button
                type="submit"
                onClick={submitEquipmentForm}
                className="bg-green-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded inline-flex items-center gap-4 w-fit"
              >
                <span id="field-button-done-text">Done</span>
                <img
                  src="./acessst/image/icon/icons8-done-64.png"
                  className="fill-current w-5 h-4 mr-2"
                  alt=""
                />
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};


export default EquipmentAdd;