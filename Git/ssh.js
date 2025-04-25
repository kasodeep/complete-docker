// Create a new ssh key in your terminal.
let command = "ssh-keygen -t ed25519 -C 'email'";

// Set the remote url.
command = "git remote set-url origin <url>";

// Create a new ssh key in your account.
// Add the output key to github.
command = "cat ~/.ssh/id_ed25519.pub";

// If not added automatically.
command = "ssh-add -l";
command = "ssh-add ~/.ssh/id_ed25519";
