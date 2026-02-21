Linux commands


apropos
to make file executable:
chmod +x filename
./hello.swift
to install package from .deb file :sudo dpkg -i yourfile.deb or sudo apt install ./yourfile.deb

file management
| Command     | Description                   |
| ----------- | ----------------------------- |
| `pwd`       | Show current directory        |
| `cd [path]` | Change directory              |
| `cd ..`     | Go up one directory           |
| `ls`        | List directory contents       |
| `ls -l`     | Long listing with permissions |
| `ls -a`     | Include hidden files          |

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

