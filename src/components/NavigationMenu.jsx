import {
    Grid,
    GridItem,
    Box,
    Flex,
    Text,
    HStack,
    Avatar,
    VStack,
    Button
} from '@chakra-ui/react'
import { faker } from '@faker-js/faker';
import { BellIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const NavigationMenu = ({ sigla, nombre, tipo, componente: CustomComponent }) => {
    return (
        <Grid
            templateAreas={`"header header" "nav main"`}
            gridTemplateRows={'90px 1fr'}
            gridTemplateColumns={'200px 1fr'}
            h='100vh'>

            <GridItem area={'header'}>
                <Box h='90px' bg='#003c6b'>
                    <Flex height="90px" align="center" pl={5} pr={5} justifyContent="space-between">
                        <Text as="b" fontSize="4xl" color="white">Página principal {'>'} {sigla + "-" + nombre} {'>'} {tipo}</Text>
                        <HStack>
                            <BellIcon boxSize={6} color="white" />
                            <Text color="white" fontSize="lg" pr={5} pl={5}>{faker.person.fullName()}</Text>
                            <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                        </HStack>
                    </Flex>
                </Box>
            </GridItem>

            <GridItem pt={2} bg='#003c6b' area={'nav'}>
                <VStack spacing={5}>
                    <Link to={"/"}>
                        <Button w="160px">
                            Página principal
                        </Button>
                    </Link>
                    <Link to={"/Contenido/" + sigla + "-" + nombre} state = {{sigla: sigla, nombre: nombre}}>
                        <Button w="160px">
                            Contenido
                        </Button>
                    </Link>
                    <Link to={"/Calificaciones/" + sigla + "-" + nombre} state = {{sigla: sigla, nombre: nombre}}>
                        <Button w="160px">
                            Calificaciones
                        </Button>
                    </Link>
                    <Link to={"/Foro/" + sigla + "-" + nombre} state = {{sigla: sigla, nombre: nombre}}>
                        <Button w="160px">
                            Foro
                        </Button>
                    </Link>
                </VStack>

            </GridItem>

            <GridItem pl='2' bg='white' area={'main'} overflow="auto">
                <CustomComponent/>
            </GridItem>
        </Grid>
    )
}

export default NavigationMenu;