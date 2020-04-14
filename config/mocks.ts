export const ME_AS_ADMIN = {
  id: 'adminBro',
  email: 'admin@gmail.com',
  password: 'admin',
  name: 'Admin',
  secondName: 'Secondname',
  lastName: 'Lastname',
  fullName: 'Admin Secondname Lastname',
  shortName: 'A. Lastname',
  phone: '+79990002233',
  isAdmin: true,
  isBookkeeper: false,
  isContractor: false,
  isDriver: false,
  isHelper: false,
  isLogistician: false,
  isManager: false,
  isStage: false,
  isWarehouse: false,
  isSuper: false,
};

export const MOCK_METRICS = [
  { name: 'км/ч' },
  { name: 'мм' },
  { name: 'шт.' },
  { name: 'м2' },
  { name: 'мест' },
  { name: 'км' },
  { name: 'кВт' },
  { name: 'руб.' },
  { name: 'лет' },
  { name: 'см' },
  { name: '%' },
  { name: 'м' },
  { name: 'часов' },
  { name: 'кг' },
  { name: 'чел.' },
  { name: 'м/с' },
  { name: 'год' },
  { name: 'мин.' },
  { name: 'р.' },
  { name: 'году' },
  { name: 'ед.' },
  { name: 'мл.' },
  { name: 'л/ч.' },
  { name: 'Hz' },
  { name: 'Вт' },
  { name: '°' },
  { name: '°C' },
  { name: 'кд/м2' },
  { name: 'м3/ч' },
];

// Options
export const MOCK_OPTIONS = [
  { name: 'cy-test-gray', color: '#999999' },
  { name: 'cy-test-red', color: '#99020b' },
  { name: 'cy-test-green', color: '#1a9904' },
];

export const MOCK_OPTIONS_GROUP = { name: 'cy-test-colors' };
export const MOCK_OPTIONS_GROUP_FOR_DELETE = { name: 'cy-test-group-for-delete' };

// Attributes
export const MOCK_ATTRIBUTE = {
  name: 'cy-test-chair-colors',
  type: 'multipleSelect',
};
export const MOCK_ATTRIBUTES_GROUP = { name: 'cy-test-chair-features' };
export const MOCK_ATTRIBUTES_GROUP_FOR_DELETE = { name: 'cy-test-group-for-delete' };

// Rubrics
export const MOCK_RUBRIC_TYPE_EQUIPMENT = { name: 'cy-test-equipment' };
export const MOCK_RUBRIC_TYPE_STAGE = { name: 'cy-test-stage' };

export const MOCK_RUBRIC_LEVEL_ONE = {
  name: 'cy-test-furniture',
  catalogueName: 'furniture',
  level: 1,
  parent: null,
};
export const MOCK_RUBRIC_LEVEL_TWO = { name: 'cy-test-chairs', catalogueName: 'chairs', level: 2 };
export const MOCK_RUBRIC_LEVEL_THREE = {
  name: 'cy-test-chairs-loft',
  catalogueName: 'loft',
  level: 3,
};

// Products
export const MOCK_PRODUCT_IMAGES = [
  './cypress/fixtures/test-image-1.jpg',
  './cypress/fixtures/test-image-2.jpg',
];

export const MOCK_PRODUCT = {
  name: 'cy-test-product',
  cardName: 'cy-test-product',
  price: 100,
  description: 'description',
};

export const MOCK_PRODUCT_FOR_DELETE = {
  name: 'cy-test-product-for-delete',
  cardName: 'cy-test-product-for-delete',
  price: 200,
  description: 'description',
};

export const MOCK_PRODUCT_NEW_PRODUCT = {
  name: 'cy-test-new-product',
  cardName: 'cy-test-new-product',
  price: 2000,
  description: 'new description',
};
