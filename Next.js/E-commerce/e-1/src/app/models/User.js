import { model, models, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
const UserSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      validate: (pass) => {
        if (!pass?.length || pass.length < 5) {
          new Error('password must be al least 5 characters');
        }
      },
    },
    image: { type: String },
    streetAddress: { type: String },
    phone: { type: String },
    postalCode: { type: String },
    city: { type: String },
    country: { type: String },
  },
  { timestamps: true },
);

UserSchema.post('validate', function (user) {
  const notHashedPassport = user.password;
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(notHashedPassport, salt);
});

export const User = models?.User || model('User', UserSchema);
