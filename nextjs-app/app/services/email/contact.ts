"use server"
import { sendEmail } from "../../utils/sendgrid";
import { BookingEmailData } from "./types";
import { getEmailTemplate } from "./util";

export async function sendContactCustomerEmail(firstName : string, toEmail : string, currentLocale : string, templateName: string) {
    console.log("==> sendContactCustomerEmail() ", firstName, toEmail, currentLocale, templateName);
    try {
        console.log("==> sendContactCustomerEmail() ", firstName, toEmail, currentLocale);
        if (!currentLocale) {
            console.log("Server Side Error (Contact Email sending ) : ", "Invalid locale");
            return { status: false, msg: 'Invalid Locale' };
        }
        if(!toEmail || !firstName) {
            console.log("Server Side Error (Customer Email sending ) : ", "Invalid To Email or Invalid firstname");
            return { status: false, msg: "Invalid To Email or Invalid firstname" };
        }
        const templateId = getEmailTemplate(currentLocale, templateName);
        console.log("==> sendContactCustomerEmail() ", templateId);
        if (!templateId) {
            console.log("Server Side Error (Contact Customer Email sending ) : ", "Template ID not found for locale: " + currentLocale);
            return { status: false, msg: 'Template ID not found for locale' };  
        }
        await sendEmail({
            to: toEmail || "",
            templateId: templateId,
            dynamicTemplateData: {
                firstName,
            },
        });
        console.log("Contact Customer Email Sent Success to - " + toEmail );
        return { status: true, msg: 'Email sent successfully' };
    } catch (error : any) {
        console.log("Server Side Error (Contact Customer Email sending ) : ", error.message);
        return { status: false, msg: 'Something went wrong while sending email' };
    }
}

export async function sendServiceBookingCustomerEmail(props : BookingEmailData, toEmail : string, currentLocale : string) {
    console.log("==> sendServiceBookingCustomerEmail() ", props, toEmail, currentLocale);
    try {
        const { bookingId } = props;
        if (!currentLocale) {
            console.log("Server Side Error (Contact Email sending ) : ", "Invalid locale");
            return { status: false, msg: 'Invalid Locale' };
        }
        if(!toEmail || !bookingId) {
            console.log("Server Side Error (Customer Email sending ) : ", "Invalid To Email or Invalid bookingId");
            return { status: false, msg: "Invalid To Email or Invalid bookingId" };
        }
        await sendEmail({
            to: toEmail || "",
            templateId: (currentLocale === 'en' ? process.env.SENDGRID_SERVICE_BOOKING_TEMPLATE_EN : process.env.SENDGRID_SERVICE_BOOKING_TEMPLATE_AR) ?? "",
            dynamicTemplateData: props,
        });
        console.log("Contact Customer Email Sent Success to - " + toEmail );
        return { status: true, msg: 'Email sent successfully' };
    } catch (error : any) {
        console.log("Server Side Error (Contact Customer Email sending ) : ", error.message);
        return { status: false, msg: 'Something went wrong while sending email' };
    }
}