import {
    useLocation
} from 'react-router-dom';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Avatar,
    Text,
    VStack,
    Tag,
    TagLabel,
    TagLeftIcon,
    HStack
} from '@chakra-ui/react';
import { faker } from '@faker-js/faker';
import { FaTag } from 'react-icons/fa';
import NavigationMenu from './NavigationMenu';

const Foro = () => {
    let state = useLocation();

    const fakePost = Array.from({ length: 15 }, (_, index) => (
        <Tr key={index}>
            <Td>
                <HStack>
                    <Avatar size="sm" mr={2}/>
                    <Text>{faker.person.fullName()}</Text>
                </HStack>
            </Td>
            <Td>{faker.lorem.words(3)}</Td>
            <Td>{faker.date.recent({ days: 60 }).toISOString().split("T")[0]}</Td>
            <Td>
                {[faker.word.noun(), faker.word.noun()].map((tag, index) => (
                    <Tag
                        key={index}
                        size="sm"
                        variant="solid"
                        colorScheme="teal"
                        mr="1">
                        <TagLeftIcon as={FaTag} />
                        <TagLabel>{tag}</TagLabel>
                    </Tag>
                ))}
            </Td>
        </Tr>
    ));

    const Foro = () => {
        return (
            <VStack w="100%" p={8}>
                <Table variant="striped" colorScheme="gray">
                    <Thead>
                        <Tr>
                            <Th>Nombre</Th>
                            <Th>Título</Th>
                            <Th>Fecha de Creación</Th>
                            <Th>Etiquetas</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {fakePost}
                    </Tbody>
                </Table>
            </VStack>
        );
    }

    return (
        <NavigationMenu
            sigla={state.state.sigla}
            nombre={state.state.nombre}
            tipo={"Foro"}
            componente={Foro}
        />
    )
}

export default Foro;