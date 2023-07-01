import { getData } from '../helpers/getData.js'
import { db } from './config.js'
import { addDoc, collection } from 'firebase/firestore'

// const data = PRODUCTS.map((item) => {
//     delete item.id
//     return item
// })


export async function backupData(){
    const products = await getData()
    const productosRef = collection(db, 'products')

    products.forEach((item) => {
        addDoc(productosRef, item)
})

}

backupData()



