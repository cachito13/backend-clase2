class ProductManager {
    //creacion array vacio
    #products
    
    constructor(){
      
        this.#products = []
    }
    //obtener todos los productos del array
    getProduct = () => {
            return this.#products
    }
    //buscar productos por ID
    getProductById = (id =>{
        const busqueda = this.#products.find(item=>item.id ===id)
        if (!busqueda) return "Error no encontrado"

        else return busqueda
    })

    //genera id a cada producto
    #generateId= ()=> (this.#products.length === 0) ? 1 : this.#products[this.#products.length-1].id +1
    //validacion de productos
    #valid = (title, description, price, code, stock) => 
    (!title || !description || !price || !code || !stock) ? false : true
  
    //buscar repeticion en code
    #findProductByCode = (code) => {
    return this.#products.find(product => product.code === code);
    };


    //crear productos
    addProducts = (title, description, price, code, stock) => {

        if (this.#valid(title, description, price, code, stock)) {
            
            const existingProduct = this.#findProductByCode(code);
            if (existingProduct) {
                console.log(`El producto ${title} con código ${code} ya existe.`);
            } else {
                // Agregar el producto al array con un nuevo id generado automáticamente
                this.#products.push({id: this.#generateId(), title, description, price, code, stock})
            }
        } else {
            console.log(`El producto con código ${code} está incompleto.`);
        }
    }
    

}
//crear un nuevo producto
const productManager = new ProductManager()
productManager.addProducts("campera", "campera de verano", 1000, 001)
productManager.addProducts("remera", "remera de verano", 100, 111,5)
productManager.addProducts("pantalon", "pantalon de verano", 1100, 111,10)
productManager.addProducts("pantalone", "pantalon de invierno", 1100, 115,10)
//mostrar por consola el array
console.log(productManager.getProduct())

console.log(`El producto a buscar es el:`, productManager.getProductById(1));
console.log(`El producto a buscar es el:`, productManager.getProductById(4));
console.log(`El producto a buscar es el:`, productManager.getProductById(1));
console.log(`El producto a buscar es el:`, productManager.getProductById(2));