import { motion } from "framer-motion";

export default function Contact(props) {
    
    return (
        <motion.div
            className="flex  items-center w-fit gap-4"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 * props.index }}
        >
            <img
                src={props.iconPath}
                alt="icon"
                className="h-6 select-none"
                draggable="false"
            />
            {!props.link
                ?
                (<p className="text-sm">{props.text}</p>)
                :
                (<a href={props.link} target="_blank" className="text-sm cursor-pointer">{props.text}</a>)
            }
        </motion.div>
    );
}