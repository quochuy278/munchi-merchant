import { Box } from '@mui/material'
import styles from './index.module.css'
import OrderCard from '../card'
import { OrderDataProps } from '../../../shared/interfaces/props.interface'
import Typography from '@mui/material/Typography'
import { Order } from '../../../shared/interfaces/order.interface'

export default function OrderCardList({ ordersData }: OrderDataProps) {
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
                        return <OrderCard order={order} key={order.id}/>
                    })}
                </>
            )}
        </Box>
    )
}
