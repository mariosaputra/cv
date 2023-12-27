import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Mario Saputra",
  initials: "MS",
  location: "Osaka, Japan",
  locationLink: "https://www.google.com/maps/place/Osaka",
  about: "Web Developer | iOS Developer",
  summary:
    "Hi, I'm a Programmer with experience in various roles, from Firmware Engineering to Web and Mobile Development. Right now, I'm working as a full-time Web Developer and also doing my own projects in my free time. I'm open to collaborating on projects or freelance work. Feel free to get in touch!",
  avatarUrl:
    "https://res.cloudinary.com/mariosaputra-me/image/upload/v1703666346/MS_kg34cv_xuzj7e.jpg",
  personalWebsiteUrl: "https://marioapps.com",
  contact: {
    email: "mariosaputra@gmail.com",
    tel: "+817021789987",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/mariosaputra",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mario-saputra-jp/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/mario_apps_dev",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Waseda University",
      degree: "Master Degree in Computer Science and Communication Engineering",
      start: "Sep 2014",
      end: "Sep 2016",
    },
  ],
  work: [
    {
      company: "Future Spirits",
      link: "https://www.future-s.com/",
      badges: ["Remote"],
      title: "Full Stack Developer",
      // logo: ParabolLogo,
      start: "Nov 2022",
      end: "Present",
      description:
        "Worked on a website with a large user base, maintained and added new features, replaced servers, and started migration to Docker, Single Page Applications (SPA), and more. Technologies: JavaScript · MySQL · Vue · PHP · Perl ·  Linux · Docker ",
    },
    {
      company: "Adecco",
      link: "https://www.adecco.co.jp/",
      badges: ["On-site"],
      title: "Software Engineer",
      // logo: ClevertechLogo,
      start: "Aug 2019",
      end: "Oct 2022",
      description:
        "Worked on-site at a client's office as a dispatched employee, developing a 3D Robot Simulation Software for Windows. Technologies: .NET Framework · C# · C++",
    },
    {
      company: "Xacti",
      link: "https://xacti-co.com/",
      badges: [],
      title: "Firmware Engineer",
      // logo: JojoMobileLogo,
      start: "Apr 2014",
      end: "Jul 2019",
      description:
        "Developed firmware for digital cameras, led the GUI development team, and worked on various projects including an object detection camera, a music recorder, a night vision camera, and more. Technologies: C · Python",
    },
  ],
  skills: [
    "JavaScript",
    "PHP",
    "Python",
    "Vue/Nuxt.js/JQuery",
    "Swift/SwiftUI",
    "Node.js",
    "MySQL",
    "Linux Server",
    "C/C++/C#",
  ],
  projects: [
    {
      title: "PixAsset.com",
      techStack: ["Side Project", "Vue3", "Express.js", "OpenAI", "Firebase"],
      description:
        "Web app to generate stunning pixel art assets for your projects",
      link: {
        label: "pixasset.com",
        href: "https://pixasset.com/",
      },
    },
    {
      title: "Macro Calculator AI",
      techStack: ["Side Project", "iOS", "SwiftUI", "Flask", "OpenAI"],
      description:
        "iOS app to get total macro percentages and calories for any food, powered by AI",
      link: {
        label: "Macro Calculator AI App",
        href: "https://apps.apple.com/us/app/macro-calculator-ai/id6469041577",
      },
    },
    {
      title: "MediLogger",
      techStack: ["Side Project", "iOS", "SwiftUI", "CloudKit"],
      description: "Easy medical data logging for iOS",
      link: {
        label: "MediLogger App",
        href: "https://apps.apple.com/us/app/medical-logger-medilogger/id6466779296",
      },
    },
    {
      title: "Moving Calories Calculator",
      techStack: ["Side Project", "iOS", "SwiftUI"],
      description:
        "Highly accurate calculator to count calories burned from various activities",
      link: {
        label: "Moving Calories Calculator App",
        href: "https://apps.apple.com/us/app/moving-calories-calculator/id6456799256",
      },
    },
    {
      title: "QuickPassGen",
      techStack: ["Side Project", "iOS", "SwiftUI"],
      description: "iOS app to generate random password",
      link: {
        label: "QuickPassGen App",
        href: "https://apps.apple.com/us/app/quickpassgen/id6451387153",
      },
    },
  ],
} as const;
