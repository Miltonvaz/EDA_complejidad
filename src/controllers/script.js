import Linked from "../models/LinkedList/Linked.js";
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
    const numItemsInput = document.getElementById("numItems");
    const bubbleSortArray = document.getElementById("bubbleSort-btn");
    const mergeSortArray = document.getElementById("mergeSort-btn");
    const radixSortArray = document.getElementById("radixSort-btn");
    const bubbleSortLinkedList = document.getElementById("bubbleSortLinked-btn");
    const mergeSortLinkedList = document.getElementById("mergeSortLinked-btn");
    const radixSortLinkedList = document.getElementById("radixSortLinked-btn");
    const resultadosTiempos = document.getElementById("resultados-tiempos").getElementsByTagName('tbody')[0];

    const calcularTiempo = (start, end) => {
        return ((end - start) / 1000).toFixed(4); 
    };

    const actualizarGrafica = () => {
        grafica.actualizarGrafica();
    };

    const agregarFilaTabla = (operacion, estructura, tiempo) => {
        let newRow = resultadosTiempos.insertRow();
        let cellOperacion = newRow.insertCell(0);
        let cellEstructura = newRow.insertCell(1);
        let cellTiempo = newRow.insertCell(2);
        cellOperacion.textContent = operacion;
        cellEstructura.textContent = estructura;
        cellTiempo.textContent = tiempo;
    };

    const getNumItems = () => {
        const numItems = parseInt(numItemsInput.value, 10);
        return isNaN(numItems) || numItems <= 0 ? 100 : numItems;
    };

    const fetchData = async () => {
        try {
            const response = await fetch("./bussines.json");
            const data = await response.json();
            console.log(`Número de elementos en el JSON: ${data.length}`);
            Swal.fire(`El archivo JSON tiene ${data.length} elementos.`);
            return data;
        } catch (err) {
            console.error(err);
            Swal.fire("Error al cargar los datos.");
            return [];
        }
    };
    addLinkedList.addEventListener("click", async () => {
        const data = await fetchData();
        const numItems = getNumItems();
        if (data.length === 0) return;

        const start = performance.now();
        for (let x = 0; x < Math.min(numItems, data.length); x++) {
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
        agregarFilaTabla('Inserción', 'LinkedList', tiempo);
    });

    addArrayList.addEventListener("click", async () => {
        const data = await fetchData();
        const numItems = getNumItems();
        if (data.length === 0) return;

        const start = performance.now();
        for (let x = 0; x < Math.min(numItems, data.length); x++) {
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
        agregarFilaTabla('Inserción', 'Array', tiempo);
    });

    searchArrayList.addEventListener("click", () => {
        const searchValue = searchInput.value;
        const start = performance.now();
        const found = arrayList.linearSearch(searchValue);
        const end = performance.now();
        const tiempo = calcularTiempo(start, end);

        Swal.fire(`Valor ${found ? "encontrado" : "no encontrado"} en el Array. Tiempo de búsqueda: ${tiempo} segundos.`);

        grafica.setData(
            'Búsqueda Array',
            { label: 'Búsqueda Array', data: [tiempo], backgroundColor: '#FFCE56' }
        );
        actualizarGrafica();
        agregarFilaTabla('Búsqueda', 'Array', tiempo);

        console.log(`Tiempo total para búsqueda en Array: ${tiempo} segundos`);
    });

    searchLinkedList.addEventListener("click", () => {
        const searchValue = searchInput.value;
        const start = performance.now();
        const found = linkedList.linearSearch(searchValue);
        const end = performance.now();
        const tiempo = calcularTiempo(start, end);

        Swal.fire(`Valor ${found ? "encontrado" : "no encontrado"} en la LinkedList. Tiempo de búsqueda: ${tiempo} segundos.`);

        grafica.setData(
            'Búsqueda LinkedList',
            { label: 'Búsqueda LinkedList', data: [tiempo], backgroundColor: '#FF6384' }
        );
        actualizarGrafica();
        agregarFilaTabla('Búsqueda', 'LinkedList', tiempo);

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
        agregarFilaTabla('Bubble Sort', 'Array', tiempo);

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
        agregarFilaTabla('Merge Sort', 'Array', tiempo);

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
        agregarFilaTabla('Radix Sort', 'Array', tiempo);

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
        agregarFilaTabla('Bubble Sort', 'LinkedList', tiempo);

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
        agregarFilaTabla('Merge Sort', 'LinkedList', tiempo);

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
        agregarFilaTabla('Radix Sort', 'LinkedList', tiempo);

        console.log(`Tiempo total para Radix Sort en LinkedList: ${tiempo} segundos`);
    });
});
