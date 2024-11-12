import { generateUserPassword } from "../../helpers/bcrypt";
import Miki, { IUser } from "../models/user";

const allUsers = async () =>{
    try {
        const allUsers = Miki.find()
        return allUsers;  
    } catch (error) {
        throw new Error("Failed to find all users new user");

    }
}

const AddUser = async (userData: IUser) => {
    try {
      const newUser = new Miki(userData);
      newUser.password = generateUserPassword(newUser.password)
      await newUser.save();
      return newUser;
    } catch (error) {
      throw new Error("Failed to add new user");
    }
  };


export {
    allUsers,
    AddUser
}