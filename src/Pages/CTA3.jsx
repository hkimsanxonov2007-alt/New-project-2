function CTA3() {
  return (
    <div className="w-full h-[80vh] flex-col flex justify-center items-center gap-3.5">
      <div className="w-240 h-1 bg-[#F5F5F5]"></div>
      <div className="w-207 h-93 bg-[#3C50E0] rounded-3xl flex flex-col justify-center items-center">
        <h1 className="text-[#FFFFFF] text-center text-[40px] font-semibold">
          Subscribe Newsletter
        </h1>
        <p className="w-140.75  text-center text-[#E8E8E8] text-[16px] font-normal">
          financial transactions without interet using a mobile device such as a
          smartphone or tablet with bluetooth.{" "}
        </p>
        <div className="w-154.25 h-20.25 border px-2.5 rounded-3xl bg-[#F5F5F5] flex justify-center items-center gap-2.5 ">
          <input
            className="w-[70%] h-18.75 rounded-3xl px-10 text-[20px] text-[#989898] font-normal placeholder:text-gray-500"
            placeholder="Enter your email."
            type="text"
          />
          <button className="w-49.25 h-18.75 text-[20px] text-[#FFFFFF] font-normal cursor-pointer rounded-3xl bg-[#141E6C]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
export default CTA3;
