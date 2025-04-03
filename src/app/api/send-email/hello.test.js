// Simple test to check if route exists and responds
import { GET } from './route';

describe('GET /api/send-email', () => {
  it('should return a hello message', async () => {
    const response = await GET();
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      message: 'API route is working!'
    });
  });
});