import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./Slide"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Shoes Website",
    description:
      "Website where you can chooes any shoes you want.",
    image: "/shoes.png",
    github: "https://github.com/RayChristianBan/shoes-website-reactjs",
    link: "https://shoes-website-reactjs.vercel.app/",
  },
  {
    name: "Reminder List",
    description: "Reminder List help you list of all your reminders.",
    image: "/reminder.png",
    github: "https://github.com/RayChristianBan/Reminder-List",
    link: "https://reminder-list-seven.vercel.app/",
  },
  {
    name: "Techno Gadgets",
    description:
      "Website that have a variety of latest gadgets.",
    image: "/gadgets.png",
    github: "https://github.com/RayChristianBan/Techno-Gadgets",
    link: "https://techno-gadgets.vercel.app//",
  },

  {
    name: "Dictionary",
    description:
      "Dictionary where you can search the word you want.",
    image: "/dict.png",
    github: "https://github.com/RayChristianBan/Dictionary-React",
    link: "https://dictionary-react-flax.vercel.app/",
  },

]

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier md:flex-row md:space-x-12">
                  <div>
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer text-[#483D8B]"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer text-[#483D8B]"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default Projects