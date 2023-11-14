import {
    SimpleGrid
} from '@chakra-ui/react'
import RamosCard from './RamosCard'

const RamosGrid = () => {
    return (
        <SimpleGrid columns={3} spacing={10} m={10}>
            <RamosCard sigla="INF322" nombre="Diseño de interfaces usuarias"></RamosCard>
            <RamosCard sigla="MAT024" nombre="Matemáticas 4"></RamosCard>
            <RamosCard sigla="INF325" nombre="Bases de datos avanzadas"></RamosCard>
            <RamosCard sigla="INF225" nombre="Ingeniería de software"></RamosCard>
            <RamosCard sigla="ILN230" nombre="Ingeniería económica"></RamosCard>
            <RamosCard sigla="ICN345" nombre="Administración de la producción"></RamosCard>
        </SimpleGrid>
    )
}

export default RamosGrid