import { Box } from '@mui/material'
import { useState } from 'react'
import { LoadingSpinner } from '../../customcomponents'
import BusinessDialog from '../dialog/BusinessDialog'
import BusinessItem from '../item'
import styles from './index.module.css'

const BusinessList = ({ data }) => {
    // const dispatch = useDispatch<AppDispatch>();
    // const [business, setBusiness] = useState("");
    if (!data){
        return (
            <LoadingSpinner/>
        )
    }
    return (
        <Box className={styles.business__list}>
            {data.map((business: any) => {
                return (
                    <Box className={styles.business__item} key={business.publicId}>
                        <BusinessItem data={business}/>
                    </Box>
                )
            })}
        </Box>
    )
}

export default BusinessList
