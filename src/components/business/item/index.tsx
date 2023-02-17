import { Avatar, Card, CardActionArea, CardHeader } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../store'
import {setSelectBusiness } from '../../../store/business-slice'
import BusinessDialog from '../dialog/BusinessDialog'

const BusinessItem = ({ data }) => {
    const dispatch = useDispatch<AppDispatch>()

    return (
        <Card
            sx={{
                backgroundColor: '#696969',
                boxShadow: '10px 5px 5px #F8F8F8',
                ':active': {
                    backgroundColor: '#888888',
                },
                color: 'white',
            }}
            onClick={() => dispatch(setSelectBusiness(data))}
        >
            <CardActionArea
                sx={{
                    '&:focus': {
                        backgroundColor: 'red',
                    },
                }}
            >
                <CardHeader title={data.name} />
            </CardActionArea>
        </Card>
    )
}

export default BusinessItem
