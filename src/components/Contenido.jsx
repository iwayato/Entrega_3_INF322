import { 
    useLocation 
} from 'react-router-dom';
import NavigationMenu from './NavigationMenu';

const Contenido = () => {
    let state = useLocation();
    return(
        <NavigationMenu
            sigla={state.state.sigla}
            nombre={state.state.nombre}
            tipo={"Contenido"}/>
    )
}

export default Contenido;