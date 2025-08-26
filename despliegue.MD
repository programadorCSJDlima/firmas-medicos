ng build --output-path "C:\xampp\htdocs\firmaslolimsa" --base-href /firmaslolimsa/


archivo  .htaccess  =>Esta deberia ir dentro de la carpeta firmaslolimsa a la vez el contenido de browser debe ir en la carpeta firmaslolimsa

RewriteEngine On
# Si la URL no es un archivo ni un directorio, redirige a index.html
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.html [L]