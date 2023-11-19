import { 
    useLocation 
} from 'react-router-dom';
import NavigationMenu from './NavigationMenu';

const Contenido = () => {
    let state = useLocation();

    const Contenido = () => {
        return (
            <div>
                CONTENIDO
            </div>
        )
    }

    return(
        <NavigationMenu
            sigla={state.state.sigla}
            nombre={state.state.nombre}
            tipo={"Contenido"}
            componente={Contenido}
        />
    )
}

export default Contenido;