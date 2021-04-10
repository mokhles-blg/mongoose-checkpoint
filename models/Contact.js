const mongoose = require("mongoose");

// create Contact schema
const schema = mongoose.Schema;
const contactSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: Number,
});

// export schema
module.exports = Contact = mongoose.model("Contact", contactSchema);
