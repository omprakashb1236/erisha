

export type VehicleDetails = {
  modalYear: number;
  chassisNumber: string;
  plateNumber: string;
  vehicleMakeCode: string;
  vehicleVariantCode: string;
  vehicleModal: string;
  modelCode: string;
  variantCode: string;
  familyName: string;
  givenName: string;
  mobile: string;
  email: string;
  sabVehicleId: number;
  userId: number;
};

export type CustomerResponse = {
  result: Customer[];
};

export type Customer = {
  customerId: string;
  reference: string;
  name: string;
  address: string;
  communications: {
    mobile: string;
    email: string;
  };
  customerDetail: CustomerDetail;
  isVehicleAvailabel: boolean;
  createdAt: string;
};

export type CustomerDetail = {
  customerId: string;
  reference: string;
  status: string;
  languageCode: string;
  individual: {
    givenName: string;
    familyName: string;
    initials: string;
    salutation: string;
    title: string;
  };
  addresses: {
    physical: {
      formattedAddress: Record<string, unknown>; // could be refined if structure is known
      blockName: string;
      city: string;
      countryCode: string;
    };
  };
  communications: {
    preferredPhone: string;
    personal: {
      mobile: string;
      email: string;
    };
    work: Record<string, unknown>; // could be refined if structure is known
  };
  additionalDetail: {
    source: {
      code: string;
      description: string;
    };
  };
  business: {
    companyPosition: Record<string, unknown>;
    typeOfBusiness: Record<string, unknown>;
  };
  vehicles: VehicleRelationship[];
  branches: Branch[];
  updateHistory: {
    created: string;
    lastModified: string;
  };
};

export type VehicleRelationship = {
  relationship: string;
  vehicle: {
    vehicleId: string;
    reference: string;
    class: string;
    description: string;
    vin: string;
    licensePlate: string;
  };
};

export type Branch = {
  branchType: string;
  branchId: string;
  description: string;
};

export type AppointmentData = {
appointmentId: string;
serviceCenter: string;
recommendedService : string;
dateAndTime : string;
timeSlot : string;
latitude: string,
longitude: string,
country: string,
city: string,
}