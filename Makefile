build:
	npx wrangler build

dev:
	npx wrangler dev

deploy:
	npx wrangler deploy

## Usage: make upload_secrets ENV=<env name>
upload_secrets:
	./scripts/upload_secrets.sh $(ENV)
