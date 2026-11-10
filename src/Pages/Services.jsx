function Services() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-2.5   ">
      <div className="w-103 h-50 ">
        <h1 className="text-[48px] text-[#000000] font-semibold text-center">
          How it works
        </h1>
        <h2 className="text-[#6C6C6C] text-[18px] font-normal text-center">
          Mobile banking differs from mobile payments, which involves the use of
          a mobile device
        </h2>
      </div>
      <div className="w-full h-[50%] flex justify-center items-center">
        <div className="w-[30%] h-full p-15">
          <h1 className="text-[28px] text-center text-[#000000] font-semibold">
            Information
          </h1>
          <p className="text-[18px] text-[#5D8082] text-center font-normal">
            Enter your information ensure your details safe and more secure
          </p>
        </div>
        <div className="w-[30%] h-full p-15">
          <h1 className="text-[28px] text-center text-[#000000] font-semibold">
            Data Secure
          </h1>
          <p className="text-[18px] text-[#5D8082] text-center font-normal">
            Sending money faster & easier with end to end encryption.
          </p>
        </div>
        <div className="w-[30%] h-full p-15">
          <h1 className="text-[28px] text-center text-[#000000] font-semibold">
            Add Cards
          </h1>
          <p className="text-[18px] text-[#5D8082] text-center font-normal">
            Add multiple cards and track your daily expense with quality
            interface
          </p>
        </div>
      </div>
    </div>
  );
}
export default Services;
