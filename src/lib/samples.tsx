import { v4 as uuidv4 } from "uuid";

export const customerData: Customer[] = [
    {
        id: "m5gr84i9",
        name: "John Doe",
        amount: 316,
        status: "active",
        email: "ken99@yahoo.com",
        phone: "+1 929-555-0198",
        createdAt: "2021-09-01T00:00:00Z",
        updatedAt: "2021-09-01T00:00:00Z",
    },
    {
        id: "3u1reuv4",
        name: "John Doe",
        amount: 242,
        status: "active",
        email: "Abe45@gmail.com",
        phone: "+1 929-555-0198",
        createdAt: "2021-09-01T00:00:00Z",
        updatedAt: "2021-09-01T00:00:00Z",
    },
    {
        id: "derv1ws0",
        name: "John Doe",
        amount: 837,
        status: "inactive",
        email: "Monserrat44@gmail.com",
        phone: "+1 929-555-0198",
        createdAt: "2021-09-01T00:00:00Z",
        updatedAt: "2021-09-01T00:00:00Z",
    },
    {
        id: "5kma53ae",
        name: "John Doe",
        amount: 874,
        status: "active",
        email: "Silas22@gmail.com",
        phone: "+1 929-555-0198",
        createdAt: "2021-09-01T00:00:00Z",
        updatedAt: "2021-09-01T00:00:00Z",
    },
    {
        id: "bhqecj4p",
        name: "John Doe",
        amount: 721,
        status: "active",
        email: "carmella@hotmail.com",
        phone: "+1 929-555-0198",
        createdAt: "2021-09-01T00:00:00Z",
        updatedAt: "2021-09-01T00:00:00Z",
    },
];

export const productsData: Product[] = [
    {
        id: uuidv4(),
        name: "PMU",
        description: "pmu asdf",
        price: 40,
        duration: 90, // typical duration of the service in minutes
        categoryId: "string",
        isActive: true,
    },
    {
        id: uuidv4(),
        name: "Cejas",
        description: "this is for cejas",
        price: 20,
        duration: 90, // typical duration of the service in minutes
        categoryId: "string",
        isActive: true,
    },
    {
        id: uuidv4(),
        name: "Lashes",
        description: "this is for lashes",
        price: 30,
        duration: 90, // typical duration of the service in minutes
        categoryId: "string",
        isActive: true,
    },
    {
        id: uuidv4(),
        name: "Lips",
        description: "this is for lips",
        price: 50,
        duration: 90, // typical duration of the service in minutes
        categoryId: "string",
        isActive: true,
    },
    {
        id: uuidv4(),
        name: "Brows",
        description: "this is for brows",
        price: 40,
        duration: 90, // typical duration of the service in minutes
        categoryId: "string",
        isActive: true,
    },
];

export const categoriesData: Category[] = [
    {
        id: uuidv4(),
        name: "PMU",
        description: "pmu asdf",
        createdAt: "2021-09-01T00:00:00Z",
    },
];
