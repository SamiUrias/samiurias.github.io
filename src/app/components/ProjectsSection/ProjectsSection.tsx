"use client"
import React, {useState, useRef} from "react";
import {ProjectCard} from "@/app/components/ProjectCard";
import {ProjectTag} from "@/app/components/ProjectTag";
import {motion, useInView} from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: 'WebAssembly POC',
        description: 'POC using WebAssembly',
        image: '/images/projects/01_wasm_poc.png',
        previewUrl: 'https://poc-wasm-project1-ojjpkos6r-samiurias.vercel.app',
        gitUrl: 'https://github.com/SamiUrias/POC_wasm_project1/tree/master',
        tag: ['All', 'Web', 'WebAssembly']
    },
    {
        id: 2,
        title: 'Quotes Generator',
        description: 'A simple quote generator project. Generates random quotes fetched from an API',
        image: '/images/projects/02_web_quotes_generator.png',
        previewUrl: 'https://ztm-quotes-generator-portfolio-01-7rmb56jxs-samiurias.vercel.app',
        gitUrl: 'https://github.com/SamiUrias/ztm_quotes_generator_portfolio_01',
        tag: ['All', 'Web']
    },
]
export const ProjectsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const differentTags: string[] = Array.from(new Set(projectsData.flatMap(project => project.tag))).sort()
    const [tag, setTag] = useState<string>(differentTags[0] || '')
    const handleTagChange = (newTag: string) => setTag(newTag)
    const filteredProjects = projectsData.filter((project) => project.tag.includes(tag))

    const cardVariants = {
        initial: {y:50, opacity:0},
        animate: {y:0, opacity: 1}
    }
    return (
        <section id="projects" >
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
            {/*<div className="text-white flex flex-row justify-center items-center gap-2 py-6">*/}
            {/*    {differentTags.map((individualTag) => <ProjectTag key={individualTag} name={individualTag}*/}
            {/*                                                      onClick={handleTagChange}*/}
            {/*                                                      isActive={tag === individualTag}/>)}*/}
            {/*</div>*/}
            <ul ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, projectIndex) => (
                    <motion.li
                        key={projectIndex}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{duration:0.3, delay:projectIndex * 0.4}}>
                        <ProjectCard imgUrl={project.image} title={project.title}
                                     description={project.description} gitUrl={project.gitUrl}
                                     previewUrl={project.previewUrl}/>
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};
