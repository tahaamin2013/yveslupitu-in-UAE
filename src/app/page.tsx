import Image from "next/image";

export default async function Home() {
  return (
    <section className="flex justify-center h-screen flex-col items-center">
       <div className="w-full flex items-center flex-col justify-center">
     <div className="text-black text-5xl mt-10  "  >LUPITU</div>
     <div
          className="bg-cover bg-no-repeat w-full"
          style={{
            // Change the url to https://beautybugz.com/
            backgroundImage: `url(https://beautybugz.com/Gradient%20for%20comming%20soon.jpg)`,
          }}
       >
         <h1 className="py-3 font-bold text-4xl sm:text-5xl bg-[#E5E5E5] mix-blend-lighten uppercase font-sans text-center">
           Coming Soon
         </h1>
       </div>


     </div> 
    <Image src='/Group 232 (1).png' className="w-[90%] hidden sm:block" width={1000} height={1000} alt="main image" priority quality={100} />
    <Image src='/Mobile Banner (1).png' className="w-[90%] block sm:hidden" width={1000} height={1000} alt="main image" priority quality={100}/>
    
  </section>

    

    
  );
}