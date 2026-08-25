# Beginner Upload Guide

## What GitHub Desktop and Visual Studio Code do

- **GitHub Desktop** is a graphical application for moving website files between your computer and GitHub. It replaces most command-line Git steps with buttons such as Commit and Push.
- **Visual Studio Code (VS Code)** is a text editor. It lets you open the website folder and safely edit HTML and CSS files.

You do not need prior HTML or CSS experience to publish this package. The site is already built.

---

# Method 1 - Upload through the GitHub website

This is the easiest way to publish the first version.

1. Sign in to GitHub as `TanayLavingia`.
2. Create a new public repository named exactly `tanaylavingia.github.io`.
3. Do not add a README, `.gitignore`, or license when creating it. The package already contains a README.
4. Open the new repository.
5. Click **Add file > Upload files**.
6. Extract the downloaded ZIP on your computer.
7. Open the extracted folder.
8. Select **all contents inside the folder**, including `index.html`, `experience.html`, `projects.html`, `full-portfolio.html`, `assets`, `.nojekyll`, and the other files.
9. Drag the selected files into the GitHub upload area.
10. Wait until all files finish uploading.
11. Enter the commit message `Add mechanical engineering portfolio`.
12. Click **Commit changes**.
13. Open **Settings > Pages**.
14. Under **Build and deployment**, choose **Deploy from a branch**.
15. Select branch `main` and folder `/(root)`.
16. Click **Save**.
17. Wait several minutes, then visit `https://tanaylavingia.github.io/`.

Important: upload the contents of the extracted folder, not the ZIP file itself and not a folder containing another copy of the website folder.

---

# Method 2 - Use GitHub Desktop and VS Code

This method is better for future updates.

## Install the applications

1. Install GitHub Desktop and sign in to the `TanayLavingia` GitHub account.
2. Install Visual Studio Code.

## Create the repository in GitHub Desktop

1. Extract the portfolio ZIP to a permanent folder, such as `Documents/Tanay-Portfolio`.
2. Open GitHub Desktop.
3. Select **File > Add local repository**.
4. Choose the extracted website folder.
5. GitHub Desktop may say the folder is not a Git repository. Select the option to create a repository there.
6. Use the repository name `tanaylavingia.github.io`.
7. Make sure **Keep this code private** is not selected when publishing.
8. Click **Publish repository**.

## Edit the website

1. In GitHub Desktop, select **Repository > Open in Visual Studio Code**.
2. In VS Code, use the file list on the left to open a file.
3. To edit homepage text, open `index.html`.
4. To edit experience, open `experience.html`.
5. To edit projects, open `projects.html`.
6. To change colors or spacing, open `assets/css/styles.css`.
7. Save with `Ctrl+S`.

## Send updates to GitHub

1. Return to GitHub Desktop.
2. Review the changed files in the left panel.
3. Enter a short summary such as `Update project description`.
4. Click **Commit to main**.
5. Click **Push origin**.
6. GitHub Pages will automatically republish the updated site.

---

# Common mistakes

- Repository name is not exactly `tanaylavingia.github.io`.
- `index.html` is inside an extra nested folder instead of the repository root.
- The ZIP file was uploaded without extracting it.
- GitHub Pages source was not set to `main` and `/(root)`.
- Files were changed locally but not committed and pushed.
- An image was renamed without updating the matching path in the HTML file.
