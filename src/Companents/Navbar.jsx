function Navbar() {
  return (
    <div className="w-full h-[10vh] px-5 flex justify-between items-center font-semibold">
      <h1 className="text-[28px] text-[#3C50E0] font-bold">Tripay</h1>
      <ul className="flex justify-center gap-10 items-center">
        <li className="text-[18px] text-[#848484]">Business</li>
        <li className="text-[18px] text-[#848484]">Pricing</li>
        <li className="text-[18px] text-[#848484]">Features</li>
        <li className="text-[18px] text-[#848484]">About</li>
      </ul>
      <div className="flex gap-5 justify-center items-center">
        <h1>
          <a
            className="hover:cursor-pointer text-[18px] text-[#3C50E0] font-medium"
            href=""
          >
            Log in
          </a>
        </h1>
        <button className="w-34.25 h-10 rounded-2xl bg-[#3C50E0] text-[18px] text-[#FFFFFF] font-medium cursor-pointer">
          Sign Up
        </button>
      </div>
    </div>
  );
}
export default Navbar;
