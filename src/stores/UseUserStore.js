// /src/stores/useUserStore.js
import { defineStore } from "pinia";
import { ref } from "vue";

function updateAvatar(newVal) {
  avatar.value = newVal;
}

export const useUserStore = defineStore("user", () => {

  // ==== DADOS DO PERFIL ====
  const name = ref("João Berto");
  const avatar = ref("https://i.pravatar.cc/150?img=3");
  const experienceYears = ref(5);
  const rating = ref(4.8);
  const about = ref(
    "Passionate barber specializing in modern cuts, fades, and beard grooming..."
  );

  const portfolio = ref([
    'https://i.pravatar.cc/600?img=11',
    'https://i.pravatar.cc/600?img=12',
    'https://i.pravatar.cc/600?img=13',
    'https://i.pravatar.cc/600?img=14'
  ]);

  // ==== ACTIONS ====
  function updateName(newVal) {
    name.value = newVal;
  }
  function updateAbout(newVal) {
    about.value = newVal;
  }
  function updateAvatar(newVal) {
    avatar.value = newVal;
  }
  function updateExperience(newVal) {
    experienceYears.value = newVal;
  }

  return {
    name,
    avatar,
    about,
    portfolio,
    experienceYears,
    rating,
    updateName,
    updateAbout,
    updateAvatar,
    updateExperience
  };
});
