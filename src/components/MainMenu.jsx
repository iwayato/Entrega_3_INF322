import {
    Text,
    VStack,
    Flex,
    Box,
    Avatar,
    HStack
} from '@chakra-ui/react'
import { faker } from '@faker-js/faker';
import { BellIcon } from '@chakra-ui/icons'
import RamosGrid from './RamosGrid';

const MainMenu = () => {
    return (
        <VStack spacing={0} align='stretch'>
            <Box h='90px' bg='#003c6b'>
                <Flex height="90px" align="center" pl={5} pr={5} justifyContent="space-between">
                    <Text as="b" fontSize="4xl" color="white">Bienvenid@s a Aula USM - Página principal</Text>
                    <HStack>
                        <BellIcon boxSize={6} color="white"/>
                        <Text color="white" fontSize="lg" pr={5} pl={5}>{faker.person.fullName()}</Text>
                        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo'/>
                    </HStack>
                </Flex>
            </Box>
            <Box h='calc(100vh - 90px)' bg='white'>
                <RamosGrid></RamosGrid>
            </Box>
        </VStack>
    )
}

export default MainMenu;