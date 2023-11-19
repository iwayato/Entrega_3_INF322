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
import { FaTag } from 'react-icons/fa';
import NavigationMenu from './NavigationMenu';
import CrearPost from './CrearPost';
import { useState } from 'react';

const Foro = () => {
    let state = useLocation();
    
    const [posts, setPosts] = useState([
        {
            autor: "Eddie Osinski",
            post: "defaeco adeo ullus cervus quibusdam atque vesica acquiro maiores beatae",
            fecha: "2023-11-18",
            etiquetas: ["Consulta", "Certamen"]
        },
        {
            autor: "George Stanton",
            post: "adstringo repellendus aperte depraedor tertius suppono valetudo",
            fecha: "2023-11-12",
            etiquetas: ["Ayuda", "Ayudantía"]
        }
    ]);

    const addPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const Foro = () => {
        return (
            <VStack w="100%" p={8}>
                <CrearPost addPost={addPost}/>
                <Table variant="striped" colorScheme="gray">
                    <Thead>
                        <Tr>
                            <Th>Autor</Th>
                            <Th>Post</Th>
                            <Th>Fecha de Creación</Th>
                            <Th>Etiquetas</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            posts.map((post, index) => (
                                <Tr key={index}>
                                    <Td>
                                        <HStack>
                                            <Avatar size="sm" mr={2} />
                                            <Text>{post.autor}</Text>
                                        </HStack>
                                    </Td>
                                    <Td w='45%'>{post.post}</Td>
                                    <Td>{post.fecha}</Td>
                                    <Td>
                                        {post.etiquetas.map((tag, index) => (
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
                            ))
                        }
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