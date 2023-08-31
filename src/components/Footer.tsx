import { HStack, Link } from "@chakra-ui/react";

export function Footer(): JSX.Element {
    return (
        <HStack spacing="24px" justify="space-evenly">
            <div>
                <Link
                    href="https://github.com/Julieta-Sanguedolce/frontend-gestion-dental"
                    isExternal
                >
                    Frontend Repo
                </Link>
            </div>
            <div>
                <Link
                    href="https://github.com/Julieta-Sanguedolce/backend-gestion-dental"
                    isExternal
                >
                    Backend Repo
                </Link>
            </div>
        </HStack>
    );
}
