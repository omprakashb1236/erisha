
export const getEmailTemplate = (currentLocale: string, templateName: string) => {
    switch (templateName) {
        case 'contact':
            return process.env[`SENDGRID_CONTACT_TEMPLATE${currentLocale.toUpperCase()}`];
        case 'testDrive':
            return process.env[`SENDGRID_TESTDRIVE_TEMPLATE_${currentLocale.toUpperCase()}`];
        case 'requestQuote':
            return process.env[`SENDGRID_REQUEST_QUOTE_TEMPLATE_${currentLocale.toUpperCase()}`];
        case 'fleetSales':
            return process.env[`SENDGRID_FLEET_SALES_TEMPLATE_${currentLocale.toUpperCase()}`];
        case 'offerBooking':
            return process.env[`SENDGRID_OFFER_BOOKING_TEMPLATE_${currentLocale.toUpperCase()}`];
        case 'brochureForm':
            return process.env[`SENDGRID_BROCHURE_FORM_TEMPLATE_${currentLocale.toUpperCase()}`];
        default:
            throw new Error(`Template "${templateName}" not found for locale "${currentLocale}"`);
    }
}