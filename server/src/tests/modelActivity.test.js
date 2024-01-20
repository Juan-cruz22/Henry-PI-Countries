const { Sequelize, DataTypes } = require('sequelize');
const defineActivityModel = require('../models/Activity');

const sequelize = new Sequelize({
    dialect: 'postgres',
    username: 'postgres',
    password: '2212',
    database: 'countries',
    host: 'localhost',
    port: 5432,
  });

const Activity = defineActivityModel(sequelize);

describe('Activity Model', () => {
  beforeAll(async () => {
    await sequelize.sync();
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it('should create an activity', async () => {
    const activity = await Activity.create({
      name: 'treking',
      difficulty: '3',
      duration: '2 hours',
      season: 'verano',
    });

    expect(activity.name).toBe('treking');
    expect(activity.difficulty).toBe('3');
    expect(activity.duration).toBe('2 hours');
    expect(activity.season).toBe('verano');
  });

  it('no se debe agregar un pais con los campos obligatorios vacios', async () => {
    await expect(Activity.create({})).rejects.toThrow(Sequelize.ValidationError);
  });
});