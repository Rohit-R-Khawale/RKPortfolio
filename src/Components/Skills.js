import React from "react";

function Skills() {
    return (
        <main className=" m-3 p-5 rounded-xl patrick-hand-regular skillbg">
            <h1 className="text-700 text-center text-white from-stone-700 text-3xl m-4">
                My Skills and Projects
            </h1>
            <div className="grid grid-cols-3 gap-3 mx-8">
                <Card head="React" 
                define="React is a JavaScript library used for building user interfaces, especially for web applications. It focuses on creating reusable UI components that efficiently update and render in response to data changes."
                 i1="Routing In React "
                 i2="Working with Images in React"
                 i3="Components"
                 i4="Props and States etc."
                 />

                <Card 
                head="Node JS"
                define="Node.js is a runtime environment that allows you to run JavaScript code outside of a web browser, making it possible to build server-side applications and networked programs." 
                i1="API Creation"
                i2="Example 2"
                i3="Example"
                i4="Example"
                />
                <Card
                head="Next JS"
                define="
                Next.js is a framework built on top of React for building server-side rendered and statically generated web applications with ease."
                i1="File-based routing"
                i2="API routes:"
                i3="Server-side rendering (SSR)"
                i4="Static site generation (SSG)"
                 />
                <Card
                head="Tailwind"
                define="Tailwind CSS is a utility-first CSS framework that provides a set of pre-built classes to style your HTML components quickly and efficiently without writing custom CSS."
                i1="Example"
                i2="Example"
                i3="Example"
                i4="Example"
                 />
                <Card
                head="Git Hub"
                define="GitHub is a Web platform for hosting code projects.It Enables, collaboration, version control, issue tracking, and project management, fostering efficient software development."
                i1="Example"
                i2="Example"
                i3="Example"
                i4="Example"
                 />
                <Card
                head="Git"
                define="Git is a distributed version control system used for tracking changes in source code during software development."
                i1="Example"
                i2="Example"
                i3="Example"
                i4="Example"
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
                    <p>See Project on Git Hub</p>
                </div>
            </div>
        </cards>
    );
}

export default Skills;
