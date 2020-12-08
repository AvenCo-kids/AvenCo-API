# AvenCo-API

## Description

AvenCo-API is the API of AvenCo.

The API is made with deno V1.5.4 and mongodb.

This server run on port: 3000.

You can also find CI Github Actions, in the Actions section of this repo.

## Documentation

You can find documentation in the Wiki section of this repo, on this [page](https://github.com/AvenCo-kids/AvenCo-API/wiki).

## Usage

Run the server:

You can use the command line:
```
deno run --unstable --allow-env --allow-read --allow-write --allow-net --allow-plugin server.ts
```

You can also use the Dockerfile at the root of the repo.


Run the tests:
```
deno test --allow-env --allow-read
```