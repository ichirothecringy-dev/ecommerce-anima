const { Admin } = require("../models");

const adminController = {
  index: async (req, res) => {
    const admins = await Admin.findAll();
    return res.json(admins);
  },
  show: async (req, res) => {
    const { id } = req.params;
    try {
      const admin = await Admin.findByPk(id);
      return !admin
        ? res.status(404).send("Admin not found.")
        : res.json(admin);
    } catch (err) {
      return res.send(err);
    }
  },
  store: async (req, res) => {
    const admin = req.body;
    try {
      if (!admin.name || !admin.surname || !admin.email || !admin.password) {
        return res
          .status(400)
          .send("All fields are required for admin creation.");
      }
      await Admin.create({
        name: admin.name,
        surname: admin.surname,
        email: admin.email,
        password: admin.password,
      });
      return res.send("New admin has been added successfully.");
    } catch (err) {
      return res.send(err);
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    const adminInfo = req.body;

    const admin = await Admin.findByPk(id);

    if (!admin) res.status(404).send("Admin not found.");
    if (adminInfo.name) admin.name = adminInfo.name;
    if (adminInfo.surname) admin.surname = adminInfo.surname;
    if (adminInfo.email) admin.email = adminInfo.email;
    if (adminInfo.password) admin.password = adminInfo.password;

    await admin.save();
    return res.send("Admin modified successfully.");
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    try {
      const admin = await Admin.findByPk(id);
      if (!admin) {
        return res.status(404).send("Admin not found.");
      }
      if (admin.id === 1) {
        return res.status(403).send("You cannot delete the admin with ID 1.");
      }
      admin.destroy();
      return res.send("The admin has been deleted successfully!");
    } catch (err) {
      return res.send(err);
    }
  },
};

module.exports = adminController;
