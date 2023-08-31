import { Button } from "@chakra-ui/react";
import { Category } from "../types";

interface NavButtonProps {
    category: Category;
    setPageToRender: (nb: number) => void;
}
export function NavButton({
    category,
    setPageToRender,
}: NavButtonProps): JSX.Element {
    const handleSelectCategory = () => setPageToRender(category.id);

    return (
        <Button colorScheme="whiteAlpha" onClick={handleSelectCategory}>
            {category.title}
        </Button>
    );
}
