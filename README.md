## ReelInsight

reelinsight adalah sebuah aplikasi website dimana dapat menggungah berbagai macam film.

## Installation

cara menjalankan aplikasi dalam lokal persyratan

- node
- composer

pertama clone repositori ini dan jalanka diterminal

- git clone https://github.com/asep933/reelinsight.git
- cd /reelinsight
- git submodule init
- git submodule update

aktifkan serve apache dan mysql di laragon atau xampp

running backend

- cd reelinsight/backend-laravel
- .env.example ke .env
- composer install
- composer dump-autoload
- php artisan migrate:fresh --seed
- php artisan serve
- localhost:8000

running frontend

- cd /reelinsight/breeze-next
- .env.example ke .env.local
- npm install
- npm run dev
- localhost:3000
