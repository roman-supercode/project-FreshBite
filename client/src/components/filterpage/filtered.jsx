import { useLocation } from 'react-router-dom';
import FilterCard from '../filtercards/FilterCard';
import Nomatch from './Nomatch';
import FetchError from './FetchError';

import './filtered.css';

const Filtered = () => {




    const location = useLocation();
    console.log(location.state);

    return (
        <main>
            {location.state.length === 0 && <Nomatch />}
            {!location.state && <FetchError />}
            {location.state &&
                <div className='filtered-container' >
                    {location.state.map((item, index) => {
                        return (
                            <div key={index} >
                                <FilterCard item={item} />
                            </div>
                        );
                    })
                    }
                </div>}
        </main>
    );
};

export default Filtered;