import mongoose from 'mongoose'

import { userSchema as authSchema } from '../databases/mongo/models/usuario.js'

authSchema.statics = {
  create: function (data, cb) {
    const user = new this(data);
    user.save(cb);
  },
  login: function (query, cb) {
    this.find(query, cb);
  }
}

export const authModel = mongoose.model('Users', authSchema);
