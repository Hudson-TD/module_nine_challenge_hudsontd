// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Badge](https://img.shields.io/badge/License-${license}-red.svg)`
  }
  return ``;
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `- [License](#license)`
  }
  return ``;
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    This application is covered by the ${license} license.`
  }
  return ``;

}

// Markdown formatting and data insertion
function generateMarkdown(data) {
  return `
  #  ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
## Table of Content
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
  ${data.installation}
## Usage
  ${data.usage}
${renderLicenseSection(data.license)}
## Contributing
  ${data.contributing}
## Tests
  ${data.tests}
## Questions
Please email any questions to: ${data.email} 
  
Find me on GitHub: [${data.username}](https://github.com/${data.username})`;
}

module.exports = generateMarkdown;