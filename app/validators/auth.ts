import vine from '@vinejs/vine';

export const registerValidator = vine.compile(
  vine.object({
    username: vine
      .string()
      .trim()
      .toLowerCase()
      .maxLength(64)
      .unique(async (db, value) => {
        const user = await db.from('users').where('username', value).first();
        return !user;
      }),
    email: vine
      .string()
      .trim()
      .toLowerCase()
      .email()
      .maxLength(254)
      .unique(async (db, value) => {
        const user = await db.from('users').where('email', value).first();
        return !user;
      }),
    password: vine
      .string()
      .trim()
      .minLength(8)
      .maxLength(32)
      .confirmed({ confirmationField: 'passwordConfirm' }),
  }),
);

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().trim().toLowerCase().email(),
    password: vine.string().trim(),
  }),
);
