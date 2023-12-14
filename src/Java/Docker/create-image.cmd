docker build --no-cache -f SQL\Dockerfile.PostgreSql -t gjcnfvfn12-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t gjcnfvfn12-java/app ../../..
