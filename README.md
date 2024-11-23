# Preview MYSELF

## Framework & Tools used

- Laravel 10
- Inertia
- React 18
- Tailwind 3

# Development

### Requirement

- PHP 8.1
- MySQL 8
- Node v18.8

### Laragon web server
link to download: https://laragon.org/download/

### Installation (Laragon)

1. Clone project (https://github.com/drivedemon/preview-myself.git)
2. Create .env file by copy content from .env.example `cp .env.example .env`
3. (Laragon) Restart Laragon
4. (Auto by Laragon) Config custom DNS for your machine ([preview-myself.test](http://oop-solid-design-with-laravel.local)), Make sure url match
   **APP_URL** in .env
5. Run `composer install`
6. Run `php artisan key:generate` to generate application key
7. Run `php artisan storage:link` to link storage path
7. Create your Database `myself`, update `DB_USERNAME`, `DB_PASSWORD` in .env
8. Run `php artisan migrate:fresh --seed` to migrate table and seeder data into database
9. (Optional) If seeder data not running. Please run this command `php artisan db:seed`
8. Run `npm install`
8. Run `npm run dev`
9. Go to [http://preview-myself.test](http://preview-myself.test) to test your local website.
