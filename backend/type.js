const zod = require("zod");

const userCreate = zod.object({
  username: zod.string().email(),
  firstname: zod.string(),
  lastname: zod.string(),
  password: zod.string().min(5),
});

module.exports = {
  userCreate,
};
