<script setup lang="ts">
import subManagerOverview from '@/assets/images/sub-1.png'
import subManagerPayments from '@/assets/images/sub-2.png'
import subManagerRecords from '@/assets/images/sub-3.png'
import subManagerCalendar from '@/assets/images/sub-4.png'
import subManagerAnalytics from '@/assets/images/sub-5.png'

const subManagerWorks = [
  {
    image: subManagerOverview,
    alt: 'SubManager 訂閱服務總覽',
  },
  {
    image: subManagerPayments,
    alt: 'SubManager 付款方式管理',
  },
  {
    image: subManagerRecords,
    alt: 'SubManager 扣款紀錄管理',
  },
  {
    image: subManagerCalendar,
    alt: 'SubManager 扣款日曆',
  },
  {
    image: subManagerAnalytics,
    alt: 'SubManager 支出分析',
  },
]

const coreFeatures = [
  {
    title: '訂閱管理',
    description: '新增、編輯、暫停、恢復、取消及刪除訂閱。',
  },
  {
    title: '搜尋與篩選',
    description: '依名稱、分類及訂閱狀態篩選，並支援金額、名稱與扣款日排序。',
  },
  {
    title: '多幣別換算',
    description: '支援 TWD、USD、JPY，可切換主要結算幣別。',
  },
  {
    title: '匯率容錯',
    description: '定期取得並快取匯率；外部服務失效時使用資料庫快取或內建備援匯率。',
  },
  {
    title: '支出儀表板',
    description: '顯示本月預估支出、活躍訂閱數及未來七天扣款時間軸。',
  },
  {
    title: '開銷分析',
    description: '呈現本月實際支出、分類占比、12 個月支出預測與主要開銷分類。',
  },
  {
    title: '扣款日曆',
    description: '以月曆查看每筆訂閱扣款日與免費試用到期日。',
  },
  {
    title: '付款方式管理',
    description: '管理信用卡、銀行帳戶、數位錢包等顯示資訊，並設定預設付款方式。',
  },
  {
    title: '扣款紀錄管理',
    description: '記錄待扣款、已付款、失敗、略過及退款狀態；付款完成後自動推進下次扣款日。',
  },
  {
    title: '通知提醒',
    description: '可設定扣款與試用到期提醒、通知信箱及提前提醒天數。',
  },
  {
    title: '自動化排程',
    description: '每日掃描提醒事件、失敗重試及選配 Resend Email 寄送。',
  },
  {
    title: '響應式介面',
    description: '支援桌面、平板及手機版面。',
  },
]
</script>

<template>
  <main class="submanager-detail">
    <section class="submanager-detail__intro section-shell">
      <p class="submanager-detail__eyebrow">SELECTED WORKS</p>

      <div class="submanager-detail__heading">
        <h1>SubManager<em>.</em></h1>
        <p>訂閱服務大管家</p>
      </div>
    </section>

    <section
      class="submanager-detail__visual section-shell"
      aria-label="SubManager 系統畫面"
    >
      <figure v-for="work in subManagerWorks" :key="work.alt">
        <img :src="work.image" :alt="work.alt" />
      </figure>
    </section>

    <section class="submanager-detail__overview section-shell">
      <p class="submanager-detail__eyebrow">PROJECT OVERVIEW</p>

      <div class="submanager-detail__overview-grid">
        <p>
          SubManager 訂閱服務大管家是一套全端訂閱管理系統，協助使用者集中管理訂閱服務、付款方式、扣款紀錄與到期提醒。系統支援多幣別換算、支出分析及扣款日曆，讓使用者快速掌握每月固定支出，避免忘記取消免費試用或產生意外扣款。
        </p>

        <dl>
          <div>
            <dt>CATEGORY</dt>
            <dd>Full-stack web application</dd>
          </div>
          <div>
            <dt>SCOPE</dt>
            <dd>UI design and full-stack development</dd>
          </div>
          <div>
            <dt>YEAR</dt>
            <dd>2026</dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="submanager-detail__features section-shell">
      <p class="submanager-detail__eyebrow">CORE FEATURES</p>

      <ol class="submanager-detail__feature-list">
        <li v-for="(feature, index) in coreFeatures" :key="feature.title">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <div>
            <h2>{{ feature.title }}</h2>
            <p>{{ feature.description }}</p>
          </div>
        </li>
      </ol>
    </section>

    <footer class="submanager-detail__footer section-shell">
      <RouterLink
        :to="{ name: 'home', hash: '#works' }"
        class="submanager-detail__back"
      >
        ← Back to home
      </RouterLink>
      <span>JESSIE LIN / SUBMANAGER</span>
    </footer>
  </main>
</template>

<style scoped>
.submanager-detail {
  min-height: 100vh;
  padding: 0 0 clamp(3rem, 6vw, 5rem);
  overflow: clip;
  background: var(--paper);
  color: var(--ink);
}

.submanager-detail__intro {
  padding-top: clamp(10rem, 14vw, 13rem);
  margin-bottom: clamp(3.5rem, 7vw, 6.75rem);
}

.submanager-detail__eyebrow,
.submanager-detail__footer {
  color: #888;
  font-family: Inter, 'Noto Sans TC', sans-serif;
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  line-height: 1.4;
  text-transform: uppercase;
}

.submanager-detail__eyebrow {
  margin: 0;
}

.submanager-detail__heading {
  width: min(100%, 43rem);
  margin: -1.15rem auto 0;
}

.submanager-detail__heading h1 {
  margin: 0;
  color: #444;
  font-family: 'Cormorant Garamond', 'Noto Serif TC', serif;
  font-size: clamp(2.66rem, 4vw, 5.2rem);
  font-weight: 400;
  letter-spacing: 0.03em;
  line-height: 0.88;
}

.submanager-detail__heading h1 em {
  color: #d185a3;
  font-weight: 400;
}

.submanager-detail__heading p {
  margin: 1.75rem 0 0;
  color: #666;
  font-size: 0.94rem;
  letter-spacing: 0.06em;
}

.submanager-detail__visual {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1rem, 2vw, 1.5rem);
  max-width: 80rem;
}

.submanager-detail__visual figure {
  margin: 0;
}

.submanager-detail__visual img {
  display: block;
  width: 100%;
  height: auto;
}

.submanager-detail__overview {
  margin-top: clamp(3.5rem, 7vw, 6rem);
}

.submanager-detail__overview-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(14rem, 0.55fr);
  gap: clamp(3rem, 12vw, 13rem);
  margin: clamp(2rem, 4vw, 3.5rem) 0 clamp(1rem, 2vw, 1.75rem);
  padding-left: min(17vw, 13rem);
}

.submanager-detail__overview-grid > p {
  max-width: 42rem;
  margin: 0;
  color: #444;
  font-size: clamp(0.95rem, 1.75vw, 1rem);
  line-height: 1.9;
}

.submanager-detail__overview dl {
  display: grid;
  gap: 2rem;
  margin: 0;
}

.submanager-detail__overview dt {
  color: #888;
  font-size: 0.66rem;
  letter-spacing: 0.15em;
}

.submanager-detail__overview dd {
  margin: 0.65rem 0 0;
  color: #444;
  font-family: 'Cormorant Garamond', 'Noto Serif TC', serif;
  font-size: clamp(1.2rem, 2vw, 1.65rem);
  line-height: 1.2;
}

.submanager-detail__features {
  margin-bottom: clamp(7rem, 13vw, 12rem);
}

.submanager-detail__feature-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: clamp(1.5rem, 3vw, 3rem);
  margin: clamp(1.75rem, 3vw, 3rem) 0 0;
  padding: 0 0 0 min(17vw, 13rem);
  list-style: none;
}

.submanager-detail__feature-list li {
  display: grid;
  grid-template-columns: 2rem minmax(0, 1fr);
  gap: clamp(0.6rem, 1vw, 1rem);
  padding: clamp(0.85rem, 1.4vw, 1.15rem) 0;
}

.submanager-detail__feature-list li > span {
  padding-top: 0.25rem;
  color: #d185a3;
  font-family: Inter, 'Noto Sans TC', sans-serif;
  font-size: 0.64rem;
  font-weight: 600;
  letter-spacing: 0.12em;
}

.submanager-detail__feature-list h2 {
  margin: 0;
  color: #444;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  line-height: 1.5;
}

.submanager-detail__feature-list p {
  margin: 0.35rem 0 0;
  color: #777;
  font-size: 0.82rem;
  letter-spacing: 0.02em;
  line-height: 1.85;
}

.submanager-detail__footer {
  display: flex;
  justify-content: space-between;
  padding-top: 1.4rem;
  border-top: 1px solid rgba(68, 68, 68, 0.2);
}

.submanager-detail__back {
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;
}

.submanager-detail__back::after {
  display: block;
  width: 8rem;
  margin-top: 0.7rem;
  border-bottom: 1px solid #444;
  content: '';
}

@media (max-width: 700px) {
  .submanager-detail__intro {
    padding-top: 9rem;
    margin-bottom: 3.25rem;
  }

  .submanager-detail__heading {
    width: 100%;
    margin: 2rem 0 0;
  }

  .submanager-detail__overview-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    margin-top: 2rem;
    margin-bottom: 3.5rem;
    padding-left: 0;
  }

  .submanager-detail__feature-list {
    grid-template-columns: 1fr;
    margin-left: 0;
    padding-left: 0;
  }

  .submanager-detail__footer {
    align-items: flex-start;
    flex-direction: column;
    gap: 1.5rem;
  }

  .submanager-detail__visual {
    grid-template-columns: 1fr;
  }
}
</style>
