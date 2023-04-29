### Node version
Recommended node version 18.14.1

# Find Security Repository Work Standard

Hi, in order to protect the integrity of the code, have maximum efficiency and, prevent big failures to the ser flow and to the final users this si the standard to work with this repository:

## Github

We work using the Gitflow Standard to manage branches.

https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow

The project will have a development branch and a main branch

### How to work with gitflow

- Create a branch using the pattern feature/* from the development branch. Please use meaningful syntax for the name. Do not use branches like feature/dev-milton or feature/milton, The purpose of gitflow is to have an easy track of the project progress.
- Make multiple commits on that branch (as meany as you wish). We do not want a huge commits on those branches, nothing like a single commit that represents one or two days of work (coding work, research work not included). We had seen on the past several days of work lost due a bad huge commit.
- To finish a feature (functionality) create a pull request (PR) to the development branch (or any other branch specified by the repository admin). Send the PR link to the repository admin for review.
- A feature is considered complete if it runs on the CI/CD pipeline. Running on local does not count.
- The PR will be squashed and merged into the target branch, so all the feature will be represented just ofr one clean commit into the repository hierarchy.
- The feature branches merged into the target branch well be saved for 30 days in case of failure or research. After this period will be deleted from the repository.
- The Amplify CI/CD pipeline will generate automatically a link to the feature branch. This link will could be used to share easily rout progress with the team.
- Push your code frequently.

## Package manager

For this project use the yarn package manager.

## Adding new libraries
- Do not use any library that is not already installed on the project. If you think is necessary to add a new library please expose your arguments first.

If you think there is a better option to replace an already existing library, please expose your arguments first, we are open to suggestions, but not to have unnecessary code.

## Code practices

- Do not leave commented out code (if is a few lines is ok, but not more than 20 lines of code). If the code does not work delete it or add a @deprecated note.
- We code for humans, try to avoid classes and components than more 1000 lines of code.
- Use meaningful syntax for functions and variables.
- Do not add api key, or sensitive information on the code. Use the .env file instead. Do not forget to add it to .gitignore.
- Try to follow the project code style. If you are using VSCode install the prettier extension and enable the format on save option.
- Follow the file structure. If you are adding a new component, add it to the "components" folder. If you are adding a new page, add it to the "pages" folder.

### Code Naming Conventions
- Do not name any component index.tsx, use the  meaningful name instead (EX: BasicInfoStep.tsx, WelcomePage.tsx etc)
- Try always if possible to give the styling using scss, avoid to give properties especially grid properties directly on jsx.
- Do not add any library for css styling (like bootstrap, tailwind CSS, etc.) We want to have a clean code and a clean design. Use the already existing libraries.

## Suggestions

We are open to the suggestions, always share your thoughts. ASk for any resource you need, report if you have a blocker of if the requirements are not clear.

# You will need:

- Environment variables
- Node version 14.17.0
- Yarn version 1.22.10
  
