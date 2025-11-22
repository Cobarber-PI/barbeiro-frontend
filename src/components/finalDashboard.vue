<script setup>
import { ref } from "vue"
import notificacoes from "./notificacoes.vue"
import editPerfil from "./editPerfil.vue"

const active = ref(0)

function setActive(index) {
  active.value = index
}
</script>

<template>
  <div class="container">
    <div class="buttons">

  <div
    class="button"
    :class="{ active: active === 0 }"
    @click="setActive(0)"
  >
    <p>Notificações</p>
  </div>

  <div
    class="button"
    :class="{ active: active === 1 }"
    @click="setActive(1)"
  >
    <p>Editar Perfil</p>
  </div>

</div>

  </div>
  <div style="width: 1180px; margin: 20px auto 0;">
<div v-if="active === 0">
  <div>
    <notificacoes />
  </div>
</div>
<div v-if="active === 1">
  <div>
    <editPerfil />
  </div>
</div>

  </div>
</template>

<style scoped>

.container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.buttons {
  width: 1180px;
  height: 40px;
  display: flex;
  background-color: #2f2f2f;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.05);
  padding: 4px;
}

.button {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.15s;
  height: 100%;
}

.button p {
  color: rgba(255,255,255,0.5);
  font-size: 12.5px;
  font-weight: 500;
}
.button.active {
  background-color: rgba(0,0,0, 1);
  transform: translateY(-1px);
}

.button.active p {
  color: rgba(255,255,255,0.95);
}

.button:not(.active):hover {
  background-color: rgba(255,255,255,0.03);
}
@media (max-width: 1200px) {
  .buttons {
    width: 100%;
    margin: 0 10px;
  }
}
</style>
