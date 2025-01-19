// import {Outlet} from "react-router";
// import {Navigation} from "./SideNavigationBar.tsx";


// export const LogAdd = () => {
//     return (
//         <>
//              <form
//               id="cropLogForm"
//               onsubmit="submitCropLogForm(event)"
//               enctype="multipart/form-data"
//               // style="height: 80%; overflow: auto"
//             >
//               {/* Monitoring Log  */}
//               <div
//                 id="monitoringLogAddForm"
//                 // style="display: none"
//                 className="fixed h-[68%] overflow-auto top-0 bottom-0 left-0 right-[100px] m-auto z-10 bg-[#fdffff] rounded-lg shadow-lg flex flex-col gap-4 w-[50%] h-fit p-3 overflow-auto"
//               >
//                  {/* name tag and close button  */}
//                 <div className="flex flex-row items-center justify-between">
//                   {/* name tag  */}
//                   <label className="font-semibold text-lg text-green-600">
//                     monitoring Log
//                   </label>
//                   {/* close button  */}
//                   <button
//                     type="button"
//                     className="w-5"
//                     onclick="showMonitoringLogAddFromOnClick()"
//                   >
//                     <img src="./acessst/image/icon/icons8-close.svg" alt="" />
//                   </button>
//                 </div>

//                   {/* Log code and name  */}
//                 <div className="flex flex-row gap-3">
//                   {/* log code   */}
//                   <div className="sm:col-span-3 flex-grow-[1]">
//                     <label
//                       for="logCode"
//                       className="block text-sm/6 font-medium text-gray-900"
//                       >log Code</label
//                     >
//                     <div className="mt-2">
//                       <input
//                         type="text"
//                         name="logCode"
//                         id="logCode"
//                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
//                       />
//                     </div>
//                   </div>
//                    {/* log date  */}
//                   <div className="sm:col-span-3 flex-grow-[1]">
//                     <label
//                       for="logDate"
//                       className="block text-sm/6 font-medium text-gray-900"
//                       >log date</label
//                     >
//                     <div className="mt-2">
//                       <input
//                         type="date"
//                         name="logDate"
//                         id="logDate"
//                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* log details / observations */}
//                 <div className="col-span-full">
//                   <label
//                     for="logDetails"
//                     className="block text-sm/6 font-medium text-gray-900"
//                     >log details
//                   </label>
//                   <div className="mt-2">
//                     <input id="logDetails" name="logDetails" rows="3"
//                     className="block rounded-md border-0 py-1.5 text-gray-900
//                     shadow-sm ring-1 ring-inset ring-gray-300 w-[50%]
//                     placeholder:text-gray-400 focus:ring-2 focus:ring-inset
//                     focus:ring-indigo-600 sm:text-sm/6" / >
//                   </div>
//                 </div>

//                  {/* image section */}
//                 <div className="flex flex-row gap-6">
//                   <div className="col-span-full">
//                     <label
//                       for="observedImage"
//                       className="block text-sm/6 font-medium text-gray-900"
//                       >Observed Image</label
//                     >
//                     <div
//                       className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
//                     >
//                       <div className="text-center">
//                         <img
//                           id="crop-log-previewImage"
//                           className="mx-auto"
//                           // style="height: 200px"
//                           src="/src/acessst/image/icon/9812024.png"
//                           alt="Preview"
//                         />
//                         <div className="mt-4 flex text-sm/6 text-gray-600">
//                           <label
//                             for="observedImage"
//                             className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
//                           >
//                             <span>Upload a file</span>
//                             <input
//                               id="observedImage"
//                               name="observedImage"
//                               type="file"
//                               className="sr-only"
//                               accept="image/png, image/jpeg, image/gif"
//                               onchange="cropLogUpdateImagePreview(event)"
//                             />
//                           </label>
//                           <p className="pl-1">or drag and drop</p>
//                         </div>
//                         <p className="text-xs/5 text-gray-600">
//                           PNG, JPG, GIF up to 10MB
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                {/* fields  */}
//                 <div className="relative font-[sans-serif] w-fit">
//                   <button
//                     type="button"
//                     id="dropdownToggleField"
//                     className="px-5 py-2.5 rounded text-white text-sm font-semibold border-none outline-none bg-[#4CAF50] hover:bg-[#22C55E] active:bg-[#22C55E]"
//                   >
//                     Select Crops Maintainer Fields
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-3 fill-white inline ml-3"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         fill-rule="evenodd"
//                         d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
//                         clip-rule="evenodd"
//                         data-original="#000000"
//                       />
//                     </svg>
//                   </button>

//                   <ul
//                     id="dropdownMenuField"
//                     className="relative hidden shadow-lg bg-white py-2 px-2 z-[1000] min-w-full w-max rounded max-h-96 overflow-auto"
//                   >
//                     <div className="flex items-center mb-4">
//                       <input
//                         id="default-checkbox"
//                         type="checkbox"
//                         value=""
//                         className="w-4 h-4 text-[#22C55E] bg-[#22C55E] border-[#22C55E] rounded focus:ring-[#22C55E]"
//                       />
//                       <label
//                         for="default-checkbox"
//                         className="ms-2 text-sm font-medium text-gray-900"
//                         >Default checkbox</label
//                       >
//                     </div>
//                     <div className="flex items-center">
//                       <input
//                         checked
//                         id="checked-checkbox"
//                         type="checkbox"
//                         value=""
//                         className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//                       />
//                       <label
//                         for="checked-checkbox"
//                         className="ms-2 text-sm font-medium text-gray-900"
//                         >Checked state</label
//                       >
//                     </div>
//                   </ul>
//                 </div>

//                  {/* Crop  */}
//                 <div className="relative font-[sans-serif] w-fit">
//                   <button
//                     type="button"
//                     id="dropdownToggleCrop"
//                     className="px-5 py-2.5 rounded text-white text-sm font-semibold border-none outline-none bg-[#4CAF50] hover:bg-[#22C55E] active:bg-[#22C55E]"
//                   >
//                     Select Maintainered Crops
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-3 fill-white inline ml-3"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         fill-rule="evenodd"
//                         d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
//                         clip-rule="evenodd"
//                         data-original="#000000"
//                       />
//                     </svg>
//                   </button>

//                   <ul
//                     id="dropdownMenuCrop"
//                     className="relative hidden shadow-lg bg-white py-2 px-2 z-[1000] min-w-full w-max rounded max-h-96 overflow-auto"
//                   >
//                     <div className="flex items-center mb-4">
//                       <input
//                         id="default-checkbox"
//                         type="checkbox"
//                         value=""
//                         className="w-4 h-4 text-[#22C55E] bg-[#22C55E] border-[#22C55E] rounded focus:ring-[#22C55E]"
//                       />
//                       <label
//                         for="default-checkbox"
//                         className="ms-2 text-sm font-medium text-gray-900"
//                         >Default checkbox</label
//                       >
//                     </div>
//                     <div className="flex items-center">
//                       <input
//                         checked
//                         id="checked-checkbox"
//                         type="checkbox"
//                         value=""
//                         className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//                       />
//                       <label
//                         for="checked-checkbox"
//                         className="ms-2 text-sm font-medium text-gray-900"
//                         >Checked state</label
//                       >
//                     </div>
//                   </ul>
//                 </div>

//                  {/* Staff  */}
//                 <div className="relative font-[sans-serif] w-fit">
//                   <button
//                     type="button"
//                     id="dropdownToggleStaff"
//                     className="px-5 py-2.5 rounded text-white text-sm font-semibold border-none outline-none bg-[#4CAF50] hover:bg-[#22C55E] active:bg-[#22C55E]"
//                   >
//                     Select Maintainered Staff Members
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-3 fill-white inline ml-3"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         fill-rule="evenodd"
//                         d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
//                         clip-rule="evenodd"
//                         data-original="#000000"
//                       />
//                     </svg>
//                   </button>

//                   <ul
//                     id="dropdownMenuStaff"
//                     className="relative hidden shadow-lg bg-white py-2 px-2 z-[1000] min-w-full w-max rounded max-h-96 overflow-auto"
//                   >
//                     <div className="flex items-center mb-4">
//                       <input
//                         id="default-checkbox"
//                         type="checkbox"
//                         value=""
//                         className="w-4 h-4 text-[#22C55E] bg-[#22C55E] border-[#22C55E] rounded focus:ring-[#22C55E]"
//                       />
//                       <label
//                         for="default-checkbox"
//                         className="ms-2 text-sm font-medium text-gray-900"
//                         >Default checkbox</label
//                       >
//                     </div>
//                     <div className="flex items-center">
//                       <input
//                         checked
//                         id="checked-checkbox"
//                         type="checkbox"
//                         value=""
//                         className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//                       />
//                       <label
//                         for="checked-checkbox"
//                         className="ms-2 text-sm font-medium text-gray-900"
//                         >Checked state</label
//                       >
//                     </div>
//                   </ul>
//                 </div>

//                  {/* close and save button  */}
//                 <div className="flex justify-end gap-4 mt-6 mb-6">
//                    {/* close button  */}
//                   <button
//                     type="button"
//                     onclick="MonitoringlogClose()"
//                     className="bg-gray-300 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded inline-flex items-center gap-4 w-fit"
//                   >
//                     <span>Close</span>
//                   </button>
//                   {/* save button  */}
//                   <button
//                     type="submit"
//                     onclick="MonitoringlogSave()"
//                     className="bg-green-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded inline-flex items-center gap-4 w-fit"
//                   >
//                     <span id="Monitoringlog-button-done-text">Done</span>
//                     <img
//                       src="./acessst/image/icon/icons8-done-64.png"
//                       className="fill-current w-5 h-4 mr-2"
//                       alt=""
//                     />
//                   </button>
//                 </div>
//               </div>
//             </form>
         

          
//         </>
//     );
// };










import { useNavigate } from "react-router-dom";

const LogAdd = () => {

  const navigate = useNavigate();
  function submitLogForm() {
    
  }
  function closeLogAddForm() {
    navigate("..");
  }

 
  return (
    <>
      {/* Log Section  */}
      <section
        id="mainLogSection"
        className="p-6 flex gap-4 flex-col h-[50vh] w-[50vw] ml-100 mt-10"
      >
        {/* from section  */}
        <form
          id="logForm"
          encType="multipart/form-data" 
        >
          <div
            id="logAddForm"
            // style="display: none"
            className="fixed top-0 bottom-0 left-0 right-[100px] m-auto z-10 bg-[#fdffff] rounded-lg shadow-lg flex flex-col gap-4 w-[50%] h-[80%] p-3 overflow-auto"
          >
            {/* name tag and close button */}
            <div className="flex flex-row items-center justify-between">
              {/* name tag  */}
              <label className="font-semibold text-lg text-green-600">
                Log
              </label>
              {/* close button  */}
              <button
                type="button"
                className="w-5"
               onClick={closeLogAddForm}
              >
                <img src="./acessst/image/icon/icons8-close.svg" alt="" />
              </button>
            </div>

            {/* field code and name  */}
            <div className="flex flex-row gap-3">
              {/* field code  */}
              <div className="sm:col-span-3 flex-grow-[1]">
                <label
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Log Code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="logCode"
                    id="logCode"
                    className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              {/* date  */}
              <div className="sm:col-span-3 flex-grow-[1]">
                <label
                  // for="date"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  date
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="date"
                    id="date"
                    // autocomplete="given-name"
                    className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
            {/* details  */}
            <div className="col-span-full">
              <label
                // for="details"
                className="block text-sm/6 font-medium text-gray-900"
              >
                details
              </label>
              <div className="mt-2">
                <textarea
                  id="details"
                  name="details"
                  rows={3}
                  className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                ></textarea>
              </div>
            </div>
            {/* field  */}
            <div className="sm:col-span-3 flex-grow-[1]">
              <label
                // for="extentSize"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Field
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

             {/* staff */}
             <div className="sm:col-span-3 flex-grow-[1]">
              <label
                // for="staff"
                className="block text-sm/6 font-medium text-gray-900"
              >
                staff
              </label>
              <div className="mt-2 w-[50%]">
                <input
                  type="text"
                  name="staff"
                  id="staff"
                  className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

             {/* crop  */}
             <div className="sm:col-span-3 flex-grow-[1]">
              <label
                // for="crop"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Crop
              </label>
              <div className="mt-2 w-[50%]">
                <input
                  type="text"
                  name="crop"
                  id="crop"
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
              </div>

              <div className="flex flex-row gap-6">
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
                onClick={closeLogAddForm}
                className="bg-gray-300 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded inline-flex items-center gap-4 w-fit"
              >
                <span>Close</span>
              </button>
              {/* save button  */}
              <button
                type="submit"
                onClick={submitLogForm}
                className="bg-green-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded inline-flex items-center gap-4 w-fit"
              >
                <span id="field-button-done-text">Done</span>
                <img
                  src="./assets/image/icon/icons8-done-64.png"
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


export default LogAdd;






