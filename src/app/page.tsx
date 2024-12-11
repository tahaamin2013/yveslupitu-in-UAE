import Image from "next/image";

export default async function Home() {
  return (
    <div className="flex flex-col mt-4 justify-center sm:justify-start h-screen">

      <div />

      <div className="w-full flex items-center flex-col justify-center">
      <div className="font-impact text-black text-5xl">LUPITU</div>
      <div
          className="bg-cover bg-no-repeat w-full"
          style={{
            // Change the url to https://beautybugz.com/
            backgroundImage: `url(https://beautybugz.com/Gradient%20for%20comming%20soon.jpg)`,
          }}
        >
          <h1 className=" py-3 font-bold text-5xl sm:text-7xl bg-[#E5E5E5] mix-blend-lighten uppercase text-center">
            Coming Soon
          </h1>
        </div>


      </div>

      <section>
        <Image src='/Group 232.png' className="w-screen" width={1000} height={1000} alt="main image"></Image>
      </section>
    </div>
  );
}