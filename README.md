# Room25
## Build e run in sviluppo
`ng serve` per il client, parte su `http://localhost:4200/`
TODO parte server con watch sul FS

## Build e run completa
`ng build` per la build del client, viene generata in `dist/client`.
`tsc -p ./server` per la build del server, viene generata in `dist/server`
`node dist/server/bin/www.js` per eseguire, parte su `http://localhost:3000/`

## Distribuzione
TODO