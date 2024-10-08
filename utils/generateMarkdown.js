// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license==="MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if(license==="ISC"){
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  }
  else if(license==="Mozilla"){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  else if(license==="IBM"){
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  }
  else if(license==="Apache"){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if(license==="Eclipse"){
    return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  }
  else{
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return '';
  }

  const licenseLinks= {
    MIT: 'https://opensource.org/licenses/MIT',
    ISC: 'https://opensource.org/licenses/ISC',
    Mozilla: 'https://opensource.org/licenses/MPL-2.0',
    IBM: 'https://opensource.org/licenses/IPL-1.0',
    Apache: 'https://opensource.org/licenses/Apache-2.0',
    Eclipse: 'https://opensource.org/licenses/EPL-1.0',
  };

  return licenseLinks[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return '';
  }

  return `This project is licensed under the ${license} License. See the [LICENSE](${renderLicenseLink(license)}) file for details.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

  ${data.installation}

## Usage

  ${data.usage}

## License

  ${renderLicenseSection(data.license)}

## How to Contribute

  ${data.contribute}

## Tests

  ${data.tests}

## Questions

If you have any questions about the repo, please contact me directly at ${data.email}. You can find more of my work at <a href="https://github.com/${data.username}">${data.username}</a>.
`;
}

module.exports = generateMarkdown;