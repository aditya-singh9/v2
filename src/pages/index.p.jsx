import "moment-timezone";
import axios from "axios";
import moment from "moment";
import Head from "next/head";
import twemoji from "twemoji";
import { motion } from "framer-motion";
import { Fragment, useEffect, useState } from "react";

import Intro from "./index/Intro";
import Default from "ui/layouts/Default";

export default function Home(props) {
  const [initialized, setInitialized] = useState(true);
  const [time, setTime] = useState(moment.tz(new Date(), "Asia/Kolkata"));

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setInitialized(true);
      return;
    }
    setInitialized(localStorage.getItem("intro") === "true");
  }, []);

  useEffect(() => {
    const refreshTime = setInterval(() => {
      setTime(moment.tz(new Date(), "Asia/Kolkata"));
    }, 1000);

    return () => {
      clearInterval(refreshTime);
    };
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Aditya Singh</title>
        <meta name="title" content="Aditya Singh" />
        <meta property="og:title" content="Aditya Singh" />
        <meta property="twitter:title" content="Aditya Singh" />
      </Head>
      {!initialized && (
        <Intro weather={props.weather} setIntro={setInitialized} />
      )}
      {initialized && (
        <Default>
          <div className="flex flex-col items-start justify-start w-full space-y-3 md:space-y-6">
            <div className="flex flex-col items-start justify-start w-full space-y-3 md:space-y-6">
              <motion.div
                className="flex items-center space-x-4 font-bold text-3xl md:text-5xl text-white text-opacity-80 tracking-[-0.02rem]"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <p>Hi,</p>
                <p>I'm Aditya.</p>
              </motion.div>
              <div className="flex flex-col items-start justify-start w-full space-y-3 md:space-y-4 max-w-2xl">
                <motion.p
                  className="text-lg md:text-xl text-white text-opacity-70"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  I'm Aditya Singh, a 16 year old student, self-motivated tech
                  enthusiast, full-stack developer and an aspiring tech
                  entrepreneur. I have over 2 years of experience in the
                  development. I spend my time learning & experimenting new
                  technologies.
                </motion.p>
                <motion.p
                  className="text-lg md:text-xl text-white text-opacity-70"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  Over the last two years, I've gained expertise in modern tech
                  stacks like React, Next, Vue, NodeJS, Typescript, MongoDB and
                  PostgreSQL. I've worked on plenty of projects including REST
                  APIs, Websites, CLIs and Discord Bots. I'm currently focusing
                  on participating in developer friendly events, hackathons and
                  contributing to opensource projects & softwares.
                </motion.p>
              </div>
            </div>
            <motion.div
              className="flex flex-col items-start justify-start space-y-1"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.3 }}
            >
              <div className="flex flex-row items-center justify-start space-x-2">
                <i className="fas fa-map-marker-alt w-[22.5px] text-center text-lg text-white text-opacity-90" />
                <p className="text-lg text-white text-opacity-90">
                  Asia, India
                </p>
              </div>
              <div className="flex flex-row items-center justify-start space-x-2">
                <i className="fas fa-clock w-[22.5px] text-center text-lg text-white text-opacity-90" />
                <p className="text-lg text-white text-opacity-90">
                  {time.format("MMMM Do YYYY")}
                </p>
              </div>
            </motion.div>
          </div>
        </Default>
      )}
    </Fragment>
  );
}