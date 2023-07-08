import { collection, getDocs,doc, getDoc, deleteDoc, setDoc, updateDoc, query, where, limit} from 'firebase/firestore'
import { db } from '../firebase/config.js'



export class ProductManager {


    constructor() {
        this.db = db
        this.products = []


    }


    // addProduct(title, description,abv,price,stock,category,thumbnail,db){
        
    //     this.loadProducts()
        
    //     let id = null
    //     if(this.products.some((product)=> product.title===title||this.products.some((product)=> product.id===id))){
    //         console.log(title)
    //         throw new Error ('producto ya existe')  
    //     }
        
    //     if(this.products.length > 0){
    //         id = this.products.length + 1
    //         let product = new Product (id, title, description, abv, price, true, stock, category, thumbnail,db)
    //         this.products.push(product)
    //         this.saveProducts()
    
    //     }

    //     if(this.products.length === 0){
    //         id =1
    //         let  product = new Product ( id, title, description,abv, price, true, stock, category, thumbnail,db)
    //         this.products.push(product)    
    //         this.saveProducts()
   
    //     }
    // }

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

    // updateProduct(id, newProduct) {
    //     this.loadProducts()
    //     const indexSearched = this.products.findIndex(product => product.id === id)
    //     if (indexSearched === -1) {
    //         throw new Error('product not found')
    //     }
    //     this.products[indexSearched] = newProduct
    //     this.saveProducts()
    //     return newProduct
    // }

    // deleteProductById(id) {
    //     this.loadProducts()
    //     const indexSearched = this.products.findIndex(p => p.id === id)
        
    //     if (indexSearched === -1) {

    //         throw new Error('product not found')

    //     }else if(indexSearched === this.products[this.products.length-1]) {

    //          this.products.pop()
    //          this.saveProducts()

    //     }else if (indexSearched===0){

    //         this.products.shift()
    //         const idUpdated = this.products.map((p)=> p.id = p.id -1)
    //         this.products = idUpdated
    //         this.saveProducts()

    //     }else{

    //         const [deleted] = this.products.splice(indexSearched, 1)
    //         const idUpdated= this.products.map((p)=> p.id > indexSearched+1 ? p.id = p.id -1: p.id = p.id)
    //         this.products = idUpdated
    //         this.saveProducts()
    //         return deleted
    //     }
        
    // }

    

    // reset() {
    //     this.products= []
    //     this.saveProducts()

    // }
}

export const productManager = new ProductManager()