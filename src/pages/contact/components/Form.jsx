import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import isEmail from "../functions/isEmail";
export default function Form(props) {
  return (
    <div className="flex flex-col gap-3 w-full h-fit relative">
      <label htmlFor={props.id}>{props.label}</label>
      {!props.isMessage ? (
        <div className="relative">
          <input
            id={props.id}
            value={props.value}
            placeholder={props.label}
            onChange={(e) => props.setValue(e.target.value)}
            type={props.type}
            className="px-6 py-3 pl-12 bg-transparent border border-white/75 rounded-md w-full outline-none focus:outline-none focus:border-white transition-colors duration-500 ease-in "
          />
          <span className="absolute inset-y-0 left-2 flex items-center pl-2">
            <img src={props.iconPath} className="w-6" />
          </span>
        </div>
      ) : (
        <textarea
          placeholder={props.label}
          className="px-6 py-6 bg-transparent border border-white/75 rounded-md w-full outline-none focus:outline-none focus:border-white transition-colors duration-500 ease-in"
        ></textarea>
      )}
          {
              props.error && (
        <AnimatePresence>
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
                          transition={{
                              duration: 0.5,
                              ease: "easeInOut"
                            }}
            className="bold"
          >
            Invalid {props.label.toLowerCase()}
          </motion.p>
                  </AnimatePresence>
                )
      }
    </div>
  );
}
