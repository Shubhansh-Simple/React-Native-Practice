tmux rename-session -t '0' 'Wrong Person'
tmux select-pane 0
cd ~/Desktop/React-App/
tmux rename-window '<--Vi-Editor-->'
tmux split-pane -h 
cd ~/Desktop/React-App/
tmux new-window
tmux rename-window '<--Terminal-->'
cd ~/Music/Bhakti/
tmux split-pane -h 
cd ~/Desktop
tmux split-pane
