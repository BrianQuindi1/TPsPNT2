import axios from 'axios';

console.log("Ejercicio 1: ");
await ej1()
  
console.log("Ejercicio 2: ");
await ej2(1);

console.log("Ejercicio 3: ");
console.log(await ej3(1))

console.log("Ejercicio 4: ");
console.log(await ej4())

console.log("Ejercicio 5: ");
console.log(await ej5(1))

console.log("Ejercicio 6: ");
console.log(await ej6())

console.log("Ejercicio 7: ");
console.log(await ej7())

console.log("Ejercicio 8: ");
console.log(await ej8())

console.log("Ejercicio 9: ");
console.log(await ej9())

console.log("Ejercicio 10: ");
console.log(await ej10())

//------------------------------------------------------------ FUNCIONES X EJ
async function ej1() {
  const url = 'https://pokeapi.co/api/v2/pokemon/';
  try {
    const response = await fetch(url);
    const datos = await response.json();
    console.log('Datos cargados:', datos);
  } catch (error) {
    console.error('Error al cargar los datos:', error);
  }
}


async function ej2(id) {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const response = await axios.delete(url);
  if (response.status == 200) {
    console.log("Eliminado correctamente!!");
  } else {
    console.log("No se pudo elimiar " + response.status)
  }
}

async function ej3(id) {
  const url = `https://jsonplaceholder.typicode.com/albums?userId=${id}`
  const response = await axios.get(url);

  return response.data;
}

async function ej4() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/5');
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error("Error en ej4:", error);
  }
}

async function ej5(id) {
  const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
  const response = await axios.delete(url);
  if (response.status == 200) {
    console.log("Eliminado correctamente!!");
  } else {
    console.log("No se pudo elimiar " + response.status)
  }
}

async function ej6() {
  const url = `https://jsonplaceholder.typicode.com/comments?postId=2`;
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

async function ej7() {
  const url = `https://jsonplaceholder.typicode.com/photos/1`;
  try {
    const response = await fetch(url, {
      method: 'DELETE'
    });

    if(response.ok){
      console.log(`Foto eliminada correctamente.`);
    } else {
      console.error(`Error al eliminar: código ${response.status}`);
    }
  } catch (error) {
    console.error("Error en la solicitud DELETE:", error);
  }
}

async function ej8() {
  const apiKey = "0e42eef9b74aefe44f755026bd26c921";
  const city = "London"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const response = await axios.get(url);
  console.log("Time in london: ")
  console.log(response.data.weather)
}

async function ej9() {
  try {
  const url =  `https://jsonplaceholder.typicode.com/todos?userId=3`;
  const response = await fetch(url);
  const json = await response.json();
  console.log(json)
} catch (error) {
  console.error("Error en ej9:", error);
}
}

async function obtenerArticulos() {
  const url = `https://jsonplaceholder.typicode.com/posts`;
  try {
    const response = await axios.get(url);
    console.log(response.data); 
    return response.data;      
  } catch (error) {
    console.error("Error al obtener artículos:", error);
    throw error; 
  }
}


async function ej10() {
  const articulos = await obtenerArticulos();
  console.log(articulos);
  
}