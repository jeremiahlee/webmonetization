# Probabilistic Revshare Worker

This Cloudflare worker will return a redirect to a wallet address provided in the `pm` query string parameter. The format expected is a base64url-encoded JSON object which is a map of wallet addresses to weights.

The worker will return a 302 redirect to one of the provided pointers, selected randomly.

## Testing with Wrangler

```sh
yarn
wrangler dev
```

## Deploying

To `https://webmonetization.org/api/revshare/pay`

```sh
yarn
wrangler publish
```
