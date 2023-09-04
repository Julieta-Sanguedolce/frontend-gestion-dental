import { Box, Button, VStack } from "@chakra-ui/react";
import categories from "../categories.json";
import { Category } from "../types";

interface NavBarProps {
    setPageToRender: (nb: number) => void;
}

export function NavBar({ setPageToRender }: NavBarProps): JSX.Element {
    const categoriesList: Category[] = categories;
    const handleSelectHome = () => setPageToRender(0);

    function handleSelectCategory(id: number) {
        setPageToRender(id);
    }

    return (
        <VStack spacing={4} align="stretch">
            {categoriesList.map((cl) => (
                <Button
                    key={cl.id}
                    colorScheme="whiteAlpha"
                    onClick={() => handleSelectCategory(cl.id)}
                >
                    {cl.title}
                </Button>
            ))}
            <Box
                position="relative"
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
            >
                <Button colorScheme="blackAlpha" onClick={handleSelectHome}>
                    🏠 Home
                </Button>
            </Box>
        </VStack>
    );
}
