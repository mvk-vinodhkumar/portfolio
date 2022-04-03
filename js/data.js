//Websites
function populateWorks() {
  const worksData = [
    {
      name: "Builtech Palakkad",
      type: "Real Estate",
      roles: ["Wireframe", "Front-end", "Technical Coordinator", "Testing"],
      link: "https://www.builtech.co.in/",
    },
    {
      name: "Edge 3D Technologies",
      type: "3D Scanning",
      roles: [
        "Wireframe",
        "Design",
        "Front-end",
        "Content Strategy",
        "Testing",
        "Lead",
      ],
      link: "https://www.edge3d.io/",
    },
    {
      name: "Design Your Home Space",
      type: "Interior Design",
      roles: ["Wireframe", "Front-end", "Testing", "Technical Coordinator"],
      link: "https://www.dyhs.in/",
    },
    {
      name: "Six30 Labs",
      type: "Technology",
      roles: [
        "Wireframe",
        "Design",
        "Front-end",
        "Content Strategy",
        "Testing",
        "Lead",
      ],
      link: "https://www.six30labs.io/",
    },
    // {
    //   name: "Colliers | Synergy",
    //   type: "Property Development",
    //   roles: [
    //     "Design",
    //     "Front-end",
    //     "Content Strategy",
    //     "Testing",
    //     "Technical Coordinator",
    //   ],
    //   link: "https://www.synergyind.com/",
    // },
    //   {
    //     name: "Priyanka Kinger",
    //     type: "Fitness Training",
    //     roles: [
    //       "Design",
    //       "Front-end",
    //       "Content Strategy",
    //       "Testing",
    //       "Technical Coordinator",
    //     ],
    //     link: "https://priyankakinger.com/",
    //   },
    {
      name: "Internet Academy",
      type: "Business",
      roles: ["Design", "Front-end", "Testing"],
      link: "https://www.internetacademy.co.in/",
    },
    {
      name: "Bloomlabs Infotech",
      type: "Training Academy",
      roles: ["Wireframe", "Design", "Front-end", "Testing", "Lead"],
      link: "https://bloomlabs.in/",
    },
    {
      name: "SanecoleTechnologies",
      type: "Business",
      roles: ["UI Advisor", "Technical Coordinator"],
      link: "https://www.sanecole.com/",
    },
    {
      name: "Livezy",
      type: "Fitness Training",
      roles: [
        "Wireframe",
        "Design",
        "Front-end",
        "Content Strategy",
        "Testing",
        "Lead",
      ],
      link: "https://www.livezy.com/",
    },
    {
      name: "Synergy MEA",
      type: "Construction Services",
      roles: ["Lead"],
      link: "https://www.livezy.com/",
    },
    {
      name: "Argo Facades",
      type: "Business",
      roles: ["Technical Coordinator", "UI Advisor"],
      link: "https://argofacades.in/",
    },
    {
      name: "Marwan Electrical",
      type: "Business",
      roles: ["Technical Coordinator", "UI Advisor"],
      link: "https://www.marwanelectrical.com/",
    },
    // {
    //   name: "Thistle Bakeville",
    //   type: "Pastries",
    //   roles: ["Lead"],
    //   link: "https://www.thistlebakeville.com/",
    // },
    {
      name: "Re-dT",
      type: "REAL ESTATE",
      roles: ["Front-end", "Testing", "Lead"],
      link: "https://www.re-dt.com/",
    },
    {
      name: "Excomatix",
      type: "Business",
      roles: ["Technical Coordinator", "UI Advisor"],
      link: "https://www.excomatix.com/",
    },
    {
      name: "Create Studio",
      type: "Photography",
      roles: [
        "Wireframe",
        "Design",
        "Front-end",
        "Content Strategy",
        "Testing",
        "Lead",
      ],
      link: "http://www.createstudio.in/",
    },
  ];

  function rolesList(roles) {
    return `
        ${roles.map((role) => `<span>${role}</span>`).join("")}
    `;
  }

  function workTemplate(work) {
    return `
    <div class="blk-item">
        <div class="ext-link" data-link="${
          work.link
        }" title="View Website"><i class="fa fa-link" aria-hidden="true"></i></div>
        <div class="top-blk">
            <div class="desc">
                <h4>${work.name}</h4>
                <p>${work.type}</p>
            </div>
        </div>

        <div class="btm-blk">
            ${work.roles ? rolesList(work.roles) : ""}
        </div>
    </div>
  `;
  }

  document.getElementById("websites-wrap").innerHTML = `
  ${worksData.map(workTemplate).join("")}
`;
}

//Web-apps
function populateWebApps() {
  const worksData = [
    {
      name: "SYNC",
      desc: "With SYNC, you will be able to organize and share any type of file within your company and share the same with employees. Customizing the access levels of individual files will ensure your control over your data and seamless sharing improves communication and efficiency.",
      roles: ["Wireframe", "Design", "Front-end"],
      link: "",
    },
    {
      name: "Asset Management",
      desc: "Our asset management software enables you to store and access all relevant data regarding your company’s asset procurement cycle and related information with a few clicks. The goal is to make recall of such information simple and quick.",
      roles: ["Design", "Front-end"],
      link: "",
    },
    {
      name: "Frequency",
      desc: "It acts as a normal Tablet but is equipped with a fingerprint reader that can be used to record login and logout times of employees along with geo-tagging capabilities. This tablet will help strengthen security in and around the campus. It comes with a rugged casing that can withstand drops and shocks and can be connected to a network through Wi-fi or mobile data (3G Sim). It is easy to install without the need for any cable and retains data even in case of power failure.",
      roles: ["Front-end"],
      link: "",
    },
    {
      name: "Visitor Management System",
      desc: "VMS can be integrated with the ‘Frequency’ Tablet to document and track visitors within the campus. The ‘Frequency’ tablet can be used to record required data from the visitor and automatically generate an E-pass which would essentially constitute their name, type, entry time and the host(employee) name & designation. The system can be fashioned to accept different types of visitors based on requirements and even be used to blacklist certain people and effectively barring them from entry.",
      roles: ["Wireframe", "Design", "Front-end"],
      link: "",
    },
    {
      name: "Management Information System",
      desc: "A streamlined approach to storing and modifying employee records, working hours and requests. This portal allows the functionality of providing access to records based on hierarchy and clocking multiple projects simultaneously. In addition, leave & travel requests can be submitted and approved effortlessly.",
      roles: ["Wireframe", "Design", "Front-end", "Technical Coordinator"],
      link: "",
    },
    {
      name: "HRMS",
      desc: "A portal catering to all needs in Human Resource management. A database of employee information, leave management, travel authorisations, probation assessment details, appraisal processing and so on.",
      roles: ["Wireframe", "Design", "Front-end"],
      link: "",
    },
    {
      name: "Client Project Master",
      desc: "This is a Portal to access details and progress reports of client projects. A system of providing different levels of access to admin, company worker and clients with visually appealing and elaborate project information to clients whereas the admin is given basic progress reports of projects.",
      roles: ["Wireframe", "Design", "Front-end"],
      link: "",
    },
    {
      name: "Respect Your Artist",
      desc: "A web-app that provides a platform for any type of artist to express their ideologies through videos and podcasts.",
      roles: ["Content Strategy", "Technical Coordinator"],
      link: "",
    },
  ];

  function rolesList(roles) {
    return `
        ${roles.map((role) => `<span>${role}</span>`).join("")}
    `;
  }

  function workTemplate(work) {
    return `
    <div class="blk-item web-app">
        <div class="top-blk">
            <div class="desc">
                <h4>${work.name}</h4>
                <p class="description">${work.desc}</p>
            </div>
        </div>

        <div class="btm-blk web-app">
            ${work.roles ? rolesList(work.roles) : ""}
        </div>
    </div>
  `;
  }

  document.getElementById("webapps-wrap").innerHTML = `
  ${worksData.map(workTemplate).join("")}
`;
}

//Awards
function populateAwards() {
  const awardsData = [
    {
      name: "Outstanding Performance & Superior Dedication",
      company: "At Six30 Labs",
      year: "2021",
    },
    // {
    //   name: "First Class Service",
    //   company: "At Six30 Labs",
    //   year: "2020",
    // },
    {
      name: "Circle of Joy & First Class Service",
      company: "At Six30 Labs",
      year: "2019 - 2020",
    },
    {
      name: "All Day Everyday",
      company: "At Six30 Labs",
      year: "2017 - 2018",
    },
    {
      name: "Best Instructor of the Month",
      company: "At Internet Academy",
      year: "2016",
    },
  ];

  function awardTemplate(award) {
    return `
    <div class="timeline-block">
      <div class="timeline-icon">
        <i class="fa-mine fa fa-shield"></i>
      </div>
      <div class="exp-head">
        <p class="time-frame">${award.year}</p>
        <h3>${award.name}</h3>
        <h4>${award.company}</h4>
      </div>
    </div>
  `;
  }

  document.getElementById("awards-wrap").innerHTML = `
  ${awardsData.map(awardTemplate).join("")}
`;
}

//Certifications
function populateCertifications() {
  const certData = [
    {
      name: "Graphic Design and Web-Development",
      academy: "Internet Academy (W3C Member)",
      year: "2016",
    },
    {
      name: "Software for Embedded Systems",
      academy: "MindSculptor Systems Pvt. Ltd.",
      year: "2015",
    },
    {
      name: "Professional C++ and OOPs",
      academy: "MindSculptor Systems Pvt. Ltd.",
      year: "2015",
    },
    {
      name: "Core Java",
      academy: "MindSculptor Systems Pvt. Ltd.",
      year: "2015",
    },
  ];

  function certTemplate(cert) {
    return `
    <div class="timeline-block">
      <div class="timeline-icon">
        <i class="fa-mine fa fa-certificate"></i>
      </div>
      <div class="exp-head">
        <p class="time-frame">${cert.year}</p>
        <h3>${cert.name}</h3>
        <h4>${cert.academy}</h4>
      </div>
    </div>
  `;
  }

  document.getElementById("cert-wrap").innerHTML = `
  ${certData.map(certTemplate).join("")}
`;
}

//Experience
function populateExperience() {
  const expData = [
    {
      company: "Six30 Labs",
      timePeriod: "2016 - PRESENT",
      link: "https://www.six30labs.io/",
      position: "Software Engineer/ Principal Engineer",
    },
    {
      company: "Internet Academy (W3C Member)",
      timePeriod: "2016",
      link: "https://www.internetacademy.co.in",
      position: "Software Engineer & Instructor",
    },
    {
      company: "Kudelski Group",
      timePeriod: "2015",
      link: "https://www.nagra.com",
      position: "Software Engineer",
    },
  ];

  function expTemplate(exp) {
    return `
    <div class="exp">
      <div class="exp-icon">
        <i class="fa-mine fa fa-desktop"></i>
      </div>
      <div class="exp-head">
        <p class="time-frame">${exp.timePeriod}</p>
        <h3>
          <a
            href="${exp.link}"
            target="_blank"
            class="linkout"
            >${exp.company}</a
          >
        </h3>
        <h4>${exp.position}</h4>
      </div>
    </div>`;
  }

  document.getElementById("exp-wrap").innerHTML = `
  ${expData.map(expTemplate).join("")}
`;
}

//Education
function populateEducation() {
  const eduData = [
    {
      college: "HKBK College of Engineering",
      timePeriod: "2010 - 2014",
      stream: "Computer Science & Engineering",
      info: "Graduated from HKBKCE with a Major in Computer Science & Engineering.",
    },
    {
      college: "St. Joseph's College",
      timePeriod: "2008 - 2010",
      stream: "Computer Science",
      info: "Graduated from St. Joseph's Pre-University College with a Major in Computer Science.",
    },
  ];

  function eduTemplate(edu) {
    return `
    <div class="timeline-block">
      <div class="timeline-icon">
        <i class="fa-mine fa fa-graduation-cap"></i>
      </div>
      <div class="exp-head">
        <p class="time-frame">${edu.timePeriod}</p>
        <h3>${edu.college}</h3>
        <h4>${edu.stream}</h4>
      </div>
      <div class="specialisation">
        <p>
          ${edu.info}
        </p>
      </div>
    </div>`;
  }

  document.getElementById("edu-wrap").innerHTML = `
  ${eduData.map(eduTemplate).join("")}
`;
}
