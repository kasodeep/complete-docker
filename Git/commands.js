/**
 * A commit in a git repository records a snapshot of all the (tracked) files in your directory. 
 * It's like a giant copy and paste, but even better!
 */

var commit = "git commit"
var commitWithMessage = "git commit -m ' '"
var logs = "git log"

/**
 * Branches in Git are incredibly lightweight as well. 
 * They are simply pointers to a specific commit -- nothing more.
 * This is why many Git enthusiasts chant the mantra: branch early, and branch often
 */

var shift = "git checkout <name>"
var createAndCheckout = "git checkout -b <name>"

/**
 * Now we need to learn some kind of way of combining the work from two different branches together.
 * This will allow us to branch off, develop a new feature, and then combine it back in.
 */

// We are in the main branch and merge other.
var merge = "git merge <name>"

/**
 * The second way of combining work between branches is rebasing.
 * Rebasing essentially takes a set of commits, "copies" them, and plops them down somewhere else.
 */

var rebase = "git rebase <name>"

/**
 * HEAD always points to the most recent commit which is reflected in the working tree.
 * Most git commands which make changes to the working tree will start by changing HEAD.
 * Detaching HEAD just means attaching it to a commit instead of a branch.
 */

var deattach = "git checkout <commit-name>"

/**
 * With relative refs, you can start somewhere memorable (like the branch bugFix or HEAD) and work from there.
 * Relative commits are powerful, but we will introduce two simple ones here:
 * Moving upwards one commit at a time with ^
 * Moving upwards a number of times with ~<num>
 */

var parent = "git checkout <name>^"
var grandParent = "git checkout ^^"
var sixParents = "git checkout HEAD~6"

var moveBranches = "git branch -f main <HEAD~3 | commit>"

/**
 * There are two primary ways to undo changes in Git -- 
 * one is using git reset and the other is using git revert.
 */

var reset = "git reset <commit-name>"
var revert = "git revert <commit-name>"

/**
 * It's a very straightforward way of saying that you would like to copy a series of commits below your current location (HEAD).
 */

var cherryPick = "git cherry-pick <commit-name> <commit-name>"

/**
 * But what about the situation where you don't know what commits you want? 
 * Thankfully git has you covered there as well! We can use interactive rebasing for this
 * it's the best way to review a series of commits you're about to rebase.
 */

var rebase = "git rebase -i HEAD~4" // Four from current head.