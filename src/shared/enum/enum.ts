//Order status retrieved from https://get.ordering.help/reference/orders-model

export enum OrderEnum {
    PENDING = 0,
    COMPLETED = 1,
    REJECTED = 2,
    PREPARATION_COMPLETED = 4,
    REJECTED_BY_BUSINESS = 5,
    ACCEPTED_BY_BUSINESS = 7,
    ACCEPTED_BY_DRIVER =8,
    PICK_UP_COMPLETED_BY_DRIVER = 9,
    PICK_UP_FAILED_BY_DRIVER = 10,
}

export enum DeliveryEnum {
    DELIVERY = 1,
    PICK_UP = 2,
    EATIN = 3,
    CURBSIDE = 4,
    DRIVER_THRU = 5,
}

export enum RolesEnum {
    ADMINISTRATOR = 0,
    CITY_MANAGER = 1,
    BUSSINESS_OWNER = 2,
    CUSTOMER = 3,
    DRIVER = 4,
    DRIVER_MANAGER = 5,
}
