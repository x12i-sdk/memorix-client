# @x12i/memorix-client usage example

Canonical typed HTTP client for Memorix — Explore, pipelines, Source checkpoints, raw Memory, invoke callbacks, and MCP clients for memorix-nexum and memorix-mgc.

This consuming application demonstrates **commit a test checkpoint only after a successful apply acknowledgement** using the published npm package, pinned to `3.17.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Read composed subjects through the canonical typed HTTP client.
- Control a pipeline or inspect source checkpoints from a backend.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/memorix-client)
- [Implementation monorepo](https://github.com/x12i/memorix-client-api)
- [Reviewed package source](https://github.com/x12i/memorix-client-api/tree/09d8f02eb5f96c2d8f99d28996cff1f9a458115b/memorix-client)

The current source snapshot has a different manifest version from the pinned npm dependency. This example is validated against the installed npm release.

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
