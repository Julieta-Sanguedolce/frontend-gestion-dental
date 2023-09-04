export interface Category {
    id: number;
    title: string;
    description: string;
    imageLink: string;
    imageDesc: string;
}

export interface Customer {
    client_id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    date_of_birth: string;
    last_date_of_visit: string;
    registration_date: string;
}

export interface NewPatient {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    date_of_birth: string;
    last_date_of_visit: string;
}
