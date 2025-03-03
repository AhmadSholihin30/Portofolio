function Portofolio() {
  return (
    <div className="section" id="portofolio">
      <div className="container mx-auto max-w-[1200px] mt-15 lg:mt-20">
        <div className="flex flex-col lg:flex-row justify-between mb-[50px]">
          <div className="order-2 lg:order-1 mt-5 pl-3">
            <div className="font-serif text-next text-[32px]">Recent Work</div>
            <div className="text-next font-sans max-w-[700px] mx-auto text-[24px]">
              In this section, I showcase my most recent work experience,
              highlighting my role, responsibilities, and key contributions.
            </div>
          </div>
          <div className="order-1 lg:order-2 text-center">
            <h2 className="text-next font-serif max-w-[700px] mx-auto text-[50px]">
              08
            </h2>
            <div className="text-next font-serif ">Work Experience</div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 text-center ">
          <div className="w-full">
            <div className="bg-white h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
              <img src="/image/img3.jpg" alt="" />
              <div className="absolute p-5 bg-transparent w-full h-full opacity-0 group-hover:opacity-100 items-center transition">
                <div className="text-center w-full text-white mt-[60px] group-hover:mt-5 transition-all">
                  <div className="bg-white rounded-full px-5 inline-block mb-2">
                    <h1 className="text-next">Web dev</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-white h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
              <img src="/image/img.4.jpg" alt="" />
              <div className="absolute p-5 bg-transparent w-full h-full opacity-0 group-hover:opacity-100 items-center transition">
                <div className="text-center w-full text-white mt-[60px] group-hover:mt-5 transition-all">
                  <div className="bg-white rounded-full px-5 inline-block mb-2">
                    <h1 className="text-next">Blue-Collar Worker</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-white h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
              <img src="/image/img5.jpg" alt="" />
              <div className="absolute p-5 bg-transparent w-full h-full opacity-0 group-hover:opacity-100 items-center transition">
                <div className="text-center w-full text-white mt-[60px] group-hover:mt-5 transition-all">
                  <div className="bg-white rounded-full px-5 inline-block mb-2">
                    <h1 className="text-next">Palm oil farmer</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-white h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
              <img src="/image/img6.png" alt="" />
              <div className="absolute p-5 bg-transparent w-full h-full opacity-0 group-hover:opacity-100 items-center transition">
                <div className="text-center w-full text-white mt-[60px] group-hover:mt-5 transition-all">
                  <div className="bg-white rounded-full px-5 inline-block mb-2">
                    <h1 className="text-next">Software dev</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-white h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
              <img src="/image/img7.jpg" alt="" />
              <div className="absolute p-5 bg-transparent w-full h-full opacity-0 group-hover:opacity-100 items-center transition">
                <div className="text-center w-full text-white mt-[60px] group-hover:mt-5 transition-all">
                  <div className="bg-white rounded-full px-5  inline-block mb-2">
                    <h1 className="text-next">Cyber Security</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-white h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
              <img src="/image/img8.jpg" alt="" />
              <div className="absolute p-5 bg-transparent w-full h-full opacity-0 group-hover:opacity-100 items-center transition">
                <div className="text-center w-full text-white mt-[60px] group-hover:mt-5 transition-all">
                  <div className="bg-white rounded-full px-5 inline-block mb-2">
                    <h1 className="text-next">Gamer</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-white h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
              <img src="/image/img9.jpg" alt="" />
              <div className="absolute p-5 bg-transparent w-full h-full opacity-0 group-hover:opacity-100 items-center transition">
                <div className="text-center w-full text-white mt-[60px] group-hover:mt-5 transition-all">
                  <div className="bg-white rounded-full px-5 inline-block mb-2">
                    <h1 className="text-next">Digital Marketing</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-white h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
              <img src="/image/img10.jpg" alt="" />
              <div className="absolute p-5 bg-transparent w-full h-full opacity-0 group-hover:opacity-100 items-center transition">
                <div className="text-center w-full text-white mt-[60px] group-hover:mt-5 transition-all">
                  <div className="bg-white rounded-full px-5 inline-block mb-2">
                    <h1 className="text-next">
                      AI dan Machine Learning Specialist
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portofolio;
