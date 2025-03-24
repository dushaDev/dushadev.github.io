"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      className="relative flex items-center justify-center h-screen text-white md:px-20 lg:px-20 "
      style={{
        backgroundImage: "url('/background-pattern.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    > 
   
    <div className="container mx-auto px-6 flex flex-col items-center">

   <h2 className="text-center text-4xl font-bold mb-10">ABOUT</h2>
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
     

        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start hover:scale-101 transition-transform duration-300">
          <div className="w-64 h-80 rounded-lg overflow-hidden border-4 border-primary shadow-lg">
            <Image
              src="/profile.jpg"
              alt="Dushan"
              width={256}
              height={320}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3 text-center md:text-left mt-10 mb-10 md:mt-0 md:ml-10">
          <p className="text-3xl font-semibold mt-4">I'm</p>
          <p className="text-xl mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p className="text-xl mt-4">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}
