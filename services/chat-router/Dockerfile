FROM php:8.2-cli

WORKDIR /var/www/html

COPY app/index.php .

EXPOSE 80

CMD ["php", "-S", "0.0.0.0:80", "index.php"]