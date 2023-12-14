docker build --no-cache -f SQL\Dockerfile.PostgreSql -t gjcnfvfn12/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t gjcnfvfn12/app ../..
