const server = require('../src/server');

describe('servidor HTTP de la calculadora', () => {
  let baseUrl;

  beforeAll(async () => {
    await new Promise((resolve, reject) => {
      server.once('error', reject);
      server.listen(0, '127.0.0.1', resolve);
    });

    const address = server.address();
    baseUrl = `http://127.0.0.1:${address.port}`;
  });

  afterAll(async () => {
    await new Promise((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve()));
    });
  });

  test('responde con el resultado de la suma', async () => {
    const response = await fetch(`${baseUrl}/sumar?a=2&b=3`);

    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toBe('application/json');
    await expect(response.json()).resolves.toEqual({ resultado: 5 });
  });

  test('responde con el resultado de la resta', async () => {
    const response = await fetch(`${baseUrl}/restar?a=7&b=3`);

    await expect(response.json()).resolves.toEqual({ resultado: 4 });
  });

  test('la raíz devuelve el mensaje de la calculadora en JSON', async () => {
    const response = await fetch(baseUrl);

    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toBe('application/json');
    await expect(response.json()).resolves.toEqual({
      mensaje: 'Calculadora CESA7003',
    });
  });
});
