import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
<div className="min-h-screen bg-cover bg-center max-w-[1400px] flex justify-center items-center ">
      <section className="flex flex-col items-center justify-center  h-screen w-full">
        <div className="h-screen flex justify-center items-center w-full">
          <Image
            src="/contact-us/bg_5.jpg"
            alt="contact-us"
            layout="fill"
            className="absolute -z-10 h-full w-full object-cover"
          />
        
            <span className="flex flex-col justify-center items-center w-full text-white">
              <h1 className="text-5xl font-bold font-poppins">
                Welcome to Travel X Lanka
              </h1>
              <p className="mt-4">Explore the beauty of with us</p>
            </span>

        </div>
      </section>
    </div>
    </div>
  );
}
