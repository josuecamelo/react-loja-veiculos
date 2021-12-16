import React from 'react'
//import { store, show } from '../../store/actions/vehicles.action'
//import { useDispatch } from 'react-redux'
import './vehicle.css'

export default function VehicleEdit(props) {
    /*const dispatch = useDispatch()    
    const vehicle_id = (props.match.params.id) ? props.match.params.id : null;
    //const data = useSelector(state => state.vehiclesReducer)
    const [loading, setLoading] = useState(true);    

    const [state, setState] = React.useState({
        isLoading: true,
        isLoadingCep: false,
        isDeleted: null,
        redirect: false,
        tips: 0,
        confirmEl: null,
        vehicle_id: (props.match.params.id) ? props.match.params.id : null
    })

    React.useEffect(() => {
        const index = () => {
            if(vehicle_id) {
                dispatch(show(vehicle_id)).then(res => res && setLoading(false) )
            }else{
                dispatch(store()).then(res => res && setLoading(false) )
            }
        }

        index();
    }, [dispatch, vehicle_id])*/

    return (
        <>
           <h1>Sem Edit</h1>
        </>
    )
}