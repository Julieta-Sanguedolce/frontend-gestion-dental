import { Button } from "@chakra-ui/react";
import { PatientsTable } from "./PatientsTable";
import { useState } from "react";
import { AddPatientForm } from "./AddPatientForm";

export function PatientMain(): JSX.Element {
    const [displayNewPatientForm, setDisplayNewPatientForm] =
        useState<boolean>(false);

    const addNewPatient = () =>
        setDisplayNewPatientForm(!displayNewPatientForm);

    return (
        <div className="PatientPage">
            <h1>Patient information page</h1>
            {displayNewPatientForm ? (
                <AddPatientForm
                    displayNewPatientForm={displayNewPatientForm}
                    setDisplayNewPatientForm={setDisplayNewPatientForm}
                />
            ) : (
                <div>
                    <div className="AddPatient">
                        <Button onClick={addNewPatient}>
                            ➕ Add New Patient
                        </Button>
                    </div>
                    <PatientsTable />
                </div>
            )}
        </div>
    );
}
