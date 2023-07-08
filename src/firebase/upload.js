
import { db } from './config.js'
import { addDoc, collection } from 'firebase/firestore'
import rawData from '../database/products.json' 

const data = rawData.map((item) => {
    delete item.id
    delete item.code
    return item
})





export async function backupData(){
    
    const productosRef = collection(db, 'productsRJ')

    data.forEach((item) => {
        addDoc(productosRef, item)

})


}

backupData()



