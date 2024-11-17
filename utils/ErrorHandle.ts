import { Response } from "express";

const handleError = (res: Response, status: number, message: string): Response => {
  return res.status(status).send(message);
};


const handleBadRequest = async (validator: string, error: any) => {
  const errorMessage = `${validator} Error: ${error.message}`;
  error.message = errorMessage;
  error.status = error.status || 400;
  return Promise.reject(error);
};
  


export { handleError,handleBadRequest};