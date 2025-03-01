# RetroBrainz API

## Development

```bash
podman compose up # or docker compose up

pnpm install

cp .env.example .env

node ace generate:key

node ace migration:fresh --seed
```
