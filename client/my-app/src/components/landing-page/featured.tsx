

const Featured = () => {
  return (
    <div className="featured h-[600px] flex justify-center bg-[#013914] text-white">
      <div className="container w-[1400px] flex items-center">
        <div className="left flex flex-col gap-8">
          <h1 className="text-5xl">
            Find the perfect <span className="italic font-light">freelance</span> services for your
            business
          </h1>
         


          <div className="popular flex items-center gap-2">
            <span className="whitespace-nowrap">Popular:</span>
            <button className="px-2 py-1 text-white border border-white rounded-full bg-transparent text-sm">
              Web Design
            </button>
            <button className="px-2 py-1 text-white border border-white rounded-full bg-transparent text-sm">
              WordPress
            </button>
            <button className="px-2 py-1 text-white border border-white rounded-full bg-transparent text-sm">
              Logo Design
            </button>
            <button className="px-2 py-1 text-white border border-white rounded-full bg-transparent text-sm">
              AI Services
            </button>
          </div>
        </div>
        <div className="right h-fit">
          <img src="./img/man.png" alt="" className="h-max object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Featured;