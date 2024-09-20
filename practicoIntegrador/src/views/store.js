import { handleGetProductLocalStorage } from "./persistence/localStorage";

export const handleGetProductsToStore = () => {
    const products = handleGetProductLocalStorage();
    handleRenderList(products);
};

export const handleRenderList = (productosIn) => {
    const burgers = productosIn.filter((el) => el.categories === "Hamburguesas");
    const papas = productosIn.filter((el) => el.categories === "Papas");
    const gaseosas = productosIn.filter((el) => el.categories === "Gaseosas");

    const rederProductGroup = (productos, title) => {
        if(
            productos.length>0
        ){
            const productosHTML = productos.map((producto, index)=>{
                return `<div>
                <div>
                <img src=${producto.imgen}/>
                </div>
                <div>
                <h2>${producto.nombre}</h2>
                </div>
                <div>
                <p><b>Precio: </b> $ ${producto.precio}</p>
                <p><b>Categoria: </b> $ ${producto.categoria}</p>
                </div>
                </div>`;
            });
            return `
                <section>
                <h3></h3>
                </section>
            `
        }
    };
};
