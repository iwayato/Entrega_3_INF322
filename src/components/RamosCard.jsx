import {
    Box,
    Text,
    Button,
    Center,
    VStack
} from '@chakra-ui/react'

import {
    AttachmentIcon,
    CheckIcon,
    ChatIcon
} from '@chakra-ui/icons'

const RamosCard = (props) => {
    return (
        <Box bg='gray.400' borderRadius={8} p={5}>
            <Center>
                <VStack spacing={3} w='100%'>
                    <Text as="b" fontSize="xl" color="black">
                        {props.sigla + " " + "-" + " " + props.nombre}
                    </Text>
                    {
                        [
                            ["Contenido", <AttachmentIcon/>], 
                            ["Calificaciones", <CheckIcon/>], 
                            ["Foro", <ChatIcon/>]].map((item, index) => {
                            return (
                                <Button w='80%' key={index} rightIcon={item[1]}>
                                    {item[0]}
                                </Button>)
                        })
                    }
                </VStack>
            </Center>
        </Box>
    )
}

export default RamosCard;