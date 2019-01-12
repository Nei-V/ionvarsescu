---
templateKey: blog-post
title: New Repository on GitHub Using Visual Studio Code (VS Code)
date: 2018-04-13T15:04:10.000Z
description: This is a short guide that will help you setting up and publishing to a new repository on GitHub.
tags:
  - command line
  - git
  - github
  - new repository
  - Visual Studio Code
  - VS Code

---


This is a short guide that will help you setting up and publishing to a new repository on GitHub.
I personally didn’t find it trivial and some steps seem unnecessary, but, in my case, they were all required in order to avoid all kind of errors.
Please read every instruction (every step) carefully until its end before trying it to know what to expect.

1. Create local folder (on your computer) with your files
For now, I usualy have javascript, html, css and one README.md in my folder.
2. LogIn github site, press + on the upper right side of the screen and chose “new repository”
3. Pick name, description and don’t pick the option to create README. Press “Create repository”
4. On the next screen, the important part is the link to your repository, in this case:
https://github.com/Nei-V/instructions-vs-code-github.git
Save this link for later (step 9)
5. Return to VS Code. Chose “View” in the menu and pick “integrated terminal”
6. you will be given a command line, you have to be in the folder you created, if not, move to it typing “cd..” to move one folder up and “cd folderName” (replace folderName with your folder’s name) to enter it.
In my case the command line showed
“C:\some local folder\freecodecamp\challenges\no repeats please>”
and I had the needed folder in freecodecamp>instructions vscode github
So I have to do “cd..” twice to get to freecodecamp folder then “cd instructions vscode github” to enter my foder. Now the command line looks like this:
C:\some local folder\freecodecamp\instructions vscode github>
7. Write: “git init” and press “return”
8. Enter command: “git add –all”
9. Enter command “git remote add origin https://github.com/Nei-V/instructions-vs-code-github.git”
(Replace with the link to your repository from step 4)
10. Enter command:
git commit -m “Instructions”
Replace Instructions with the description message of you commit.
11. Enter command: “git push -u origin master”

It will give an error and it will ask for username (that is your username on github, for example your email). press Enter. It will ask you for your password for github. write it and press Enter again.
That’s it. If everything worked you will see a long message ending with “Branch ‘master’ set up to track remote branch ‘master’ from ‘origin’.”
Congratulations, you have your first files in your respository.

You can find these instructions in my GitHub here:
https://github.com/Nei-V/instructions-vs-code-github.git

