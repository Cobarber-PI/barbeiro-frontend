<script setup>
import { ref, computed, watch, onMounted } from "vue";

const schedule = ref([
  { name: "Carlos Silva", service: "Haircut + Beard", time: "09:00", duration: "45 min" },
  { name: "Pedro Santos", service: "Haircut", time: "10:00", duration: "30 min" },
  { name: "Lucas Oliveira", service: "Beard Trim", time: "11:00", duration: "20 min" },
  { name: "Rafael Costa", service: "Haircut + Beard", time: "14:00", duration: "45 min" },
  { name: "Bruno Lima", service: "Haircut", time: "15:30", duration: "30 min" },
]);

const weekly = ref([500, 700, 400, 750, 900, 1000, 500]);
const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const maxVal = computed(() => Math.max(...weekly.value, 1000));

const series = ref([{ name: 'Earnings', data: weekly.value }]);

const options = ref({
  chart: {
    type: 'bar',
    toolbar: { show: false },
    animations: { enabled: true, easing: 'easeinout', speed: 700 },
    background: 'transparent',
    foreColor: '#e6edf0'
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 5,
    }
  },
  colors: ['#f7c84a'],
  dataLabels: { enabled: false },
  grid: {
    show: true,
    borderColor: 'rgba(#ffffff, 0.1)',
    xaxis: { lines: { show: false } },
  },
  xaxis: {
    categories: labels,
    labels: {
      style: { colors: ['#bfc6c9'], fontSize: '12px' }
    },
    axisBorder: { show: false }
  },
  yaxis: {
    show: true,
    labels: {
      style: { colors: '#7f8589', fontSize: '12px' }
    },
    tickAmount: 4,
    min: 0,
    max: maxVal.value
  },
  tooltip: {
    theme: 'dark',
    y: {
      formatter: function (val) { return `R$ ${val}`; }
    },
    x: {
      formatter: function (val) {
        return val;
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.25,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 80]
    }
  }
});

watch(weekly, (newVal) => {
  series.value = [{ name: 'Earnings', data: newVal }];
  options.value = {
    ...options.value,
    yaxis: { ...options.value.yaxis, max: Math.max(...newVal, 1000) }
  };
}, { deep: true });

onMounted(() => {
});
</script>

<template>
  <div class="page-wrap">
    <div class="container-grid">
      <section class="panel schedule">
        <div class="panel-header">
          <h2>Today's Schedule</h2>
          <a class="view-all" href="#">View All ➜</a>
        </div>

        <div class="schedule-list">
          <article v-for="(s, i) in schedule" :key="i" class="schedule-item">
            <div class="si-left">
              <div class="teste">
                <div class="imgz"><img src="/public/avatar.svg" alt=""></div>
                <div class="imgz"><img src="/public/tesoura.svg" alt=""></div>
              </div>
              <div class="si-info">
                <div class="si-name">{{ s.name }}</div>
                <div class="si-service">{{ s.service }}</div>
              </div>
            </div>
            <div class="si-right">
              <div class="si-time">{{ s.time }}</div>
              <div class="si-duration">{{ s.duration }}</div>
            </div>
          </article>
        </div>
      </section>
      <div class="right-column">
        <section class="panel summary">
          <div class="panel-header">
            <h2>Earnings Summary</h2>
          </div>

          <div class="summary-cards">
            <div class="small-card">
              <div class="card-label">Total Earnings</div>
              <div class="card-value">
                <p>R$ 3.660</p>
              </div>
              <div class="card-sub">This week</div>
            </div>

            <div class="small-card">
              <div class="card-label">Completed</div>
              <div class="card-value">42</div>
              <div class="card-sub">Services</div>
            </div>

            <div class="small-card">
              <div class="card-label">Cancellations</div>
              <div class="card-value red">3</div>
              <div class="card-sub">This week</div>
            </div>
          </div>
        </section>
        <section class="panel chart-panel">
          <div class="panel-header">
            <h3>Weekly Earnings</h3>
          </div>

          <div class="chart-area">

            <div class="chart-container">
              <apexchart type="bar" :options="options" :series="series" height="290" />
            </div>
          </div>

        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
:root {
  --bg: #0b0b0b;
  --panel-top: #1b1b1b;
  --panel-bottom: #151515;
  --muted: #9aa0a6;
  --accent: #f7c84a;
  --card-shadow: rgba(0, 0, 0, 0.62);
}

.page-wrap {
  background: var(--bg);
  padding: 24px 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}

.container-grid {
  width: 100%;
  max-width: 1180px;
  max-height: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 28px;
  align-items: start;
  box-sizing: border-box;
  color: #eaf0f2;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}

.panel {
  background: linear-gradient(180deg, var(--panel-top), var(--panel-bottom));
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 12px 32px var(--card-shadow), inset 0 1px 0 rgba(255, 255, 255, 0.02);
  border: 1px solid #333;
  background-color: #1a1a1a;
}

.schedule {
  grid-row: span 2;
  height: 57.5vh;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.panel-header h2,
.panel-header h3 {
  margin: 0;
  font-size: 18px;
  color: #fff;
}

.view-all {
  color: #f5a623;
  text-decoration: none;
  font-size: 13px;
}

.schedule-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.schedule-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #292929;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #333;
  transition: transform .12s ease, box-shadow .12s ease;
}

.schedule-item:hover {
  border: 1px solid #FBBD23;
}

.si-left {
  display: flex;
  gap: 12px;
  align-items: center;
}

.imgz img {
  width: 20px;
  height: 15px;
  display: flex;
}

.imgz{
  width: 20px;
  height: 25px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.si-name {
  font-weight: 700;
  color: #fff;
}

.si-service {
  font-size: 13px;
  color: var(--muted);
  margin-top: 10px;
}

.si-right {
  text-align: right;
  min-width: 84px;
}

.si-time {
  font-weight: 800;
  color: #f5a623;
}

.si-duration {
  font-size: 10px;
  color: var(--muted);
  font-weight: 100;
}

.right-column {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.summary-cards {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
}

.small-card {
  flex: 1;
  padding: 12px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.015);
  display: flex;
  flex-direction: column;
}

.card-value p {
  color: #f5a623;
}

.card-label {
  font-size: 13px;
  color: var(--muted);
  margin-bottom: 6px;
}

.card-value {
  font-size: 20px;
  font-weight: 800;
  color: var(--accent);
}

.card-value.red {
  color: #ff7b7b;
}

.card-sub {
  font-size: 12px;
  color: var(--muted);
  margin-top: 6px;
}

.btn {
  padding: 10px 14px;
  border-radius: 10px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.55);
}

.chart-container {
  height: 290px;
}

@media (max-width: 1000px) {
  .container-grid {
    grid-template-columns: 1fr;
    width: 100%;
    margin-bottom: 15vh;
  }

  .y-axis {
    display: none;
  }

  .schedule {
  }
}
</style>
