<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios'

const datos = ref([]);
const router = useRouter()


onMounted(() => { 
  fetchDatos();
  console.log(datos)
});

const fetchDatos = async () => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        datos.value = response.data; 
    } catch (error) {
        console.error('error listado', error);
    }
}

const editar = async (id) => {
  router.push(`/edit/${id}`);
}

const verMas = async (id) => {
  router.push(`/detalle/${id}`)
}

const agregar = async () => {
  router.push(`/add`);
}

const eliminar = async (id) => {
  try {
    console.log("Eliminando: ", id)
    const response = await axios.delete(`https://fakestoreapi.com/products/${id}`);
    datos.value = datos.value.filter(post => post.id !== id);
    console.log(datos.value)
  } catch (error) {
    console.error('Error eliminado producto con id: ', id)
  }
}

</script>

<template>
  <div class="container my-5">
    <h1 class="mb-4 text-center">Catálogo de Productos</h1>

    <div class="row">
      <div v-for="producto in datos" :key="producto.id" class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div class="card h-100 shadow-sm">
          <img :src="producto.image" class="card-img-top p-3" :alt="producto.title" style="height: 200px; object-fit: contain;" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title" style="height: 3em; overflow: hidden;">{{ producto.title }}</h5>
            <p class="card-text text-success fw-bold">$ {{ producto.price }}</p>
            <p class="card-text text-muted " style="font-size: 0.9rem; height: 4.2em; overflow: hidden;">
              {{ producto.description }}
            </p>
            <button class="btn btn-primary mt-auto mb-1" @click="verMas(producto.id)" >Ver más</button>
            <button class="btn btn-secondary mt-auto mb-1" @click="editar(producto.id)">Editar</button>
            <button class="btn btn-danger mt-auto mb-1" @click="eliminar(producto.id)">Eliminar</button>            
          </div>
        </div>
      </div>
    </div>
    <button class="btn btn-danger" @click="agregar()">AGREGAR PRODUCTOS</button>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
.card {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 2px 2px 10px #eee;
}
.card img {
  width: 100%;
  height: 150px;
  object-fit: contain;
  margin-bottom: 0.5rem;
}
.card h2 {
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
}
.card p {
  margin: 0.2rem 0;
}
</style>
