// import {Outlet} from "react-router";
// import {Navigation} from "./SideNavigationBar.tsx";


// export const CropAdd = () => {
//     return (
//         <>
           
//            {isModalOpen && (
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
//                 </div> 


//         </>
//     );
// };












import { useNavigate } from "react-router-dom";

const CropAdd = () => {

  const navigate = useNavigate();
  function submitCropForm() {
    
  }
  function closeCropAddForm() {
    navigate("..");
  }
  return (
    <>
      {/* Crop Section  */}
      <section
        id="mainFieldSection"
        className="p-6 flex gap-4 flex-col h-[50vh] w-[50vw] ml-100 mt-10"
      >
        {/* from section  */}
        <form
          id="cropForm"
          encType="multipart/form-data" 
        >
          <div
            id="cropAddForm"
            // style="display: none"
            className="fixed top-0 bottom-0 left-0 right-[100px] m-auto z-10 bg-[#fdffff] rounded-lg shadow-lg flex flex-col gap-4 w-[50%] h-[80%] p-3 overflow-auto"
          >
            {/* name tag and close button */}
            <div className="flex flex-row items-center justify-between">
              {/* name tag  */}
              <label className="font-semibold text-lg text-green-600">
                Crop
              </label>
              {/* close button  */}
              <button
                type="button"
                className="w-5"
               onClick={closeCropAddForm}
              >
                <img src="./src/assets/image/icon/icons8-close.svg" alt="" />
              </button>
            </div>

            {/* crop code and name  */}
            <div className="flex flex-row gap-3">
              {/* crop code  */}
              <div className="sm:col-span-3 flex-grow-[1]">
                <label
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Crop Code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="cropCode"
                    id="cropCode"
                    className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              {/* crop common name  */}
              <div className="sm:col-span-3 flex-grow-[1]">
                <label
                  // for="crop-common-name"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Crop Common Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="cropCommonName"
                    id="cropCommonName"
                    // autocomplete="given-name"
                    className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
            {/* crop scientific name  */}
            <div className="col-span-full">
              <label
                // for="cropScientificName"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Crop Scientific Name
              </label>
              <div className="mt-2">
                <textarea
                  id="cropScientificName"
                  name="cropScientificName"
                  rows={3}
                  className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                ></textarea>
              </div>
            </div>
            {/*crop season  */}
            <div className="sm:col-span-3 flex-grow-[1]">
              <label
                // for="cropSeason"
                className="block text-sm/6 font-medium text-gray-900"
              >
               Crop Season
              </label>
              <div className="mt-2 w-[50%]">
                <input
                  type="text"
                  name="cropSeason"
                  id="cropSeason"
                  className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

             {/* category  */}
             <div className="sm:col-span-3 flex-grow-[1]">
              <label
                // for="category"
                className="block text-sm/6 font-medium text-gray-900"
              >
               category
              </label>
              <div className="mt-2 w-[50%]">
                <input
                  type="text"
                  name="category"
                  id="category"
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
                onClick={closeCropAddForm}
                className="bg-gray-300 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded inline-flex items-center gap-4 w-fit"
              >
                <span>Close</span>
              </button>
              {/* save button  */}
              <button
                type="submit"
                onClick={submitCropForm}
                className="bg-green-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded inline-flex items-center gap-4 w-fit"
              >
                <span id="field-button-done-text">Done</span>
                <img
                  src="./src/assets/image/icon/icons8-done-64.png"
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


export default CropAdd;