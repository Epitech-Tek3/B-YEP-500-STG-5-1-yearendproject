import { model, NativeDate, now, Schema } from "mongoose";

/**
 * This is creating a new schema for the User model.
 * @param email:string
 * @param password:string
 * @param avatar:string
 */

export interface UserT {
  _id: string;
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  password?: string;
  picture: string;
  createdAt: NativeDate;
  areaList: any;
}

const userSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  accessToken: {
    type: Array
  },
  providers: {
    type: Array
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  password: {
    type: String,
    required: false
  },
  picture: {
    type: String
  },
  createdAt: {
    type: Date,
    default: now()
  },
  areaList: {
    type: [
      {
        module: String,
        action: String,
        reaction: String,
        created: Date
      }
    ],
    required: false
  },
  actions: [
    {
      google: {
        like: String
      }
    }
  ]
});

export const User = model("users", userSchema);
