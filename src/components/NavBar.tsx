import { Box, Button, VStack } from "@chakra-ui/react";
import categories from "../categories.json";
import { Category } from "../types";
import { NavButton } from "./NavButton";

interface NavBarProps {
    setPageToRender: (nb: number) => void;
}

export function NavBar({ setPageToRender }: NavBarProps): JSX.Element {
    const categoriesList: Category[] = categories;
    const handleSelectHome = () => setPageToRender(0);

    return (
        <VStack spacing={4} align="stretch">
            {categoriesList.map((cl) => (
                <NavButton
                    key={cl.id}
                    category={cl}
                    setPageToRender={setPageToRender}
                />
            ))}
            <Box verticalAlign="bottom">
                <Button colorScheme="blackAlpha" onClick={handleSelectHome}>
                    🏠 Home
                </Button>
            </Box>
        </VStack>
    );
}
