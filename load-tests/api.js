import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 }, // ramp up to 20 users
    { duration: '1m', target: 20 },  // stay at 20 users for 1 minute
    { duration: '30s', target: 0 },  // ramp down to 0 users
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests must complete below 500ms
    http_req_failed: ['rate<0.01'],   // error rate must be less than 1%
  },
};

const BASE_URL = __ENV.API_URL || 'http://localhost:4000';
const TENANT_SLUG = __ENV.TENANT_SLUG || 'sukamaju';

export default function () {
  const headers = {
    'x-tenant-slug': TENANT_SLUG,
    'Accept': 'application/json',
  };

  // Test Health Check Endpoint
  const healthRes = http.get(`${BASE_URL}/health`);
  check(healthRes, {
    'health check status is 200': (r) => r.status === 200,
  });

  // Test Public News Endpoint (which is cached)
  const newsRes = http.get(`${BASE_URL}/news`, { headers });
  check(newsRes, {
    'news fetch status is 200': (r) => r.status === 200,
    'news fetch returns success': (r) => {
        try {
            return JSON.parse(r.body).success === true;
        } catch(e) {
            return false;
        }
    },
  });

  sleep(1);
}
