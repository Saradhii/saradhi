import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Saradhi",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Full-stack web developer, 3 YOE",
  summary:
    "I am a Full Stack Web Developer with 3 years of hands-on experience in building dynamic and responsive web applications. I hold a Master’s degree in Computer Applications (MCA) with a solid foundation in computer science and real-world experience in modern web technologies.",
  avatarUrl: "/my-image.png",
  skills: [
    {
      name: "Typescript",
      icon: '/skills/typescript.svg'
    },
    {
      name: "JavaScript",
      icon: '/skills/javascript.svg'
    },
    {
      name: "Node.js",
      icon: '/skills/nodejs.svg'
    },
    {
      name: "React.js",
      icon: '/skills/reactjs.svg'
    },
    {
      name: "Next.js",
      icon: '/skills/nextjs.svg'
    },
    {
      name: "Postgres",
      icon: '/skills/postgresql.svg'
    },
    {
      name: "MongoDb",
      icon: '/skills/mongodb.svg'
    },
    {
      name: "Python",
      icon: '/skills/python.svg'
    },
    {
      name: "FastAPI",
      icon: '/skills/fastapi.svg'
    },
    {
      name: "Docker",
      icon: '/skills/docker.svg'
    },
    {
      name: "AWS-EC2",
      icon: '/skills/aws-ec2.svg'
    },
    {
      name: "AWS-S3",
      icon: '/skills/aws-s3.svg'
    },
    {
      name: "TailwindCSS",
      icon: '/skills/tailwindcss.svg'
    },
    {
      name: "Git",
      icon: '/skills/git.png'
    },
    {
      name: "Prisma",
      icon: '/skills/prisma.svg'
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "saradhi8142385201@gmail.com",
    tel: "+91 8142385201",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Saradhii",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vijaya-saradhi-327bb01b6",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/SaradhiVj",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Turtil",
      href: "https://turtil.co/",
      badges: [],
      location: "Hyderabad",
      title: "Full stack web developer",
      logoUrl: "/turtil_logo.jpeg",
      start: "Aug 2025",
      end: "Present",
      description: "I am a Full Stack Web Developer with 3 years of hands-on experience in building dynamic and responsive web applications. I hold a Master's degree in Computer Applications (MCA) with a solid foundation in computer science and real-world experience in modern web technologies.",
    },
    {
      company: "Intoglo Private Limited",
      href: "https://intoglo.com",
      badges: [],
      location: "Remote/chennai",
      title: "Full stack web developer",
      logoUrl: "/intoglo.png",
      start: "Oct 2022",
      end: "Jul 2025",
      description: "I am a Full Stack Web Developer with 3 years of hands-on experience in building dynamic and responsive web applications. I hold a Master's degree in Computer Applications (MCA) with a solid foundation in computer science and real-world experience in modern web technologies.",
    }
  ],
  resume: [],
  education: [
    {
      school: "Masai School",
      href: "https://www.masaischool.com",
      degree: "Full stack web development",
      logoUrl: "/masai.png",
      start: "2021",
      end: "2022",
    },
    {
      school: "Vishnu Institute of Technology",
      href: "https://vishnu.edu.in",
      degree: "Master of Computer Applications",
      logoUrl: "/bvrit.png",
      start: "2018",
      end: "2020",
    },
    {
      school: "Samhitha Degree College",
      href: "https://www.samhithaedu.com/",
      degree: "Bachelor of Science",
      logoUrl: "/samhitha.png",
      start: "2015",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Website builder",
      href: "https://website-builder-zcce.vercel.app",
      dates: "June 2024 - Jan 2025",
      active: true,
      description:
        "Website builder is a ai powered website builder which allows users to quickly build and demonstrate ideas into poc with just simple english language. This dev mode is added for developers to quickly view or edit the ai generated code.",
      technologies: [
        "Next.js",
        "Typescript",
        "Gemini 2.5 flash",
        "TailwindCSS",
        "Magic UI",
      ],
      links: [
        {
          type: "Live deployed link",
          href: "https://website-builder-zcce.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github Code",
          href: "https://github.com/Saradhii/website_builder.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/website-builder.png",
      video:
        "",
    },
    {
      title: "Simulation",
      href: "https://github.com/Saradhii/Simulator-fe",
      dates: "October 2023 - Jan 2024",
      active: true,
      description:
        "Simulation is a simulator gamee where users can invest in there in game money to invest and purchase properties in game. Developed using an existing game template added full backend with real time assets api.",
      technologies: [
        "ExpressJs",
        "JavaScript",
        "MongoDb",
        "Mongoose",
        "StyledComponents",
        "TypeScript"
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/Saradhii/Simulator-fe",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Saradhii/Simulator-fe",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/simulation.png",
      video: "",
    },
    {
      title: "Quick Read",
      href: "https://github.com/Saradhii/quick-read",
      dates: "April 2025 - May 2025",
      active: true,
      description:
        "Quick Read a browser extention for summarizing the web pages, Developed using Gemini 1.5 Flash to summarize the contents on the webpage",
      technologies: [
        "HTML",
        "JavaScript",
        "CSS",
        "Gemini 1.5 Flash",
        "Markdown"
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Saradhii/quick-read",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/quick-read.png",
      video: "",
    },
    {
      title: "Dota 2 prediction model",
      href: "https://github.com/Saradhii/FirstModel.git",
      dates: "December 2023 - May 2024",
      active: true,
      description:
        "Dota 2 prediction model is a simple neural network model implemented using TensorFlow and Keras.The model is trained on a dataset of Dota2 games and used to predict the dota 2 game results.",
      technologies: [
        "tensorflow",
        "neural-network",
        "python3",
        "keras",
        "deeplearning-ai"
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Saradhii/FirstModel.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/dota2-prediction-model.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
  ],
} as const;
