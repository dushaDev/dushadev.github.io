import Image from "next/image";
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  return (
    <section 
      className="relative flex items-center justify-center h-screen text-white p-10" 
      style={{ backgroundImage: "url('/background-pattern.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-4xl font-light">Hey,</h2>
          <h1 className="text-5xl font-semibold mt-2">I’m <span className="text-primary">Dushan</span></h1>
          <p className="text-4xl mt-3">Undergraduate in Software Engineering</p>
          
          <button className="mt-7 px-6 py-2 bg-primary hover:bg-white hover:text-primary text-white font-semibold rounded-md shadow-md transition">
            Contact
          </button>
          
          <div className="justify-center flex space-x-4 mt-7 sm:justify-center md:justify-start lg:justify-start">
            <Link href="#" className="text-primary hover:text-white text-3xl">
              <FaGithub />
            </Link>
            <Link href="#" className="text-primary hover:text-white text-3xl">
              <FaLinkedin />
            </Link>
            <Link href="#" className="text-primary hover:text-white text-3xl">
              <FaFacebook />
            </Link>
          </div>
        </div>
        
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <div className="w-44 h-44 md:w-72 md:h-72 border-4 border-primary rounded-full overflow-hidden">
            <Image 
              src="/profile.jpg" 
              alt="Dushan" 
              width={280} 
              height={280} 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
