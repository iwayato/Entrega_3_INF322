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
import { Link } from 'react-router-dom'

const RamosCard = ({sigla, nombre}) => {
    return (
        <Box bg='gray.400' borderRadius={8} p={5}>
            <Center>
                <VStack spacing={3} w='100%'>
                    <Text as="b" fontSize="xl" color="black">
                        {sigla + " " + "-" + " " + nombre}
                    </Text>
                    {
                        [["Contenido", <AttachmentIcon/>], 
                         ["Calificaciones", <CheckIcon/>], 
                         ["Foro", <ChatIcon/>]].map((item, index) => {
                        return (
                            <Box w='70%' key={index}>
                                <Link 
                                    to = {item[0] + "/" + sigla + "-" + nombre}
                                    state = {{sigla: sigla, nombre: nombre}}>
                                    <Button w="100%" rightIcon={item[1]}>
                                        {item[0]}
                                    </Button>
                                </Link>
                            </Box>
                        )})
                    }
                </VStack>
            </Center>
        </Box>
    )
}

export default RamosCard;