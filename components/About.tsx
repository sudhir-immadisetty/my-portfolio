import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Profileimg1 from ".././public/nagasudhirimage1.jpg";
import Link from "next/link";

type Props = {};

export default function About({}: Props) {
  return (
    // <motion.div
    //   initial={{
    //     opacity: 0,
    //   }}
    //   transition={{
    //     duration: 1.5,
    //   }}
    //   whileInView={{
    //     opacity: 1,
    //   }}
    //   className="flex flex-col mt-52 relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center h-screen"
    // >
    <div className="flex flex-col items-center justify-center gap-6 lg:mb-44">
      <h3 className="lg:mt-12 mt-36 uppercase tracking-[20px] text-onepurple text-2xl">
        About
      </h3>

      <button>
        <Link
          href="/resume"
          className="border border-litepurple bg-litepurple text-white text-sm font-semibold rounded-2xl p-4 hover:text-litepurple hover:bg-white -mb-14"
        >
          {" "}
          VIEW RESUME
        </Link>
      </button>

      {/* <motion.img
        initial={{
          x:200,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}

        className="md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      >
        {" "}
       
      </motion.img> */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 items-center justify-center lg:mt-12">
        <Image
          src={Profileimg1}
          alt="nagasudhir_image"
          className="flex-shrink-0 w-48 h-48 rounded-full object-cover md:rounded-xl md:w-60 md:h-60 xl:w-[400px] xl:h-[400px] lg:-mr-32 lg:ml-48"
        />
        <div className="md:px-10 flex flex-col items-center justify-center gap-4 mx-6 lg:mx-32">
          <h4 className="lg:text-4xl text-2xl font-semibold">
            Here is a little background
          </h4>
          <div className="flex flex-col gap-2 justify-items-center justify-center mx-3">
            <p className="text-sm text-litepurple">
              I would like to introduce myself as an Strategic IT Software Engineer with over 13 years of rich and extensive 
              experience in Software Development.Skilled in overall software development life-cycle involving requirement analysis,
              system study, designing, architecture, testing, programming, coding, de-bugging, defect management,
              status reporting & documentation.
              Working experience in fast phased AGILE methodologies like SCRUM and JIRA tools. 
              Having team management and lead experience for the successful project releases.
            </p>
            <p className="text-sm text-litepurple">
              Experience in Interactions with clients for requirements gathering, design, development, deploying and monitoring of the applications.
              Collaborated with QA teams to ensure smooth workflow and efficient organization operations. 
              Excellent in trouble shooting and debugging skills using Eclipse, IntelliJ & VS Code.
              Good domain Knowledge in Telecom and Banking domains.
              Skilled in completing projects with competent cross-functional skills and ensuring on time deliverables within pre-set cost and durability parameters.
              
            </p>
            <p className="text-sm text-litepurple">
              Technical exposure entails JavaScript frameworks like Angular, React, Ember, SproutCore, Java, Pivotal Cloud Foundary (PCF).
              Strong problem-solving & technical skills coupled with decision-making for enabling effective solutions for customer satisfaction & low operational costs.
              Keen analyst with excellence in gathering and understanding requirements of clients & other multiple stakeholders (at strategic and tactical levels), followed by translation into functional specifications as well as provisioning of suitable software solution.
              Significant experience of working with customers, and technical teams for securing & executing concurrent projects; envisioning usage of new technology and tailoring its usage for achieving desired results.

            </p>
          </div>
        </div>
      </div>
    </div>

    // </motion.div>
  );
}
