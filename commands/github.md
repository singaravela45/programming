### For setup :
```
git config --global user.name "Your Name"   
git config --global user.email "you@example.com"   
git config --list  
```

```
git init my-project - Initializes a new Git repository locally
git clone - Downloads an existing repository from GitHub to your machine.
git status - Inspects what files have changed, staged, or remain untracked.
git add - Stages specific files or all changes (.) for the next snapshot.
git commit - Records the staged snapshot with a descriptive message.
git commit -m "feat: implement user login button"```
git diff - Shows line-by-line changes before staging.
git log - Views commit history.
```
### Working with Branches:
```
git branch - List local branches (* marks current branch) 
git switch -c feature/payment-gateway - Create and switch to a new branch
git merge  - Combines changes from one branch into your current branch.
```
### Syncing with GitHub:
```git remote - Connects your local project to a remote GitHub repository.
git remote add origin https://github.com/username/my-project.git
git remote -v

git push -u origin main  Uploads local commits to GitHub. Use -u the first time to establish upstream tracking.

git pull - Fetches and merges the latest changes from GitHub into your active branch.
```

### Undoing Mistakes & Stashing :
```
git stash - Shelves uncommitted edits temporarily so you can switch branches cleanly
git restore
Discards uncommitted changes in your working directory.
```

if we want to redirect the origin from original url  to our url or want to push a existing code to a new repo 
first create a empty repo and 
```
git remote set-url origin https://github.com/your-username/my-copy.git
```
