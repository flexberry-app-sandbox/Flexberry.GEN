docker build --no-cache -f SQL\Dockerfile.PostgreSql -t gen-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t gen-java/app ../../..
