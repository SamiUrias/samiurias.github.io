"use client";
import {useState, useTransition} from "react";
import Image from "next/image";
import {TabButton} from "@/app/components/TabButton";
import Link from "next/link";

export const AboutSection = () => {
    type TAboutTabs = {
        skills: "skills";
        education: "education";
        experience: "experience";
    };

    const [tab, setTab] = useState<keyof TAboutTabs>("skills");
    const [isPending, startTransition] = useTransition();
    const experienceData = [
        "Data Modeler - Walmart(via IDS Comercial)",
        "Tech Lead - Walmart(via UST)",
        "Tech Lead - Walmart(via 3Pillar Global)",
        "Full Stack Web Developer - Userlab, S.A",
        "Full Stack Web Developer - Soluciones Faciles, S.A",
        "Full Stack Web Developer - ChapiLabs",
        "Project Team Lead - Chingu",
        "Junior Developer - Gtx,S.A.",
    ]
    const skillsData = [
        "Node.Js",
        "Express",
        "PostgreSQL",
        "MySQL",
        "JavaScript",
        "TypeScript",
        "PHP",
        "Python",
        "React",
        "Vue",
        "Html",
        "CSS",
        "AWS",
    ]
    const educationData: string[] = [
        "Del Valle University, Guatemala",
        "Liceo Cristiano Roca de Ayuda"
    ]

    const TAB_DATA = [
        {
            title: "Skills",
            id: "skills",
            content: (
                <ul className="list-disc pl-2">
                    {
                        skillsData.map((skillItem, skillItemIndex) => <li key={skillItemIndex}
                                                                          className="text-base mb-4 lg:text-lg">{skillItem}</li>)
                    }
                </ul>
            ),
        },
        {
            title: "Education",
            id: "education",
            content: (
                <ul className="list-disc pl-2">
                    {educationData.map((edItem, edIndex) => <li key={edIndex} className="text-base mb-4 lg:text-lg">
                        {edItem}
                    </li>)}
                </ul>
            ),
        },
        {
            title: "Experience",
            id: "experience",
            content: (
                <ul className="list-disc pl-2">
                    {
                        experienceData.map((jobItem, jobItemIndex) => <li key={jobItemIndex}
                                                                          className="text-base mb-4 lg:text-lg">{jobItem}</li>)
                    }
                </ul>
            ),
        },
    ];


    const handleTabChange = (id: keyof TAboutTabs) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section id="about">
            <div className="text-white">
                <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                    <Image
                        src="/images/desktop_image.png"
                        height={500}
                        width={500}
                        priority={false}
                        alt="about image"
                    />
                    <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>

                        <p className="text-base mb-4 lg:text-lg">
                            I build lightning-fast web applications that consistently score 98%+ in Google audits,
                            transforming slow sites into smooth, user-friendly experiences. This problem-solving
                            expertise is what I bring to the table.
                        </p>
                        <p className="text-base mb-4 lg:text-lg">
                            Leveraging my skills in technologies like Node.js and Python, I spearheaded the development
                            of a regional system for an international company, enabling key decision-makers to reduce
                            manual tasks and focus on improving their KPIs and company revenue.
                        </p>
                        <p className="text-base mb-4 lg:text-lg">
                            I led the development of CI/CD pipelines for various companies, significantly enhancing
                            their development efficiency and time-to-market. My expertise extends beyond Node.js and
                            Python, encompassing a diverse set of technologies and frameworks to deliver impactful
                            results across multiple projects.
                        </p>
                        <p className="text-base mb-4 lg:text-lg">
                            Curious about my career path? Learn more about my experiences on my <Link
                            className="inline-block"
                            href={"https://linkedin.com/in/samiurias"} target={"_blank"}>LinkedIn</Link>.
                        </p>

                        <div className="flex flex-row justify-start mt-8">
                            <TabButton
                                selectTab={() => handleTabChange("skills")}
                                active={tab === "skills"}
                            >
                                Skills
                            </TabButton>
                            <TabButton
                                selectTab={() => handleTabChange("education")}
                                active={tab === "education"}
                            >
                                Education
                            </TabButton>
                            <TabButton
                                selectTab={() => handleTabChange("experience")}
                                active={tab === "experience"}
                            >
                                Experience
                            </TabButton>
                        </div>
                        <div className="mt-8">
                            {isPending
                                ? "Loading..."
                                : TAB_DATA.find((skill) => skill.id === tab)?.content}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
        ;
};
