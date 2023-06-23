import { Schema, model } from 'mongoose';
import modelOptions from './model.options.js';

const technologySchema = Schema(
    {
        name: {
            type: String,
            unique: true,
            required: [true, 'Technology name is required'],
        },
        amount: Number,
    },
    modelOptions
);

export const Frontend = model('technology', technologySchema, 'frontend');
export const Backend = model('technology', technologySchema, 'backend');
export const QA = model('technology', technologySchema, 'qa');
export const PM = model('technology', technologySchema, 'pm');
export const Design = model('technology', technologySchema, 'pm');
