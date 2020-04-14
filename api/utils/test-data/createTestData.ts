import OptionsGroup from '../../models/optionsGroup';
import Option from '../../models/option';
import Attribute from '../../models/attribute';
import AttributesGroup from '../../models/attributesGroup';
import Rubric from '../../models/rubric';
import RubricType from '../../models/rubricType';
import Product from '../../models/product';
import { clearTestDataHandler } from './clearTestData';
import {
  MOCK_ATTRIBUTE,
  MOCK_ATTRIBUTES_GROUP,
  MOCK_ATTRIBUTES_GROUP_FOR_DELETE,
  MOCK_OPTIONS,
  MOCK_OPTIONS_GROUP,
  MOCK_OPTIONS_GROUP_FOR_DELETE,
  MOCK_PRODUCT,
  MOCK_PRODUCT_FOR_DELETE,
  MOCK_RUBRIC_LEVEL_ONE,
  MOCK_RUBRIC_LEVEL_THREE,
  MOCK_RUBRIC_LEVEL_TWO,
  MOCK_RUBRIC_TYPE_EQUIPMENT,
  MOCK_RUBRIC_TYPE_STAGE,
  PRODUCT_IMAGE_SIZES,
  MOCK_PRODUCT_IMAGES,
} from '../../../config';
import { NextApiRequest, NextApiResponse } from 'next';
import { generateLinkName } from '../links';
import { storeTestImage } from '../shoreImage';

const createTestData = async (_: NextApiRequest, res: NextApiResponse) => {
  // Clear old test data
  await clearTestDataHandler();

  // Options
  const options = await Option.insertMany(MOCK_OPTIONS);
  const optionsIds = options.map(({ id }) => id);
  await OptionsGroup.create(MOCK_OPTIONS_GROUP_FOR_DELETE);
  const optionsGroup = await OptionsGroup.create({
    ...MOCK_OPTIONS_GROUP,
    options: optionsIds,
  });

  // Attributes
  const attribute = await Attribute.create({
    ...MOCK_ATTRIBUTE,
    options: optionsGroup.id,
  });
  await AttributesGroup.create(MOCK_ATTRIBUTES_GROUP_FOR_DELETE);
  const attributesGroup = await AttributesGroup.create({
    ...MOCK_ATTRIBUTES_GROUP,
    attributes: [attribute.id],
  });

  // Rubric types
  const equipmentRubricType = await RubricType.create(MOCK_RUBRIC_TYPE_EQUIPMENT);
  await RubricType.create(MOCK_RUBRIC_TYPE_STAGE);

  // Rubrics
  const rubricLevelOne = await Rubric.create({
    ...MOCK_RUBRIC_LEVEL_ONE,
    link: generateLinkName(MOCK_RUBRIC_LEVEL_ONE.catalogueName),
    type: equipmentRubricType.id,
  });

  const rubricLevelTwo = await Rubric.create({
    ...MOCK_RUBRIC_LEVEL_TWO,
    link: generateLinkName(MOCK_RUBRIC_LEVEL_TWO.catalogueName),
    attributesGroups: attributesGroup.id,
    parent: rubricLevelOne.id,
  });

  const rubricLevelThree = await Rubric.create({
    ...MOCK_RUBRIC_LEVEL_THREE,
    link: generateLinkName(MOCK_RUBRIC_LEVEL_THREE.catalogueName),
    parent: rubricLevelTwo.id,
  });

  const linkProductForDelete = generateLinkName(MOCK_PRODUCT_FOR_DELETE.cardName);
  const imagesProductForDelete = [];
  for (const [index, url] of MOCK_PRODUCT_IMAGES.entries()) {
    imagesProductForDelete.push(
      await storeTestImage({
        url,
        index,
        fileName: linkProductForDelete,
        sizes: PRODUCT_IMAGE_SIZES,
      }),
    );
  }

  await Product.create({
    ...MOCK_PRODUCT_FOR_DELETE,
    link: linkProductForDelete,
    rubrics: [rubricLevelThree.id],
    images: imagesProductForDelete,
  });

  const link = generateLinkName(MOCK_PRODUCT.cardName);
  const imagesProduct = [];
  for (const [index, url] of MOCK_PRODUCT_IMAGES.entries()) {
    imagesProduct.push(
      await storeTestImage({
        url,
        index,
        fileName: link,
        sizes: PRODUCT_IMAGE_SIZES,
      }),
    );
  }

  const product = await Product.create({
    ...MOCK_PRODUCT,
    link,
    rubrics: [rubricLevelThree.id],
    images: imagesProduct,
  });
  console.log(JSON.stringify(product, null, 2));
  console.log(product);
  return res.send('created');
};

export default createTestData;
