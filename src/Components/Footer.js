import React from "react";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <main className="patrick-hand-regular m-3 bg-[#09335D] rounded-xl text-white ">    
      <div className="flex">
        <div className="p-10 px-20 flex flex-col gap-3 justify-center">
          <h1 className="text-3xl">Get in Touch</h1>

          <sapn>
            <p className="">
              Room no. 06 Soham Niwas Near highway Medical, Lonere Mangaon,
              Raigad. Pin Code: 402103
            </p>
            <p>Email: rohitrkhawale@gmail.com</p>
          </sapn>

          <span className="flex gap-4  text-3xl ">
            <Link to="https://www.facebook.com/" target="_blank">
              <FaSquareFacebook className="cursor-pointer scale-110 hover:scale-100" />
            </Link>
            <Link to="https://www.instagram.com/rohit_r_khawale/" target="_blank">
              <FaSquareInstagram className="cursor-pointer scale-110 hover:scale-100" />
            </Link>
            <Link to="https://www.whatsapp.com/" target="_blank">
              <FaSquareWhatsapp className="cursor-pointer scale-110 hover:scale-100" />
            </Link>
            <Link to="https://github.com/Rohit-R-Khawale" target="_blank">
              <FaSquareGithub className="cursor-pointer scale-110 hover:scale-100" />
            </Link>
          </span>
        </div>

        <div className="w-full grid grid-cols-2 gap-2">
          <Footcard
            head="Heal Care"
            detail="We have created a project in 
        Health care sector as a project
        for PICT project exhibition..."
        link="https://healcare.vercel.app/"
          />

          <Footcard
            head="Other Projects"
            detail="I have also worked on many other projects which you can see on my GitHub profile... "
            link="https://github.com/Rohit-R-Khawale?tab=repositories"
          />
        </div>
      </div>
    </main>
  );
} 

export default Footer;

function Footcard(props) {  
  return (
  <>
      <card className="bg-[#D9D9D9] m-8 rounded-bl-3xl rounded-tr-3xl text-black p-10 py-8 flex flex-col justify-between gap-4 ">
        <h3 className="text-center text-2xl font-semibold h-fit">{props.head}</h3>
        <span>
          <p>{props.detail}</p>
        </span>
        <Link to={props.link} target="_blank" className="bg-[#F38136] rounded-full px-12 self-center text-white py-1 align-bottom hover:bg-[#9B1E60]">
          View Website
        </Link>
      </card>
  </>
  );
}
