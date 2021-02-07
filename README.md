# げーたみん Minecraft

Web ページのソースコードです。気軽にプルリクください。

# for developers

## How to build frontend

We need build frontend before run server.
Run below code at project root.

```bash
docker run -it --rm -v $(pwd)/frontend/:/frontend/ -w /frontend/ node:14.15.4 bash build-frontend.sh
```
