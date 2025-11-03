<script setup>
import BriefcaseOutline from 'vue-material-design-icons/BriefcaseOutline.vue';
</script>

<template>
  <div class="container">
    <div class="mensagem">
      <h2>Dashboard</h2>
      <span>Welcome back, usuário!</span>
    </div>
    <section class="profile-card">
      <div class="left">
        <div class="avatar">
          <img src="https://i.pravatar.cc/150?img=3" />
        </div>
      </div>
      <div class="right">
        <div class="header">
          <h2 class="name">João Berto</h2>
          <div class="meta">
            <span class="years">
              <BriefcaseOutline class="icon" />
              <span class="years-text">5 years of experience</span>
            </span>
          </div>
        </div>

        <div class="about-card">
          <h4>About Me</h4>
          <p>
            Passionate barber specializing in modern cuts, fades, and beard grooming. I take pride in delivering
            premium service and helping clients look their best. Every cut is crafted with precision and attention to
            detail.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
}
/* mensagem */
.mensagem {
  margin-right: 59%;
  color: #fff;
  margin-bottom: 30px;
}

.mensagem h2 {
  padding-bottom: 8px;
  font-size: 30px;
}

.mensagem span {
  font-size: 16px;
  color: #999999;
}

.profile-card {
  display: flex;
  gap: 20px;
  background: #111111;
  border: 1px solid #2a2a2a;
  border-radius: 10px;
  padding: 20px;
  width: 70%;
  height: 200px;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #f5a623;
}

.avatar img {
  width: 100%;
  height: 100%;
}

.left {
  padding-top: 40px;
}

.header {
  margin-bottom: 12px;
}

.years {
  display: flex;
  align-items: center;
  gap: 15px;
}

.icon {
  width: 14px;
  height: 14px;
  color: #999999;
}

.years-text {
  margin-top: 12px;
  color: #999999;
}

.name {
  color: #fff;
  margin: 0;
}

.meta {
  font-size: 14px;
}

.about-card {
  background: #292929;
  border-radius: 10px;
  padding: 8px;
  color: #999999;
}

.about-card h4 {
  font-size: 14px;
  margin: 2px 0;
  color: #f5a623;
}

.about-card p {
  line-height: 1.5;
  color: #999999;
}
</style>
