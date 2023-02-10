import { useLocation } from 'react-router-dom';

const Filtered = () => {

    const location = useLocation();
    console.log(location.state);

    return (
        <div>filtered</div>
    );
};

export default Filtered;