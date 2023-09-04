import { useState } from "react";
import { Customer, NewPatient } from "../../types";
import { baseURL } from "../App";
import axios from "axios";
import {
    Tr,
    Td,
    ButtonGroup,
    IconButton,
    Input,
    Select,
} from "@chakra-ui/react";
import {
    ArrowBackIcon,
    CheckIcon,
    DeleteIcon,
    EditIcon,
} from "@chakra-ui/icons";

export const initialPatient: NewPatient = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    date_of_birth: "",
    last_date_of_visit: "",
};

interface PatientsTableRowProps {
    patient: Customer;
    aux: number;
    setAux: (nb: number) => void;
}

export function PatientsTableRow({
    patient,
    aux,
    setAux,
}: PatientsTableRowProps): JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [newPatient, setNewPatient] = useState<NewPatient>(patient);

    const handleChangeOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewPatient({
            ...newPatient,
            [name]: value,
        });
    };
    async function handleConfirmChanges(id: number) {
        await axios.put(baseURL + `/customers/${id}`, newPatient);
        setEditMode(!editMode);
        setAux(aux + 1);
    }

    async function handleDelete(id: number) {
        await axios.delete(baseURL + `/customers/${id}`);
        setEditMode(!editMode);
        setAux(aux + 1);
    }

    function handleEditAndCancel() {
        setEditMode(!editMode);
    }

    return (
        <>
            {editMode ? (
                <Tr>
                    <Td>
                        <Input
                            type="text"
                            placeholder="First name"
                            name="first_name"
                            value={newPatient.first_name}
                            onChange={handleChangeOnInput}
                        />
                    </Td>
                    <Td>
                        <Input
                            type="text"
                            placeholder="Last Name"
                            name="last_name"
                            value={newPatient.last_name}
                            onChange={handleChangeOnInput}
                        />
                    </Td>
                    <Td>
                        <Input
                            type="text"
                            placeholder="johnDoe@example.com"
                            name="email"
                            value={newPatient.email}
                            onChange={handleChangeOnInput}
                        />
                    </Td>
                    <Td>
                        <Input
                            type="text"
                            placeholder="555-555-555"
                            name="phone"
                            value={newPatient.phone}
                            onChange={handleChangeOnInput}
                        />
                    </Td>
                    <Td>
                        <Input
                            type="text"
                            placeholder="123 Example st."
                            name="address"
                            value={newPatient.address}
                            onChange={handleChangeOnInput}
                        />
                    </Td>
                    <Td>
                        <Input
                            type="text"
                            placeholder="Springfield"
                            name="city"
                            value={newPatient.city}
                            onChange={handleChangeOnInput}
                        />
                    </Td>
                    <Td>
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
                            <option value="United Kingdom">
                                United Kingdom
                            </option>
                            <option value="Uruguay">Uruguay</option>
                        </Select>
                    </Td>
                    <Td>
                        <Input
                            type="date"
                            placeholder="Date of birth"
                            name="date_of_birth"
                            value={newPatient.date_of_birth.substring(0, 10)}
                            onChange={handleChangeOnInput}
                        />
                    </Td>
                    <Td>
                        <Input
                            type="date"
                            placeholder="Last date of visit"
                            name="last_date_of_visit"
                            value={newPatient.last_date_of_visit.substring(
                                0,
                                10
                            )}
                            onChange={handleChangeOnInput}
                        />
                    </Td>
                    <Td>
                        <ButtonGroup>
                            <IconButton
                                colorScheme="green"
                                aria-label="Confirm changes"
                                icon={<CheckIcon />}
                                onClick={() =>
                                    handleConfirmChanges(patient.client_id)
                                }
                            />
                            <IconButton
                                colorScheme="yellow"
                                aria-label="cancel editing"
                                icon={<ArrowBackIcon />}
                                onClick={handleEditAndCancel}
                            />
                            <IconButton
                                colorScheme="red"
                                aria-label="delete patient"
                                icon={<DeleteIcon />}
                                onClick={() => handleDelete(patient.client_id)}
                            />
                        </ButtonGroup>
                    </Td>
                </Tr>
            ) : (
                <Tr>
                    <Td>{patient.first_name}</Td>
                    <Td>{patient.last_name}</Td>
                    <Td>{patient.email}</Td>
                    <Td>{patient.phone}</Td>
                    <Td>{patient.address}</Td>
                    <Td>{patient.city}</Td>
                    <Td>{patient.country}</Td>
                    <Td>{patient.date_of_birth.substring(0, 10)}</Td>
                    <Td>{patient.last_date_of_visit.substring(0, 10)}</Td>
                    <Td>
                        <ButtonGroup>
                            <IconButton
                                colorScheme="blue"
                                aria-label="edit patient"
                                icon={<EditIcon />}
                                onClick={handleEditAndCancel}
                            />
                            <IconButton
                                colorScheme="red"
                                aria-label="delete patient"
                                icon={<DeleteIcon />}
                                onClick={() => handleDelete(patient.client_id)}
                            />
                        </ButtonGroup>
                    </Td>
                </Tr>
            )}
        </>
    );
}
