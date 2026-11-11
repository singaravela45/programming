tmux new -s yocto-build  
Inside tmux, press 'Ctrl+B' then 'D' to detach, returning to your regular terminal.  
tmux ls  
tmux attach -t yocto-build  

C-b s	Interactive list of all sessions (use arrow keys + Enter to switch)  
C-b $	Rename current session    

Window Management  
C-b c	Create a new window  
C-b ,	Rename current window  
C-b n / p	Move to next / previous window  
C-b 0 to 9	Select window by number  
C-b w	Interactive menu of windows and panes  
C-b &	Kill current window  