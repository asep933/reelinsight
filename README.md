## ReelInsight

reelinsight adalah sebuah aplikasi website dimana dapat menggungah berbagai macam film,
dibuat menggunakan laravel dan next js

## Installation

cara menjalankan aplikasi dalam lokal persyaratan

- node
- composer
- laragon/xampp

pertama clone repositori ini dan jalankan diterminal

- git clone https://github.com/asep933/reelinsight.git
- cd /reelinsight
- git submodule init
- git submodule update

aktifkan service apache dan mysql di laragon atau xampp

running backend

- cd reelinsight/backend-laravel
- .env.example ke .env
- composer install
- php artisan key:generate
- composer dump-autoload
- php artisan storage:link
- php artisan migrate:fresh --seed
- php artisan serve
- localhost:8000

running frontend

- cd /reelinsight/breeze-next
- .env.example ke .env.local
- npm install
- npm run dev
- localhost:3000

sekarang anda bisa membuka website reelinsight di localhost:3000
