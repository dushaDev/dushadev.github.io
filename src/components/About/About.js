"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      className="relative flex items-center justify-center h-screen md:px-20 lg:px-20 "
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
              src="/pics/pic2.jpg"
              alt="Dushan"
              width={256}
              height={320}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3 text-center md:text-left mt-10 mb-10 md:mt-0 md:ml-10 ">
          <p className="text-3xl font-semibold mt-4">I'm</p>
          <p className="text-xl mt-2">
          Hey there! I'm a 25-year-old <span className="text-primary">Software Engineering</span> undergraduate who loves coding, creativity, and problem-solving. 
          When I'm not immersed in tech, you’ll find me enjoying <span className="text-primary">music</span> —either listening to my favorite songs or playing the <span className="text-primary">guitar</span>. 
        
          </p>
          <p className="text-xl mt-4">
          I have a thing for the color <span className="text-blue-400">Blue</span> (calm and cool, just like my approach to life!). Always <span className="text-primary">curious</span> and eager to learn, I'm passionate about turning ideas into meaningful digital experiences.
          
          </p>
          <p className="text-xl mt-4">
         Let’s build something awesome together! 😊
          
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}
