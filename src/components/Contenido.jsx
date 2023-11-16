import { useLocation } from 'react-router-dom';

const Contenido = () => {
    const location = useLocation();
    const receivedData = location.state;
    return(
        <div>
            {"Contenido" + receivedData?.nombreRamo}
        </div>
    )
}

export default Contenido;