import vine from '@vinejs/vine';
import { DateTime } from 'luxon';

export const createGameValidator = vine.compile(
  vine.object({
    name: vine.string().trim(),
    releasedAt: vine.date().transform((v) => DateTime.fromJSDate(v)),
  }),
);

export const updateGameValidator = vine.compile(
  vine.object({
    name: vine.string().trim(),
    releasedAt: vine.date().transform((v) => DateTime.fromJSDate(v)),
  }),
);
