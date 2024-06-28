import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <main>
      <Navbar />
      <div className="patrick-hand-regular  p-2 bg-black m-2 rounded-xl">
        <div className=" h-80">
          <p className="text-white text-center text-3xl m-5">Contact Me!</p>
        
          <div className="p-5 bg-[#464646] rounded-md mx-2  align-middle">
            <div className="text-[#66EAFF] p-2">
              <p>I am currently pursuing my Bachelor's Degree in Information Technology from Dr. Babasaheb Ambedkar Technological University. I'm currently learning Full Stack Development and also I'm enthusiastic about experience and challenges from programming and I'm trying my best to solve the problem. I have also made some projects, you can check the projects on Github...    </p>
            </div>
            <hr className="p-3"/>
            <p className="text-white text-center  m-auto py-3">We can Get in Touch on the Following Platforms</p>
            <div className="flex gap-24 justify-center">
              <a
                href="https://www.linkedin.com/in/rohit-khawale-21a578214/"
                rel="noreferrer"
                target="_blank"
                className="text-white hover:scale-90 hover:text-[#FFCD29] w-min border px-3 ph-2 rounded-lg h-min">
                Linkdin
              </a>
              <a
                href="mailto:rohitrkhawale@gmail.com "
                target="_blank"
                rel="noreferrer"
                className="text-white hover:scale-90 hover:text-[#FFCD29] w-min border px-3 ph-2 rounded-lg h-min ">
                Email
              </a>
              <a
                href="https://www.instagram.com/rohit_r_khawale/"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:scale-90 hover:text-[#FFCD29] w-min border px-3 ph-2 rounded-lg align h-min">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Contact;
