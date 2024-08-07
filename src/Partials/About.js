import image from "../Assets/myImg.png";
import {Link} from 'react-router-dom';
import React, { useState } from 'react';


const About = () => {
    
    return ( 
        
        <div className="nova-square p-1  pb-4 flex  h-full w-full flex-col lg:flex-row justify-around text-p1" >
            {/* left part  */}
            <section className="m1   pt-24  w-full flex sm:flex-col items-center justify-around">
                <div className=" relative w-fit p-2 sm:p-3  lg:p-4 h-44 sm:h-[19rem] md:h-[21rem] lg:h-96   flex justify-center items-center">
                    <h2 className="      lg:pt-2  font-sans font-bold text-center text-3xl sm:text-4xl md:text-5xl xl:text-6xl ">About <span className="font-sans text-p4">Me</span></h2>
                    
                    <img  className=" w-32  sm:w-60  md:w-64  lg:w-72  rounded-full border-solid border-4 border-p4 " src={image} alt="image" />
                    <span className=" absolute border-4 border-l-p2 border-r-p2 border-t-transparent border-b-transparent  circle-spin border-solid top-1/2 left-1/2 h-4/5 w-full rounded-full "></span>    
                 </div>

                
                <div className=" sm:px-8  w-fit sm:w-full">
                    <h3 className="text-2xl p-2 py-0 "></h3>
                    {
                        (window.innerWidth>1024) && 
                    <h3 className="text-2xl p-2 py-0 flex flex-col "> 
                    <b>My journey</b> 
                    <p className="color-palette2 p-1 text-xl xl:text-2xl">began with learning C from book "Let Us C" .</p>
                    <p className="color-palette2 p-1 text-xl xl:text-2xl">I explored web development and C++ through open-source resources, documentation, online resources like W3Schools, YT channels, cplusplus.com. </p>
                    <p className="color-palette2 p-1 text-xl xl:text-2xl">In my second year of Graduation, I moved on to Android development with a Udemy course by Denis.</p>
                    <p className="color-palette2 p-1 text-xl xl:text-2xl">I then mastered automation with Selenium in Node.js, guided by self-learning and GPT-4.</p>
                    <p className="color-palette2 p-1 text-xl xl:text-2xl">I honed my crafting and CAD-modelling skills and participated in RC-aeromodelling competitions with the Aeromodelling Club at IIT Guwahati.</p>
                    </h3>
                    }
                
                    <div className="  flex items-center  justify-center flex-col sm:flex-row   w-fit sm:w-full my-0 py-0 ">
                        <Link to="/Projects" className=" truncate border-2 border-solid border-p5 btn-box relative inline-flex justify-center items-center rounded-xl my-2  sm:rounded-2xl text-lg sm:text-xl md:text-2xl w-28 h-10 sm:w-40 sm:h-16 md:w-48 md:h-20  font-extrabold z-10 m-[.1rem] sm:m-1 md:m-3 text-p5"> <b className=" hidden sm:inline">My&nbsp; </b> Projects</Link>
                        <Link to="/Blogs"    className=" truncate border-2 border-solid border-p5 btn-box relative inline-flex justify-center items-center rounded-xl my-2  sm:rounded-2xl text-lg sm:text-xl md:text-2xl w-28 h-10 sm:w-40 sm:h-16 md:w-48 md:h-20  font-extrabold z-10 m-[.1rem] sm:m-1 md:m-3 text-p5"> <b className=" hidden sm:inline">My&nbsp; </b> Blogs   </Link>
                    </div>
                </div>
            {/* right part  */}

    
            </section>

            <section className=" m-4  lg:pt-24 justify-center items-center flex flex-col w-auto h-auto">
                    <h1 className="   w-full text-2xl sm:text-3xl  flex items-center text-p2 font-extrabold  lg:text-center p-0  sm:p-4">
                  <b className="inline-flex  w-fit justify-end"><box-icon name='chevron-left' type="solid" size='3rem' color="#81B29A"></box-icon></b> 
                         Skills
                  <b className="inline-flex  w-fit justify-end"><box-icon name='chevron-right' type="solid" size='3rem' color="#81B29A"></box-icon></b> 
                          </h1>
                <div className=" h-full p-0  items-center flex flex-col ">

                    <div className="   flex flex-col justify-center h-full  ">
                        <div className="border-0 border-solid border-l-4 md:border-l-8 border-p4 pl-2 m-1 lg:m-2   text-xl "><h1 className =" m-1 lg:m-2  lg:p-2  text-p2 font-bold text-lg sm:text-xl md:text-2xl flex items-center">Web Development: <box-icon color="#81B29A" type='logo' name='html5'></box-icon>  <box-icon name='css3'color="#81B29A" type='logo' ></box-icon>   <box-icon type='logo' name='tailwind-css' color="#81B29A"></box-icon> <box-icon color="#81B29A" name='react' type='logo' ></box-icon></h1><p className =" lg:m-2 lg:p-2  text-p1 text-base sm:text-lg  md:text-xl">Proficient in React.js and Node.js, creating responsive and efficient web applications.</p></div>
                        <div className="border-0 border-solid border-l-4 md:border-l-8 border-p4 pl-2 m-1 lg:m-2   text-xl "><h1 className =" m-1 lg:m-2  lg:p-2  text-p2 font-bold text-lg sm:text-xl md:text-2xl flex items-center">App Development: <box-icon name='android' color="#81B29A" type='logo' ></box-icon>  <box-icon color="#81B29A" name='devices' ></box-icon> <box-icon name='code' color="#81B29A" ></box-icon></h1><p className =" lg:m-2 lg:p-2  text-p1 text-base sm:text-lg  md:text-xl"> Skilled in Kotlin and Jetpack Compose, delivering high-quality Android applications.</p></div>
                        <div className="border-0 border-solid border-l-4 md:border-l-8 border-p4 pl-2 m-1 lg:m-2   text-xl "><h1 className =" m-1 lg:m-2  lg:p-2  text-p2 font-bold text-lg sm:text-xl md:text-2xl flex items-center">Aeromodelling: <box-icon color="#81B29A" name='paper-plane' ></box-icon> <box-icon color="#81B29A"name='plane-alt' type="solid" ></box-icon>  <box-icon color="#81B29A"name='blender' type='logo' ></box-icon>     </h1><p className =" lg:m-2 lg:p-2  text-p1 text-base sm:text-lg  md:text-xl">Experienced in designing and developing advanced aeromodelling projects.</p></div>
                        <div className="border-0 border-solid border-l-4 md:border-l-8 border-p4 pl-2 m-1 lg:m-2   text-xl "><h1 className =" m-1 lg:m-2  lg:p-2  text-p2 font-bold text-lg sm:text-xl md:text-2xl flex items-center">Automation: <box-icon color="#81B29A" name='javascript' type='logo' ></box-icon>  <box-icon color="#81B29A"name='nodejs' type='logo' ></box-icon>  <box-icon name='firefox' type="logo" color='#81B29A' ></box-icon>  </h1><p className =" lg:m-2 lg:p-2  text-p1 text-base sm:text-lg  md:text-xl">Developed Selenium bots using Node.js to automate tasks on platforms like Pinterest and Instagram.</p></div>                        
                        <div className="border-0 border-solid border-l-4 md:border-l-8 border-p4 pl-2 m-1 lg:m-2   text-xl "><h1 className =" m-1 lg:m-2  lg:p-2  text-p2 font-bold text-lg sm:text-xl md:text-2xl flex items-center">CAD Modeling:  <box-icon color="#81B29A"name='blender' type='logo' ></box-icon>     </h1><p className =" lg:m-2 lg:p-2  text-p1 text-base sm:text-lg  md:text-xl">Proficient in Fusion 360 for creating detailed and precise CAD models, particularly in aeromodelling.</p></div>
                        {/* <div className="m-2 p-2 text-xl "><h1 className ="m-2 p-0  color-palette3 font-bold text-2xl">                    </h1><p className ="m-2 p-2  color-palette2 "></p></div> */}
                    </div>

                </div>
                
            </section>
        </div>
     );
}
 
export default About;
