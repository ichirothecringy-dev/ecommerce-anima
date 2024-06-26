const { faker } = require("@faker-js/faker");
const bcrypt = require("bcryptjs");

async function createAdmins() {
  const admins = [];

  for (let i = 0; i < 5; i++) {
    const name = `admin${i + 1}`;
    const surname = `admin${i + 1}`;
    const hashedPassword = await bcrypt.hash("adminPassword", 8);
    const newAdmin = {
      surname,
      name,
      email: faker.internet.email({ firstName: name, lastName: surname }),
      password: hashedPassword,
    };
    admins.push(newAdmin);
  }
  return admins;
}

module.exports = createAdmins;
