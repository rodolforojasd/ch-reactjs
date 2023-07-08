import { collection, getDocs,doc, getDoc, deleteDoc, setDoc, updateDoc, query, where, limit} from 'firebase/firestore'
import { db } from '../firebase/config.js'



export class ProductManager {


    constructor() {
        this.db = db
        this.products = []


    }


    

    async getProducts(categoryId) {
       const productsRef = collection(db, "products") 

       
       const q = categoryId
                    ? query(productsRef, where("category", "==", categoryId))
                    :productsRef
        
        return getDocs(q) 
    }
    
    
    getProductById(code) {
        const productsRef = doc(db, "products",code) 
        return getDoc(productsRef)  
    }


}

export const productManager = new ProductManager()