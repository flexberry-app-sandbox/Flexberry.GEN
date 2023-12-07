docker build --no-cache -f SQL\Dockerfile.PostgreSql -t gen/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t gen/app ../..
