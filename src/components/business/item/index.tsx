import { Avatar, Card, CardActionArea, CardHeader } from '@mui/material'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../store'
import { setPreferenceBusiness } from '../../../store/business-slice'

const BusinessItem = ({ data }) => {
    const dispatch = useDispatch<AppDispatch>()
    return (
        <Card
            sx={{
                backgroundColor: '	#696969',
                boxShadow: '10px 5px 5px #F8F8F8',
                ':active': {
                    backgroundColor: '#888888',
                },
                color: 'white',
            }}
            onClick={() => dispatch(setPreferenceBusiness(data))}
        >
            <CardActionArea>
                <CardHeader title={data.name} />
            </CardActionArea>
        </Card>
    )
}

export default BusinessItem
