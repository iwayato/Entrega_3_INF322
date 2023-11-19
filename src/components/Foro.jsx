import { 
    useLocation 
} from 'react-router-dom';
import NavigationMenu from './NavigationMenu';

const Foro = () => {
    let state = useLocation();

    const Foro = () => {
        return (
            <div>
                FORO
            </div>
        )
    }

    return(
        <NavigationMenu
            sigla={state.state.sigla}
            nombre={state.state.nombre}
            tipo={"Foro"}
            componente={Foro}
        />
    )
}

export default Foro;