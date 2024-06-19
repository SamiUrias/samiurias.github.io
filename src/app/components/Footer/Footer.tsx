import Image from "next/image";

const Footer = () => {
    return (<footer  className="footer border border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white">
        <div className="container p-12 flex justify-between">
            <span><Image src={"/images/su_attempt_5.svg"} alt={"logo"} height={25} width={25}/></span>
            <p className="text-slate-600">All Rights Reserved</p>
        </div>
    </footer>)
}

export {Footer}
