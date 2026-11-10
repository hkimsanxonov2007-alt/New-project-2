function CTA() {
  return (
    <div className="w-full h-200 flex justify-center items-center">
      <div className="w-236.75 h-174.75  flex justify-between items-center">
        <div className="w-85 h-full relative ">
          <img className="absolute" src="6.png" alt="" />
          <img className="absolute left-2.5 top-2.5" src="7.png" alt="" />
        </div>
        <div className="w-87.5 h-[90%] flex flex-col gap-5">
          <h1 className="text-[45px] text-[#000000] font-semibold">
            Download mobile App
          </h1>
          <p className="text-[18px] text-[#6C6C6C] font-normal">
            Download Tripay mobile banking app for IOS and android. It helps you
            banking quickly and more smartly.
          </p>
          <button className="w-60.5 h-20 text-[#000000] text-[20px] font-medium cursor-pointer border border-[#B5BAE0] rounded-4xl">
            App Store
          </button>
          <button className="w-60.5 h-20 text-[#000000] text-[20px] font-medium cursor-pointer border border-[#B5BAE0] rounded-4xl">
            Play Store
          </button>
        </div>
      </div>
    </div>
  );
}
export default CTA;
