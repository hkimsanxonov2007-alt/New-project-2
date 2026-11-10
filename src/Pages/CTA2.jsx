function CTA2() {
  return (
    <div className="w-full h-200 flex justify-center items-center">
      <div className="w-236.75 h-174.75  flex justify-between items-center">
        <div className="w-90 h-120 flex flex-col gap-2.5 p-2.5">
          <h1 className="text-[#000000] text-[45px] font-semibold">
            Connecting all your banking needs.
          </h1>
          <p className="text-[18px] text-[#6C6C6C] font-normal">
            financial transactions remotely using a mobile device such as a
            smartphone or tablet.{" "}
          </p>
          <button className="w-47.5 h-17.5 text-[20px] text-[#151515] font-medium rounded-2xl cursor-pointer border border-[#6C6C6C]">
            Get started
          </button>
        </div>
        <div className="w-85 h-full relative ">
          <img className="absolute" src="6.png" alt="" />
          <img
            className="absolute left-4 rounded-4xl top-2.5"
            src="8.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default CTA2;
