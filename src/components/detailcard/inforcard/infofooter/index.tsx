import { Box, Button, Input, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { OrderEnum } from '../../../../shared/enum/enum'
import { DetailFooterProps } from '../../../../shared/interfaces/props.interface'
import { FactoryButton } from '../../../factory'
import { DetailInfoPendingFooter, DetailInfoReadyFooter } from '../../../buttonfooters/detail'
import DialogAlert from '../../../dialog'
import styles from './index.module.css'

export default function InfoFooter({
    timeStamp,
    orderStatus,
    deliveryType,
    orderId,
}: DetailFooterProps) {
    let ButtonFooter = <></>
    const [open, setOpen] = useState(false)
    const acceptHandler = () => {
        setOpen(true)
    }

    const acceptDialogCloseHandler = () => {
        setOpen(false)
    }
    switch (orderStatus) {
        case OrderEnum.ACCEPTED_BY_DRIVER:
            ButtonFooter = (
                <Box className={styles.detail_footer_container}>
                    <DetailInfoReadyFooter
                        timeStamp={timeStamp}
                        deliveryType={deliveryType}
                        orderStatus={orderStatus}
                        onOpen={acceptHandler}
                        orderId={orderId}
                    />
                </Box>
            )
            break
        case OrderEnum.PENDING:
            ButtonFooter = (
                <Box className={styles.detail_footer_container}>
                    <DetailInfoPendingFooter
                        timeStamp={timeStamp}
                        deliveryType={deliveryType}
                        orderStatus={orderStatus}
                        onOpen={acceptHandler}
                        orderId={orderId}
                    />
                </Box>
            )
            break
        case OrderEnum.COMPLETED:
            ButtonFooter = (
                <Box className={styles.detail_footer_container}>
                    <DetailInfoReadyFooter
                        timeStamp={timeStamp}
                        deliveryType={deliveryType}
                        orderStatus={orderStatus}
                        onOpen={acceptHandler}
                        orderId={orderId}
                    />
                </Box>
            )
            break
        default:
            ButtonFooter = (
                <Box className={styles.detail_footer_container}>
                    <div>No footer</div>
                </Box>
            )
    }
    return <>{ButtonFooter}</>
}
