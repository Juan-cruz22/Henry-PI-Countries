const { Sequelize, DataTypes } = require('sequelize');
const defineCountryModel = require('../models/Country');

const sequelize = new Sequelize({ // aca configurro el sequelize para los test
  dialect: 'postgres',
  username: 'postgres',
  password: '2212',
  database: 'countries',
  host: 'localhost',
  port: 5432, // El puerto por defecto de posrgres
});

const Country = defineCountryModel(sequelize);//creo el modelo

describe('Country Model', () => {
  beforeAll(async () => {
    await sequelize.sync(); //sincronizo el modelo con la base de datos de prueba
  });

  afterAll(async () => {
    await sequelize.close(); // cierro la conexion con sequelize
  });

  it('Deberia crear un pais en db', async () => {
    const country = await Country.create({
      id: 1,
      name: 'Argentina',
      image: 'argentina.jpg',
      region: 'Americas',
      capital: 'Buenos Aires',
      subregion: 'South America',
      population: 45000000,
    });

    expect(country.name).toBe('Argentina');
    expect(country.region).toBe('Americas');
    expect(country.capital).toBe('Buenos Aires');
    expect(country.population).toBe(45000000);
  });

  it('no se debe agregar un país al que le falten campos que son obligatorios', async () => {
    await expect(Country.create({})).rejects.toThrow(Sequelize.ValidationError);
  });
});