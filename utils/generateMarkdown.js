// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'no license') {
    return ''
  } return `![](https://img.shields.io/badge/license-${license.replace(' ','')}-brightgreen)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'No license') {
    return ''
  } return `- [License](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'no license') {
    return ''
  } return `## License 
  
  This application is licensed under ${license}.
  To view terms and conditions of ${license}, then please	[visit this link](https://choosealicense.com/)
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink(data.license)}
- [Testing](#testing)

## Installation
${data.installation}

## Usage
${data.useage}

## Credits
${data.contributors}

${renderLicenseSection(data.license)}

## Testing
${data.tests}

## Questions 
If you have any questions, please e-mail [matthewwagner@outlook.com](${data.email}), 
or visit the [Github repository](https://www.github.com/${data.username}) for any updates.

`;
}

module.exports = generateMarkdown;
