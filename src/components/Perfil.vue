<script setup>
const portfolio = [
  'https://i.pravatar.cc/600?img=11',
  'https://i.pravatar.cc/600?img=12',
  'https://i.pravatar.cc/600?img=13',
  'https://i.pravatar.cc/600?img=14'
];
import { useUserStore } from '@/stores/UseUserStore'

const user = useUserStore();
</script>

<template>
  <div class="profile-section">
    <div class="mensagem">
      <h2>Dashboard</h2>
      <span>Welcome back, {{ user.name }}</span>
    </div>

    <!-- Wrapper: deixa ambos os cards alinhados como na foto -->
    <div class="cards-wrapper">
      <!-- PROFILE CARD -->
      <section class="profile-card">
        <div class="profile-left">
          <div class="avatar-ring">
            <img class="avatar" :src="user.avatar" />
          </div>
        </div>

        <div class="profile-right">
          <div class="profile-top">
            <h3 class="profile-name">{{ user.name }}</h3>

            <div class="profile-meta">
              <div class="rating">
                <!-- estrela -->
                <svg class="star" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.172L12 18.896 4.663 23.17l1.402-8.172L.13 9.211l8.2-1.192L12 .587z"/>
                </svg>
                <span class="rating-number">4.8</span>
              </div>

              <div class="experience">
                <!-- mala (briefcase) -->
                <svg class="briefcase" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a1 1 0 0 1 1-1h3V4a2 2 0 0 1 2-2h2zM10 6V4H8v2h2zm6 0V4h-2v2h2z"/>
                </svg>
                <span class="exp-text">{{ user.experienceYears }} Years of experience</span>
              </div>
            </div>
          </div>

          <div class="about-card">
            <h4>About Me</h4>
            <p>
              {{ user.about }}
            </p>
          </div>
        </div>
      </section>

      <!-- PORTFOLIO CARD -->
      <section class="portfolio-card">
        <div class="portfolio-header">
          <h4>Portfolio</h4>
        </div>

        <div class="portfolio-grid">
          <div v-for="(img, idx) in user.portfolio" :key="idx" class="portfolio-item">
            <img :src="img" alt="portfolio image" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
/* Container geral alinhado com o resto do dashboard */
.profile-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 10px;
  color: #fff;
  box-sizing: border-box;
}

/* Título "Dashboard" e subtítulo */
.mensagem {
  margin-bottom: 20px;
}
.mensagem h2 {
  font-size: 30px;
  margin: 0 0 6px 0;
}
.mensagem span {
  color: #9a9a9a;
  font-size: 14px;
}

/* Wrapper para os dois cards (perfil + portfolio) — aparência unificada */
.cards-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* ===== PROFILE CARD ===== */
.profile-card {
  display: flex;
  gap: 20px;
  background: #151515;            /* cartão um pouco mais claro que o fundo */
  border: 1px solid rgba(255,255,255,0.03);
  border-radius: 12px;
  padding: 22px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.6);
  align-items: flex-start;
  min-height: 170px;             /* mantém a altura aproximada da imagem */
}

/* left: avatar */
.profile-left {
  width: 110px;                  /* espaço reservado para o avatar */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* anel dourado e avatar */
.avatar-ring {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  padding: 4px;
  background: linear-gradient(135deg, #f5a623, #e6b84a);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 10px rgba(0,0,0,0.6);
}
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: block;
  object-fit: cover;
  border: 3px solid #0f0f0f;
}

/* right: conteúdo principal */
.profile-right {
  flex: 1;
}
.profile-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}
.profile-name {
  margin: 0;
  font-size: 20px;
  color: #fff;
  font-weight: 700;
}

/* meta (rating + experience) */
.profile-meta {
  display: flex;
  gap: 18px;
  align-items: center;
  color: #bdbdbd;
  margin-left: 8px;
}

/* rating */
.rating {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
}
.star {
  width: 18px;
  height: 18px;
  fill: #f5a623;
  opacity: 0.95;
}
.rating-number {
  color: #f5a623;
  font-size: 14px;
}

/* briefcase icon */
.briefcase {
  width: 16px;
  height: 16px;
  fill: #9a9a9a;
  opacity: 0.95;
}
.experience {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #9a9a9a;
  font-size: 13px;
}
.exp-text { font-size: 13px; color: #9a9a9a; }

/* about-card (sub-card dentro do perfil) */
.about-card {
  margin-top: 12px;
  background: #222;
  border-radius: 10px;
  padding: 12px 16px;
  color: #bdbdbd;
  line-height: 1.5;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.01);
}
.about-card h4 {
  margin: 0 0 6px 0;
  font-size: 13px;
  color: #f5a623;
  font-weight: 700;
}
.about-card p {
  margin: 0;
  font-size: 13px;
  color: #bdbdbd;
}

/* ===== PORTFOLIO CARD ===== */
.portfolio-card {
  background: #151515;
  border: 1px solid rgba(255,255,255,0.03);
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.6);
}

/* header do portfolio */
.portfolio-header {
  margin-bottom: 12px;
}
.portfolio-header h4 {
  margin: 0;
  color: #fff;
  font-size: 16px;
}

/* grid de imagens grande (4 colunas) */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  align-items: stretch;
  margin-top: 6px;
}

/* cada item: imagem com borda arredondada e altura fixa para manter proporção */
.portfolio-item {
  background: #111;
  border-radius: 12px;
  overflow: hidden;
  height: 180px;           /* controla a altura das imagens como na referência */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(0,0,0,0.6);
  border: 1px solid rgba(255,255,255,0.02);
}
.portfolio-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 1100px) {
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .profile-card {
    min-height: auto;
    align-items: center;
  }
  .profile-left { width: 100px; }
}
@media (max-width: 680px) {
  .profile-section { padding: 18px; }
  .portfolio-grid { grid-template-columns: 1fr; }
  .profile-card { flex-direction: column; gap: 12px; padding: 16px; }
  .profile-left { width: 100%; }
  .avatar-ring { margin: 0 auto; }
  .profile-top { flex-direction: column; align-items: flex-start; gap: 10px; }
}
</style>
