# RetroBrainz API

## Development

```bash
podman compose up # or docker compose up

pnpm install

cp .env.example .env

node ace generate:key

node ace migration:fresh --seed
```

## Deployment

```bash
sudo zypper install git mariadb nginx nodejs

git clone git@github.com:RetroBrainz/api.git
```
