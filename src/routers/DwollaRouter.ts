import { NextFunction, Request, Response, Router } from "express";
import ApiError from "../errors/ApiError";
import ApiResponse from "../controller/responses";
import { DwollaCreateBusinessWithController, DwollaCreateBusinessWithoutController, DwollaCreatePersonalCostumer, DwollaCreateReceiveOnlyCostumer } from "../models/dwollaCostumer";
import dwollaCostumersAPI from "../controller/DwollaAPI/costumers"

const app = Router()

app.post('/createReceiveOnlyCostumer', async (req: Request, res: Response, next: NextFunction) => {

	try {
		const { firstName, lastName, email, businessName, ipAddress } = req.body;

		if (!firstName || !lastName || !email) throw ApiError.badRequest(ApiResponse.badRequest('Basic information such as Last Name, First Name or Email is missing'))
		const newCostumer: DwollaCreateReceiveOnlyCostumer = {
			email: email,
			firstName: firstName,
			lastName: lastName,
			businessName: businessName ?? '',
			ipAddress: ipAddress ?? '',
		}
		const response = await dwollaCostumersAPI.createReceiveOnlyCostumer(newCostumer)

		res.status(200).json({ "msg": "Costumer Created" })
	} catch (error) {
		// console.log(error)
		next(error)
	}

});

app.post('/createPersonalCostumer', async (req: Request, res: Response, next: NextFunction) => {

	try {
		const { firstName, lastName, email, address1, city, state, postalCode, dateOfBirth, ssn } = req.body;

		if (!firstName || !lastName || !email || !address1 || !city || !state || !postalCode || !dateOfBirth || !ssn) throw ApiError.badRequest(ApiResponse.badRequest('Basic information is missing'))
		const newCostumer: DwollaCreatePersonalCostumer = {
			...req.body
		}
		const response = await dwollaCostumersAPI.createPersonalCostumer(newCostumer)

		res.status(200).json({ "msg": "Costumer Created" })
	} catch (error) {
		// console.log(error)
		next(error)
	}
});

app.post('/createBusinessCostumerWithoutController', async (req: Request, res: Response, next: NextFunction) => {

	try {
		const { businessType, firstName, lastName, email, ipAddress, dateOfBirth, ssn, address1, address2, city, state, postalCode, businessClassification, businessName, doingBusinessAs, ein, website, phone } = req.body;

		if (businessType !== 'soleProprietorship') throw ApiError.badRequest(ApiResponse.badRequest('Business Type must be soleProprietorship'))

		if (!businessType || !firstName || !lastName || !email || !address1 || !dateOfBirth || !ssn || !city || !state || !postalCode || !businessClassification || !businessName) throw ApiError.badRequest(ApiResponse.badRequest('Basic information is missing'))
		const newCostumer: DwollaCreateBusinessWithoutController = {
			...req.body
		}
		const response = await dwollaCostumersAPI.createBusinessCostumerWithoutController(newCostumer)

		res.status(200).json({ "msg": "Costumer Created" })
	} catch (error) {
		// console.log(error)
		next(error)
	}
});

app.post('/createBusinessCostumerWithController', async (req: Request, res: Response, next: NextFunction) => {

	try {
		const { businessType, firstName, lastName, email, ipAddress, address1, city, state, postalCode, businessClassification, businessName, doingBusinessAs, ein, website, phone } = req.body;

		if (businessType !== 'corporation' && businessType !== 'llc' && businessType !== 'partnership') throw ApiError.badRequest(ApiResponse.badRequest('Business Type must be either llc, corporation or partnership'))

		if (!businessType || !firstName || !lastName || !email || !address1 || !city || !state || !postalCode || !businessClassification || !businessName) throw ApiError.badRequest(ApiResponse.badRequest('Basic information is missing'))
		const newCostumer: DwollaCreateBusinessWithController = {
			...req.body
		}
		const response = await dwollaCostumersAPI.createBusinessCostumerWithController(newCostumer)

		res.status(200).json({ "msg": "Costumer Created" })
	} catch (error) {
		// console.log(error)
		next(error)
	}
});

app.get('/consultCostumerStatus', async (req: Request, res: Response, next: NextFunction) => {
	try {
		const {id} = req.body
		if(!id) throw ApiError.badRequest(ApiResponse.badRequest("Id is required to consult"))
		const response = await dwollaCostumersAPI.consultCostumerStatus(id);
		res.json({
			"status": response
		})
	} catch (error) {
		next(error)		
	}
})

//https://api-sandbox.dwolla.com/customers/
export default app;
