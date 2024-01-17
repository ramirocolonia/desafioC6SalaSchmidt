const fs = require("fs");

class ProductManager {
  constructor() {
    this.path = "./Products.json"
    this.products = this.getProducts()
  }

  getProducts() {
    try {
      const data = fs.readFileSync(this.path, "utf8")
      return JSON.parse(data) || []
    } catch (err) {
      console.error(err)
    }
  }

  getProductById(pid) {
    this.getProducts()
    return this.products.find((prod) => prod.id === pid) || "Not Found"
  }

}
module.exports = ProductManager;
