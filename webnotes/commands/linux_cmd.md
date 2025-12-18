Linux commands

apropos -find commands by searching through the short descriptions

# installation
we can install .deb package using dpkg or use apt(recommended)
1. Installing using a .deb Package:
sudo apt install ./package-name.deb
If dependencies are missing:sudo apt -f install
2. Make a File Executable
chmod +x filename
3. Run the Executable File
./filename

# shortcuts
ctrl+a - go to beginning of the line in cmd
ctrl+e - go to end of the line in cmd
ctrl+u - deletes everything before the cursor
ctrl+k - deletes everything after the cursor
ctrl+y - pastes the deleted content
ctrl+x+e-edit the command in the editor
alt +backspace - delete the last word 
!! - runs last executed file like sudo !! will add permission to last executed file

# deleting
sudo apt remove filename 
sudo apt purge filename  //it will remove user data also
sudo apt purge filename--data

# file management
| Command     | Description                   |
| ----------- | ----------------------------- |
| `pwd`       | Show current directory        |
| `cd [path]` | Change directory              |
| `cd ..`     | Go up one directory           |
|  'cd ../..    Go up two directory           |
|  'cd'        Go to the home directory       |
|  'cd -'       Go to the prev directory      |
| `ls`         | List directory contents      |
| `ls -l` or ll| Long listing with permissions|
| `ls -a`or la | Include hidden files         |
open in a default app xdg-open name
ln -s /media/vela/CC6CBBB36CBB9724 ~/windows //creating a shortcut
for creating alias go to .bashrc


| Command                   | Description                                    |
| ------------------------- | ---------------------------------------------- |
| `mkdir foldername`        | Create directory                               |
| `mkdir -p parent/child`   | Create nested directories                      |
| `touch file.txt`          | Create empty file                              |
| `echo "Hello" > file.txt` | Create file with content                       |
| `cat > file.txt`          | Type and save content manually (Ctrl+D to end) |

| Command                     | Description |
| --------------------------- | ----------- |
| `mv old.txt new.txt`        | Rename file |
| `mv file.txt /path/to/dir/` | Move file   |
| `mv folder1 /new/path/`     | Move folder |

| Command                     | Description             |
| --------------------------- | ----------------------- |
| `cp file1.txt file2.txt`    | Copy file               |
| `cp file.txt /path/to/dir/` | Copy to directory       |
| `cp -r dir1 dir2`           | Copy folder recursively |

| Command             | Description                                        |
| ------------------- | -------------------------------------------------- |
| `rm file.txt`       | Delete file                                        |
| `rm *.txt`          | Delete all `.txt` files                            |
| `rm -r foldername`  | Delete folder and contents                         |
| `rm -rf foldername` | Force delete folder recursively (use with caution) |

| Command                | Description                                                 |
| ---------------------- | ----------------------------------------------------------- |
| `tree`                 | Visual directory tree (may need to `sudo apt install tree`) |
| `file file.txt`        | Show file type                                              |
| `stat file.txt`        | Detailed file info                                          |
| `find . -name "*.txt"` | Find all `.txt` files                                       |
| `locate filename`      | Fast file search (requires `updatedb` index)                |


# daemons(process)
systemctl status servicename
2. start/stop/restart:
systemctl start servicename
systemctl stop servicename
systemctl restart servicename
3. Enable / disable at boot:
systemctl enable servicename
systemctl disable servicename
4. List all running services
systemctl list-units -t service
5. List all installed services (enabled + disabled)
systemctl list-unit-files -t service
Check if a daemon is running
ps aux | grep servicename or sudo systemctl is-active servicename
View logs for a service
journalctl -u servicename
journalctl -u servicename -f   # follow logs live

ps / ss → process & ports
ps displays information about currently running processes.
Show all processes :ps aux
Meaning:
a → processes from all users
u → user-oriented format (shows owner, CPU, memory)
x → processes not attached to a terminal (daemons)
ps aux | grep processname
htop

kill Command:
kill PID  //process id 
for getting process id :
ps aux | grep processname // pgrep processname

job control:
Job control lets you manage processes started from a terminal, allowing you to:
pause them
run them in the background
bring them back to the foreground
Ctrl + Z — Suspend a job
bg id
fg id 
jobs — List current jobs
code	Runs in foreground, terminal may stay busy
code &	Runs in background, terminal stays usable

# running a server
python3 -m http.server 8000

