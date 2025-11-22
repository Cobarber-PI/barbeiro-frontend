<template>
  <div class="edit-root">
    <header class="edit-header">
      <h2>Editar Perfil</h2>
    </header>

    <div class="edit-body">
      <div class="avatar-area">
        <div class="avatar-wrap">
          <img :src="avatarPreview" alt="avatar" class="avatar-img" />
        </div>

        <input
          ref="fileInput"
          type="file"
          accept="image/*"
          class="hidden-file"
          @change="onFileSelected"
        />
        <button class="btn-photo" @click="triggerFile">Alterar Foto</button>
      </div>

      <form class="form-area" @submit.prevent="save">
        <label class="label">Nome</label>
        <input v-model="localName" class="input" />

        <label class="label">Contato</label>
        <input v-model="localContact" type="text" class="input" />

        <label class="label">Sobre Mim</label>
        <textarea v-model="localAbout" class="textarea"></textarea>

        <div class="form-actions">
          <button @click.prevent="salvar" class="btn-save">
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden>
              <path fill="currentColor" d="M17 3H5a2 2 0 0 0-2 2v14h2V5h12V3zM21 7H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm-3 12h-8v-2h8v2z"/>
            </svg>
            Salvar Alterações
          </button>

          <button type="button" class="btn-portfolio" @click="addToPortfolio">
            + Adicionar Corte ao Portfólio
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useUserStore } from '@/stores/UseUserStore'
const user = useUserStore()

const localName = ref(user.name ?? 'João Berto')
const localContact = ref(user.contact ?? '(11) 98765-4321')
const localAbout = ref(user.about ?? 'Passionate barber specializing in modern cuts, fades, and beard grooming. I take pride in delivering premium service and helping clients look their best. Every cut is crafted with precision and attention to detail.')
const localYears = ref(user.experienceYears ?? 5)

const avatarPreview = ref(user.avatar ?? '/mnt/data/71e1e57a-af88-44c6-9a9a-a2bbaeedb514.png')
const avatarFile = ref(null)
const fileInput = ref(null)
watch(() => user.avatar, (v) => {
  if (v) avatarPreview.value = v
})

function triggerFile() {
  if (fileInput.value) fileInput.value.click()
}
function onFileSelected(e) {
  const f = e.target.files && e.target.files[0]
  if (!f) return
  avatarFile.value = f
  avatarPreview.value = URL.createObjectURL(f)
}
function salvar() {
  if (typeof user.updateName === 'function') user.updateName(localName.value)
  else user.name = localName.value
  user.contact = localContact.value

  if (typeof user.updateAbout === 'function') user.updateAbout(localAbout.value)
  else user.about = localAbout.value

  if (typeof user.updateExperience === 'function') user.updateExperience(localYears.value)
  else user.experienceYears = localYears.value
  if (avatarFile.value) {
    const localUrl = avatarPreview.value
    if (typeof user.updateAvatar === 'function') user.updateAvatar(localUrl)
    else user.avatar = localUrl
  }

}


function save() {
  salvar()
}


function addToPortfolio() {

  const newImg = avatarPreview.value || '/mnt/data/71e1e57a-af88-44c6-9a9a-a2bbaeedb514.png'
  if (Array.isArray(user.portfolio)) {
    user.portfolio.push(newImg)
  } else {
    user.portfolio = [newImg]
  }
}
</script>

<style scoped>

.edit-root {
  width: 100%;
  margin: 20px auto 5%;
  background: #131313;
  border-radius: 10px;
  padding: 24px;
  border: 1px solid rgba(255,255,255,0.03);
  box-shadow: 0 1px 0 rgba(255,255,255,0.02) inset;
  color: #fff;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}

.edit-header h2 {
  margin: 0 0 16px 0;
  font-size: 20px;
  font-weight: 800;
  color: #f5f5f5;
}

.edit-body {
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

.avatar-area {
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
}

.avatar-wrap {
  width: 140px;
  height: 140px;
  border-radius: 100%;
  padding: 6px;
  background: linear-gradient(180deg, rgba(243,194,74,1), rgba(236,140,42,1));
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-img {
  width: 124px;
  height: 124px;
  border-radius: 999px;
  object-fit: cover;
}

.hidden-file {
  display: none;
}

.btn-photo {
  background: #0b0b0b;
  color: #fff;
  border: 1px solid rgba(255,255,255,0.03);
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  display: inline-flex;
  gap: 8px;
  align-items: center;
}

.form-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.label {
  font-size: 13px;
  color: rgba(255,255,255,0.8);
  font-weight: 700;
  margin-top: 6px;
}

.input,
.textarea {
  width: 100%;
  background: #0f0f0f;
  border: 1px solid rgba(255,255,255,0.03);
  color: #fff;
  padding: 12px 14px;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  box-shadow: 0 1px 0 rgba(255,255,255,0.02) inset;
}

.textarea {
  resize: vertical;
  min-height: 120px;
}


.form-actions {
  display: flex;
  gap: 14px;
  margin-top: 14px;
  align-items: center;
}

.btn-save {
  background: #f3c24a;
  color: #0b0b0b;
  border: none;
  padding: 12px 18px;
  border-radius: 10px;
  font-weight: 800;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 3px 0 rgba(0,0,0,0.25);
}


.btn-portfolio {
  background: #0b0b0b;
  color: #fff;
  border: 1px solid rgba(255,255,255,0.03);
  padding: 12px 18px;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
}

.btn-save svg {
  display: inline-block;
}

.btn-save:hover,
.btn-portfolio:hover,
.btn-photo:hover {
  transition: transform 0.12s ease;
  background-color: #f5a623;
  color: black;
}
@media (max-width: 1250px) {
  .edit-root {
    width: 95vw;
    margin: 10px;
    padding: 16px;
  }
  .edit-body {
    flex-direction: column;
    align-items: center;
  }
  .avatar-area {
    width: 100%;
    justify-content: center;
  }
  .form-area {
    width: 100%;
  }
}

</style>
