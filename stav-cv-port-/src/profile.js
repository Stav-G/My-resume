// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};

const background = {
  // Options: Snow or Particle
  type: "Snow",
};

const section2Exp = "Experience";
const section2Edu = "Education";
const section2Vol = "Volunteering";
const section2Skill = "Skills and Programming knowledge";

const prevJobs =[
{
  id: 1,
  workPlace: "Sales Support Specialist  | Cellcom | 2020 - Present",
  paragraph:[
     "-Provide customer support and resolve any service performance tickets.",
     "-Work with customers, employees, and management to promote, drive, and maintain continuous improvement in processes and productivity.",
     "-Ability to prioritize and multi-task within a fast-paced environment and great attention to detail.",
     "-Develop organizational skills, excellent attention to detail, with an ability to work well under pressure."
    ]
},
{
  id: 2,
  workPlace: "Sales  | Cellcom | 2018 - 2020",
  paragraph:
    [
      "-Selling products and services using solid arguments to prospective customers.",
      "-Responsible increase sales and recruiting new customers for the organization.",
      "-Maintaining positive business relationships to ensure future sales.",
      "-Performing cost-benefit analyses of existing and potential customers.",
      "-Adherence to a monthly goals plan.",
      "-Worked under pressure and independently with a demonstrated ability to multi-task."
    ],
},
{
  id: 3,
  workPlace: "Operation Officer | Air Force, IDF | 2014 - 2015",
  paragraph:
    [
      "-Responsible for air force plane's radio calibrating frequencies.",
      "-Responsible for administrative and office management.",
      "-Worked under pressure and independently with a demonstrated ability to multi-task."
    ],
},
{
  id: 4,
  workPlace: "Network System Operator | Air Force, IDF | 2013 - 2014",
  paragraph:
    [
      "-Establishment and deployment of tactical and technological communication cells.",
      "-Responsible for radio communication systems, satellite systems, classified and encrypted information systems in the air force."
    ],
}
];

const education =[
  {
    id: 1,
    place: "B.Sc. Computer Science | HIT, Institute of Technology | 2019 - Present",
    details:[ "null."]
  },
  {
    id: 2,
    place: "Hebrew Law studies in Netanya Academic College | 2011 - 2013",
    details: ["-Major."]
  },
  {
    id: 3,
    place: "Moshe Sharet High-School, Netanya | 2001 - 2013",
    details: ["-Major in Biolog"]
  }
];
  const volunteering =[
  {
    id: 1,
    place: "Camp Counselor | JCC, Atlanta  | 2018",
    details:[ "-Volunteered in the Jewish Agency, responsible for education and training content."]
  }
];
  const skills =[
    {
      id: 1,
      area: "Code",
      details:[ "C, C++, Python, Java, JS, CSS, HTML, API, SQL."]
    },
    {
      id: 2,
      area: "Tools",
      details:
        ["GitHub , Office, SAP, VS code, Visual Studio, Jupyter, IntelliJ IDEA, Google Colaboratory, Postman."],
    }
  ];

const skillsBar = [
  {
    id: 1,
    name: "HTML5",
    faClass: "fab fa-html5",
  },
  { 
    id: 2,
    name: "CSS3",
    faClass: "fab fa-css3",
  },
  { 
    id: 3,
    name: "Javascript",
    faClass: "fab fa-js",
  },
  { 
    id: 4,
    name: "Node",
    faClass: "fab fa-node",
  },
  { 
    id: 5,
    name: "ReactJS",
    faClass: "fab fa-react",
  },
  { 
    id: 6,
    name: "Database",
    faClass: "fas fa-database",
  },
  { 
    id: 7,
    name: "Github",
    faClass: "fab fa-github",
  },
  { 
    id: 8,
    name: "Java",
    faClass: "fab fa-java",
  },
];


const section5Title = "Get in Touch";
const contact = {
  phone: "054-2064343",
  mail: "stavgallula@gmail.com",
  city: "Netanya",
  contactUrl: "file:///C:/Users/Stav/Downloads/Stav_Gallula_CV%20(7).pdf",
};

const social = {
  linkedin: "https://www.linkedin.com/in/stav-gallula-896924213/",
  github: "https://github.com/Stav-G/",
  resume: "https://www.pdfhost.net/index.php?Action=Download&File=877167bfe81e1219ae98c54763914333",
};
export {
  animation,
  background,
  prevJobs,
  skillsBar,
  contact,
  social,
  section2Exp,
  section2Edu,
  education,
  section2Vol,
  volunteering,
  section2Skill,
  skills,
  section5Title,
};
