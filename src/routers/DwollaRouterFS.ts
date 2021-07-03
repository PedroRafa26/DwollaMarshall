import { NextFunction, Request, Response, Router } from "express";
import dwollaFundingSources from "../controller/DwollaAPI/fundingSources";
import ApiResponse from "../controller/responses";
import ApiError from "../errors/ApiError";
import { DwollaCostumerFS } from "../models/dwollaFS";


const app = Router()

app.post('/addBankAccount', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {id, routingNumber, accountNumber, type, name, } = req.body
    if(!id || !routingNumber || !accountNumber || !type || !name) throw ApiError.badRequest(ApiResponse.badRequest("user Id is required to add Debit Card Funding Source"))
    const requestBody:DwollaCostumerFS = {
      accountNumber,
      type,
      name,
      routingNumber
    }
    const response = await dwollaFundingSources.addBankAccount(id, requestBody)
    console.log(response)
    res.send(response)
  } catch (error) {
    next(error)
  }
})

app.post('/verifyWithMicroDeposit', async (req: Request, res: Response, next: NextFunction)=>{
  try {
    const {id} = req.body
    if(!id) throw ApiError.badRequest(ApiResponse.badRequest("user Id is required to add Debit Card Funding Source"))
    
    const response = await dwollaFundingSources.verifyWithMicroDeposit(id)
    console.log(response)
    res.send(response)
  } catch (error) {
    next(error)
  }
})

app.post('/generateIAVtoken', async (req: Request, res: Response, next: NextFunction)=>{
  try {
    const {id} = req.body
    if(!id) throw ApiError.badRequest(ApiResponse.badRequest("user Id is required to generate IAV token"))

    const token = await dwollaFundingSources.generateIAVtoken(id)
    console.log(token)
    res.json({token})
  } catch (error) {
    next(error)
  }
})
export default app;