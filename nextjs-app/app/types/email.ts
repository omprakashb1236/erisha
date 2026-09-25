export type ContactEmailFields = {
    fname: string;
    lname: string;
    title: string;
    email: string;
    phone: string;
    type: string;
    comments: string;
    location: string;
    countrymobileNoCode: string;
};

export type RequestQuoteProps = {
    carTypes: string[];
    selectedFilter: string;
    selectedModel: string;
    selectedModelTitle: string;
    fname: string;
    lname: string;
    title: string;
    email: string;
    phone: string;
    comments: string;
    agreed: boolean;
    location: string;
    countrymobileNoCode: string;
};

export type ServiceBookingProps = {
    fname: string;
    email: string;
    phone: string;
    vehicleType: string;
    serviceCenter: string;
    recommendedService : string;
    dateAndTime : string;
    timeSlot : string;
    appointmentId : string;
    country : string;
    mileage : string;
};

export type FleetSalesFormProps = {
    fname: string;
    lname: string;
    title: string;
    email: string;
    phone: string;
    fleetSize: string;
    comments: string;
    companyName: string;
    agreed: boolean;
    countrymobileNoCode: string;
};

export type OptOutFormFields = {
    name: string;
    email: string;
    phone: string;
    stopMarketing: string;
    countrymobileNoCode: string;
}

export type OfferFormProps = {
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    location: string;
    vehicle: string;
    phoneNo: string;
    comment: string;
    privacyPolicy: boolean;
    pageUrl: string;
};

export type BrochureFormProps = {
    fname: string;
    lname: string;
    title: string;
    email: string;
    phone: string;
    fleetSize: string;
    companyName: string;
    comments: string;
    agreed: boolean;
    brochure_check: string[];
    countrymobileNoCode: string;
    contactYou: string;
}