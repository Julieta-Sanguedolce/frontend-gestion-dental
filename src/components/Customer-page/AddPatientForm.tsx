import {
    Button,
    ButtonGroup,
    FormControl,
    FormLabel,
    Input,
    Select,
} from "@chakra-ui/react";
import axios from "axios";
import { baseURL } from "../App";
import { useState } from "react";
import { NewPatient } from "../../types";
import { initialPatient } from "./PatientsTable";

interface PatientFormProps {
    displayNewPatientForm: boolean;
    setDisplayNewPatientForm: (b: boolean) => void;
}

export function AddPatientForm({
    displayNewPatientForm,
    setDisplayNewPatientForm,
}: PatientFormProps): JSX.Element {
    const [newPatient, setNewPatient] = useState<NewPatient>(initialPatient);

    const handleChangeOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewPatient({
            ...newPatient,
            [name]: value,
        });
    };

    async function handleSubmitNewPatient() {
        await axios.post(baseURL + "/customers", newPatient);
        setNewPatient(initialPatient);
        alert("New patient added");
        setDisplayNewPatientForm(!displayNewPatientForm);
    }

    const handleCancelClick = () =>
        setDisplayNewPatientForm(!displayNewPatientForm);

    return (
        <div>
            <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input
                    type="text"
                    placeholder="First name"
                    name="first_name"
                    value={newPatient.first_name}
                    onChange={handleChangeOnInput}
                />
                <FormLabel>Last Name</FormLabel>
                <Input
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
                    value={newPatient.last_name}
                    onChange={handleChangeOnInput}
                />
                <FormLabel>Email</FormLabel>
                <Input
                    type="text"
                    placeholder="johnDoe@example.com"
                    name="email"
                    value={newPatient.email}
                    onChange={handleChangeOnInput}
                />
                <FormLabel>Phone number</FormLabel>
                <Input
                    type="text"
                    placeholder="555-555-555"
                    name="phone"
                    value={newPatient.phone}
                    onChange={handleChangeOnInput}
                />
                <FormLabel>Address</FormLabel>
                <Input
                    type="text"
                    placeholder="123 Example st."
                    name="address"
                    value={newPatient.address}
                    onChange={handleChangeOnInput}
                />
                <FormLabel>Country</FormLabel>
                <Select
                    placeholder="Select country"
                    name="country"
                    value={newPatient.country}
                    onChange={(e) =>
                        setNewPatient({
                            ...newPatient,
                            country: e.target.value,
                        })
                    }
                >
                    <option value="Argentina">Argentina</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Chile">Chile</option>
                    <option value="Peru">Peru</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Uruguay">Uruguay</option>
                </Select>
                <FormLabel>City</FormLabel>
                <Input
                    type="text"
                    placeholder="Springfield"
                    name="city"
                    value={newPatient.city}
                    onChange={handleChangeOnInput}
                />
                <FormLabel>Date of Birth</FormLabel>
                <Input
                    type="date"
                    placeholder="Date of birth"
                    name="date_of_birth"
                    value={newPatient.date_of_birth}
                    onChange={handleChangeOnInput}
                />
                <FormLabel>Last date of visit</FormLabel>
                <Input
                    type="date"
                    placeholder="Last date of visit"
                    name="last_date_of_visit"
                    value={newPatient.last_date_of_visit}
                    onChange={handleChangeOnInput}
                />
                <ButtonGroup margin="1rem">
                    <Button
                        colorScheme="green"
                        type="submit"
                        onClick={handleSubmitNewPatient}
                    >
                        Submit
                    </Button>
                    <Button colorScheme="red" onClick={handleCancelClick}>
                        Cancel
                    </Button>
                </ButtonGroup>
            </FormControl>
        </div>
    );
}
