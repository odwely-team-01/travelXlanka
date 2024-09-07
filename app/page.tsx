import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex min-h-screen max-w-[1400px] items-center justify-center bg-cover bg-center ">
        <section className="flex h-screen w-full flex-col  items-center justify-center">
          <div className="flex h-screen w-full items-center justify-center">
            <Image
              src="/contact-us/bg_5.jpg"
              alt="contact-us"
              layout="fill"
              className="absolute -z-10 size-full object-cover"
            />

            <span className="flex w-full flex-col items-center justify-center text-white">
              <h1 className="font-poppins text-5xl font-bold">
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
