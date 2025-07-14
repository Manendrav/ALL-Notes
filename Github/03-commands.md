
### Basic Commands 💻

- `git status` shows the status of changes as untracked, modified, or staged.

- `git init` initializes a brand new Git repository and begins tracking an existing directory. It adds a hidden subfolder within the existing directory that houses the internal data structure required for version control.

- `git pull` Pulling involves fetching and integrating changes from a remote repository into your local branch. 

- `git push` updates the remote repository with any commits made locally to a branch.

- `git commit` saves the snapshot to the project history and completes the change-tracking process. In short, a commit functions like taking a photo.

- `git add Stage` is a way to tell git to track a particular file or folder.

- `git logs` It will show you all the commits that were made to the repository. You can use the `--oneline` flag to show only the commit message

<br>

### Branch Commands

Branch name should be like `main`, `trunk`, `development` and `master` etc.

- `git branch` shows the branches being worked on locally and how many baranches exist.

- `git branch <name>` It is used to create a Branch.

- `git branch -d <name>` It is used to delete a Branch.

- `git checkout -b <name>` 	Create and switch New Git Branch From Current Branch.

- `git checkout <name>`	switch to an existing branch.

- `git rebase <base-branch>` Rebases the current branch onto the base branch, reapplying commits in a linear fashion.

<br>

### Repositories Commands

- `git clone` creates a local copy of a project that already exists remotely. The clone includes all the project's files, history, and branches.



### Special Commands

## Git log

`git log` is a Git command used to view the commit history of a repository. It provides a record of the changes made, who made them, and when. This command is crucial for tracking the development of a project and understanding its history.

```bash
git log
```

#### Detailed View

You can use various options and arguments with `git log` to customize the output

- `--oneline` You can use the `--oneline` flag to show only the commit message. Shows each commit on a single line.

- `short` Displays only the commit hash and message.

- `medium` The default format, which shows the commit hash, author, date, and commit message.

- `full` Includes the full author and committer information.

- `fuller` Provides even more detail than full.

```bash
git log --pretty=medium
git log --pretty=full
...
```

- `--graph` To see a visual representation of the branch structure, use the `--graph` option.
```bash
git log --graph

git log --graph --oneline
```

##### Filtering Commits

```bash
git log --author="John Doe"         # git log --author="John Doe"

git log --since="2024-06-01" --until="2024-06-30"       # Shows commits made between June 1 and June 30, 2024.

git log --grep="bug"        # Shows commits with messages containing the word "bug".

git log --grep="bug"        # Shows commits that modified a specific file.
```

##### Limiting Output

```bash
git log -n 5        # Shows the last 5 commits.

git log -p          # This displays the patch (diff) for each commit.
```

<br>

<h4>Git diff</h4>

It is an informative command that shows the differences between two commits. It is used to compare the changes made in one commit with the changes made in another commit. 

It shows changes between commits, branches, or the working directory and the staging area.

Git consider the changed versions of same file as two different files. Then it gives names to these two files and shows the differences between them.

<h4>How to read the diff</h4>

- a -> file A and b -> file B
- ---- indicates the file A
- +++ indicates the file B
- @@ indicates the line number

Here the file A and file B are the same file but different versions.

**Comparing Working Directory and Staging Area:** This command shows the unstaged changes in your working directory compared to the staging area.

```bash
git diff
```
It will show changes when you add content in you file but not add it to staging area.

**Comparing Staging Area with Repository:** This command shows the changes between your last commit and the staging area (i.e., changes that are staged and ready to be committed).

```bash
git diff --staged
```
It will show changes when you add content in you file but add it to staging area.

**Comparing Between Commits:**
Shows differences between two commits

```bash
git diff <commit-hash-one> <commit-hash-two>
```

<br>

<h4>Git Stash</h4>

Stash is a way to save your changes in a temporary location. It is useful when you want to make changes to a file but don’t want to commit them yet. You can then come back to the file later and apply the changes.

When you stash changes, Git saves the current state of the working directory and the index (staging area) on a stack. This allows you to revert to a clean working directory while preserving your changes, which you can later reapply.

```bash
git stash

git stash save "work in progress"           # Naming the stash

git stash list                              # View the stash list
```

**Applying Stashes**

To apply the latest stash without removing it from the stash list. (retriving changes that you stashed)

```bash
git stash apply                     # This will apply the top stash from the stack

git stash apply stash@{0}           # This will apply a specific  stash from the stack
```

**Popping Stashes**

To apply the latest stash and remove it from the stash list.

```bash
git stash pop

git stash pop stash@{1}
```

**Dropping Stashes**

To remove a specific stash without applying it.

```bash
git stash drop stash@{1}            # To remove a specific stash without applying it

git stash clear                     # To remove all stashes
``` 

<br>


<h4>Git Tags</h4>

Git tags are labels used to mark specific points in a repository’s history. They are often used to mark release points (e.g., v1.0, v2.0), making it easier to access important commits.

Tags are like sticky notes that you can attach to your commits.

**Types of Tags**

1. **Lightweight Tags:** Simple pointers to a commit. They are created quickly but contain no additional metadata.

```bash
git tag <tagname>

git tag v1.0                                # Example
``` 

2. **Annotated Tags:** Full objects in the Git database. They store metadata, including the tagger's name, email, date, and a tagging message.

```bash
git tag -a <tagname> -m "message"

git tag -a v1.0 -m "Initial release"        # Example
```

<br>


**Tags related commands**

```bash
git tag                                 # List all tags

git show <tagname>                      #  View Detailed Information

git tag <tag-name> <commit-hash>        # Tagging Specific Commits

git tag -d <tagname>                    # Deleting Tags

git push origin <tag-name>              # Push tags to remote repository

git push origin --delete <tagname>      # Delete a Tag from Remote

git tag -v <tagname>                    # Verifying Tags
```




<br>
<br>


**reference** [Link](https://docs.chaicode.com/diff-stash-and-tags/).


<br>

--- 📄 Document End 🎉 -----
