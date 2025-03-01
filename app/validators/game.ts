import vine from '@vinejs/vine';

export const createGameValidator = vine.compile(
  vine.object({
    name: vine.string().trim(),
    releasedAt: vine.date(),
  }),
);

export const updateGameValidator = vine.compile(
  vine.object({
    name: vine.string().trim(),
    releasedAt: vine.date(),
  }),
);
