const axios = require('axios');
const getCountries = require('../controllers/getCountries');
const getCountriesbyName = require('../controllers/getCountriesbyName');

jest.mock('axios');

describe('GET /countries', () => {
  it('debe devolver los países cuando la solicitud sea exitosa', async () => {
    const mockCountries = [{ name: 'Country1' }, { name: 'Country2' }];

    axios.get.mockResolvedValue({ data: mockCountries });

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getCountries(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockCountries);
  });

  it('debe manejar el error cuando la solicitud falla', async () => {
    const errorMessage = 'Error al realizar la solicitud';

    axios.get.mockRejectedValue(new Error(errorMessage));

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getCountries(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
  });

  it('debería manejar la respuesta de los países vacíos', async () => {
    axios.get.mockResolvedValue({ data: [] });

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await getCountries(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith('No se encontraron países');
  });
});