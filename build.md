# Build
- Node 18

## Windows
- $env:NODE_OPTIONS = "--openssl-legacy-provider"
- npm run electron:build

## Linux & MacOS
- export NODE_OPTIONS=--openssl-legacy-provider
- npm run electron:build