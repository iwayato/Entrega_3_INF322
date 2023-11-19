import {
    HStack,
    Button,
    Textarea,
    useToast
} from '@chakra-ui/react';
import { useState } from 'react';
import { faker } from '@faker-js/faker';

const CrearPost = ({ addPost }) => {
    const toast = useToast()
    const [postText, setPostText] = useState('')
    const [labels, setLabels] = useState('')
    const postTextHandler = (e) => { setPostText(e.target.value) }
    const labelsHandler = (e) => { setLabels(e.target.value) }
    const addPostHandler = () => {
        if (postText === '' || labels === '') {
            toast({
                title: 'Debes completar los campos',
                position: 'top',
                status: 'error',
                duration: 4000,
                isClosable: false,
            })
        }
        else (
            addPost(
                {
                    autor: faker.person.fullName(),
                    post: postText,
                    fecha: faker.date.recent({ days: 1 }).toISOString().split("T")[0],
                    etiquetas: labels.split(',')
                })
        )
    }

    return (
        <HStack w="100%" p={5}>
            <Textarea
                value={postText}
                onChange={postTextHandler}
                placeholder='Escribe acá el contenido de tu publicación'>
            </Textarea>
            <Textarea
                value={labels}
                onChange={labelsHandler}
                placeholder='Indica las etiquetas, separadas por comas'>
            </Textarea>
            <Button
                w="20%"
                onClick={addPostHandler}
                bg="#003c6b"
                color="white">
                Crear post
            </Button>
        </HStack>
    )
}

export default CrearPost;