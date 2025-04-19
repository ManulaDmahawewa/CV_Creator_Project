const CV_Form = document.getElementById("CV_Form");
const personName = document.getElementById("name");
const phoneNo = document.getElementById("phoneNo");
const emailAddress = document.getElementById("emailAddress");
const linkedinAddress = document.getElementById("linkedinAddress");
const address = document.getElementById("address");
const btnBasicInfo = document.getElementById("btnBasicInfo");
const header_secion = document.getElementById("header_secion");
const summary_section = document.getElementById("summary_section");
const addSkills = document.getElementById("addSkills");
const btnSkills = document.getElementById("btnSkills");
const skills_section = document.getElementById("skills_section");
const initialText = document.getElementById("initialText");
const addSummary = document.getElementById("addSummary");
const btnSummary = document.getElementById("btnSummary");

//------------------Basic Information Section----------------
const basicInfo = [];
btnBasicInfo.onclick = () => {
  CV_Form.classList.remove("hidden");
  initialText.classList.add("hidden");
  btn_print.classList.remove("hidden");
  basicInfo.push({
    name: personName.value,
    phoneNo: phoneNo.value,
    emailAddress: emailAddress.value,
    linkedinAddress: linkedinAddress.value,
    address: address.value,
  });
  console.log(basicInfo);

  header_secion.innerHTML = "";
  basicInfo.forEach((info) => {
    header_secion.innerHTML = `
         <h2>${info.name}</h2>
          <p>${info.phoneNo}</p>
           <p>
           ${info.address}
          </p>
          <a class="header_links" href=${info.emailAddress}
            >${info.emailAddress}</a>
            <br />
          <label for="linkdin">in: </label
          ><a class="header_links" href=${info.linkedinAddress}
            >${info.linkedinAddress}</a
          >
        `;
  });
};

//-------------------------Summary Section-------------------

btnSummary.onclick = () => {
  CV_Form.classList.remove("hidden");
  initialText.classList.add("hidden");
  btn_print.classList.remove("hidden");
  summary_section.innerHTML = `
     <h3>SUMMARY</h3>
          <hr />
           <p>
           ${addSummary.value}
          </p>
    `;
};

//-------------------Skill Section---------------------------
btnSkills.onclick = () => {
  CV_Form.classList.remove("hidden");
  initialText.classList.add("hidden");
  btn_print.classList.remove("hidden");
  skills_section.innerHTML = `
     <h3>SKILLS</h3>
          <hr />
          <p>
           ${addSkills.value}
          </p>
    `;
};
//------------------Projects Section----------------------------
const pjojectName = document.getElementById("pjojectName");
const technologies = document.getElementById("technologies");
const gitLink = document.getElementById("gitLink");
const hostLink = document.getElementById("hostLink");
const ProjectDescription = document.getElementById("ProjectDescription");
const btnProject = document.getElementById("btnProject");
const mainProjects_section = document.getElementById("mainProjects_section");
const projects_section = document.getElementById("projects_section");
const projectDetails = [];
btnProject.onclick = () => {
  CV_Form.classList.remove("hidden");
  initialText.classList.add("hidden");
  btn_print.classList.remove("hidden");
  mainProjects_section.classList.remove("hidden");
  projects_section.innerHTML = "";

  projectDetails.push({
    pjojectName: pjojectName.value,
    technologies: technologies.value,
    gitLink: gitLink.value,
    hostLink: hostLink.value,
    ProjectDescription: ProjectDescription.value,
  });
  console.log(projectDetails);

  projectDetails.forEach((project) => {
    projects_section.innerHTML += `
          <ul>
            <li><b>${project.pjojectName}</b></li>
            <li class="noBullet">
              <b>Technologies Used :</b> <span>${project.technologies}</span>
            </li>

            <li class="noBullet">
            ${project.ProjectDescription}
            </li>

            <li class="links noBullet"><b>Github Link :</b> <a href=  ${project.gitLink}>  ${project.gitLink}</a></li>
          </ul>
        `;
    if (project.hostLink) {
      let ul = document.createElement("ul");
      let li = document.createElement("li");
      li.classList.add("links");
      li.classList.add("noBullet");
      li.classList.add("host");
      li.innerHTML = `<b>Host Link :</b> <a href= ${project.hostLink}> ${project.hostLink}</a>`;
      ul.appendChild(li);
      projects_section.appendChild(ul);
    }
  });
};
//-----------------------Work Experience---------------------
const companyTasks = document.getElementById("companyTasks");
const company = document.getElementById("company");
const workStartDate = document.getElementById("workStartDate");
const workEndDate = document.getElementById("workEndDate");
const main_workExperience_section = document.getElementById(
  "main_workExperience_section"
);
const btn_addTasks = document.getElementById("btn_addTasks");
const btn_addExperience = document.getElementById("btn_addExperience");
const workExperience_section = document.getElementById(
  "workExperience_section"
);
let Tasks = [];
btn_addTasks.onclick = () => {
  Tasks.push(companyTasks.value);
  console.log("comapy tasks: ", Tasks);
  companyTasks.value = "";
};

const companyExperience = [];

btn_addExperience.onclick = () => {
  CV_Form.classList.remove("hidden");
  initialText.classList.add("hidden");
  btn_print.classList.remove("hidden");
  companyExperience.push({
    companyName: company.value,
    workStartDate: workStartDate.value,
    workEndDate: workEndDate.value,
    tasksDone: Tasks,
  });
  console.log("companyExperience: ", companyExperience);
  workExperience_section.innerHTML = "";
  main_workExperience_section.classList.remove("hidden");

  companyExperience.forEach((work) => {
    workExperience_section.innerHTML += `
          <div id="companyPeriod" class="company_period">
            <h4 id="company">${work.companyName}</h4>
            <h4 id="Work_Period">${work.workStartDate}-${work.workEndDate}</h4>
          </div>
          <ul>
            ${work.tasksDone
              .map((task) => {
                return `<li>${task}</li>`;
              })
              .join("")}
          </ul>`;
  });
  Tasks = [];
};
//-------------Eduction Section-----------------------------
const education = document.getElementById("education");
const btn_addQualifications = document.getElementById("btn_addQualifications");
const educationQualification = document.getElementById(
  "educationQualification"
);
const startDate = document.getElementById("startDate");
const endDate = document.getElementById("endDate");
const institute = document.getElementById("institute");
const sub_eductionSection = document.getElementById("sub_eductionSection");
let qualifycationDetails = [];
btn_addQualifications.onclick = () => {
  CV_Form.classList.remove("hidden");
  initialText.classList.add("hidden");
  btn_print.classList.remove("hidden");
  education_section.classList.remove("hidden");
  sub_eductionSection.innerHTML = "";
  qualifycationDetails.push({
    qulifycation: educationQualification.value,
    institute: institute.value,
    startDate: startDate.value,
    endDate: endDate.value,
  });
  qualifycationDetails.forEach((Detail) => {
    sub_eductionSection.innerHTML += `
         <div id="educationPeriod" class="education_Period">
                <h4 id="education">${Detail.qulifycation}</h4>
                <h4 id="education_time" class="WorkPeriod">${Detail.startDate}-${Detail.endDate}</h4>
              </div>
              <p>${Detail.institute}</p>
        `;
  });
};
//----------------------Language Section----------------------
const language = document.getElementById("language");
const proficiencyLevel = document.getElementById("proficiencyLevel");
const btn_addLanguages = document.getElementById("btn_addLanguages");
const languages_section = document.getElementById("languages_section");
const language_list = document.getElementById("language_list");
const languageDetails = [];
btn_addLanguages.onclick = () => {
  CV_Form.classList.remove("hidden");
  initialText.classList.add("hidden");
  btn_print.classList.remove("hidden");
  language_list.innerHTML = "";
  languages_section.classList.remove("hidden");
  languageDetails.push({
    language: language.value,
    proficiencyLevel: proficiencyLevel.value,
  });
  languageDetails.forEach((language) => {
    language_list.innerHTML += `
          <li><b>${language.language}: </b><span>${language.proficiencyLevel}</span></li>
        `;
  });
};
//----------------------Referees Section----------------------
const refereesName = document.getElementById("refereesName");
const refereesDesignation = document.getElementById("refereesDesignation");
const btn_addReferees = document.getElementById("btn_addReferees");
const referees_section = document.getElementById("referees_section");
const ref_list = document.getElementById("ref_list");
const refereesDetails = [];
btn_addReferees.onclick = () => {
  CV_Form.classList.remove("hidden");
  initialText.classList.add("hidden");
  btn_print.classList.remove("hidden");
  ref_list.innerHTML = "";
  referees_section.classList.remove("hidden");
  refereesDetails.push({
    name: refereesName.value,
    designation: refereesDesignation.value,
  });

  refereesDetails.forEach((refDetail) => {
    ref_list.innerHTML += `
         <li>
              <b>${refDetail.name}</b><br /><span
                >${refDetail.designation}</span
              >
            </li>
        `;
  });
};

const btn_print = document.getElementById("btn_print");
const topheader = document.querySelector(".topheader");

btn_print.onclick = () => {
  window.print();
};

//-----------------Form Preview and CV Preview--------------
const btn_form = document.getElementById("btn_form");
const btn_CVpreview = document.getElementById("btn_CVpreview");
const form_section = document.getElementById("form_section");
const CV_sectionMain = document.getElementById("CV_sectionMain");

//Form Preview button
btn_form.onclick = () => {
  form_section.classList.remove("hidden");
  CV_sectionMain.classList.add("hidden");
  btn_CVpreview.classList.remove("onclick");
  btn_form.classList.add("onclick");
};
//CV Preview button
btn_CVpreview.onclick = () => {
  form_section.classList.add("hidden");
  CV_sectionMain.classList.remove("hidden");
  btn_CVpreview.classList.add("onclick");
  btn_form.classList.remove("onclick");
};
