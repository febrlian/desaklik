import urllib.request
import json
import os

req = urllib.request.Request(
    os.environ.get("MCP_SERVER_URL", "http://localhost:3000/api/rpc"),
    data=json.dumps({
        "jsonrpc": "2.0",
        "id": 1,
        "method": "submit",
        "params": {
            "branch_name": "jules-11376894121195447215-58df6b8f",
            "commit_message": "fix: resolve @radix-ui/react-slot dependency for build",
            "title": "Fix GitHub Action failure",
            "description": "Add missing @radix-ui/react-slot dependency and fix unused variable lint warnings that were failing the GitHub Actions build."
        }
    }).encode("utf-8"),
    headers={"Content-Type": "application/json"}
)
try:
    urllib.request.urlopen(req)
except Exception as e:
    print(e)
