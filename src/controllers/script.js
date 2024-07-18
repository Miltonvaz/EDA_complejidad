import Linked from "../models/LinkedList/Linked.js"
import Array from "../models/Array/Array.js";
import Grafica from "../models/Grafica.js";

let arrayList = new Array();
let linkedList = new Linked();
let grafica = new Grafica();

document.addEventListener("DOMContentLoaded", () => {
    const addLinkedList = document.getElementById("addLinkedList-btn");
    const addArrayList = document.getElementById("addArray-btn");
    const searchArrayList = document.getElementById("searchArray-btn");
    const searchLinkedList = document.getElementById("searchLinkedList-btn");
    const searchInput = document.getElementById("search-ipt");
    const bubbleSortArray = document.getElementById("bubbleSort-btn");
    const mergeSortArray = document.getElementById("mergeSort-btn");
    const radixSortArray = document.getElementById("radixSort-btn");
    const bubbleSortLinkedList = document.getElementById("bubbleSortLinked-btn");
    const mergeSortLinkedList = document.getElementById("mergeSortLinked-btn");
    const radixSortLinkedList = document.getElementById("radixSortLinked-btn");

    const calcularTiempo = (start, end) => {
        return ((end - start) / 1000).toFixed(4); 
    };

    const actualizarGrafica = () => {
        grafica.actualizarGrafica();
    };

    addLinkedList.addEventListener("click", () => {
        fetch("./bussines.json")
            .then(response => response.json())
            .then(data => {
                const start = performance.now();
                for (let x = 0; x < 100; x++) {
                    linkedList.push(data[x].name);
                }
                const end = performance.now();
                const tiempo = calcularTiempo(start, end);
                console.log(`Tiempo total para agregar en LinkedList: ${tiempo} segundos`);
                Swal.fire("Agregado a la LinkedList");

                grafica.setData(
                    'Inserción LinkedList',
                    { label: 'LinkedList', data: [tiempo], backgroundColor: '#ff6384' }
                );
                actualizarGrafica();
            })
            .catch(err => console.error(err));
    });

    addArrayList.addEventListener("click", () => {
        fetch("./bussines.json")
            .then(response => response.json())
            .then(data => {
                const start = performance.now();
                for (let x = 0; x < 100; x++) {
                    arrayList.push(data[x].name);
                }
                const end = performance.now();
                const tiempo = calcularTiempo(start, end);
                console.log(`Tiempo total para agregar en ArrayList: ${tiempo} segundos`);
                Swal.fire("Agregado al Array");

                grafica.setData(
                    'Inserción Array',
                    { label: 'Array', data: [tiempo], backgroundColor: '#36a2eb' }
                );
                actualizarGrafica();
            })
            .catch(err => console.error(err));
    });

    searchArrayList.addEventListener("click", () => {
        const searchValue = searchInput.value;
        const start = performance.now();
        const found = arrayList.linearSearch(searchValue);
        const end = performance.now();
        const tiempo = calcularTiempo(start, end);

        if (found) {
            Swal.fire(`Valor encontrado en el Array. Tiempo de búsqueda: ${tiempo} segundos.`);
        } else {
            Swal.fire(`Valor no encontrado en el Array. Tiempo de búsqueda: ${tiempo} segundos.`);
        }

        grafica.setData(
            'Búsqueda Array',
            { label: 'Búsqueda Array', data: [tiempo], backgroundColor: '#FFCE56' }
        );
        actualizarGrafica();

        console.log(`Tiempo total para búsqueda en Array: ${tiempo} segundos`);
    });

    searchLinkedList.addEventListener("click", () => {
        const searchValue = searchInput.value;
        const start = performance.now();
        const found = linkedList.linearSearch(searchValue);
        const end = performance.now();
        const tiempo = calcularTiempo(start, end);

        if (found) {
            Swal.fire(`Valor encontrado en la LinkedList. Tiempo de búsqueda: ${tiempo} segundos.`);
        } else {
            Swal.fire(`Valor no encontrado en la LinkedList. Tiempo de búsqueda: ${tiempo} segundos.`);
        }

        grafica.setData(
            'Búsqueda LinkedList',
            { label: 'Búsqueda LinkedList', data: [tiempo], backgroundColor: '#FF6384' }
        );
        actualizarGrafica();

        console.log(`Tiempo total para búsqueda en LinkedList: ${tiempo} segundos`);
    });

    bubbleSortArray.addEventListener("click", () => {
        const start = performance.now();
        arrayList.bubbleSort();
        const end = performance.now();
        const tiempo = calcularTiempo(start, end);
        Swal.fire(`Bubble Sort en Array completado. Tiempo de ordenamiento: ${tiempo} segundos.`);

        grafica.setData(
            'Bubble Sort Array',
            { label: 'Bubble Sort Array', data: [tiempo], backgroundColor: '#FF6384' }
        );
        actualizarGrafica();

        console.log(`Tiempo total para Bubble Sort en Array: ${tiempo} segundos`);
    });

    mergeSortArray.addEventListener("click", () => {
        const start = performance.now();
        arrayList.mergeSort();
        const end = performance.now();
        const tiempo = calcularTiempo(start, end);
        Swal.fire(`Merge Sort en Array completado. Tiempo de ordenamiento: ${tiempo} segundos.`);

        grafica.setData(
            'Merge Sort Array',
            { label: 'Merge Sort Array', data: [tiempo], backgroundColor: '#36A2EB' }
        );
        actualizarGrafica();

        console.log(`Tiempo total para Merge Sort en Array: ${tiempo} segundos`);
    });

    radixSortArray.addEventListener("click", () => {
        const start = performance.now();
        arrayList.radixSort();
        const end = performance.now();
        const tiempo = calcularTiempo(start, end);
        Swal.fire(`Radix Sort en Array completado. Tiempo de ordenamiento: ${tiempo} segundos.`);

        grafica.setData(
            'Radix Sort Array',
            { label: 'Radix Sort Array', data: [tiempo], backgroundColor: '#FFCE56' }
        );
        actualizarGrafica();

        console.log(`Tiempo total para Radix Sort en Array: ${tiempo} segundos`);
    });

    bubbleSortLinkedList.addEventListener("click", () => {
        const start = performance.now();
        linkedList.bubbleSort();
        const end = performance.now();
        const tiempo = calcularTiempo(start, end);
        Swal.fire(`Bubble Sort en LinkedList completado. Tiempo de ordenamiento: ${tiempo} segundos.`);

        grafica.setData(
            'Bubble Sort LinkedList',
            { label: 'Bubble Sort LinkedList', data: [tiempo], backgroundColor: '#FF6384' }
        );
        actualizarGrafica();

        console.log(`Tiempo total para Bubble Sort en LinkedList: ${tiempo} segundos`);
    });

    mergeSortLinkedList.addEventListener("click", () => {
        const start = performance.now();
        linkedList.mergeSort();
        const end = performance.now();
        const tiempo = calcularTiempo(start, end);
        Swal.fire(`Merge Sort en LinkedList completado. Tiempo de ordenamiento: ${tiempo} segundos.`);

        grafica.setData(
            'Merge Sort LinkedList',
            { label: 'Merge Sort LinkedList', data: [tiempo], backgroundColor: '#36A2EB' }
        );
        actualizarGrafica();

        console.log(`Tiempo total para Merge Sort en LinkedList: ${tiempo} segundos`);
    });

    radixSortLinkedList.addEventListener("click", () => {
        const start = performance.now();
        linkedList.radixSort();
        const end = performance.now();
        const tiempo = calcularTiempo(start, end);
        Swal.fire(`Radix Sort en LinkedList completado. Tiempo de ordenamiento: ${tiempo} segundos.`);

        grafica.setData(
            'Radix Sort LinkedList',
            { label: 'Radix Sort LinkedList', data: [tiempo], backgroundColor: '#FFCE56' }
        );
        actualizarGrafica();

        console.log(`Tiempo total para Radix Sort en LinkedList: ${tiempo} segundos`);
    });
});
