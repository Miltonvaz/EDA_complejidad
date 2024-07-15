import Linked from "../models/Linked.js";
import Array from "../models/Array/Array.js";

let root = document.getElementById("list-bussines")
fetch("./bussines.json")
.then(response => response.json())
.then(data => {
    
    for (let x=0;x<100;x++) {
        let item = document.createElement("li");
        item.textContent = data[x].name;
        root.appendChild(item)
    }
})
.catch(err => console.log(err))

let addLinkedList = document.getElementById("addLinkedList-btn");
let addArrayList = document.getElementById("addArray-btn");
let searchArrayList = document.getElementById("searchArray-btn");
let searchLinkedList = document.getElementById("searchLinkedList-btn");
let searchInput = document.getElementById("search-ipt");
let burbbleOrdenamientArray = document.getElementById("bubbleSort-btn");
let mergeOrdenamientArray = document.getElementById("mergeSort-btn");
let radixOrdenamientArray = document.getElementById("radixSort-btn");
let burbbleOrdenamientLinked = document.getElementById("bubbleSortLinked-btn");
let mergeOrdenamientLinked = document.getElementById("mergeSortLinked-btn");
let radixOrdenamientLinked = document.getElementById("radixSortLinked-btn");

let arrayList = new Array();
let linkedList = new Linked();

addLinkedList.addEventListener("click", () =>{
    let root = document.getElementById("list-bussines")
    fetch("./bussines.json")
    .then(response => response.json())
    .then(data => {
        
        for (let x=0;x<100;x++) {
            let item = document.createElement("li");
            item.textContent = data[x].name;
            root.appendChild(item)
            linkedList.push(item.textContent)
            console.log(item)
            console.log("agregado a la linkedlist")
        }
    })
    .catch(err => console.log(err))
    Swal.fire("Agregado a la linkedlist");
});

addArrayList.addEventListener("click", () =>{
    let root = document.getElementById("list-bussines")
fetch("./bussines.json")
.then(response => response.json())
.then(data => {
    
    for (let x=0;x<100;x++) {
        let item = document.createElement("li");
        item.textContent = data[x].name;
        root.appendChild(item)
        arrayList.push(item.textContent)
        console.log(item)
        console.log("agregado al array")
    }
})
.catch(err => console.log(err))
    Swal.fire("Agregado al Array");
})

searchArrayList.addEventListener("click", () => {
    let searchTerm = searchInput.value;
    if (arrayList.linearSearch(searchTerm)) {
        Swal.fire(`Se encontró el elemento "${searchTerm}" en el ArrayList`);
    } else {
        Swal.fire(`No se encontró el elemento "${searchTerm}" en el ArrayList`);
    }
});

searchLinkedList.addEventListener("click", () => {
    let searchTerm = searchInput.value;
    if (linkedList.linearSearch(searchTerm)) {
        Swal.fire(`Se encontró el elemento "${searchTerm}" en la LinkedList`);
    } else {
        Swal.fire(`No se encontró el elemento "${searchTerm}" en la LinkedList`);
    }
});
burbbleOrdenamientArray.addEventListener("click", () => {
    if(arrayList.length === 0) {
        console.log("No hay elementos en el array.");
    } else {
        let { sortedArray, iterations } = arrayList.bubbleSort();
        console.log("ArrayList ordenado:", sortedArray);
        Swal.fire({
            title: "Ordenado con burbuja",
            html: `Array ordenado: <pre>${JSON.stringify(sortedArray, null, 2)}</pre>`,
            icon: "success"
        });
    }
});
mergeOrdenamientArray.addEventListener("click", ()=>{
    if (arrayList.length === 0) {
        console.log("No hay elementos en el array.");
    } else {
        let { sortedArray, iterations } = arrayList.mergeSort();
        console.log("ArrayList ordenado:", sortedArray);
        Swal.fire({
            title: "Ordenado con merge sort",
            html: `Array ordenado: <pre>${JSON.stringify(sortedArray, null, 2)}</pre>`,
            icon: "success"
        });
    }
})
radixOrdenamientArray.addEventListener("click", () =>{
    if (arrayList.length === 0) {
        console.log("No hay elementos en el array.");
    } else {
        let { sortedArray, iterations } = arrayList.radixSort();
        console.log("ArrayList ordenado:", sortedArray);
        Swal.fire({
            title: "Ordenado con radix sort",
            html: `Array ordenado: <pre>${JSON.stringify(sortedArray, null, 2)}</pre>`,
            icon: "success"
        });
    }
})
burbbleOrdenamientLinked.addEventListener("click", () => {
    if (linkedList.length === 0) {
        console.log("No hay elementos en la LinkedList.");
        } else {
            let { sortedLinkedList, iterations } = linkedList.bubbleSort();
            console.log("LinkedList ordenado:", sortedLinkedList);
            Swal.fire({
                title: "Ordenado con burbuja",
                html: `LinkedList ordenado: <pre>${JSON.stringify(sortedLinkedList, null, 2
                    )}</pre>`
                    });
    }
});

