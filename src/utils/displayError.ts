export const displayError = (error: any) => {
    if (error.response) {
        console.log(error.response.data.result[0])
        return error.response.data.result[0]
    } 
    else {
        console.log(error)
        throw new Error(error)
    }
}