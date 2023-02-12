import { Url } from 'url'

export interface Summary {
    delivery_price: number
    tax: number
    total: number
}

export interface FilterQuery {
    query: string
    paramsQuery: string[] | string
}

export interface UpdateOrderData {
  orderId: number,
  newPrepTime: number,
  orderStatus: number
}

export interface Item {
    id: number
    quantity: number
    name: string
}

export interface FetchOrderError {
    message: string
}
export interface OrderState {
    orders: Order[]
    loading: boolean
    init: boolean
    error: string | null
}

export interface Customer {
    id: number
    name: string
    lastName: string
    email: string
    address: string
    ordersCount: number
}

export interface ProductItemOptions {
    id: number
    name: string
    price: number
    position: string
    quantity: number
}
export interface ProductItem {
    id: number
    name: string
    logo?: Url
    allow_suboption_quantity?: boolean
    with_half_option?: false
    limit_suboptions_by_max?: false
    options?: ProductItemOptions[]
    quantity: number
    comment: string | null
}

export interface Order {
    id: number
    status: number
    summary: Summary
    customer: Customer
    products: ProductItem[]
    preparedIn: number
    deliveryType: number
    createdAt: string
}
