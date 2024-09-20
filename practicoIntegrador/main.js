import { setInLocalStorage } from "./src/persistence/localstorage";
import { renderCategories } from "./src/services/categories";
import './style.css';
renderCategories();

/*===Product===*/
const buttonAdd = document.getElementById("buttonAddElement");

buttonAdd.addEventListener('click', ()=>{
    openModal();
});

/*===POPUP===*/
const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener('click',()=>{
    handleCancelButton();
})

const handleCancelButton = ()=>{
    closeModal()
}

//FUNCIONES ABRIR CERRAR MODAL
const openModal = ()=>{
    const modal = document.getElementById("modalPopUP");
    modal.style.display = "flex";
};
const closeModal = ()=>{
    const modal = document.getElementById("modalPopUP");
    modal.style.display = "none";
};

/*guardar o modificar elementos */
const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click",()=>{
    handleSaveOrModifyElements();
});

const handleSaveOrModifyElements=()=>{
    const nombre = document.getElementById("nombre").value,
    imagen = document.getElementById("img").value,
    precio = document.getElementById("precio").value,
    categorias = document.getElementById("categoria").value;

    let object ={
        id: new Date().toISOString(),
        nombre,
        imagen,
        precio,
        categorias
    };

    setInLocalStorage(object);
    //closeModal()
};