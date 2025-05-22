<script setup>
import { ref } from 'vue'

const menu = ref([
  { nombre: "Pizza Margarita", descripcion: "Pizza con salsa de tomate, mozzarella y albahaca fresca", precio: "1200" },
  { nombre: "Hamburguesa Clásica", descripcion: "Carne vacuna, lechuga, tomate, cebolla y cheddar", precio: "1500" },
  { nombre: "Ensalada César", descripcion: "Lechuga, pollo grillado, croutons y aderezo césar", precio: "1100" },
  { nombre: "Milanesa con Papas", descripcion: "Milanesa de carne acompañada con papas fritas", precio: "1400" },
  { nombre: "Ñoquis con Tuco", descripcion: "Ñoquis de papa caseros con salsa de tomate", precio: "1250" },
  { nombre: "Empanadas", descripcion: "Empanadas de carne, jamón y queso o verdura", precio: "250 c/u" },
  { nombre: "Tarta de Verdura", descripcion: "Tarta de acelga con salsa blanca y queso", precio: "950" },
  { nombre: "Pollo al Horno", descripcion: "Muslo y pata con papas al horno", precio: "1350" },
  { nombre: "Sándwich de Milanesa", descripcion: "Pan, milanesa, lechuga, tomate y mayonesa", precio: "1300" },
  { nombre: "Fideos con Salsa Boloñesa", descripcion: "Tallarines con salsa de carne", precio: "1250" },
  { nombre: "Suprema Napolitana", descripcion: "Pollo rebozado con jamón, queso y salsa", precio: "1500" },
  { nombre: "Postre Flan", descripcion: "Flan casero con dulce de leche o crema", precio: "600" },
])
</script>


<template>
    <h1 class="titulo">MENU</h1>
  <div class="container mt-4">
    <div class="row g-4">
      <div class="col-md-4" v-for="(item, index) in menu" :key="index">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">{{ item.nombre }}</h5>
            <p class="card-text">{{ item.descripcion }}</p>
          </div>
          <div class="card-footer">
            <strong>${{ item.precio }}</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.titulo{
    text-align: center;
}
</style>