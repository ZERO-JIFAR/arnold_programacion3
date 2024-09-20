// traer productos localStorage
export const handleGetProductLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    if (products) {
        return products;
    } else {
        return [];
    }
};

// guardarEn localStorage
//recibir un producto
export const setInLocalStorage = (productIn) => {
    if (productIn){
        // traer los elementos
        let productsInLocal = handleGetProductLocalStorage();
        console.log(productIn);
        const existingIndex = productsInLocal.findIndex((productsLocal) => 
            productsLocal.id === productIn.id
        );

        //verificar si el elemento existe
        if (existingIndex !== -1) {
            // Si el elemento existe, debe reemplazarse
            productsInLocal[existingIndex]=productIn;
        } else {
            // Si no existe, lo agregamos
            productsInLocal.push(productIn);
        }
        //setear el nuevo array
        localStorage.setItem("products",JSON.stringify(productsInLocal));
    }
};
