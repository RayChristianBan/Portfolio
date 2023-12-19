import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Tailwind CSS" },
  { skill: "Bootstrap" },
  { skill: "HTML" },
  { skill: "React" },
  { skill: "PHP" },
  { skill: "Java" },
  { skill: "C#" },
  { skill: "Java Script" },
  { skill: "Git" },
  { skill: "GitHub" },
]

const About = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl text-[#808080]">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-green-600 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left text-[#808080]">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Raymond and I am a{" "}
              <span className="font-bold text-[#483D8B]">{"highly ambitious"}</span>,
              <span className="font-bold text-[#483D8B]">{" self-motivated"}</span>, and
              <span className="font-bold text-[#483D8B]">{" driven"}</span> Computer Engineering
              graduates.
            </p>
            <br />
            <p>
              I graduated from ICCT College Main Campus Cainta in 2023
              with a BS in Computer Engineering.
            </p>
            <br />
            <p>
              I have been studying different programming languages since
              when is was 2nd year and been attracted to it eversince.
              I am always seeking new experiences and love to keep myself engaged and learning new things..
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-[#483D8B]">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6 text-green-600">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-green-600 px-4 py-2 mr-2 mt-2 text-white rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/avatar.svg"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About