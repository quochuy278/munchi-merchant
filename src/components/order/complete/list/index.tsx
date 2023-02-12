import styles from './index.module.css'

import React from 'react'
import PropTypes from 'prop-types'
import OrderCompleteCard from '../card'
import { Box, Typography } from '@mui/material'
import { OrderDataProps } from '../../../../shared/interfaces/props.interface'
import { Order } from '../../../../shared/interfaces/order.interface'

const OrderCompleteList = ({ ordersData }: OrderDataProps) => {
    return (
        <Box
            display="grid"
            className={styles.card__container}
            gridTemplateColumns="repeat(1, 1fr)"
            gap={2}
            paddingX={2}
        >
            {ordersData.length === 0 ? (
                <Box
                    width="100%"
                    height="50vh"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography> No orders for now</Typography>
                </Box>
            ) : (
                <>
                    {ordersData.map((order: Order) => {
                        return <OrderCompleteCard order={order} key={order.id} />
                    })}
                </>
            )}
        </Box>
    )
}

export default OrderCompleteList
