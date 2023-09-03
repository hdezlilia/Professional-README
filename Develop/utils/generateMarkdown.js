 const licenses = {
  "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]",
  "GPLv3": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]",
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return '';
  return licenses[license] || '';
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const licenseLinks = {
  "MIT": "https://choosealicense.com/licenses/mit/",
  "GPLv3": "https://choosealicense.com/licenses/gpl-3.0/",
  "Boost Software License 1.0": "https://choosealicense.com/licenses/bsl-1.0/",
  "The Unlicense": "https://choosealicense.com/licenses/unlicense/",
};

function renderLicenseLink(license) {
  if (!license) return '';
  return licenses[license] || '';

};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return '';
  return `## License
  Distributed under the ${license} license. See [${license} license page] (${renderLicenseLink(license)}).`;
}

// TODO: Create a function to generate markdown for README
function generateMarkDown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
    ${data.description}

    ## Table of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    - [Test](#test)
    - [Questions](#questions)

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## License 
    ${data.license}

    ## Contribution 
    ${data.contribution}

    ## Tests
    ${data.tests}

    ## Questions
    
    Please reach out to ${data.name} on [Github](https://github.com/${data.github}). 

`;
}

module.exports = generateMarkDown;
