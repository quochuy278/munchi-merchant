import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import { Box, Typography, IconButton } from '@mui/material'
import { FactoryIconInfo } from '../../../factory'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import DiningIcon from '@mui/icons-material/Dining'
import { OrderDataProps } from '../../../../shared/interfaces/props.interface'
import { Order } from '../../../../shared/interfaces/order.interface'
const OrderCompleteCard = ({order}: any) => {
    console.log(order)
    return (
        <Box className={styles.order__complete__card__container}>
            <Typography
                lineHeight="29px"
                fontSize="22px"
                fontWeight={1000}
                textAlign="left"
                fontFamily="DM-Sans-bold"
            >
                # 4215
            </Typography>
            <Typography lineHeight="18px" fontSize="14px" fontWeight={600}>
                {' '}
                Julia K.
            </Typography>
            <Box
                display="flex"
                padding="3px"
                justifyContent="center"
                alignItems="center"
                border="0.5px solid #d7d7d7"
                borderRadius="5px"
            >
                <DiningIcon sx={{ width: '16px', height: '14px', marginX: 0.2 }} />
                <Typography fontSize="10px" lineHeight="13px">
                    Takeaway
                </Typography>
            </Box>
            <Box>
                <Box component="span">
                    <CheckCircleIcon sx={{ width: '50px', height: '50px', color: '#543cef' }} />
                </Box>
            </Box>
        </Box>
    )
}

export default OrderCompleteCard
