interface Option {
    value: string;
    label: string;
    [key: string]: any;
}

interface Address {
    street1?: string;
    street2?: string;
    postalCode?: string;
    city?: string;
    country?: string;
}

interface Customer {
    id: string;
    name: string;
    lastName: string;
    email: string;
    identification: string;
    phone: string;
    birthDate?: string;
    address?: string;
    city?: string;
    country?: string;
    gender?: "female" | "male";
    zipCode?: string;
    status: "active" | "inactive";
    createdAt: string;
    updatedAt?: string | null;
}

interface NewCustomer extends Partial<Customer> {}

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    duration: number; // typical duration of the service in minutes
    categoryId: string;
    quantityInStock?: number;
    isActive: boolean;
    createdAt?: string;
    updatedAt?: string;
    //availability: Specific times or days when the service is available.
    // requirements: : Any prerequisites or customer requirements to use the service.
}

interface Category {
    id: string;
    name: string;
    description: string;
    parentId?: string;
    createdAt: string;
    updatedAt?: string;
}

interface Appointment {
    id: string;
    customerId: string;
    productId: string;
    employeeId: string;
    appointmentTime: string;
    appointmentStatus: "pending" | "confirmed" | "cancelled";
    duration: string; // Duration of the appointment in minutes
    notes: string;
    startedAt: string;
    endedAt: string;

    createdAt: string;
    updatedAt?: string;
    // Duration and Scheduling: The service duration can help in auto-calculating end times and availability slots.
    // Cancellation and Rescheduling: Procedures for handling changes to appointments should be defined.
    // Notifications: Consider a mechanism to send reminders or confirmations to customers via email or SMS.
    // Managing Overlaps: The system should ensure that appointments do not overlap in terms of salon resources and personnel availability.
}

interface Employee {
    id: string;
    name: string;
    lastName: string;
    email: string;
    phone: string;
    // address?: Address;
    address?: string;
    city?: string;
    country?: string;
    zipCode?: string;
    birthDate: string;
    createdAt: string;
    updatedAt?: string;
}

interface Form {
    id: string;
    title: string;
    description: string;
    sections: Section[];
}

interface Section {
    id: string;
    formId: string;
    title: string;
    subtitle: string;
    orderIndex: number;
    question?: Question[];
}

interface Illustration {
    name: string;
    source: string;
}

interface Question {
    id: string;
    questionText: null | string;
    placeholder: null | string;
    contentTooltip: null | string;
    defaultValue: string;
    type?: "text" | "number" | "date" | "email" | "textarea" | "checkbox" | "radio" | "select";
    disabled: boolean;
    optional: boolean;
    // dependencyConnector: string;
    // dependencies: dependency[];
    orderIndex: number;
}

interface ServiceForm {
    id: string;
    formId: string;
    serviceId: string;
}

enum TypeDict {
    SINGLE_PAGE = "SINGLE_PAGE",
    EACH_PAGE = "EACH_PAGE",
}

interface MasterContainerOnly {
    sectionIndex: number;
    currentIndex: number;
    id?: string;
    currentId?: string;
    onContinueCurrentIndex: () => void;
    onBackCurrentIndex: () => void;
    // enumContainer: ContainerEnum;
    typeContainer: TypeDict;
}

// una pregunta esta dentro de una
