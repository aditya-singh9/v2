import "moment-timezone";
import moment from "moment";
import { useAnimation } from "framer-motion";
import { Fragment, useEffect, useState } from "react";

import Cursor, { Cursor2 } from "./Cursor";
import Terminal from "./Terminal";

export default function Introduction(props) {
  const controls = useAnimation();

  const [locations, setLocations] = useState({});
  const [animated, setAnimated] = useState(false);
  const [terminal, setTerminal] = useState(true);
  const [closingTerminal, setClosingTerminal] = useState(false);
  const [beforeClosingTerminal, setBeforeClosingTerminal] = useState(false);
  const [afterClosingTerminal, setAfterClosingTerminal] = useState(false);

  const close = () => {
    if (!animated) {
      setTimeout(() => {
        // Wait 500ms before scaling terminal down

        controls.start({
          scale: 0.65,
          transition: { duration: 0.2 },
        });

        document.removeEventListener("click", close);
        document.removeEventListener("keydown", close);

        setTimeout(() => {
          setLocations({
            close: document.getElementById("closeButton")?.getBoundingClientRect(),
            chrome: document.getElementById("chrome")?.getBoundingClientRect(),
          });

          // Wait 1000ms before the cursor appears
         

          setTimeout(() => {
            // Wait 750ms before the cursor appears on the X icon
            setClosingTerminal(true);

            setTimeout(() => {
              // Wait 1000ms before closing the terminal
              
              setBeforeClosingTerminal(false);
              setClosingTerminal(false);
              setTerminal(false);

              setTimeout(() => {
                // Wait 1000ms before going back home
                localStorage.setItem("intro", true);
                props.setIntro(true);
              }, 1000);
              //
            }, 1000);
            //
          }, 750);
          //
        }, 1000);
        //
      }, 500);
    }
  };

  useEffect(() => {
    document.addEventListener("click", close);
    document.addEventListener("keydown", close);

    return () => {
      document.removeEventListener("click", close);
      document.removeEventListener("keydown", close);
    };
  }, []);

  const [time, setTime] = useState(moment.tz(new Date(), "Asia/Kolkata"));

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
      {animated && <Window time={time} />}
      {terminal && (
        <Terminal
          time={time}
          animated={animated}
          controls={controls}
          closing={closingTerminal}
        />
      )}
      {beforeClosingTerminal && <Cursor loc={locations.close} />}
      {afterClosingTerminal && <Cursor2 loc={locations.close} loc2={locations.chrome} />}
    </Fragment>
  );
}
