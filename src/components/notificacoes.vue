<script setup>
import { ref } from "vue"

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
</template>

<style scoped>
/* container centralizado */
.container {
  width: 100%;
  display: flex;
  justify-content: center;
}

/* barra de fundo */
.buttons {
  width: 1180px;
  height: 40px;
  display: flex;
  align-items: center;
  background-color: #2f2f2f;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.05);
  padding: 4px;
}

/* botão padrão */
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

/* texto padrão */
.button p {
  color: rgba(255,255,255,0.5);
  font-size: 12.5px;
  font-weight: 500;
}

/* botão quando ATIVO */
.button.active {
  background-color: rgba(0,0,0, 1);
  transform: translateY(-1px);
}

.button.active p {
  color: rgba(255,255,255,0.95);
}

/* hover no inativo */
.button:not(.active):hover {
  background-color: rgba(255,255,255,0.03);
}
</style>
