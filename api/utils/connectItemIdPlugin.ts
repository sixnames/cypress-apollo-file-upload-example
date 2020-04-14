import { autoIncrement } from 'mongoose-plugin-autoinc';
import { Schema } from 'mongoose';

function connectItemIdPlugin(schema: Schema, model: string) {
  schema.plugin(autoIncrement, {
    model,
    field: 'itemId',
  });
}

export default connectItemIdPlugin;
