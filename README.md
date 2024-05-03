<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/spacelabdev/spacelab-react">
    <img src="public/assets/Images/logo.jpeg" alt="Logo" width="80" height="80">
  </a>

## SpaceLab's FundLab Force

<a href="https://github.com/spacelabdev/fund_lab_force">
    <img src="public/assets/Images/banner.png">
</a>
</div>


<!-- GETTING STARTED -->

## Getting Started

To get a local copy of the project, follow these steps.

### Prerequisites

Make sure you have the latest npm package installed

```sh
npm install npm@latest -g
```

Make sure you have the latest version of node installed.

We recommend using a node manager to switch between node versions.  
If you are on Mac or Linux you can install [nvm](https://github.com/nvm-sh/nvm) to manage your node versions. For windows, you can use [nvm for Windows](https://github.com/coreybutler/nvm-windows)

```sh
nvm install 18.16.0 (or higher)
```
```sh
nvm use 18.16.0 (or higher)
```

### Installation

1. Clone (or fork) the repo
    ```sh
    git clone https://github.com/spacelabdev/fund_lab_force
    ```
2. Install NPM packages
    ```sh
    npm install
    ```
3. Spin up the Project
    ```
    npm run dev
    ```

## General Workflow

In general, the flow goes like this:

1. Update your local version of main: (`git pull`) (in your main branch)
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit some Changes (`git commit -m 'Add some AmazingFeature'`)
4. Rebase your branch to have the latest updates from main (`git rebase origin main`)
5. Push your branch to the remote (`git push origin feature/AmazingFeature`)
6. Open a Pull Request and include a screenshot of the feauture you worked on

**Never push changes directly to main, always use a feature branch!**

**Delete your branches once they're merged.**


## Git Branching, Merge vs. Rebase, and Pull Requests

When fixing a bug or creating a new feature, please use a separate branch called a feature branch.

### Creating a Feature Branch

To check out a feature branch:

```
git checkout -b feature/amazingFeature
```

Branch Naming Conventions:

-   feature/nameOfFeature: New feature or comoponent
-   enhancement/nameOfFeature: Enhancement of exsisting feature or component
-   hotfix/nameOfBug: Quick bug or update

### Merge vs. Rebase

Merge and rebase are two strategies for integrating branches in git.

Merge:

-   Easiest option
-   Non destructive, keeps the original commit history of both branches
-   In projects with lots of developers using merge can create a messy commit history
-   `git rebase origin main`

Rebase:

-   Alters the commit history, gives the ability to squash commits
-   Destructive, should only be used on private branches
-   When used correctly can creates a neat commit history
-   `git merge origin main`

Use rebase ONLY when you are working on a private branch, meaning you are the only developer making changes to the branch, and you haven’t created a PR yet. You should rebase your feature branch every time before creating your PR, or if there are changes that have been made to main that you need to incorporate in your branch.

Use merge when on public branches, meaning there are multiple people making changes to the branch, or you have already submitted a PR and need to update something in the code.

To reset your branch to match the remote you can run:

```
git reset --hard origin/"Your branch"
```

### Submitting a Pull Request

PR's should be submitted when your feature/bug-fix is complete and has been tested.

Before submitting a PR, run through this code checklist:

1. Remove any console.logs and unnecessary comments in your code
2. Add alt tags to all images, labels to all inputs, and check that your html is semantic
3. Make sure styles are properly nested so that other parts of the site aren't affected
4. Test your feature/page on mobile/tablet/desktip in dev tools and check that it doesn't break
5. Check that Webpack compiles without warnings, resolve any errors before pushing
6. Rebase your branch with main and check that it is up to date

Once you complete the checklist, open a PR and include a short description of what you accomplished. If you built a new feature, include a screenshot of the UI.

### Wireframes

<img src="public/assets/FundLabWireframe.png" alt="FundLab Wireframe" width="300" />

### FundLab Version 1

<img src="public/assets/Versions/Homepage-v1.png" alt="FundLab Homepage V1" width="300" />

<br/>

<img src="public/assets/Versions/Mission-Vission-Values-Page-v1.png" alt="FundLab Mission Vission values V1" width="300" />


## Thank You For Reading and Welcome to Spacelab!

<p>(<a href="#top">back to top</a>)</p>