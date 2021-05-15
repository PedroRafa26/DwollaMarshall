/**
 *If type is unverified or receive-only: status can be `unverified`, `deactivated`, or `suspended`.
 
 *If type is `personal`: status can be `retry`, `kba`, `document`, `verified`, `deactivated`, or `suspended`.
 
 *If type is `business`: status can be `retry`, `document`, `verified`,`deactivated`, or `suspended`.
 */
export type DwollaCostumerStatus = 'verified' | 'unverified' | 'deactivated' | 'suspended' | 'retry' | 'kba' | 'document';

/**
 * type	Either `unverified`, `personal`, `business`, or `receive-only`.
 */
export type DwollaCostumerType = 'unverified' | 'personal' | 'business' | 'receive-only';

/**
 * @params 'lastName' Costumer Last Name
 * 
 * required 'firstName' Costumer First Name
 * 
 * required 'email' Costumer Email
 * 
 * optional 'businessName' Business Name to generate
 * 
 * optional 'ipAddress' Costumer First Name
 * 
 */

export interface DwollaCreateReceiveOnlyCostumer {
  lastName: String,
  firstName: String,
  email: String,
  businessName?: String,
  ipAddress?: String,
}

/**
 * Data required to create new Personal verificated Costumer
 */

export interface DwollaCreatePersonalCostumer {
  /**
 * Individual’s legal last name.
 */
  lastName: String,
  /**
   * Individual’s legal first name.
   */
  firstName: String,
  /**
   * Customer’s email address.
   */
  email: String,
  /**
   * Street number, street name of individual’s physical address.
   */
  address1: String,
  /**
   * 	Apartment, floor, suite, bldg # of individual’s physical address.
   */
  address2?: String,
  /**
   * 	City of individual’s physical address.
   */
  city: String,
  /**
   * 	Two-letter US state or territory abbreviation code of individual’s physical address
   */
  state: String,
  /**
   * Customer’s US five-digit ZIP or ZIP + 4 code.
   */
  postalCode: String,
  /**
   * Customer's date of birth in YYYY-MM-DD format. Must be between 18 to 125 years of age.
   */
  dateOfBirth: String,
  /**
   * Last four-digits of individual’s social security number.
   */
  ssn: String,
}


//?? Business Costumers

/**
 * Data required to create new Business verificated Costumer where 'businessType' is equal to "soleProprietorship"
 */

export interface DwollaCreateBusinessWithoutController {
  businessType: 'soleProprietorship',
  /**
  * The legal last name of the Business Owner.
  */
  lastName: String,
  /**
   * The legal first name of the Business Owner.
   */
  firstName: String,
  /**
   * The legal last name of the Business Owner.
   */
  email: String,
  /**
   * ipAddress of registering user is recommended..
   */
  ipAddress?: String,
  /**
   * The date of birth of the Business Owner. Formatted in YYYY-MM-DD format. Must be between 18 to 125 years of age.
   */
  dateOfBirth: String,
  /**
   * Last four-digits of the Business Owner social security number.
   */
  ssn: String,
  /**
   * Street number, street name of business’ physical address.
   */
  address1: String,
  /**
   * Apartment, floor, suite, bldg. # of business’ physical address
   */
  address2?: String,
  /**
   * 	City of business’ physical address.
   */
  city: String,
  /**
   * Two-letter US state or territory abbreviation code of business’ physical address. For two-letter abbreviation reference, check out the US Postal Service guide.
   */
  state: String,
  /**
   * Business’ US five-digit ZIP or ZIP + 4 code.
   */
  postalCode: String,
  /**
   * Registered business name.
   */
  businessName: String,
  /**
   * The industry classification Id that corresponds to Customer’s business. Reference our Dev Docs to learn how to generate this Id.
   */
   businessClassification: String,
  /**
   * Preferred business name -- also known as fictitious name, or assumed name.
   */
  doingBusinessAs?: String,
  /**
   * Employer Identification Number. Optional for soleProprietorship business Customers
   */
  ein?: String,
  /**
   * 	Business’ website
   */
  wbsite?: String,
  /**
   * Business's 10 digit phone number. No hyphens or other separators, e.g. 3334447777.
   */
  phone?: String

}

/**
 * Data required to create new Business verificated Costumer where 'businessType' is diferent to "soleProprietorship"
 */


export interface DwollaCreateBusinessWithController {
  businessType: 'corporation' | 'llc' | 'partnership',
  /**
  * The legal last name of the Account Admin or individual signing up the business verified Customer.
  */
  lastName: String,
  /**
   * The legal first name of the Account Admin or individual signing up the business verified Customer.
   */
  firstName: String,
  /**
   * 	Email address of the Account Admin creating and managing the Customer account.
   */
  email: String,
  /**
   * ipAddress of registering user is recommended.
   */
  ipAddress?: String,
  /**
   * Street number, street name of business’ physical address.
   */
  address1: String,
  /**
   *	Apartment, floor, suite, bldg. # of business’ physical address
   */
  address2?: String,
  /**
   * City of business’ physical address.
   */
  city: String,
  /**
   * Two-letter US state or territory abbreviation code of business’ physical address. For two-letter abbreviation reference, check out the US Postal Service guide.
   */
  state: String,
  /**
   * Business’ US five-digit ZIP or ZIP + 4 code.
   */
  postalCode: String,
  /**
   * Registered business name.
   */
  businessClassification: String,
  /**
   * The industry classification Id that corresponds to Customer’s business. Reference our Dev Docs to learn how to generate this Id.
   */
  businessName: String,
  /**
   * Preferred business name -- also known as fictitious name, or assumed name.
   */
  doingBusinessAs?: String,
  /**
   * Employer Identification Number. Optional for soleProprietorship business Customers
   */
  ein?: String,
  /**
   * 	Business’ website
   */
  wbsite?: String,
  /**
   * Business's 10 digit phone number. No hyphens or other separators, e.g. 3334447777.
   */
  phone?: String
  /**
   * A controller JSON object. Controllers are not required if businessType is soleProprietorship
   */
  controller?: Controller
}

export interface Controller {
  /**
   * The legal first name of the controller.
   */
  firstName: String,
  /**
   * The legal last name of the controller.
   */
  lastName: String,
  /**
   * Job title of the Customer’s Controller. e.g. Chief Financial Officer
   */
  title: String,
  /**
   * The date of birth of the controller. Formatted in YYYY-MM-DD format. Must be between 18 to 125 years of age.
   */
  dateOfBirth: String,
  /**
   * Last four-digits of Controller’s social security number. Required for Controllers who reside in the United States.
   */
  ssn?: String,
  /**
   * A controller address JSON object. Full address of the controller's physical address. See below
   */
  address: ControllerAddres
  /**
   * An optional controller's passport JSON object. Required for non-US individuals. Includes passport identification number and country. See below
   */
  passport?: ControllerPassport
}

export interface ControllerAddres {
  /**
   * Street number, street name of Controller’s physical address.
   */
  address1: String,
  /**
   * Apartment, floor, suite, bldg. # of Controller’s physical address.
   */
  address2?: String,
  /**
   * Third line of the street address of the Controller's physical address.
   */
  address3?: String,
  /**
   * 	City of Controller’s physical address.
   */
  city: String,
  /**
   * Two-letter US state or territory abbreviation code of controller’s physical address. For two-letter abbreviation reference, check out the US Postal Service guide.
   */
  stateProvinceRegion: String,
  /**
   * Controller’s’ US five-digit ZIP or ZIP + 4 code. Optional if controller is a non-US person.
   */
  postalCode?: String,
  /**
   * 	Country of controller's physical address. Two digit ISO code, e.g. US.
   */
  country: String,
}

export interface ControllerPassport {
  /**
   * Required for a non-U.S. person who has no Social Security number.
   */
  number?: String,
  /**
   * Country of issued passport. Two digit ISO code, e.g. US.
   */
  countr?: String,
}


