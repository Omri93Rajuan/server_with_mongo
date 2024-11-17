import { CookieOptions, Response } from "express";
import { comparePassword } from "../../helpers/bcrypt"
import { generateAuthToken } from "../../helpers/jwt"
import Miki from "../models/user"
import { handleBadRequest } from "../../utils/ErrorHandle";

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

const login = async (user: userDTO, res: Response) => {
    try {
        if (!user?.email || !user?.password) {
            throw new Error("Missing required fields");
        }

        const foundUser = await Miki.findOne({ email: user.email });
        if (!foundUser) {
            throw new Error("Could not find this user in the database");
        }

        const isPasswordCorrect = await comparePassword(user.password, foundUser.password);
        if (!isPasswordCorrect) {
            throw new Error("Incorrect password or Email");
        }

        const { _id, isAdmin } = foundUser;
        let token = generateAuthToken({ _id, isAdmin });

        if (!cookieConfig) {
            throw new Error("Cookie configuration is missing");
        }

        res.cookie('auth_token', token, cookieConfig);
        return { foundUser, token };

    } catch (error: any) {
        error.status = 404;
        return handleBadRequest("MongoDB", error); 
};
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