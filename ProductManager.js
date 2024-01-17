const fs = require("fs")

class ProductManager {
  constructor() {
    this.path = "./Products.json"
    this.products = []
    this.readJson()
  }

  async readJson() {
    try {
      fs.promises.readFile(this.path, "utf8").then((data) => {
        console.log(`JSON ${this.path} leido correctamente`)
        this.products = JSON.parse(data) || []
        console.log("los productos son ", this.products)
      });
    } catch (err) {
      console.error(err);
    }
  }

  getProducts() {
    this.readJson();
    return this.products;
  }

  getProductById(pid) {
    this.readJson();
    return this.products.find((prod) => prod.id === pid) || "Not Found";
  }
}
module.exports = ProductManager;
