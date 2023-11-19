import { 
    useLocation 
} from 'react-router-dom';
import NavigationMenu from './NavigationMenu';

const Calificaciones = () => {
    let state = useLocation();
    return(
        <NavigationMenu
            sigla={state.state.sigla}
            nombre={state.state.nombre}
            tipo={"Calificaciones"}/>
    )
}

export default Calificaciones;