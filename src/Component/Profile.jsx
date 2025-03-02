function Profile() {
  return (
    <div id="profile" className="section">
      <div className="container mx-auto mt-20 max-w-[1200px] p-3 overflow-hidden">
        <div className="font-serif justify-center font-bold text-slate-700 mb-12">
          <p>
            This section showcases my educational background, highlighting my
            academic journey from elementary school to university. Each stage
            represents my growth and learning experiences, shaping my knowledge
            and skills along the way
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div className="text-center w-full max-w-[400px] mx-auto mb-[50px]">
            <div className="min-w-[300px] min-h-[300px] pt-[50px] rounded-full object-cover bg-transparent shadow-2xl border-6 border-yellow-100 overflow-hidden">
              <img src="./src/image/img2.png" alt="" />
            </div>
            <h2 className="text-next text-2xl font-bold pt-2 lg:pt-0">Ahmad Sholihin</h2>
          </div>
          <div className="w-full lg:pt-[50px]">
            <div className="px-1 lg:px-20">
              <div className="text-center text-next text-xl mb-2">
                Educational Background
              </div>
              <table className="w-full">
                <thead className="bg-gradient-to-br from-yellow-300 to-green-200 border-1 border-black">
                  <tr className="">
                    <th className="p-3 text-sm font-semibold tracking-wide text-center border-1 border-black">
                      Year
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-center border-1 border-black">
                      institution
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td className="border-1 text-sm border-black py-4">
                      <p>2013-2019</p>
                    </td>
                    <td className="text-sm border-1 border-black">
                      <p>SD Negeri 015 Tambusai</p>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td className="border-1 text-sm border-black py-4">
                      2019-2021
                    </td>
                    <td className="border-1 text-sm border-black">
                      SMP Negeri Islam Teknologi Rambah
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td className="border-1 text-sm border-black py-4">
                      <p>2019-2022</p>
                    </td>
                    <td className="text-sm border-1 border-black">
                      <p>SMA Negeri 2 Rambah Hilir</p>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td className="border-1 text-sm border-black py-4">
                      <p>2023-Now</p>
                    </td>
                    <td className="text-sm border-1 border-black">
                      <p>
                        State Islamic University of Sultan Syarif Kasim Riau
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
