# Student Development Practice Project

## Project Overview

This project was developed as part of a practical exercise on software development practices, focusing on:

- Version Control using Git and GitHub
- Continuous Integration (CI)
- Quality Assurance (QA)

The project is a simple Student Grade Calculator application developed in JavaScript. It performs basic calculations such as addition, subtraction, and average score calculation while demonstrating software development workflows used in professional environments.

---

## Objectives

The objectives of this project are:

- Learn how to use Git for version control
- Practice branching and merging
- Implement Continuous Integration using GitHub Actions
- Write unit tests using Jest
- Use ESLint to maintain code quality
- Practice peer review and collaboration

---

## Technologies Used

- JavaScript
- Node.js
- Git
- GitHub
- GitHub Actions
- Jest
- ESLint

---

## Project Structure

```text
student-dev-practice/
│
├── src/
│   └── calculator.js
│
├── tests/
│   └── calculator.test.js
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── package.json
├── README.md
├── qa-report.md
├── reflection-report.md
├── .eslintrc.json
└── .gitignore
```

---

## Features

The application can:

- Add two numbers
- Subtract two numbers
- Calculate average scores
- Run automated tests
- Check coding standards automatically
- Execute CI workflows automatically

---

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/student-dev-practice.git
```

Move into the project directory:

```bash
cd student-dev-practice
```

Install dependencies:

```bash
npm install
```

---

## Running Tests

To run unit tests:

```bash
npm test
```

---

## Running ESLint

To check coding standards:

```bash
npm run lint
```

---

## Continuous Integration

GitHub Actions is configured to automatically:

- Install dependencies
- Run ESLint checks
- Execute Jest tests

The workflow executes whenever:

- Code is pushed to the repository
- Pull requests are created

---

## Git Workflow Used

The following Git practices were implemented:

1. Repository initialization
2. Staging files
3. Creating commits
4. Creating feature branches
5. Merging branches
6. Pulling updates
7. Resolving merge conflicts

---

## Quality Assurance

Quality assurance methods used:

- Unit testing with Jest
- Static code analysis using ESLint
- Peer code review using Pull Requests

---

## Author

Adesina Nurudeen

---

## License

This project is for educational purposes only.