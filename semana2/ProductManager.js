const { error } = require('console');
const fs = require('fs/promises');
const path = './products.json';

class ProductManger{
    products = [];
    constructor(products=[]){
        this.products = products
    }
    // { name: 'TV 32', description: 'TV LG 32', image: 'foto.jpg', price: 54000}
     async addProduct(product){
        // debería validar los campos
        // formateamos los datos
        const data = JSON.stringify( product, null, 2);
        try {
            const res = await fs.writeFile(path, data);

            this.products.push( product);
        } catch (error) {
            console.error(error)
        }


        

            // fs.writeFile(path, data).then( resp => {
            //     console.log(resp)
            // }).catch (error =>{
            //     console.error(error);
            // })
            // fs.writeFile(path, data, function(){

            // })
            // this.products.push( product);
    }



    async getProducts(){
        try {
            const data = await fs.readFile(path);
            const JSON = JSON.parse(data);
            return JSON
        } catch (error) {
            console.error(error);
        }
    }

    getProductById(id){
        const product = this.products.find(  item => item.id == id  );
        return product ? product : {};
    }
}

const key = '1234';

module.exports = { ProductManger, key };
/* module.exports = { 
                    ProductManger: ProductManger, 
                    key: key  
                }; */

