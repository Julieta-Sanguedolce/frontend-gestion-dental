import { useEffect, useState } from "react";
import { Customer } from "../../types";
import { baseURL } from "../App";
import axios from "axios";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,
    ButtonGroup,
} from "@chakra-ui/react";

export function PatientsTable(): JSX.Element {
    const [listOfPatients, setListOfPatients] = useState<Customer[]>([]);

    async function fetchPatientList() {
        const response = await axios.get(baseURL + "/customers");
        const patientList = await response.data;
        setListOfPatients(patientList);
    }
    console.log(listOfPatients);
    useEffect(() => {
        fetchPatientList();
    }, [listOfPatients]);

    async function handleDelete(id: number) {
        axios.delete(baseURL + `/customers/${id}`);
    }

    return (
        <TableContainer>
            <Table size="sm">
                <Thead>
                    <Tr>
                        <Th>First Name</Th>
                        <Th>Last Name</Th>
                        <Th>Email</Th>
                        <Th>Phone</Th>
                        <Th>Address</Th>
                        <Th>City</Th>
                        <Th>Country</Th>
                        <Th>Date of Birth</Th>
                        <Th>Last date of visit</Th>
                        <Th textAlign="center">Manage</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {listOfPatients.map((patient) => (
                        <Tr key={patient.client_id}>
                            <Td>{patient.first_name}</Td>
                            <Td>{patient.last_name}</Td>
                            <Td>{patient.email}</Td>
                            <Td>{patient.phone}</Td>
                            <Td>{patient.address}</Td>
                            <Td>{patient.city}</Td>
                            <Td>{patient.country}</Td>
                            <Td>{patient.date_of_birth.substring(0, 10)}</Td>
                            <Td>
                                {patient.last_date_of_visit.substring(0, 10)}
                            </Td>
                            <Td>
                                <ButtonGroup>
                                    <Button>✏️</Button>
                                    <Button
                                        onClick={() =>
                                            handleDelete(patient.client_id)
                                        }
                                    >
                                        🗑️
                                    </Button>
                                </ButtonGroup>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
}
