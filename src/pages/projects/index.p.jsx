import Head from "next/head";

import Default from "ui/layouts/Default";
import Project from "./components/Project";

export default function Projects(props) {
  const projects = [
    {
      title: "portfolio@v2.0.0",
      subtitle: "website",
      description:
        "This website you are on right now.",
      date: "may 2022 - present",
      status: 1,
    },
    {
      title: "FSYNC",
      subtitle: "cli",
      description:
        "A cross-platform CLI which is used to transfer file from one computer to other computer. (Currently unavailable to public)",
      date: "mar 2022 - present",
      status: 0,
    },
    {
      title: "ExpressJS-Snippets",
      subtitle: "VS Code Extension",
      description:
        "A useful VS Code extension for developers who use ExpressJS. It provides autocomplete suggestions while you write ExpressJS code. (200+ DOWNLOADS!)",
      date: "dec 2021 - present",
      status: 1,
      href: "https://marketplace.visualstudio.com/items?itemName=AdityaSingh.expressjs-snippets",
    },
    {
      title: "Notem",
      subtitle: "website",
      description:
        "Simple, static but powerful notes taking website. The notes are saved in you local storage. (ONLY MADE FOR COMPUTER USERS)",
      date: "dec 2021 - present",
      status: 1,
      href: "https://notem.ml/",
    },
    {
      title: "Kekfinder",
      subtitle: "website",
      description:
        "A simple minimial emoji finding tool made using ReactJS",
      date: "nov 2021 - present",
      status: 1,
      href: "https://kekfinder.ml/",
    },
    {
      title: "LimURL",
      subtitle: "website",
      description:
        "The perfect free URL shortener for transforming long, ugly links into nice and memorable short URLs. Use it to shorten links. Made using TypeScript and MongoDB",
      date: "nov 2021 - present",
      status: 1,
      href: "https://www.limurl.ml/",
    },
    {
      title: "portfolio@v1.0.0",
      subtitle: "website",
      description:
        "My older portfolio website.",
      date: "nov 2021 - present",
      status: 1,
      href: "https://aditya-singh.vercel.app/",
    },
    {
      title: "CoinCrypto",
      subtitle: "website",
      description:
        "An API which gives top 100 cryptocurrency's prices, marketCapital and circulatingSupply. It scraps data to provide the data as an API. For documentation - https://github.com/aditya-singh9/crypto-api ",
      date: "oct 2021 - present",
      status: 1,
      href: "https://coincrypto-api.herokuapp.com/crypto",
    },  
    {
      title: "Twitter scraper",
      subtitle: "webscrapper",
      description:
        "In covid time, I made a web scrapper that scraps tweets by providing a hashtag and gives results in excel sheet. I used this scrapper to find available oxygen tanks and provide info to the needy ones",
      date: "oct 2021 - present",
      status: 1,
    },
    {
      title: "Discord Bot",
      subtitle: "bot",
      description:
        "This is a discord.js bot. This bot can ban members, kick members, mute, time mute, play music in VCs and send messages via webhooks.(DEPRICIATED)",
      date: "sept 2021 - present",
      status: 1,
      href: "https://github.com/aditya-singh9/discordjs-bot-walrus",
    },
    {
      title: "Video Server",
      subtitle: "website+api",
      description:
        "It is a video server where user can upload videos and see them just like youtube. MongoDB is used as its database service, making it a MERN stack project.",
      date: "aug 2021 - present",
      status: 1,
      href: "https://drive.google.com/file/d/1XUV3TNoWwtrA94LPa7Rlv20BotBIdMJl/view?usp=sharing",
    },
    {
      title: "Storage Website",
      subtitle: "website",
      description:
        "A website made using reactJS which stors files and folders of users just like google drive. It uses firebase as its hosting and database service",
      date: "jul 2021 - present",
      status: 1,
    },    
    {
      title: "LurbTalks",
      subtitle: "website",
      description:
        "A p2p video calling website which uses WebRTC, Node and EJS. (Depreciated, it has some errors but still usable...)",
      date: "june 2021 - present",
      status: 0,
      href: "https://lurbtalks.herokuapp.com/",
    },
    {
      title: "Chat app",
      subtitle: "website",
      description:
        "A reactJS based chatting platform which uses firebase as its database and hosting service.",
      date: "may 2021 - present",
      status: 1,
    },
    {
      title: "Covid19 tracker",
      subtitle: "website",
      description:
        "A website which tracks covid cases. I used this project to learn React and API calling.",
      date: "apr 2021 - present",
      status: 1,
    },
    {
      title: "FoodRecipie",
      subtitle: "website",
      description:
        "A website made to learn basics of HTML and CSS",
      date: "apr 2021 - present",
      status: 1,
      href: "https://aditya-singh9.github.io/foodrecipie/",
    },
  ];

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
          <p>Projects</p>
        </div>
        <div className="flex flex-col items-start justify-start w-full space-y-2">
          {projects.map((project, index) => (
            <Project key={index} index={index} {...project} />
          ))}
        </div>
      </div>
    </Default>
  );
}
