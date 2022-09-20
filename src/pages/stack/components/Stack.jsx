import Technology from "./Technology";

export default function Stack(props) {
  const stack = [
    {
      icon: "node.svg",
      color: "bg-[#DFBA39]",
      name: "NodeJS",
      for: "my go-to language for scripts, Discord bots, scrapers & libraries. I sometimes use Typescript too.",
    },
    {
      icon: "typescript.svg",
      color: "bg-[#3178C6]",
      name: "TypeScript",
      for: "I prefer typescript or nodejs to code my backend applications"
    },
    {
      icon: "mongo.svg",
      color: "bg-[#4169E1]",
      name: "MongoDB",
      for: "I use MongoDB for my personal projects and other too. I use it because it is scalable, easy to configure and use and free space.",
    },
    {
      icon: "react.png",
      color: "bg-[#202020]",
      name: "ReactJS",
      for: "React is my go to go frontend framework.",
    },
  ];

  return (
    <div className="flex flex-col items-start justify-start w-full space-y-2">
      <div className="flex flex-col items-start justify-start w-full space-y-1">
        <div className="flex items-center space-x-2 font-bold text-4xl text-white text-opacity-80 tracking-[-0.02rem]">
          <img src="/icons/laptop.svg" className="h-[40px] select-none" draggable="false" />
          <p>Tech frameworks</p>
        </div>
        <p className="text-lg text-white text-opacity-60 leading-tight">
          My preferred stack of technologies for any projects right now.
        </p>
      </div>
      <div className="flex flex-col items-start justify-start w-full space-y-2">
        {stack.map((tech, index) => (
          <Technology key={index} index={index} {...tech} />
        ))}
      </div>
    </div>
  );
}
