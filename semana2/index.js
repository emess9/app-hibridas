// importamos el módulo

const { error } = require('console');
const { ProductManger } = require('./ProductManager.js');

// Generar ids Random
const id = crypto.randomUUID();
const admin =  new ProductManger();

// admin.addProduct({id, name: 'Celu', price: 2344})
// admin.addProduct({id: 2, name: 'Mouse', price: 400})

// try {
//     admin.addProduct({id:1, name: 'Celu', price: 2344})
    
// } catch (error) {
//     console.error(error)
// } finally{
//     admin.addProduct({id: 2, name: 'Mouse', price: 400})
// }

admin.addProduct({id, name: 'Celu', price: 2344}).then (rep => {
    console.log(rep)
}).catch (error => {
    console.error(error)
})





console.log(ProductManger)