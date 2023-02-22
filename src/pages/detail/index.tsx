import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import DetailContent from '../../components/container/DetailContent'
import { LoadingSpinner } from '../../components/customcomponents'
import InfoCard from '../../components/detailcard/inforcard'
import ItemCard from '../../components/detailcard/itemcard'
import DetailTitle from '../../components/detailcard/title'
import { Order } from '../../shared/interfaces/order.interface'

import { useTypedSelector } from '../../store'
import { selectOrders } from '../../store/order-slice'
import { useGetOrderByIdQuery } from '../../store/services-slice'
import styles from './index.module.css'

export default function DetailPage({ loginData }: any) {
    console.log(loginData)
    const param = useParams()
    const orderId = param.orderId as string
    console.log(orderId)
    const { data, isFetching, isLoading, isError, error } = useGetOrderByIdQuery(orderId)
    console.log(data)
    // const orderId = param.detailId as string //string

    // const orders = useTypedSelector(selectOrders)
    // const detailOrderArray = orders.filter((order: Order) => {
    //     const numberOrderId = parseInt(orderId)
    //     return order.id === numberOrderId
    // })

    // const detailOrder = detailOrderArray[0] as Order

    // const { id } = detailOrder
    const loading = isFetching || isLoading
    return (
        <DetailContent>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <DetailTitle orderId={data.id} />
                    <Box
                        display="grid"
                        gridTemplateColumns="repeat(12, 1fr)"
                        gap={2}
                        className={styles.detail__container}
                    >
                        <ItemCard data={data} />
                        <InfoCard data={data} />
                    </Box>
                </>
            )}
        </DetailContent>
    )
}
