<template>
  <div class="notifications-root">
    <!-- Seção: Notificações -->
    <section class="section">
      <header class="section-header">
        <div class="section-title">
          <svg class="icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden>
            <path fill="currentColor" d="M12 2a4 4 0 0 0-4 4v1.08A6.002 6.002 0 0 0 6 13v3l-1 1v1h14v-1l-1-1v-3a6.002 6.002 0 0 0-2-5.92V6a4 4 0 0 0-4-4zM7 20a3 3 0 0 0 6 0H7z"/>
          </svg>
          <h3>Notificações</h3>
        </div>

        <div class="section-badge">{{ notifications.length }}</div>
      </header>

      <div class="section-body">
        <div
          v-for="n in notifications"
          :key="n.id"
          class="notification-card"
        >
          <div class="notification-left">
            <div class="notif-name">{{ n.name }}</div>
            <div class="notif-service">{{ n.service }}</div>
            <div class="notif-date">{{ n.date }}</div>
          </div>

          <div class="notification-actions">
            <button class="btn btn-confirm" @click="confirmNotification(n.id)">
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden>
                <path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/>
              </svg>
              Confirmar
            </button>

            <button class="btn btn-decline" @click="declineNotification(n.id)">
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden>
                <path fill="currentColor" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
              Recusar
            </button>
          </div>
        </div>

        <div v-if="notifications.length === 0" class="empty">Nenhuma notificação</div>
      </div>
    </section>

    <section class="section">
      <header class="section-header">
        <div class="section-title">
          <svg class="icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden>
            <path fill="currentColor" d="M20 8v10H4V8h16m0-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM6 10h12v2H6v-2z"/>
          </svg>
          <h3>Convites de Barbearias</h3>
        </div>

        <div class="section-badge">{{ invites.length }}</div>
      </header>

      <div class="section-body">
        <div
          v-for="i in invites"
          :key="i.id"
          class="invite-card"
        >
          <div class="invite-left">
            <div class="invite-name">{{ i.name }}</div>
            <div class="invite-location">
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden>
                <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>
              </svg>
              <span>{{ i.address }}</span>
            </div>
          </div>

          <div class="invite-actions">
            <button class="btn btn-accept" @click="acceptInvite(i.id)">
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden>
                <path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/>
              </svg>
              Aceitar
            </button>

            <button class="btn btn-decline dark" @click="declineInvite(i.id)">
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden>
                <path fill="currentColor" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
              Recusar
            </button>
          </div>
        </div>

        <div v-if="invites.length === 0" class="empty">Nenhum convite</div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
const props = defineProps({
  notifications: {
    type: Array,
    default: () => [
      { id: 1, name: 'Carlos Silva', service: 'Corte + Barba', date: '15/10/2025 às 14:30' },
      { id: 2, name: 'Pedro Santos', service: 'Corte Social', date: '15/10/2025 às 16:00' },
    ]
  },
  invites: {
    type: Array,
    default: () => [
      { id: 1, name: 'Barbearia Premium', address: 'Rua das Flores, 123 - Centro' },
      { id: 2, name: "King's Barber Shop", address: 'Av. Principal, 456 - Jardins' },
    ]
  }
})

const emit = defineEmits(['confirm', 'decline', 'accept-invite', 'decline-invite'])

const state = reactive({
  notifications: props.notifications.map(x => ({ ...x })),
  invites: props.invites.map(x => ({ ...x }))
})

function confirmNotification(id) {
  emit('confirm', id)
  const idx = state.notifications.findIndex(n => n.id === id)
  if (idx !== -1) state.notifications.splice(idx, 1)
}

function declineNotification(id) {
  emit('decline', id)
  const idx = state.notifications.findIndex(n => n.id === id)
  if (idx !== -1) state.notifications.splice(idx, 1)
}

function acceptInvite(id) {
  emit('accept-invite', id)
  const idx = state.invites.findIndex(i => i.id === id)
  if (idx !== -1) state.invites.splice(idx, 1)
}

function declineInvite(id) {
  emit('decline-invite', id)
  const idx = state.invites.findIndex(i => i.id === id)
  if (idx !== -1) state.invites.splice(idx, 1)
}

const notifications = computed(() => state.notifications)
const invites = computed(() => state.invites)
</script>

<style scoped>
.notifications-root {
  width: 100%;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  color: #fff;
}

.section {
  background: #131313;
  border-radius: 10px;
  padding: 18px;
  box-shadow: 0 1px 0 rgba(255,255,255,0.02) inset;
  margin-bottom: 22px;
  border: 1px solid rgba(255,255,255,0.03);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 10px;
}

.section-title h3 {
  font-size: 18px;
  font-weight: 700;
  color: #f5f5f5;
}

.icon {
  color: #f5a623;
}

.section-badge {
  background: #f5a623;
  color: #0b0b0b;
  min-width: 28px;
  height: 28px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  padding: 0 10px;
  box-shadow: 0 2px 0 rgba(0,0,0,0.25);
}

.section-body {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.notification-card,
.invite-card {
  background: #2b2b2b;
  border-radius: 10px;
  padding: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(255,255,255,0.03);
}

.notification-left,
.invite-left {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.notif-name,
.invite-name {
  font-weight: 700;
  color: #fff;
  font-size: 15px;
}

.notif-service {
  color: rgba(255,255,255,0.45);
  font-size: 13px;
}

.notif-date {
  color: #f5a623;
  font-weight: 700;
  font-size: 13px;
  margin-top: 6px;
}

.invite-location {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255,255,255,0.45);
  font-size: 13px;
}

.notification-actions,
.invite-actions {
  display: flex;
  gap: 10px;
  align-items: center;
}

.btn {
  border: none;
  outline: none;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  font-size: 13px;
  box-shadow: 0 2px 0 rgba(0,0,0,0.25);
}

.btn-confirm,
.btn-accept {
  background: #f5a623;
  color: #0b0b0b;
}

.btn-decline {
  background: #ef6154;
  color: #fff;
}

.btn-decline.dark {
  background: #0b0b0b;
  color: #fff;
  border: 1px solid rgba(255,255,255,0.03);
}

.btn svg {
  display: inline-block;
}

.btn:hover {
  transform: translateY(-1px);
  transition: transform .12s ease;
}

.empty {
  color: rgba(255,255,255,0.35);
  padding: 12px 16px;
  border-radius: 8px;
  background: transparent;
}

@media (max-width: 1250px) {
  .notifications-root {
  width: 95vw;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  color: #fff;
  align-items: center;
}
}

</style>
