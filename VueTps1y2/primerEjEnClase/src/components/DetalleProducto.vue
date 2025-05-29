<template>
  <div class="container mt-5">
    <div v-if="loading" class="text-center">
      <div class="spinner-border text-primary" role="status"></div>
      <p class="mt-3">Cargando producto...</p>
    </div>

    <div v-else-if="product">
      <div class="row align-items-center">
        <div class="col-md-5 text-center">
          <img :src="product.image" :alt="product.title" class="img-fluid" style="max-height: 400px; object-fit: contain;" />
        </div>
        <div class="col-md-7">
          <h2 class="mb-3">{{ product.title }}</h2>
          <h4 class="text-success mb-2">${{ product.price }}</h4>
          <p class="text-muted"><strong>Categoría:</strong> {{ product.category }}</p>
          <p class="mb-3">{{ product.description }}</p>
          <div class="mb-4">
            <span class="me-2"><strong>Rating:</strong> {{ product.rating.rate }} ⭐</span>
            <small class="text-muted">({{ product.rating.count }} opiniones)</small>
          </div>
          <button class="btn btn-outline-secondary" @click="goBack">Volver</button>
          <button class="btn btn-outline-secondary border-primary ms-1 " @click="editar(product.id)">Editar</button>
        </div>
      </div>
    </div>

    <div v-else class="alert alert-danger mt-4">Producto no encontrado.</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const product = ref(null);
const loading = ref(true);

const fetchProduct = async (id) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) throw new Error('Producto no encontrado');
    const data = await res.json();
    product.value = data;
  } catch (error) {
    console.error(error);
    product.value = null;
  } finally {
    loading.value = false;
  }
};

const goBack = () => {
  router.back();
};

const editar = async (id) => {
  router.push(`/edit/${id}`);
}

onMounted(() => {
  const id = route.params.id || 1;
  fetchProduct(id);
});
</script>
