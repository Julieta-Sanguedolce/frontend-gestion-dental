import { Stack } from "@chakra-ui/react";
import categories from "../categories.json";
import { Category } from "../types";
import { ClassCard } from "./ClassCard";

interface BodyProps {
    setPageToRender: (nb: number) => void;
}

export function Body({ setPageToRender }: BodyProps): JSX.Element {
    const categoriesList: Category[] = categories;

    return (
        <Stack direction={["column", "row"]} spacing="25px">
            {categoriesList.map((cl) => (
                <ClassCard
                    key={cl.id}
                    category={cl}
                    setPageToRender={setPageToRender}
                />
            ))}
        </Stack>
    );
}
