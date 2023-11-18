import {
    Grid,
    GridItem,
    Box,
    Flex,
    Text,
    HStack,
    Avatar
} from '@chakra-ui/react'
import { BellIcon } from '@chakra-ui/icons'

const NavigationMenu = ({ sigla, nombre, tipo}) => {
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
                            <Text color="white" fontSize="lg" pr={5} pl={5}>Segun Adebayo</Text>
                            <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                        </HStack>
                    </Flex>
                </Box>
            </GridItem>

            <GridItem pl='2' bg='pink.300' area={'nav'}>
                Nav
            </GridItem>

            <GridItem pl='2' bg='green.300' area={'main'}>
                Main
            </GridItem>
        </Grid>
    )
}

export default NavigationMenu;