import Head from "next/head";

import Award from "./components/Award";
import Default from "ui/layouts/Default";

export default function Awards(props) {
  const awards = [
    {
      title: "BuilderGroop Hackathon",
      subtitle: "mar, 22",
      lines: [
        "48hr hackathon",
        "• Made a file sharing CLI in typescript.",
        "• Made it to the top 10.",
      ],
    },
    {
      title: "SMDEVOPS",
      subtitle: "feb, 22",
      lines: [
        "Freelancing - Developer",
        "• Helped them with building full stack projects on client's requests.",
      ],
    },
    {
      title: "Nomaan",
      subtitle: "jan, 22",
      lines: ["Designing", "• I helped them design their website using figma."],
    },
    {
      title: "Cheffy",
      subtitle: "jan 1, 22 - mar 1, 22",
      lines: [
        "Internship - Developer (Paid)",
        "• It is a startup company situated in USA.",
        "• I helped them by optimising their backend services.",
      ],
    },
    {
      title: "Hacktoberfest",
      subtitle: "oct, 21",
      lines: [
        "Contributed to Open Source projects",
        "• Contributed mainly in ReactJS repositories.",
      ],
    },
    {
      title: "GRAMOLY",
      subtitle: "jan, 21",
      lines: [
        "Volunteer - Web Developer",
        "• Helped them design and code their website.",
        "• Supported them as a tech helper by recording and livestreaming interviews",
      ],
    },
  ];

  return (
    <Default>
      <Head>
        <title>Experience • Aditya Singh</title>
        <meta name="title" content="Awards • Aditya Singh" />
        <meta property="og:title" content="Awards • Aditya Singh" />
        <meta property="twitter:title" content="Awards • Aditya Singh" />
      </Head>
      <div className="flex flex-col items-start justify-start w-full space-y-4">
        <div className="flex items-center space-x-2 font-bold text-4xl text-white text-opacity-80 tracking-[-0.02rem]">
          <p>Experiences</p>
        </div>
        <div className="flex flex-col items-start justify-start w-full space-y-2">
          {awards.map((award, index) => (
            <Award key={index} index={index} {...award} />
          ))}
        </div>
      </div>
    </Default>
  );
}
