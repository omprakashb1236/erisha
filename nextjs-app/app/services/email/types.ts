export type BookingEmailData = {
    bookingId: string;
    licensePlateNo : string;
    serviceName: string;
    startDate: string;      // ISO date string or formatted date
    time: string;           // e.g. "10:00 AM"
    workshop: string;       // address as plain text
};