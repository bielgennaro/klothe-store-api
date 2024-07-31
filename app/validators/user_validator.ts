import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    firstname: vine.string(),
    lastname: vine.string(),
    username: vine.string().minLength(6).maxLength(20).regex(new RegExp('^[a-zA-Z0-9_]*$')),
    email: vine.string().email(),
    password: vine.string().minLength(12),
    isAdmin: vine.boolean(),
    phone: vine.string().regex(new RegExp('^[0-9]*$')),
  })
)

export const loginUserValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(12),
  })
)
