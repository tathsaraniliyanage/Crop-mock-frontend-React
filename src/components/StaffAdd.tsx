// import {link} from "react-router";
// import {Navigation} from "./SideNavigationBar.tsx";


// export const StaffAdd = () => {
//     return (
//         <>
//             <form
//               id="staffAddForm"
//               style="display: none"
//               className="fixed top-0 bottom-0 left-0 right-[100px] m-auto z-10 bg-[#fdffff] rounded-lg shadow-lg flex flex-col gap-4 w-[50%] h-[80%] p-3 overflow-auto"
//             >
//                {/* name tag and close button  */}
//               <div className="flex flex-row items-center justify-between">
//                 {/*  name tag  */}
//                 <label className="font-semibold text-lg text-green-600"
//                   >Staff
//                 </label>
//                  {/* close button  */}
//                 <button
//                   type="button"
//                   className="w-5"
//                   onclick="showStaffAddFromOnClick()"
//                 >
//                   <img src="./acessst/image/icon/icons8-close.svg" alt="" />
//                 </button>
//               </div>

//               <div className="sm:col-span-3 flex-grow-[1]">
//                 <label
//                   for="id"
//                   className="block text-sm/6 font-medium text-gray-900"
//                   >Id</label
//                 >
//                 <div className="mt-2">
//                   <input
//                     required
//                     type="text"
//                     name="id"
//                     id="staff-id"
//                     className="block w-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
//                   />
//                 </div>
//               </div>

//               {/* Staff firstName and lastName */}
//               <div className="flex flex-row gap-3">
//                  {/* staff firstName   */}
//                 <div className="sm:col-span-3 flex-grow-[1]">
//                   <label
//                     for="firstName"
//                     className="block text-sm/6 font-medium text-gray-900"
//                     >First Name</label
//                   >
//                   <div className="mt-2">
//                     <input
//                       required
//                       type="text"
//                       name="firstName"
//                       id="staff-firstName"
//                       autocomplete="given-name"
//                       className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
//                     />
//                   </div>
//                 </div>

//                  {/* staff lastName  */}
//                 <div className="sm:col-span-3 flex-grow-[1]">
//                   <label
//                     for="lastName"
//                     className="block text-sm/6 font-medium text-gray-900"
//                     >Last Name</label
//                   >
//                   <div className="mt-2">
//                     <input
//                       required
//                       type="text"
//                       name="lastName"
//                       id="staff-lastName"
//                       autocomplete="given-name"
//                       className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Designation  */}
//               <div className="col-span-full">
//                 <label
//                   for="designation"
//                   className="block text-sm/6 font-medium text-gray-900"
//                   >designation</label
//                 >
//                 <div className="mt-2">
//                   <input
//                     required
//                     type="text"
//                     name="designation"
//                     id="staff-designation"
//                     className="block w-[50%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
//                   />
//                 </div>
//               </div>

//               {/* Gender  */}
//               <div className="sm:col-span-3 flex-grow-[1]">
//                 <label
//                   for="gender"
//                   className="block text-sm/6 font-medium text-gray-900"
//                   >Gender</label
//                 >
//                 <div className="mt-2 w-[50%]">
//                   <select name="gender" id="staff-gender" required>
//                     <option value="MALE">MALE</option>
//                     <option value="FEMALE">FEMALE</option>
//                   </select>
//                 </div>
//               </div>

//               {/* Joined Date  */}
//               <div className="sm:col-span-3 flex-grow-[1]">
//                 <label
//                   for="joined-date"
//                   className="block text-sm/6 font-medium text-gray-900"
//                   >Joined Date</label
//                 >
//                 <div className="mt-2 w-[50%]">
//                   <input
//                     required
//                     type="date"
//                     name="joinedDate"
//                     id="staff-joined-date"
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
//                   />
//                 </div>
//               </div>

//               {/* DOB  */}
//               <div className="sm:col-span-3 flex-grow-[1]">
//                 <label
//                   for="dob"
//                   className="block text-sm/6 font-medium text-gray-900"
//                   >DOB
//                 </label>
//                 <div className="mt-2 w-[50%]">
//                   <input
//                     required
//                     type="date"
//                     name="dob"
//                     id="staff-dob"
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
//                   />
//                 </div>
//               </div>

//               <div className="flex flex-col gap-3 w-full">
//                 <div className="flex flex-row gap-3">
//                    {/* Address Line 01  */}
//                   <div className="col-span-full grow-[1]">
//                     <label
//                       for="addressLine01"
//                       className="block text-sm/6 font-medium text-gray-900"
//                       >Address Line 1</label
//                     >
//                     <div className="mt-2">
//                       <input
//                         required
//                         type="text"
//                         name="addressLine01"
//                         id="staff-address-line-01"
//                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
//                       />
//                     </div>
//                   </div>

//                   {/* Address Line 02  */}
//                   <div className="col-span-full grow-[1]">
//                     <label
//                       for="staff-address-line-02"
//                       className="block text-sm/6 font-medium text-gray-900"
//                       >Address Line 2</label
//                     >
//                     <div className="mt-2">
//                       <input
//                         required
//                         type="text"
//                         name="addressLine02"
//                         id="addressLine02"
//                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex flex-row gap-3">
//                   {/* Address Line 03  */}
//                   <div className="col-span-full grow-[1]">
//                     <label
//                       for="addressLine03"
//                       className="block text-sm/6 font-medium text-gray-900"
//                       >Address Line 3</label
//                     >
//                     <div className="mt-2">
//                       <input
//                         required
//                         type="text"
//                         name="addressLine03"
//                         id="staff-address-line-03"
//                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
//                       />
//                     </div>
//                   </div>

//                    {/* Address Line 04  */}
//                   <div className="col-span-full grow-[1]">
//                     <label
//                       for="addressLine04"
//                       className="block text-sm/6 font-medium text-gray-900"
//                       >Address Line 4</label
//                     >
//                     <div className="mt-2">
//                       <input
//                         required
//                         type="text"
//                         name="addressLine04"
//                         id="staff-address-line-04"
//                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Address Line 05  */}
//                 <div className="col-span-full">
//                   <label
//                     for="addressLine05"
//                     className="block text-sm/6 font-medium text-gray-900"
//                     >Address Line 5</label
//                   >
//                   <div className="mt-2">
//                     <input
//                       required
//                       type="text"
//                       name="addressLine05"
//                       id="staff-address-line-05"
//                       className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* contact no  */}
//               <div className="sm:col-span-3 flex-grow-[1]">
//                 <label
//                   for="contactNo"
//                   className="block text-sm/6 font-medium text-gray-900"
//                   >Contact No</label
//                 >
//                 <div className="mt-2 w-[50%]">
//                   <input
//                     required
//                     type="text"
//                     name="contactNo"
//                     id="staff-contact-no"
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
//                   />
//                 </div>
//               </div>

//              {/* Email  */}
//               <div className="sm:col-span-3 flex-grow-[1]">
//                 <label
//                   for="email"
//                   className="block text-sm/6 font-medium text-gray-900"
//                   >Email</label
//                 >
//                 <div className="mt-2 w-[50%]">
//                   <input
//                     required
//                     type="email"
//                     name="email"
//                     id="staff-email"
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
//                   />
//                 </div>
//               </div>

//                {/* Role  */}
//               <div className="sm:col-span-3 flex-grow-[1]">
//                 <label
//                   for="role"
//                   className="block text-sm/6 font-medium text-gray-900"
//                   >Role</label
//                 >
//                 <div className="mt-2 w-[50%]">
//                   <select name="role" id="staff-role" required>
//                     <option value="USER">USER</option>
//                     <option value="MANAGER">MANAGER</option>
//                     <option value="ADMINISTRATIVE">ADMINISTRATIVE</option>
//                     <option value="SCIENTIST">SCIENTIST</option>
//                   </select>
//                 </div>
//               </div>

//                {/* close and save button  */}
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
//             </form>
        


//         </>
//     );
// };









import { useNavigate } from "react-router-dom";

const StaffAdd = () => {

  const navigate = useNavigate();
  function submitStaffForm() {
    
  }
  function closeStaffAddForm() {
    navigate("..");
  }
  return (
    <>
      {/* Staff Section  */}
      <section
        id="mainStaffSection"
        className="p-6 flex gap-4 flex-col h-[50vh] w-[50vw] ml-100 mt-10"
      >
        {/* from section  */}
        <form
          id="staffForm"
          encType="multipart/form-data" 
        >
          <div
            id="staffAddForm"
            // style="display: none"
            className="fixed top-0 bottom-0 left-0 right-[100px] m-auto z-10 bg-[#fdffff] rounded-lg shadow-lg flex flex-col gap-4 w-[50%] h-[80%] p-3 overflow-auto"
          >
            {/* name tag and close button */}
            <div className="flex flex-row items-center justify-between">
              {/* name tag  */}
              <label className="font-semibold text-lg text-green-600">
              Staff
              </label>
              {/* close button  */}
              <button
                type="button"
                className="w-5"
               onClick={closeStaffAddForm}
              >
                <img src="./acessst/image/icon/icons8-close.svg" alt="" />
              </button>
            </div>

            {/* Staff code and name  */}
            <div className="flex flex-row gap-3">
              {/* Staff code  */}
              <div className="sm:col-span-3 flex-grow-[1]">
                <label
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Staff Code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="StaffCode"
                    id="StaffCode"
                    className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              {/* first name  */}
              <div className="sm:col-span-3 flex-grow-[1]">
                <label
                  // for="first-name"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  first Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    // autocomplete="given-name"
                    className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
            {/* last name  */}
            <div className="col-span-full">
              <label
                // for="last name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                last name
              </label>
              <div className="mt-2">
                <textarea
                  id="lastName"
                  name="lastName"
                  rows={3}
                  className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                ></textarea>
              </div>
            </div>
            {/* address  */}
            <div className="sm:col-span-3 flex-grow-[1]">
              <label
                // for="address"
                className="block text-sm/6 font-medium text-gray-900"
              >
                address
              </label>
              <div className="mt-2 w-[50%]">
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {/* designation              */}
            <div className="sm:col-span-3 flex-grow-[1]">
              <label
                // for="designation"
                className="block text-sm/6 font-medium text-gray-900"
              >
                designation
              </label>
              <div className="mt-2 w-[50%]">
                <input
                  type="text"
                  name="designation"
                  id="designation"
                  className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

                {/* dob */}
            <div className="sm:col-span-3 flex-grow-[1]">
              <label
                // for="dob"
                className="block text-sm/6 font-medium text-gray-900"
              >
                dob
              </label>
              <div className="mt-2 w-[50%]">
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>



            <div className="sm:col-span-3 flex-grow-[1]">
              <label
                // for="dob"
                className="block text-sm/6 font-medium text-gray-900"
              >
               dob
              </label>
              <div className="mt-2 w-[50%]">
                <input
                  type="text"
                  name="dob"
                  id="dob"
                  className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

          {/* joined date */}
            <div className="sm:col-span-3 flex-grow-[1]">
              <label
                // for="joined date"
                className="block text-sm/6 font-medium text-gray-900"
              >
                joined date
              </label>
              <div className="mt-2 w-[50%]">
                <input
                  type="text"
                  name="joineddate"
                  id="joined date"
                  className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

              {/* gender */}
            <div className="sm:col-span-3 flex-grow-[1]">
              <label
                // for="gender"
                className="block text-sm/6 font-medium text-gray-900"
              >
                gender
              </label>
              <div className="mt-2 w-[50%]">
                <input
                  type="text"
                  name="gender"
                  id="gender"
                  className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3 flex-grow-[1]">
              <label
                // for="contact no"
                className="block text-sm/6 font-medium text-gray-900"
              >
                contact no
              </label>
              <div className="mt-2 w-[50%]">
                <input
                  type="text"
                  name="contactno"
                  id="contactno"
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
                onClick={closeStaffAddForm}
                className="bg-gray-300 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded inline-flex items-center gap-4 w-fit"
              >
                <span>Close</span>
              </button>
              {/* save button  */}
              <button
                type="submit"
                onClick={submitStaffForm}
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


export default StaffAdd;










