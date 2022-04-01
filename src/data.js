function generatorList() {
    let list = [];
    for (let i = 0; i <= 1000; i++)list.push("Product : " + i);
    return list;

}
const dummyProducts = generatorList();

export function filterProducts(filterTerm) {
    if (!filterTerm) {
        return dummyProducts;
    }
    return dummyProducts.filter((product) => product.includes(filterTerm));
}