import {
    Card,
    CardBody,
    Image,
    Text,
    Heading,
    Divider,
    CardFooter,
    Stack,
} from "@chakra-ui/react";
import { Category } from "../types";

interface ClassProps {
    category: Category;
    setPageToRender: (nb: number) => void;
}

export function ClassCard({
    category,
    setPageToRender,
}: ClassProps): JSX.Element {
    const handleCardClick = () => setPageToRender(category.id);

    return (
        <Card maxW="sm" onClick={handleCardClick} style={{ cursor: "pointer" }}>
            <CardBody>
                <Image
                    src={category.imageLink}
                    alt={category.imageDesc}
                    borderRadius="lg"
                    boxSize="400px"
                    objectFit="contain"
                />
            </CardBody>
            <Divider />
            <CardFooter height="150">
                <Stack mt="6" spacing="1" objectPosition="top">
                    <Heading size="md">{category.title}</Heading>
                    <Text>{category.description}</Text>
                </Stack>
            </CardFooter>
        </Card>
    );
}
