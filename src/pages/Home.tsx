export function Home() {
  return (
    <>
      {/* Home Section  */}
      <section id="dashbord" className="p-6 flex gap-4 flex-col">
        <div className="flex flex-col justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-10">Hello, Have a nice day</h1>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="col-span-2">
                <div className="p-4 bg-green-100 rounded-xl flex row justify-between">
                  <div className="font-bold text-xl text-gray-800 leading-none">
                    Good day, <br />
                    <span id="user1"></span>
                  </div>
                  <div>
                    <h1 id="date" className="text-3xl font-bold mb-3"></h1>
                    <h1 id="time" className="text-3xl font-bold mb-10"></h1>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
                <div className="font-bold text-2xl leading-none">20</div>
                <div className="mt-2">Available for next Season Crops</div>
              </div>
              <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
                <div className="font-bold text-2xl leading-none">60</div>
                <div className="mt-2">Available equipment</div>
              </div>
              <div className="col-span-2">
                <div className="p-4 bg-purple-100 rounded-xl text-gray-800">
                  <div className="font-bold text-xl leading-none">
                    Our Landing
                  </div>
                  <div className="mt-2">we have a 8 lands</div>
                </div>
              </div>
            </div>

            <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold" id="staffCount">
                    62
                  </span>
                  <span className="block text-gray-500">All Staff</span>
                </div>
              </div>

              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                  <img src="./acessst/image/icon/icons8-plant-24.png" alt="" />
                </div>
                <div>
                  <span className="block text-2xl font-bold" id="cropCount">
                    6.8
                  </span>
                  <span className="block text-gray-500">Ouer All Crops</span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
                  <img
                    className="h-8 w-8"
                    src="./acessst/image/icon/icons8-vehicle-insurance-48.png"
                    alt=""
                  />
                </div>
                <div>
                  <span
                    className="inline-block text-2xl font-bold"
                    id="vehicleCountUnAvalable"
                  >
                    9
                  </span>
                  <span className="block text-gray-500">
                    Unavailable vehicles{" "}
                  </span>
                </div>
              </div>

              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                  <img
                    className="h-8 w-8"
                    src="./acessst/image/icon/icons8-car-50.png"
                    alt=""
                  />
                </div>
                <div>
                  <span
                    className="inline-block text-2xl font-bold"
                    id="vehicleCountAvalable"
                  >
                    9
                  </span>
                  <span className="block text-gray-500">
                    Available vehicles{" "}
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
