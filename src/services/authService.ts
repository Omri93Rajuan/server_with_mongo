import { CookieOptions, Response } from "express";
import { comparePassword } from "../../helpers/bcrypt"
import { generateAuthToken } from "../../helpers/jwt"
import Miki from "../models/user"

const cookieConfig: CookieOptions = {
    httpOnly: true,          // הגנה מפני XSS - הקוקי לא נגיש דרך JavaScript בצד הלקוח
    secure: true,            // שליחת הקוקי רק בחיבור HTTPS
    sameSite: 'strict',      // הגנה מפני CSRF
    maxAge: 24 * 60 * 60 * 1000  // תוקף של יום אחד (במילישניות)
};
interface userDTO {
    email:string,
    password:string
}
interface LoginDTO{
    _id: string,
      isAdmin: boolean 
}

const login = async (user: userDTO, res:Response) => {
    try {
        const foundUser = await Miki.findOne({ email: user.email })
        
        if (!foundUser) return  console.log ("User not found")
        const isPasswordCorrect = await comparePassword(user.password, foundUser.password)
        if (!isPasswordCorrect) return console.log("Incorrect password or Email");

        const {_id,isAdmin} = foundUser
        const token = generateAuthToken({_id,isAdmin});
        res.cookie('auth_token', token, cookieConfig);

        return {foundUser , token};

    } catch (error) {
        throw new Error("Failed to login")
    }
}


const logout = (res: Response): void => {
    try {
        res.clearCookie("auth_token", {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
        });
            } catch (error) {
console.log(error);
    }
};
export {
    login,
    logout
}