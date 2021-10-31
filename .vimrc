call plug#begin('~/.vim/plugged')

" Shorthand notation; fetches https://github.com/junegunn/vim-easy-align
Plug 'junegunn/vim-easy-align'

Plug 'alvan/vim-closetag'

"Ionic Plugin
"Plug 'akz92/vim-ionic2'

" from medium site
Plug 'pangloss/vim-javascript'    " JavaScript support
Plug 'leafgarland/typescript-vim' " TypeScript syntax
Plug 'maxmellon/vim-jsx-pretty'   " JS and JSX syntax

 " Any valid git URL is allowed
Plug 'https://github.com/junegunn/vim-github-dashboard.git'

"Airlines
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'

" colours
Plug 'scwood/vim-hybrid'

" Multiple Plug commands can be written in a single line using | separators
Plug 'SirVer/ultisnips' | Plug 'honza/vim-snippets'

" On-demand loading
Plug 'scrooloose/nerdtree', { 'on':  'NERDTreeToggle'  }
Plug 'tpope/vim-fireplace', { 'for': 'clojure'  }
  
Plug 'neoclide/coc.nvim', {'branch': 'release'}

" Using a tagged release; wildcard allowed (requires git 1.9.2 or above)
Plug 'fatih/vim-go', { 'tag': '*'  }

" Plugin options
Plug 'nsf/gocode', { 'tag': 'v.20150303', 'rtp': 'vim'  }

" Plugin outside ~/.vim/plugged with post-update hook
Plug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all'  }

" Unmanaged plugin (manually installed and updated)
Plug '~/my-prototype-plugin'

" For autocomplete
"Plug 'vim-scripts/AutoComplPop'

" Initialize plugin system
call plug#end()"


" coc config
let g:coc_global_extensions = [
\ 'coc-snippets',
\ 'coc-pairs',
\ 'coc-tsserver',
\ 'coc-eslint', 
\ 'coc-prettier', 
\ 'coc-json', 
\ ]

" Vim Setting
colo monokai " /usr/share/vim/vim82/colors/silenthill.vim
set background=dark
set hlsearch	" Highlight all search results
set smartcase	" Enable smart-case search
set ignorecase	" Always case-insensitive
set incsearch	" Searches for strings incrementally
syntax on
set autoindent	" Auto-indent new lines
set cindent	" Use 'C' style program indenting
set expandtab	" Use spaces instead of tabs
set shiftwidth=2	" Number of auto-indent spaces
set smartindent	" Enable smart-indent
set smarttab	" Enable smart-tabs
set tabstop=4
set softtabstop=4	" Number of spaces per Tab
set number
set mouse=a
set cursorline
set cursorcolumn
set linebreak   " Break lines at word (requires Wrap lines)
set showbreak=-->   " Wrap-broken line prefix
"set textwidth=80    " Line wrap (number of cols)
set showmatch   " Highlight matching brace
set errorbells  " Beep or flash screen on errors
set visualbell  " Use visual bell (no beeping))""")"")"
set shortmess+=c

" For Controlling Autocomplete 
set completeopt=menuone,noinsert,preview,noselect

" Give more space for displaying messages.
set cmdheight=2

" Having longer updatetime (default is 4000 ms = 4 s) leads to noticeable
" delays and poor user experience.
set updatetime=300

" We just hiding toolbar and menubar
"set guioptions -=m
"set guioptions -=T

" Always show the signcolumn, otherwise it would shift the text each time
" diagnostics appear/become resolved.
set signcolumn=yes

"Opens suggestion on :colo <--here-->
set wildmode=list:longest,list:full
set ruler  " Show row and column ruler information

set undolevels=1000   " Number of undo levels
set backspace=indent,eol,start    " Backspace behaviour""">

"Cursor on diff mode
let &t_SI.="\e[5 q" "SI = INSERT mode
let &t_SR.="\e[4 q" "SR = REPLACE mode
let &t_EI.="\e[1 q" "EI = NORMAL mode (ELSE)


" keyboard mapping
nmap <F6> :NERDTreeToggle <CR>
let NERDTreeMapOpenInTab='\r'
autocmd BufRead,BufNewFile *.py,html syntax on''>>

"Tabs
nnoremap <Tab> gt
nnoremap <S-Tab> gT
nnoremap <silent> <S-t> :tabnew<CR>

"Just type tab and complete the word

" use <tab> for trigger completion and navigate to the next complete item
function! s:check_back_space() abort
  let col = col('.') - 1
  return !col || getline('.')[col - 1]  =~ '\s'
endfunction
  
" GoTo code navigation.
nmap <silent> gd <Plug>(coc-definition)
nmap <silent> gy <Plug>(coc-type-definition)
nmap <silent> gi <Plug>(coc-implementation)
nmap <silent> gr <Plug>(coc-references)

nnoremap <silent> <C-f> :FZF<CR>


" How you install Vim and making it as IDLE it's a complete guide
" Making Vim as a Idle
" 
" Install vim  > 8.2      from itsfloss site
" Install git             from apt-get install git
" Install python3-pip     from apt-get install python3-pip   # git is required here
" Install node > 12.0     from coc.nvim site
" 
" 
" Download plug.vim       from Vim-Plug github page
" :PlugInstall            Install all vim plugins
" 
" Set up pylint           Just open any .py file it's prompt # pip is required here 
" Set up coc-pyright      from CocInstall coc-pyright
" 
" # For System Clipboard sharing
" # + and - 
" Install gvim            from apt-get install vim-gnome


















