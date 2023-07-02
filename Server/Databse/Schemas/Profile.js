const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  mail:{
    type: mongoose.SchemaTypes.String,
    unique: true,
  },
  qt: {
    img: {
      type: mongoose.SchemaTypes.String,
    },
    name: {
      type: mongoose.SchemaTypes.String,
    },
    designation: {
      type: mongoose.SchemaTypes.String,
    },
    department: {
      type: mongoose.SchemaTypes.String,
    },
    email: {
      type: mongoose.SchemaTypes.String,
    },
    UG: {
      type: mongoose.SchemaTypes.String,
    },
    PG: {
      type: mongoose.SchemaTypes.String,
    },
    PhD: {
      type: mongoose.SchemaTypes.String,
    },
    exp: {
      type: mongoose.SchemaTypes.Number,
    },
  },
  pub: {
    publish: {
      n: {
        type: mongoose.SchemaTypes.Number,
      },
      in: {
        type: mongoose.SchemaTypes.Number,
      },
    },
    present: {
      n: {
        type: mongoose.SchemaTypes.Number,
      },
      in: {
        type: mongoose.SchemaTypes.Number,
      },
    },
    books: {
      type: mongoose.SchemaTypes.Array,
    },
  },
  info: {
    project: {
      master: {
        type: mongoose.SchemaTypes.Number,
      },
      phd: {
        type: mongoose.SchemaTypes.Number,
      },
    },
    awards: {
      type: mongoose.SchemaTypes.Array,
    },
    grants: {
      type: mongoose.SchemaTypes.Array,
    },
  },
});

const Profile = mongoose.model('Profiledb', ProfileSchema);

module.exports = {Profile}