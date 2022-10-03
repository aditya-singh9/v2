import Head from "next/head";
import link from "next/link";
import Default from "ui/layouts/Default";
import Contact from "./component/Contact";
export default function Contacts(props) {
    const contactObj = [
        {
            iconPath: "/icons/phone.svg",
            text: "+1 (480) 555-0103",
            link: "tel:+1 (480) 555-0103"
        },
        {
            iconPath: "icons/email.svg",
            text: "alma.lawson@example.com",
            link: "mailto:alma.lawson@example.com"
        },
        {
            iconPath: "icons/location.svg",
            text: "1901 Thornridge Cir. Shiloh, Hawaii 81063"
        }
    ]
    return (
            <Default>
                <Head>
                <title>Contact • Aditya Singh</title>
                    <meta name="title" content="Projects • Aditya Singh" />
                    <meta property="og:title" content="Projects • Aditya Singh" />
                    <meta property="twitter:title" content="Projects • Aditya Singh" />
            </Head>
            <section className="flex items-center text-white w-full">
                <div className="flex flex-col items-start justify-start w-full space-y-4 basis-50%">
                    <div className="flex items-center space-x-2 tracking-[-0.02rem]">
                        <img
                            src="/icons/email.svg"
                            className="h-[40px] select-none"
                            draggable="false"
                        />
                        <p className="font-bold text-4xl text-opacity-80 ">Contact Me</p>
                        </div>
                        {contactObj.map((contact, index) => (
                            <Contact key={"contact-" + index}  {...contact} />
                        ))}
                    <div className="flex flex-col items-start justify-start space-y-2 basis-50% w-3/4">
                       
                    </div>
                </div>
                <div>
                    <p className="w-full">Fill the form and i'll get back to you</p>
                </div>
            </section>
            </Default>
    );
}
