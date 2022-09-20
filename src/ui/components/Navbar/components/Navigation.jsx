import { useRouter } from "next/router";

import Element from "./Element";
export default function Navigation(props) {
  const elements = [
    {
      label: "/",
      href: "/",
    },
    {
      label: "/experience",
      href: "/awards",
    },
    {
      label: "/projects",
      href: "/projects",
    },
    {
      label: "/contact",
      href:"/contact"
    },
    {
      label: "/stack",
      href: "/stack",
    },
  ];

  const router = useRouter();

  return (
    <div className="terminal flex flex-row items-center justify-start space-x-8">
      {elements.map((el, ind) => (
        <Element key={ind} {...el} active={router.pathname === el.href} />
      ))}
    </div>
  );
}
