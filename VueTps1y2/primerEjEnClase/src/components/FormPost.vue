<template>
  <div class="container mt-4 col-6">
     <h2 class="text-center">Formulario</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label class="form-label" for="title">Título</label>
        <input id="title" v-model="form.title" type="text" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label" for="body">Descripcion</label>
        <textarea id="body" v-model="form.description" class="form-control" rows="3"></textarea>
      </div>
      <div class="mb-3">
        <label class="form-label" for="title">Precio</label>
        <input id="price" v-model="form.price" type="number" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary" @click="volver()">Guardar</button>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const form = ref({
  title: '',
  body: ''
});
const isEdit = ref(false);

onMounted(() => {
  if (route.params.id) {
    isEdit.value = true;
    fetchPost(route.params.id);
  }
});

const volver = async () => {
  router.push("/")
}
const fetchPost = async (id) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    form.value = response.data;
  } catch (error) {
    console.error('Error fetching post:', error);
  }
};

const submitForm = async () => {
    // Validar que los campos no estén vacíos
    if (!form.value.title.trim() || !form.value.description.trim()) {
    alert('Por favor, completa todos los campos antes de guardar.');
    return;
  }
  try {
    if (isEdit.value) {
      await axios.put(`https://fakestoreapi.com/products/${route.params.id}`, form.value);
      alert('Post actualizado');
    } else {
      await axios.post('https://fakestoreapi.com/products/', form.value);
      alert('Post creado');
    }
   // router.push('/');
  } catch (error) {
    console.error('Error al guardar', error);
  }
};
</script>