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
    TableContainer,
} from '@chakra-ui/react'
import NavigationMenu from './NavigationMenu';
import { faker } from '@faker-js/faker';

const Calificaciones = () => {
    let state = useLocation();

    const componentsArray = Array.from({ length: 15 }, (_, index) => (
        <Tr key={index}>
            <Td>{faker.lorem.words(1)}</Td>
            <Td>{faker.date.recent({ days: 60 }).toISOString().split("T")[0]}</Td>
            <Td>{faker.number.int({ min: 0, max: 35 }) + "%"}</Td>
            <Td>{faker.number.int({ min: 0, max: 100 })}</Td>
            <Td>{faker.lorem.sentence(5)}</Td>
        </Tr>
    ));

    const Calificaciones = () => {
        return (
            <TableContainer p={8}>
                <Table size='lg'>
                    <Thead>
                        <Tr>
                            <Th>Evaluación</Th>
                            <Th>Fecha</Th>
                            <Th>Ponderación</Th>
                            <Th>Nota</Th>
                            <Th>Retroalimentación</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {componentsArray}
                    </Tbody>
                </Table>
            </TableContainer>
        )
    }

    return(
        <NavigationMenu
            sigla={state.state.sigla}
            nombre={state.state.nombre}
            tipo={"Calificaciones"}
            componente={Calificaciones}
        />
    )
}

export default Calificaciones;