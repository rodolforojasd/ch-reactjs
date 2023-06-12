
import data from '../database/products.json'

export const getData = () => {
    return new Promise((resolve, reject) => {
        // cuerpo de la promesa
        setTimeout(() => {
            resolve(data)
        }, 500)
    })
}

export const getDataById = (id) => {
    
    return new Promise((resolve, reject) => {
        // cuerpo de la promesa
        setTimeout(() => {
            resolve(data.find(prod => prod.id === id))
        }, 500)
    })
}



