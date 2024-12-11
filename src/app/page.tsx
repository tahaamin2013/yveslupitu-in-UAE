import Image from "next/image";

export default async function Home() {
  return (
    <section className="flex justify-center my-5 flex-col items-center">
      <div className="w-full flex items-center flex-col justify-center">
        {/* Add padding or margin to avoid clipping */}
        {/* <div className="text-black text-5xl mb-4">LUPITU</div> */}
        <Image
        src="/Logo.svg"
        width={160}
        draggable={false}
        height={160}
        alt="main image"
        priority
        quality={100}
        />
        <div
          className="bg-cover bg-no-repeat w-full"
          style={{
            backgroundImage: `url(https://beautybugz.com/Gradient%20for%20comming%20soon.jpg)`,
          }}
          >
          <h1 className="py-3 font-bold text-4xl sm:text-5xl bg-[#E5E5E5] mix-blend-lighten uppercase font-sans text-center">
            Coming Soon
          </h1>
        </div>
      </div>
      <Image
        src="/Group 232.svg"
        className="w-[90%] hidden sm:block mt-6" // Adjusted spacing
        width={1000}
        height={1000}
        alt="main image"
        draggable={false}
        priority
        quality={100}
        />
      <Image
        src="/Mobile Banner.svg"
        className="w-[90%] block sm:hidden mt-6" // Adjusted spacing
        width={1000}
        height={1000}
        draggable={false}
        alt="main image"
        priority
        quality={100}
      />
    </section>
  );
}
