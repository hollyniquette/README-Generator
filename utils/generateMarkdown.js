function generateMarkdown(data) {
  const {
    title,
    description,
    installation,
    usage,
    contribution,
    tests,
    license,
    username,
    email,
  } = data;

  return `
  # ${title} • ${renderLicenseBadge(license)}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Description

  ${description}

  ## Installation Instructions

  ${installation}

  ## Usage Information

  ${usage}

  ## Guidelines for Contribution

  ${contribution}

  ## Testing Instructions

  ${tests}

  ${renderLicenseSection(license)}

  ## Questions

  Reach out to me via [Github](https://github.com/${username}) or [Email me](mailto:${email}) with any questions.
  
  `;
}

function renderLicenseBadge(license) {
  const badge =
    license !== "None"
      ? `![License](https://img.shields.io/badge/License-${license.replace(
          " ",
          "%20"
        )}-blue.svg)`
      : "";
  return badge;
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return `
   ## License 
  
   This project is covered under the ${license} license.
    
    `;
  } else {
    return "";
  }
}

module.exports = generateMarkdown;
