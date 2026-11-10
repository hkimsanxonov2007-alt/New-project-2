function Header() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-full bg-[#F3F4FF] p-25 flex flex-col gap-5">
        <h1 className="text-[55px] text-[#000000] font-bold">
          Banking Should Be Easy.
        </h1>
        <h2 className="text-[20px] text-[#363D70] font-normal">
          financial transactions without interet using a mobile device such as a
          smartphone or tablet with bluetooth.{" "}
        </h2>
        <button className="w-54.5 h-17.5 text-[20px] text-[#FAFCFF] font-medium cursor-pointer bg-[#3C50E0] rounded-2xl">
          Get started
        </button>
      </div>
      <div className="w-[50%] h-full bg-[#3C50E0] relative rounded-r-3xl">
        <img className="absolute -left-5 -top-15" src="1.png" alt="" />
        <img className="absolute top-25 right-0" src="2.png" alt="" />
        <img className="absolute z-1" src="3.png" alt="" />
        <img className="absolute -left-15 -bottom-35 z-2" src="4.png" alt="" />
        <div className="w-42.5 h-53.75 absolute bottom-4 right-20 z-3 rounded-2xl  bg-[#0C1229]">
          <div className="w-full h-full relative">
            <img className="absolute bottom-0 right-0" src="5.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
