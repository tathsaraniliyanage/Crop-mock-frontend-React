import { useNavigate } from "react-router-dom";

const FieldAdd = () => {

  const navigate = useNavigate();
  function submitFieldForm() {
    
  }
  function closeFieldAddForm() {
    navigate("..");
  }
  return (
    <>
      {/* Field Section  */}
      <section
        id="mainFieldSection"
        className="p-6 flex gap-4 flex-col h-[50vh] w-[50vw] ml-100 mt-10"
      >
        {/* from section  */}
        <form
          id="fieldForm"
          encType="multipart/form-data" 
        >
          <div
            id="fieldAddForm"
            // style="display: none"
            className="fixed top-0 bottom-0 left-0 right-[100px] m-auto z-10 bg-[#fdffff] rounded-lg shadow-lg flex flex-col gap-4 w-[50%] h-[80%] p-3 overflow-auto"
          >
            {/* name tag and close button */}
            <div className="flex flex-row items-center justify-between">
              {/* name tag  */}
              <label className="font-semibold text-lg text-green-600">
                Field
              </label>
              {/* close button  */}
              <button
                type="button"
                className="w-5"
               onClick={closeFieldAddForm}
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
                  Field Code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="fieldCode"
                    id="fieldCode"
                    className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              {/* filed name  */}
              <div className="sm:col-span-3 flex-grow-[1]">
                <label
                  // for="field-name"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Field Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="fieldName"
                    id="fieldName"
                    // autocomplete="given-name"
                    className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
            {/* field location  */}
            <div className="col-span-full">
              <label
                // for="fieldLocation"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Field Location
              </label>
              <div className="mt-2">
                <textarea
                  id="fieldLocation"
                  name="fieldLocation"
                  rows={3}
                  className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                ></textarea>
              </div>
            </div>
            {/* extended size  */}
            <div className="sm:col-span-3 flex-grow-[1]">
              <label
                // for="extentSize"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Extended size
              </label>
              <div className="mt-2 w-[50%]">
                <input
                  type="text"
                  name="extentSize"
                  id="extentSize"
                  className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            {/* image section */}
            <div className="flex flex-row gap-6">
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
            </div>

            {/* close and save button  */}
            <div className="flex justify-end gap-4">
              {/* close button */}
              <button
                type="button"
                onClick={closeFieldAddForm}
                className="bg-gray-300 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded inline-flex items-center gap-4 w-fit"
              >
                <span>Close</span>
              </button>
              {/* save button  */}
              <button
                type="submit"
                onClick={submitFieldForm}
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


export default FieldAdd;