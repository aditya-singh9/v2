import Head from "next/head";
import Default from "ui/layouts/Default";
export default function Contact(props) {
    return (
            <Default>
                <Head>
                    <title>Projects • Aditya Singh</title>
                    <meta name="title" content="Projects • Aditya Singh" />
                    <meta property="og:title" content="Projects • Aditya Singh" />
                    <meta property="twitter:title" content="Projects • Aditya Singh" />
                </Head>
                <div className="flex flex-col items-start justify-start w-full space-y-4">
                    <div className="flex items-center space-x-2 font-bold text-4xl text-white text-opacity-80 tracking-[-0.02rem]">
                        <img
                            src="/icons/think.svg"
                            className="h-[40px] select-none"
                            draggable="false"
                        />
                        <p>Contact</p>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full space-y-2">
                       
                    </div>
                </div>
            </Default>
    );
}
