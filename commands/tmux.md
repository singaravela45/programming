tmux new -s yocto-build  
Inside tmux, press 'Ctrl+a' then 'D' to detach, returning to your regular terminal.  
tmux ls  
tmux attach -t yocto-build  

C-A s	Interactive list of all sessions (use arrow keys + Enter to switch)  
C-A $	Rename current session    

Window Management  
C-A c	Create a new window  
C-A n / p	Move to next / previous window  
C-A 0 to 9	Select window by number  
C-A w	Interactive menu of windows and panes  
C-A &	Kill current window  

Panel Management (Splits)  
C-A %	Split pane vertically (left / right)
C-A "	Split pane horizontally (top / bottom)
C-A Arrow Key	Move focus to adjacent pane
C-A x	Close/kill current pane
C-A q	Display pane numbers (press number key to jump to pane)

tmux source-file ~/.tmux.conf