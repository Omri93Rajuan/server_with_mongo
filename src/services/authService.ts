import { comparePassword } from "../../helpers/bcrypt"
import Miki from "../models/user"

interface userDTO {
    email:string,
    password:string
}

const login = async (user: userDTO) => {
    try {
        const foundUser = await Miki.findOne({ email: user.email })
        
        if (!foundUser) return  console.log ("User not found")
        const isPasswordCorrect = await comparePassword(user.password, foundUser.password)
        if (!isPasswordCorrect) return console.log("Incorrect password or Email");
        return foundUser;

    } catch (error) {
        throw new Error("Failed to login")
    }
}

export {
    login 
}