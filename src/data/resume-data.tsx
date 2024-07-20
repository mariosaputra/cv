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
    "Hi, I'm a programmer with experience in various roles, from firmware engineering to web and mobile development. Currently, I'm a full-time web developer and also work on my own projects in my free time.",
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
      degree: "Master's Degree in Computer Science and Communication Engineering",
      start: "Sep 2014",
      end: "Sep 2016",
    },
  ],
  certification: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Service (AWS)",
      issuedDate: "June 2024",
      expireDate: "June 2027"
    },
    {
      name: "Japanese Language Proficiency Test N2 Level",
      issuer: "The Japan Foundation",
      issuedDate: "December 2019",
      expireDate: ""
    }

  ],
  work: [
    {
      company: "Self-Employed",
      link: "https://marioapps.com/",
      badges: ["Side Project"],
      title: "iOS Developer",
      // logo: ParabolLogo,
      start: "July 2023",
      end: "Present",
      description:
        "As a solo developer, I built and released several apps on the App Store. Some of my apps were featured on Product Hunt's Product of the Day and achieved hundreds of downloads per month. Technologies: Swift, SwiftUI, SwiftData, CloudKit, UIKit.",
    },
    {
      company: "Future Spirits",
      link: "https://www.future-s.com/",
      badges: ["Remote"],
      title: "Full Stack Developer",
      // logo: ParabolLogo,
      start: "Nov 2022",
      end: "Present",
      description:
        "Maintained and added new features to a high-traffic website, replaced servers, and initiated migration to Docker and Single Page Applications (SPA). Technologies: JavaScript, MySQL, Vue, PHP, Perl, Linux, Docker.",
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
        "Developed a 3D robot simulation software for Windows on-site at a client's office. Technologies: .NET Framework, C#, C++.",
    },
    {
      company: "Xacti",
      link: "https://xacti-co.com/",
      badges: [],
      title: "Firmware Engineer",
      // logo: JojoMobileLogo,
      start: "Apr 2017",
      end: "Jul 2019",
      description:
        "Developed firmware for digital cameras, led the GUI development team, and worked on projects such as object detection cameras, music recorders, and night vision cameras. Technologies: C, Python.",
    },
  ],
  skills: [
    "JavaScript",
    "Python",
    "PHP",
    "Perl",
    "Node.js",
    "Vue/Nuxt.js/JQuery",
    "Swift",
    "SwiftUI",
    "MySQL",
    "Linux Server",
    "C/C++/C#",
  ],
  projects: [
    {
      title: "Plant Identifier AI",
      techStack: ["Side Project", "iOS", "SwiftUI", "SwiftData", "OpenAI"],
      description:
        "An iOS app to identify plants from pictures. Ranked #2 on Product Hunt Daily Launch with 1000+ downloads in the first month.",
      link: {
        label: "Plant Identifier AI",
        href: "",
      },
    },
    {
      title: "Streaks66 - Habit Tracker AI",
      techStack: ["Side Project", "iOS", "SwiftUI", "SwiftData", "CloudKit"],
      description: "An iOS app to build habits within 66 days, integrated with an AI habit coach.",
      link: {
        label: "Habit Tracker App",
        href: "",
      },
    },
    {
      title: "Japanese Vocabularies",
      techStack: ["Side Project", "iOS", "SwiftUI", "SwiftData", "CloudKit"],
      description: "An iOS app with over 8000 Japanese vocabularies and examples to help users learn and track their progress.",
      link: {
        label: "Japanese Learning App",
        href: "",
      },
    },
  ],
} as const;