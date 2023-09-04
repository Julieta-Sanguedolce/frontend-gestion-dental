import { useEffect, useState } from "react";
import { Customer, NewPatient } from "../../types";
import { baseURL } from "../App";
import axios from "axios";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import { PatientsTableRow } from "./PatientsTableRow";

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

export function PatientsTable(): JSX.Element {
    const [listOfPatients, setListOfPatients] = useState<Customer[]>([]);
    const [aux, setAux] = useState(0);

    async function fetchPatientList() {
        const response = await axios.get(baseURL + "/customers");
        const patientList = await response.data;
        setListOfPatients(patientList);
    }

    useEffect(() => {
        fetchPatientList();
    }, [aux]);

    const patientsTableRows = listOfPatients.map((eachPatient) => (
        <PatientsTableRow
            key={eachPatient.client_id}
            patient={eachPatient}
            aux={aux}
            setAux={setAux}
        />
    ));

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
                <Tbody>{patientsTableRows}</Tbody>
            </Table>
        </TableContainer>
    );
}
