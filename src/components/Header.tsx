function Headers() {
  return (
    <>
      <section className="relative w-full h-[50px] bg-white flex flex-row justify-between items-center shadow-sm z-10 p-4">
        <span className="text-[#0E836B] text-xs font-bold">Green Shadow</span>
        <div className="flex flex-row gap-2 justify-center items-center">
          <img
            className="h-[24px]"
            src="/src/assets/image/Group 88.png"
            alt=""
          />
          <img
            className="h-[44px]"
            src="/src/assets/image/Ellipse 1.png"
            alt=""
          />
          <span id="user2" className="text-gray-600 text-xs">
            Shambhavi Mishra
          </span>
        </div>
      </section>
    </>
  );
}

export default Headers;
