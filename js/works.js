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
    {
      name: "Colliers | Synergy",
      type: "Property Development",
      roles: [
        "Design",
        "Front-end",
        "Content Strategy",
        "Testing",
        "Technical Coordinator",
      ],
      link: "https://www.synergyind.com/",
    },
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
    {
      name: "Argo Facades",
      type: "Business",
      roles: ["Technical Coordinator", "UI Advisor"],
      link: "https://argofacades.in/",
    },
    {
      name: "Excomatix",
      type: "Business",
      roles: ["Technical Coordinator", "UI Advisor"],
      link: "https://www.excomatix.com/",
    },
    {
      name: "Marwan Electrical",
      type: "Business",
      roles: ["Technical Coordinator", "UI Advisor"],
      link: "https://www.marwanelectrical.com/",
    },
    {
      name: "Thistle Bakeville",
      type: "Pastries",
      roles: ["Lead"],
      link: "https://www.thistlebakeville.com/",
    },
    {
      name: "Re-dT",
      type: "REAL ESTATE",
      roles: ["Front-end", "Testing", "Lead"],
      link: "https://www.re-dt.com/",
    },
  ];

  function rolesList(roles) {
    return `
        ${roles.map((role) => `<span>${role}</span>`).join("")}
    `;
  }

  function workTemplate(work) {
    return `
    <div class="blk-item" data-link="${work.link}">
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
      name: "Visitor Management System",
      desc: "V.M.S. can be integrated with the ‘Frequency’ Tablet to document and track visitors within the campus. The ‘Frequency’ tablet can be used to record required data from the visitor and automatically generate an E-pass which would essentially constitute their name, type, entry time and the host(employee) name & designation. The system can be fashioned to accept different types of visitors based on requirements and even be used to blacklist certain people and effectively barring them from entry. V.M.S, too is ready for integration with six30 labs’ other products.",
      roles: ["Wireframe", "Design", "Front-end"],
      link: "https://www.builtech.co.in/",
    },
    {
      name: "Frequency",
      desc: "It acts as a normal Tablet but is equipped with a fingerprint reader that can be used to record login and logout times of employees along with geo-tagging capabilities. This tablet will help strengthen security in and around the campus. It comes with a rugged casing that can withstand drops and shocks and can be connected to a network through Wi-fi or mobile data (3G Sim). It is easy to install without the need for any cable and retains data even in case of power failure. By providing for simple integration with Six30 labs’ other products, this tablet augments data management for your company.",
      roles: ["Front-end"],
      link: "https://www.builtech.co.in/",
    },
    {
      name: "SYNC",
      desc: "With SYNC, you will be able to share organise and share any type of file within your company and share the same with employees. Customizing of access levels of individual files will ensure your control over your data and seamless sharing improves communication and efficiency.",
      roles: ["Wireframe", "Design", "Front-end"],
      link: "https://www.builtech.co.in/",
    },
    {
      name: "Asset Management",
      desc: "Our asset management software enables you to store and access all relevant data regarding your company’s asset procurement cycle and related information with a few clicks. The goal is to make recall of such information simple and quick.",
      roles: ["Design", "Front-end"],
      link: "https://www.builtech.co.in/",
    },
    {
      name: "Management Information System",
      desc: "A streamlined approach to storing and modifying employee records, working hours and requests. This portal allows the functionality of providing access to records based on hierarchy and clocking multiple projects simultaneously. In addition, leave & travel requests can be submitted and approved effortlessly.",
      roles: ["Wireframe", "Design", "Front-end", "Technical Coordinator"],
      link: "https://www.builtech.co.in/",
    },
    {
      name: "HRMS",
      desc: "A portal catering to all needs in Human Resource management. A database of employee information, leave management, travel authorisations, probation assessment details, appraisal processing and so on.",
      roles: ["Wireframe", "Design", "Front-end"],
      link: "https://www.builtech.co.in/",
    },
    // {
    //   name: "Client Project Master",
    //   desc: "This is a Portal to access details and progress reports of client projects. A system of providing different levels of access to admin, company worker and clients with visually appealing and elaborate project information to clients whereas the admin is given basic progress reports of projects.",
    //   roles: ["Wireframe", "Design", "Front-end"],
    //   link: "https://www.builtech.co.in/",
    // },
  ];

  function rolesList(roles) {
    return `
        ${roles.map((role) => `<span>${role}</span>`).join("")}
    `;
  }

  function workTemplate(work) {
    return `
    <div class="blk-item web-app" data-link="${work.link}">
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
