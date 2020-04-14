import {
  AccessoryInterface,
  AccessoryRubricInterface,
  ProductInterface,
  RubricInterface,
} from '../types';
import { Model } from 'mongoose';

interface ProductUtilsInterface {
  rubricModel?: Model<AccessoryRubricInterface | RubricInterface>;
  productModel: Model<ProductInterface | AccessoryInterface>;
}

const productUtils = ({ rubricModel, productModel }: ProductUtilsInterface) => ({
  getProductsFilter: function getProductsFilter(args: { [key: string]: any } = {}) {
    return Object.keys(args).reduce((acc, key) => {
      const value = args[key];

      if (!!value && key === 'query') {
        return {
          ...acc,
          $text: {
            $search: value,
            $caseSensitive: false,
          },
        };
      }

      if (!!value && key === 'contractor') {
        return { ...acc, 'contractors.contractor': value };
      }

      if (!!value && key === 'notInContractor') {
        return { ...acc, 'contractors.contractor': { $nin: [value] } };
      }

      if (!!value && key === 'rubric') {
        return { ...acc, rubrics: { $in: [value] } };
      }

      if (!!value && key === 'notInRubric') {
        return { ...acc, rubrics: { $nin: [value] } };
      }

      if (!!value && key === 'noRubrics') {
        return { ...acc, rubrics: { $exists: true, $size: 0 } };
      }

      return acc;
    }, {});
  },

  getRubricNestedIds: async function getRubricNestedIds(
    rubric: RubricInterface | AccessoryRubricInterface,
  ) {
    if (rubricModel) {
      const secondLevelChildren = await rubricModel
        .find({ parent: rubric.id })
        .select({ id: 1 })
        .lean()
        .exec();
      const secondLevel = secondLevelChildren.map(({ _id }) => _id);

      const thirdLevelChildren = await rubricModel
        .find({ parent: { $in: secondLevel } })
        .select({ id: 1 })
        .lean()
        .exec();
      const thirdLevel = thirdLevelChildren.map(({ _id }) => _id);

      return [rubric.id, ...secondLevel, ...thirdLevel];
    }
    return [];
  },

  getRubricCounters: async function getRubricCounters(
    rubric: RubricInterface | AccessoryRubricInterface,
    args: { [key: string]: any } = {},
    active = false,
  ) {
    const filter = this.getProductsFilter(args);
    const rubricsIds = await this.getRubricNestedIds(rubric);

    let isActive = {};
    if (active) {
      isActive = { active: true };
    }

    return productModel.countDocuments({
      rubrics: { $in: rubricsIds },
      ...filter,
      ...isActive,
    });
  },

  getRubricProductsDeep: async function getRubricProductsDeep(
    rubric: RubricInterface | AccessoryRubricInterface,
    args: { [key: string]: any } = {},
  ) {
    const rubricsIds = await this.getRubricNestedIds(rubric);
    const filter = this.getProductsFilter(args);
    return productModel.find({ rubrics: { $in: rubricsIds }, ...filter });
  },
});

export default productUtils;
