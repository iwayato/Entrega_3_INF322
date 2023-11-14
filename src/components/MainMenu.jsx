import {
    Text,
    VStack,
    Flex,
    Box
} from '@chakra-ui/react'
import RamosGrid from './RamosGrid';

const MainMenu = () => {
    return (
        <VStack spacing={0} align='stretch'>
            <Box h='90px' bg='#003c6b'>
                <Flex height="90px" align="center" justify="left" pl={5}>
                    <Text as="b" fontSize="4xl" color="white">Bienvenid@s a Aula USM - Página principal</Text>
                </Flex>
            </Box>
            <Box h='calc(100vh - 90px)' bg='white'>
                <RamosGrid></RamosGrid>
            </Box>
        </VStack>
    )
}

export default MainMenu;