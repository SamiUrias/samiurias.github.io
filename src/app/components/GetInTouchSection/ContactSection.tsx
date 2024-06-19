import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {
    return (
        <section id="contact" className="grid mx:grid-cols-2 my-12 md:my-12 py-24 gap-4">
            <div className="h5 text-xl font-bold text-white my-2">Let&apos;s connect</div>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
                I am currently looking for new opportunities, my inbox is always open. Whether you have a
                question or just want to say hi, I will try my best to get back to you!
            </p>
            <div className="socials flex flex-row gap-2">
                <Link href={"https://github.com/samiurias"} target={"_blank"}>
                    <Image src={"/images/contact_icons/github-mark-white.png"} alt={"Github Icon"} width={35} height={35}/>
                </Link>
                <Link href={"https://linkedin.com/in/samiurias"} target={"_blank"}>
                    <Image src={"/images/contact_icons/LI-In-White.png"} alt={"LinkedIn Icon"} width={35} height={35}/>
                </Link>
            </div>
        </section>
    )
}

export {ContactSection}
