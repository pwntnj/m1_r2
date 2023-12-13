function ProductManagement() {
  //add products variable here
  let products = []
  function getAllProducts() {
    return products
  }

  function addProduct(product) {
    products.push(product)
  }

  function searchByName(name) {
    return products.filter((productName) => productName.name.toLowerCase() === name.toLowerCase())
  }

  function searchByPriceRange(minPrice, maxPrice) {
    return products.filter((n) => n.price >= minPrice && n.price <= maxPrice)
  }

  function removeAll() {
    return products.splice(0,products.length)
  }

  return {
    removeAll,
    searchByName,
    searchByPriceRange,
    getAllProducts,
    addProduct
  }
}
module.exports = ProductManagement
const productCatalog = ProductManagement()
