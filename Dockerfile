FROM hayd/alpine-deno

EXPOSE 3000

ADD . /app

WORKDIR /app

CMD ["deno", "run", "--unstable", "--allow-env", "--allow-read", "--allow-write", "--allow-net", "--allow-plugin", "server.ts"]
