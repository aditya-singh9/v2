import Head from "next/head";
import link from "next/link";
import { useState } from "react";
import Default from "ui/layouts/Default";
import Contact from "./components/Contact";
import Form from "./components/Form";
export default function Contacts(props) {
    const [email, setEmail] = useState("");
  const contactObj = [
    {
      iconPath: "/icons/phone.svg",
      text: "+1 (480) 555-0103",
      link: "tel:+1 (480) 555-0103",
    },
    {
      iconPath: "icons/email.svg",
      text: "alma.lawson@example.com",
      link: "mailto:alma.lawson@example.com",
    },
    {
      iconPath: "icons/location.svg",
      text: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    },
  ];
  return (
    <Default>
      <Head>
        <title>Contact • Aditya Singh</title>
        <meta name="title" content="Projects • Aditya Singh" />
        <meta property="og:title" content="Projects • Aditya Singh" />
        <meta property="twitter:title" content="Projects • Aditya Singh" />
      </Head>
      <section className="flex items-center text-white w-full">
        <div className="flex flex-col items-start justify-start w-full space-y-4 basis-50% gap-12 max-h-screen">
          <div className="flex items-center space-x-2 tracking-[-0.02rem]">
            <img
              src="/icons/email.svg"
              className="h-[40px] select-none"
              draggable="false"
            />
            <p className="font-bold text-4xl text-opacity-80 ">Contact Me</p>
          </div>
          {contactObj.map((contact, index) => (
            <Contact key={"contact-" + index} {...contact} />
          ))}
        </div>
              <div className="flex flex-col items-start justify-start gap-6 basis-50% w-3/4 bg-[#1E222F] border-2 border-white/25 px-12 py-8 rounded-md">
                  <p className="w-full">Fill the form and i'll get back to you</p>
                  <Form {...{
                      id: "emailInput",
                      label: "Email",
                      type: "text",
                      iconPath: "icons/email.svg",
                      value: email,
                      setValue: setEmail
                  }} />
                  <Form {...{
                      id: "nameInput",
                      label: "Name",
                      type: "text",
                      iconPath: "icons/email.svg",
                      value: email,
                      setValue: setEmail
                  }} />
        </div>
      </section>
    </Default>
  );
}
