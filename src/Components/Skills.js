import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Skills() {
    return (
        <main className=" m-3 p-5 rounded-xl patrick-hand-regular skillbg">
            <h1 className="text-700 text-center text-white from-stone-700 text-3xl m-4">
                My Skills and Projects
            </h1>
            <div className="grid grid-cols-3 gap-3 mx-8">

                <Card 
                head="HTML"
                define="HTML is the building block of webpages, defining their structure and content. It's like the skeleton of a website, working with CSS for styling and JavaScript for interactivity." 
                i1="Embedding Multimedia"
                i2="Interactive Forms"
                i3="Semantic Structure"
                i4="Beyond the Basics"
                />

                <Card
                head="CSS"
                define="
                CSS (Cascading Style Sheets) is the styling language for webpages. It controls the look and feel, like font, color, layout, and responsiveness.  Think of it as the paint and polish for your HTML content."
                i1="Flexbox and Grid"
                i2="Interactive Effects"
                i3="Responsive Design"
                i4="Visual Enhancements"
                 />

                <Card head="React" 
                define="React is a JavaScript library used for building user interfaces, especially for web applications. It focuses on creating reusable UI components that efficiently update and render in response to data changes."
                 i1="Routing In React "
                 i2="Working with Images in React"
                 i3="Components"
                 i4="Props and States etc."
                 />

                <Card
                head="Tailwind"
                define="Tailwind CSS is a utility-first CSS framework that provides a set of pre-built classes to style your HTML components quickly and efficiently without writing custom CSS."
                i1="Responsive Design with Tailwind"
                i2="Reduced CSS Bundle Size"
                i3="Focus on Responsiveness"
                i4="Easy Code Maintainability"
                 />
                <Card
                head="Git Hub"
                define="GitHub is a Web platform for hosting code projects.It Enables, collaboration, version control, issue tracking, and project management, fostering efficient software development."
                i1="Version Control"
                i2="Making Changes to Repos"
                i3="Remote Repositories on GitHub"
                i4="Collaborating with GitHub"
                 />
                <Card
                head="Git"
                define="Git is a distributed version control system used for tracking changes in source code during software development."
                i1="Records Changes Over Time"
                i2="Branching and Merging"
                i3="Offline Capabilities"
                i4="Security and Integrity"
                 />
            </div>
        </main>
    );
}

function Card(props) {
    return (
        <cards className="flex flex-col text-white  bg-white rounded-xl">
            <div>
                <h2 className="text-center bg-[#0075A8] m-1 rounded-t-xl text-xl p-3 font-bold">{props.head}</h2>
            </div>
            <div className="bg-[#0075A8] m-1 mt-0 rounded-b-xl p-2 h-full flex flex-col justify-between" >
            
                <p className=" mb-5 min-h-15">
                    {props.define}
                </p>
                    
                <ol className="p-6">
                    <li>{props.i1}</li>
                    <li>{props.i2}</li>
                    <li>{props.i3}</li>
                    <li>{props.i4}</li>
                </ol>
                
                <div className="scale-101 m-2 p-2 bg-[#FFCD29] rounded-full text-center text-black font-semibold cursor-pointer hover:bg-[#031831] hover:text-white">
                    <Link to="https://github.com/Rohit-R-Khawale?tab=repositories" target="_blank">
                        <p>See Project on Git Hub</p>
                    </Link>
                </div>
            </div>
        </cards>
    );
}

export default Skills;
