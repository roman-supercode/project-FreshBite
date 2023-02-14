import { useLocation } from 'react-router-dom';
import FilterCard from '../filtercards/FilterCard';

const Filtered = () => {

    const location = useLocation();
    //console.log(location);

    return (
        <div>
            {
                location.state.map((item, index) => {
                    return (
                        <div key={index} >
                            <FilterCard item={item} />
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Filtered;