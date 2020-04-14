import User from '../models/user';
import { MOCK_METRICS, ROLE_ADMIN } from '../../config';
import Metric from '../models/metric';

async function createInitialData() {
  const { ADMIN_EMAIL, ADMIN_NAME, ADMIN_PHONE, ADMIN_PASSWORD } = process.env;

  const admin = await User.findOne({ email: ADMIN_EMAIL });
  const metric = await Metric.find({});

  if (!metric.length) {
    console.error('No metrics found.');
    console.log('Creating metric data.');

    await Metric.insertMany(MOCK_METRICS);

    console.error('Metrics data created.');
  }

  if (!admin) {
    console.error('%s user not found.', ADMIN_NAME);
    console.log('Creating %s user.', ADMIN_NAME);

    await User.create({
      name: ADMIN_NAME,
      email: ADMIN_EMAIL,
      phone: ADMIN_PHONE,
      password: ADMIN_PASSWORD,
      role: ROLE_ADMIN,
    });
    console.log('%s user created.', ADMIN_NAME);
  }
}

export default createInitialData;
