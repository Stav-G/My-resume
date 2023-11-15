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
const section2Proj = "Projects";
const section2Vol = "Volunteering";
const section2Skill = "Skills and Programming knowledge";

const prevJobs =[
{
  id: 1,
     workPlace: "Software Developer  | Sapiens | 2022 - Present",
  paragraph:[
     "-Design, development, and implementation of new modules and processes of insurance and pension systems using SAPIENS in-house data-driven platform, eMerge, and Java.",
     "-Writing high-level SQL queries, data manipulation, reporting, and analyzing using DB2/Oracle.",
     "-Ability to prioritize and multi-task within a fast-paced environment and great attention to detail.",
     "-Designing UI for the insurance and pension systems and implementing the logic behind using eMerge and JavaScript.",
     "-Collaborating with QA and product teams, providing new solutions and unit tests.",
     "-Technologies: JavaScript, Java, API, Eclipse, Oracle, DB2."
    ]
},
{
  id: 2,
    workPlace: "Sales Support Backend  | Cellcom | 2020 - 2022",
  paragraph:
    [
      "-Provide customer support and resolve any service performance tickets.",
      "-Work with customers, employees, and management to promote, drive, and maintain continuous improvement in processes and productivity.",
      "-Ability to prioritize and multi-task within a fast-paced environment and great attention to detail.",
      "-Performing cost-benefit analyses of existing and potential customers.",
      "-Develop organizational skills, and excellent attention to detail, with an ability to work well under pressure."
    ],
    },
{
  id: 3,
  workPlace: "Sales | Cellcom | 2018 - 2020",
  paragraph:
      [
          "-Selling products and services using solid arguments to prospective customers.",
          "-Responsible for increasing sales and recruiting new customers for the organization.",
          "-Maintaining positive business relationships to ensure future sales.",
          "-Worked under pressure and independently with a demonstrated ability to multi-task."
      ],
},
{
  id: 4,
  workPlace: "Operation Officer | Air Force, IDF | 2014 - 2015",
  paragraph:
    [
      "-Responsible for air force plane's radio calibrating frequencies.",
      "-Responsible for administrative and office management.",
      "-Worked under pressure and independently with a demonstrated ability to multi-task."
    ],
},
{
  id: 5,
  workPlace: "Network System Operator | Air Force, IDF | 2013 - 2014",
  paragraph:
    [
      "-Establishment and deployment of tactical and technological communication cells.",
      "-Responsible for radio communication systems, satellite systems, and classified and encrypted information systems in the air force."
    ],
}
];

const education =[
  {
    id: 1,
    place: "B.Sc. Computer Science | HIT, Institute of Technology | 2019 - 2023 | GPA - 86",
    details:[""]
  }
];
  const  projects = [
      {
          id: 1,
          place: "Rain Prediction ",
          details: ["Data Science project based on Python to predict rain in Estes Park Colorado. I used web crawling, EDA, and modeling in this project."]
      },
      {
          id: 2,
          place: "Virtual housewares store",
          details: ["Software engineering project based on Java to sell and buy second-hand houseware furniture. It's an eCommerce local app that is based on the MVC model and uses SQL to build the database."]
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
          details: [ "C, C++, C#, Python, Java, JS, CSS, HTML, API, SQL, React, NodeJS."]
    },
    {
      id: 2,
      area: "Tools",
      details:
          ["Office, SAP, VS Code, Visual Studio, Jupyter, IntelliJ IDEA, Eclipse, Oracle, DB2, MongoDB, Google Colaboratory, Postman, GitHub."],
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
  section2Proj,
  projects,
  section2Vol,
  volunteering,
  section2Skill,
  skills,
  section5Title,
};
