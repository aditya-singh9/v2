export default function Contact (props) {
    return (
        <div className="flex justify-between items-center">
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
                (<a href={props.link} target="_blank" className="text-sm">{props.text}</a>)
            }
        </div>
    );
}