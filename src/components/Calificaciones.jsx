import { 
    useLocation 
} from 'react-router-dom';
import NavigationMenu from './NavigationMenu';

const Calificaciones = () => {
    let state = useLocation();

    const Calificaciones = () => {
        return (
            <div>
                CALIFICACIONES
            </div>
        )
    }

    return(
        <NavigationMenu
            sigla={state.state.sigla}
            nombre={state.state.nombre}
            tipo={"Calificaciones"}
            componente={Calificaciones}
        />
    )
}

export default Calificaciones;