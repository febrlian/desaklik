# DesaKlik Load Tests

These load tests are written using [k6](https://k6.io/).

## Running the tests

1. Install k6 (see [installation guide](https://k6.io/docs/get-started/installation/)).
2. Start the API locally (or ensure it's running in your target environment).
3. Run the script:
   ```bash
   k6 run load-tests/api.js
   ```

## Environment Variables

You can pass environment variables to k6 to customize the test run:
- `API_URL`: The base URL of the API to test (default: `http://localhost:4000`)
- `TENANT_SLUG`: The tenant slug to use for requests (default: `sukamaju`)

Example:
```bash
k6 run -e API_URL=https://api.desaklik.com -e TENANT_SLUG=production load-tests/api.js
```
