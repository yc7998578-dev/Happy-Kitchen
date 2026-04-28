const tabItems = [
  {
    key: "home",
    text: "首页",
    icon: "./assets/ui/tabbar/icon-home.png",
    activeIcon: "./assets/ui/tabbar/icon-home-active.png",
  },
  {
    key: "theater",
    text: "剧场",
    icon: "./assets/ui/tabbar/icon-theater.png",
    activeIcon: "./assets/ui/tabbar/icon-theater-active.png",
  },
  {
    key: "explore",
    text: "探索",
    icon: "./assets/ui/tabbar/icon-explore.png",
    activeIcon: "./assets/ui/tabbar/icon-explore-active.png",
  },
  {
    key: "mall",
    text: "商城",
    icon: "./assets/ui/tabbar/icon-mall.png",
    activeIcon: "./assets/ui/tabbar/icon-mall-active.png",
  },
  {
    key: "mine",
    text: "我的",
    icon: "./assets/ui/tabbar/icon-mine.png",
    activeIcon: "./assets/ui/tabbar/icon-mine-active.png",
  },
];

const homeTabs = [
  { key: "all", label: "全部" },
  { key: "notice", label: "公告" },
  { key: "news", label: "新闻" },
  { key: "event", label: "活动" },
];

const homeNews = [
  {
    id: "news-1",
    tag: "notice",
    title: "页游联动福利丨不褪色的羁绊",
    desc: "你是几年小洛克？分享洛克报告领取称号和奖牌！",
    date: "03-03",
    top: true,
  },
  {
    id: "news-2",
    tag: "notice",
    title: "版本维护公告丨本周服务器维护安排",
    desc: "维护结束后将通过邮件发放补偿，请小洛克们注意查收。",
    date: "03-02",
  },
  {
    id: "news-3",
    tag: "notice",
    title: "活动提醒丨限定奖励领取倒计时",
    desc: "本周签到奖励即将截止，记得前往活动页完成领取。",
    date: "03-01",
  },
  {
    id: "news-4",
    tag: "news",
    title: "页游联动福利丨不褪色的羁绊",
    desc: "你是几年小洛克？分享洛克报告领取称号和奖牌！",
    date: "03-03",
  },
  {
    id: "news-5",
    tag: "news",
    title: "新地图前瞻丨神秘空岛即将开放",
    desc: "全新探索区域与彩蛋剧情上线，准备开启新的冒险旅程。",
    date: "03-02",
  },
  {
    id: "news-6",
    tag: "news",
    title: "剧情更新丨剧场篇章新增特别关卡",
    desc: "完成主线任务后即可解锁特别篇，收集限定纪念徽章。",
    date: "03-01",
  },
  {
    id: "news-7",
    tag: "event",
    title: "页游联动福利丨不褪色的羁绊",
    desc: "你是几年小洛克？分享洛克报告领取称号和奖牌！",
    date: "03-03",
  },
  {
    id: "news-8",
    tag: "event",
    title: "限时活动丨周末挑战赛火热开启",
    desc: "参与挑战赛累计积分，可兑换头像框与稀有装扮奖励。",
    date: "03-02",
  },
  {
    id: "news-9",
    tag: "event",
    title: "联动预热丨签到送限定厨神贴纸",
    desc: "活动期间连续登录即可领取贴纸、金币和主题装饰礼包。",
    date: "03-01",
  },
];

const gameCards = [
  {
    id: "game-glasses",
    title: "丸力全开",
    image: "./assets/ui/home/game-glasses.png",
    titleImage: "./assets/ui/home/game-title-left.png",
    gradient: "linear-gradient(180deg, #7CCCFA 0%, #C1F0FF 100%)",
    imageClass: "home__game-image home__game-image--glasses",
  },
  {
    id: "game-handle",
    title: "抢鲜派对",
    image: "./assets/ui/home/game-controller.png",
    titleImage: "./assets/ui/home/game-title-middle.png",
    gradient: "linear-gradient(180deg, #F5BBE2 0%, #FCEDFB 100%)",
    imageClass: "home__game-image",
  },
  {
    id: "game-cube",
    title: "欢乐厨房",
    image: "./assets/ui/home/game-cube.png",
    titleImage: "./assets/ui/home/game-title-right.png",
    gradient: "linear-gradient(180deg, #FCE881 0%, #F8F8C8 100%)",
    imageClass: "home__game-image home__game-image--cube",
  },
];

const theaterCards = Array.from({ length: 3 }, (_, index) => ({
  id: `card-${index + 1}`,
  date: "3月3日",
  title: "从小狗蛇、鲨猫到皮克斯新片“兽设”!她的萌物凭什么画一个爆一个?",
  stats: {
    video: "4080",
    like: "296",
    share: "32",
  },
}));

const exploreSections = [
  {
    key: "fresh",
    titleImage: "./assets/ui/explore/title-explore.png",
    label: "./assets/ui/explore/label-fresh.png",
    labelWidth: 77,
    base: "./assets/ui/explore/section-fresh-bottom.png",
    stamp: "./assets/ui/explore/stamp-fresh.png",
    stampLine: "./assets/ui/explore/stamp-line-fresh.png",
    number: "./assets/ui/explore/number-fresh.png",
    numberWidth: 54,
    numberTop: 130,
    pill: "./assets/ui/explore/pill-fresh.png",
    pillText: "./assets/ui/explore/pill-text-fresh.png",
    pillLeft: 47,
    pillTop: 170,
    pillWidth: 55,
    pillTextLeft: 47,
    pillTextTop: 180,
    pillTextWidth: 42,
    cards: Array.from({ length: 3 }, () => "./assets/ui/explore/card-fresh.png"),
  },
  {
    key: "lingzhou",
    label: "./assets/ui/explore/label-lingzhou.png",
    labelWidth: 77,
    base: "./assets/ui/explore/section-lingzhou-bottom.png",
    stamp: "./assets/ui/explore/stamp-lingzhou.png",
    stampLine: "./assets/ui/explore/stamp-line-lingzhou.png",
    number: "./assets/ui/explore/number-lingzhou.png",
    numberWidth: 39,
    numberTop: 80,
    numberClass: "explore__number explore__number--lingzhou",
    pill: "./assets/ui/explore/pill-lingzhou.png",
    pillText: "./assets/ui/explore/pill-text-lingzhou.png",
    pillLeft: 44,
    pillTop: 118,
    pillWidth: 52,
    pillTextLeft: 44,
    pillTextTop: 128,
    pillTextWidth: 40,
    cards: Array.from({ length: 8 }, () => "./assets/ui/explore/card-lingzhou.png"),
  },
  {
    key: "yaozhuan",
    label: "./assets/ui/explore/label-yaozhuan.png",
    labelWidth: 81,
    base: "./assets/ui/explore/section-yaozhuan-bottom.png",
    stamp: "./assets/ui/explore/stamp-yaozhuan.png",
    stampLine: "./assets/ui/explore/stamp-line-yaozhuan.png",
    number: "./assets/ui/explore/number-yaozhuan.png",
    numberWidth: 35,
    numberTop: 80,
    numberClass: "explore__number explore__number--yaozhuan",
    pill: "./assets/ui/explore/pill-yaozhuan.png",
    pillText: "./assets/ui/explore/pill-text-yaozhuan.png",
    pillLeft: 44,
    pillTop: 118,
    pillWidth: 55,
    pillTextLeft: 44,
    pillTextTop: 128,
    pillTextWidth: 41,
    cards: Array.from({ length: 12 }, () => "./assets/ui/explore/card-yaozhuan.png"),
  },
];

const mallCategories = [
  {
    base: "./assets/ui/mall/category-clothes.png",
    icon: "./assets/ui/mall/icon-clothes.png",
    label: "./assets/ui/mall/label-clothes.png",
    iconStyle: "left:-9px;bottom:-6px;width:66px;",
  },
  {
    base: "./assets/ui/mall/category-trendy.png",
    icon: "./assets/ui/mall/icon-trendy.png",
    label: "./assets/ui/mall/label-trendy.png",
    iconStyle: "left:-11px;bottom:-7px;width:56px;",
  },
  {
    base: "./assets/ui/mall/category-snack.png",
    icon: "./assets/ui/mall/icon-snack.png",
    label: "./assets/ui/mall/label-snack.png",
    iconStyle: "left:-3px;bottom:-7px;width:52px;",
  },
  {
    base: "./assets/ui/mall/category-blindbox.png",
    icon: "./assets/ui/mall/icon-blindbox.png",
    label: "./assets/ui/mall/label-blindbox.png",
    iconStyle: "left:-6px;bottom:-6px;width:49px;",
  },
];

const mallProductsLeft = [
  {
    image: "./assets/ui/mall/product-title-packaging.jpg",
    cardClass: "mall__product--packaging",
    title: "山海一味-花菇立体手账本",
    promoLabel: "盲盒秒杀",
    discount: "直降 7.5 元",
    price: "179",
    suffix: "券后",
    count: "2945",
  },
  {
    image: "./assets/ui/mall/product-lamp.jpg",
    cardClass: "mall__product--lamp",
    title: "花菇小夜灯",
    promoLabel: "盲盒秒杀",
    discount: "直降 7.5 元",
    price: "59.3",
    suffix: "",
    count: "1321",
  },
  {
    image: "./assets/ui/mall/product-doll.jpg",
    title: "山海一味-花菇懒人沙发",
    promoLabel: "盲盒秒杀",
    discount: "直降 7.5 元",
    price: "178",
    suffix: "券后",
    count: "2945",
  },
  {
    image: "./assets/ui/mall/product-pig.jpg",
    title: "山海一味-考呀呀毛绒抱抱包",
    promoLabel: "盲盒秒杀",
    discount: "直降 7.5 元",
    price: "59.3",
    suffix: "",
    count: "1321",
  },
];

const mallProductsRight = [
  {
    image: "./assets/ui/mall/product-title-hot.jpg",
    cardClass: "mall__product--blindbox",
    title: "山海一味-农场系列盲盒",
    promoLabel: "盲盒秒杀",
    discount: "直降 7.5 元",
    price: "59.3",
    suffix: "",
    count: "1321",
    detail: true,
  },
  {
    image: "./assets/ui/mall/product-clock.jpg",
    cardClass: "mall__product--clock",
    title: "荔枝章鱼 LED 时钟",
    promoLabel: "盲盒秒杀",
    discount: "直降 7.5 元",
    price: "178",
    suffix: "券后",
    count: "2945",
  },
  {
    image: "./assets/ui/mall/product-cup.jpg",
    title: "山海一味-荔枝陶瓷杯",
    promoLabel: "盲盒秒杀",
    discount: "直降 7.5 元",
    price: "59.3",
    suffix: "",
    count: "1321",
  },
  {
    image: "./assets/ui/mall/product-bag.jpg",
    title: "山海一味-椰香岛斜挎包",
    promoLabel: "盲盒秒杀",
    discount: "直降 7.5 元",
    price: "178",
    suffix: "券后",
    count: "2945",
  },
];

const mineMenus = [
  { icon: "./assets/ui/mine/menu-order.png", text: "订单中心" },
  { icon: "./assets/ui/mine/menu-gift.png", text: "邀请有礼" },
  { icon: "./assets/ui/mine/menu-7.png", text: "绑定手机号" },
  { icon: "./assets/ui/mine/menu-5.png", text: "微信绑定" },
  { icon: "./assets/ui/mine/menu-6.png", text: "设置" },
];

const state = {
  page: "home",
  newsTab: "all",
};

const pageContainer = document.getElementById("pageContainer");
const tabbar = document.getElementById("tabbar");
const toast = document.getElementById("toast");
const splash = document.getElementById("splash");
const splashVideo = document.getElementById("splashVideo");
let toastTimer = null;
let splashCanEnter = false;
let splashFallbackTried = false;

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1800);
}

function getActiveNewsList() {
  return state.newsTab === "all"
    ? homeNews
    : homeNews.filter((item) => item.tag === state.newsTab);
}

function homePage() {
  const newsItems = getActiveNewsList()
    .map(
      (item) => `
        <button class="home__news-item bounce" data-action="toast" data-message="${escapeHtml(item.title)}">
          <div class="home__thumb"></div>
          <div class="home__news-body">
            <div class="home__news-title-row">
              <div class="home__news-title">${escapeHtml(item.title)}</div>
              ${
                item.top
                  ? '<img class="home__news-badge" src="./assets/ui/badges/top.png" alt="置顶">'
                  : ""
              }
            </div>
            <div class="home__news-meta">
              <div class="home__news-desc">${escapeHtml(item.desc)}</div>
              <div class="home__news-date">${item.date}</div>
            </div>
          </div>
        </button>
      `
    )
    .join("");

  const tabs = homeTabs
    .map(
      (tab) => `
        <button
          class="home__tab bounce ${state.newsTab === tab.key ? "is-active" : ""}"
          data-action="news-tab"
          data-key="${tab.key}"
        >${tab.label}</button>
      `
    )
    .join("");

  const games = gameCards
    .map(
      (card) => `
        <button
          class="home__game bounce"
          style="background:${card.gradient};"
          data-action="toast"
          data-message="${escapeHtml(card.title)}即将上线"
        >
          <img class="${card.imageClass}" src="${card.image}" alt="${escapeHtml(card.title)}">
          <img class="home__game-title" src="${card.titleImage}" alt="${escapeHtml(card.title)}">
        </button>
      `
    )
    .join("");

  return `
    <section class="page page--main page--home home is-active">
      <div class="page__content home__hero">
        <div class="home__topbar">
          <img class="home__logo" src="./assets/ui/home/logo.png" alt="食空大冒险">
          <button class="home__search bounce" data-action="toast" data-message="搜索功能开发中">
            <img src="./assets/ui/home/search-bar.png" alt="搜索">
          </button>
          <button class="home__message bounce" data-action="toast" data-message="消息功能开发中">
            <img src="./assets/ui/home/message.png" alt="消息">
          </button>
        </div>

        <div class="home__banner">
          <div class="home__banner-main">
            <div class="home__dots">
              <span class="home__dot is-active"></span>
              <span class="home__dot"></span>
              <span class="home__dot"></span>
              <span class="home__dot"></span>
              <span class="home__dot"></span>
            </div>
          </div>
        </div>

        <div class="home__game-header">
          <button class="home__more bounce" data-action="toast" data-message="更多内容开发中">更多 &gt;</button>
        </div>

        <div class="home__games">${games}</div>

        <div class="home__news">
          <div class="home__tabs">${tabs}</div>
          <div>${newsItems}</div>
        </div>
      </div>
    </section>
  `;
}

function theaterPage() {
  const cards = theaterCards
    .map(
      (card) => `
        <article class="theater__card">
          <div class="theater__date">${card.date}</div>
          <button class="theater__screen bounce" data-action="toast" data-message="敬请期待">
            <img class="theater__play" src="./assets/ui/theater/play-button.png" alt="播放">
          </button>
          <div class="theater__headline">${escapeHtml(card.title)}</div>
          <div class="theater__actions">
            <button class="theater__action bounce" data-action="toast" data-message="敬请期待">
              <img src="./assets/ui/theater/action-video.png" alt="">
              <span>${card.stats.video}</span>
            </button>
            <button class="theater__action bounce" data-action="toast" data-message="敬请期待">
              <img src="./assets/ui/theater/action-like.png" alt="">
              <span>${card.stats.like}</span>
            </button>
            <button class="theater__action bounce" data-action="toast" data-message="敬请期待">
              <img src="./assets/ui/theater/action-share.png" alt="">
              <span>${card.stats.share}</span>
            </button>
          </div>
        </article>
      `
    )
    .join("");

  return `
    <section class="page page--main theater is-active">
      <div class="page__content">
        <div class="theater__title">剧场</div>
        <div class="theater__list">${cards}</div>
      </div>
    </section>
  `;
}

function explorePage() {
  const sections = exploreSections
    .map((section, index) => {
      const cards = section.cards
        .map((card) => `<img class="explore__card" src="${card}" alt="">`)
        .join("");

      return `
        <section class="explore__section">
          ${index === 0 ? '<img class="explore__title-image" src="./assets/ui/explore/title-explore.png" alt="探索">' : ""}
          <div style="${index === 0 ? "margin-top:19px;" : "margin-top:0;"}">
            <img class="explore__base" src="${section.base}" alt="">
            <img class="explore__label" style="width:${section.labelWidth}px;" src="${section.label}" alt="">
            <img class="explore__stamp" src="${section.stamp}" alt="">
            <img class="explore__stamp-line" src="${section.stampLine}" alt="">
            <img class="${section.numberClass || "explore__number"}" style="top:${section.numberTop || "65"}px;width:${section.numberWidth}px;" src="${section.number}" alt="">
            <img class="explore__pill" style="left:${section.pillLeft}px;top:${section.pillTop}px;width:${section.pillWidth}px;" src="${section.pill}" alt="">
            <img class="explore__pill-text" style="left:${section.pillTextLeft}px;top:${section.pillTextTop}px;width:${section.pillTextWidth}px;" src="${section.pillText}" alt="">
            <div class="explore__preview explore__preview--${section.key}">${cards}</div>
          </div>
        </section>
      `;
    })
    .join("");

  return `
    <section class="page page--main explore is-active">
      <div class="page__content">
        <div class="explore__sections">${sections}</div>
      </div>
    </section>
  `;
}

function renderMallProduct(item) {
  return `
    <button
      class="mall__product bounce ${item.cardClass || ""}"
      data-action="${item.detail ? "open-detail" : "toast"}"
      data-message="${item.detail ? "" : "敬请期待"}"
    >
      <img class="mall__product-image" src="${item.image}" alt="${escapeHtml(item.title)}">
      <div class="mall__product-body">
        <div class="mall__product-title">${escapeHtml(item.title)}</div>
        <div class="mall__product-promo">
          <span class="mall__promo-label">${item.promoLabel}</span>
          <span class="mall__promo-text">${item.discount}</span>
        </div>
        <div class="mall__product-footer">
          <div class="mall__price-group">
            <span class="mall__price">¥${item.price}</span>
            ${item.suffix ? `<span class="mall__price-suffix">${item.suffix}</span>` : ""}
          </div>
          <div class="mall__sales">
            <img src="./assets/ui/mall/product-cart.png" alt="">
            <span>${item.count}</span>
          </div>
        </div>
      </div>
    </button>
  `;
}

function mallPage() {
  const categories = mallCategories
    .map(
      (item) => `
        <div class="mall__category">
          <img class="mall__category-base" src="${item.base}" alt="">
          <img class="mall__category-icon" style="${item.iconStyle}" src="${item.icon}" alt="">
          <img class="mall__category-label" src="${item.label}" alt="">
        </div>
      `
    )
    .join("");

  return `
    <section class="page page--main mall is-active">
      <div class="page__content">
        <img class="mall__title-image" src="./assets/ui/mall/title-mall.png" alt="商城">

        <div class="mall__search">
          <img class="mall__search-bg" src="./assets/ui/mall/search-bg.png" alt="">
          <div class="mall__search-overlay">
            <img class="mall__scan" src="./assets/ui/mall/scan.png" alt="">
            <img class="mall__divider" src="./assets/ui/mall/search-divider.png" alt="">
            <div class="mall__search-text">山海一味系列盲盒</div>
            <img class="mall__camera" src="./assets/ui/mall/camera.png" alt="">
            <div class="mall__search-button">
              <img src="./assets/ui/mall/search-button-bg.png" alt="">
              <span>搜索</span>
            </div>
          </div>
        </div>

        <div class="mall__preview">
          <div class="mall__preview-main"></div>
          <div class="mall__dots">
            <span class="mall__dot is-active"></span>
            <span class="mall__dot"></span>
            <span class="mall__dot"></span>
            <span class="mall__dot"></span>
            <span class="mall__dot"></span>
          </div>
        </div>

        <div class="mall__categories">${categories}</div>

        <div class="mall__coupon">
          <img class="mall__coupon-frame" src="./assets/ui/mall/coupon-frame.png" alt="">
          <div class="mall__coupon-overlay">
            <img class="mall__coupon-speaker" src="./assets/ui/mall/coupon-speaker.png" alt="">
            <div class="mall__coupon-title">超级鲜鲜团</div>
            <img class="mall__coupon-divider" src="./assets/ui/mall/coupon-divider.png" alt="">
            <div class="mall__coupon-text">您有积分加补卷限时可领</div>
            <img class="mall__coupon-tag" src="./assets/ui/mall/coupon-tag.png" alt="领券">
          </div>
        </div>

        <div class="mall__products">
          <div class="mall__product-column">
            ${mallProductsLeft.map(renderMallProduct).join("")}
          </div>
          <div class="mall__product-column">
            ${mallProductsRight.map(renderMallProduct).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function minePage() {
  const menus = mineMenus
    .map(
      (item, index) => `
        <button class="mine__menu-item bounce" data-action="toast" data-message="敬请期待">
          <img class="mine__menu-icon" src="${item.icon}" alt="">
          <div class="mine__menu-text">${item.text}</div>
          <img class="mine__menu-arrow" src="./assets/ui/mine/menu-arrow.png" alt="">
        </button>
        ${
          index === mineMenus.length - 1
            ? ""
            : '<img class="mine__menu-divider" src="./assets/ui/mine/menu-divider.png" alt="">'
        }
      `
    )
    .join("");

  return `
    <section class="page page--main mine is-active">
      <div class="page__content">
        <img class="mine__title-image" src="./assets/ui/mine/title-mine.png" alt="我的">

        <div class="mine__profile">
          <img class="mine__profile-bg" src="./assets/ui/mine/profile-bg.png" alt="">
          <div class="mine__profile-overlay">
            <div class="mine__avatar-wrap">
              <img class="mine__avatar" src="./assets/ui/mine/profile-avatar.png" alt="">
              <img class="mine__gender" src="./assets/ui/mine/profile-gender.png" alt="">
            </div>
            <div class="mine__meta">
              <div class="mine__name">阿布蚊子</div>
              <img class="mine__level" src="./assets/ui/mine/profile-level.png" alt="等级">
              <div class="mine__id">ID:455013034</div>
            </div>
          </div>
        </div>

        <div class="mine__stats">
          <div class="mine__stat">
            <img class="mine__stat-frame" src="./assets/ui/mine/stats-frame.png" alt="">
            <img class="mine__stat-visual" style="width:54px;" src="./assets/ui/mine/stats-coins-icon.png" alt="">
            <div class="mine__stat-overlay">
              <div class="mine__stat-value">252</div>
              <div class="mine__stat-text" style="position:absolute;top:35px;">金币</div>
            </div>
          </div>

          <div class="mine__stat">
            <img class="mine__stat-frame" src="./assets/ui/mine/stats-frame.png" alt="">
            <img class="mine__stat-visual" style="width:49px;left:-5px;bottom:-1px;" src="./assets/ui/mine/stats-trophy.png" alt="">
            <div class="mine__stat-overlay">
              <div class="mine__stat-row">
                <img style="width:33px;" src="./assets/ui/mine/stats-48.png" alt="48">
                <img style="width:11px;margin-top:5px;margin-left:2px;" src="./assets/ui/mine/stats-percent.png" alt="%">
              </div>
              <div class="mine__stat-text" style="position:absolute;top:35px;">胜率</div>
            </div>
          </div>

          <div class="mine__stat">
            <img class="mine__stat-frame" src="./assets/ui/mine/stats-frame.png" alt="">
            <img class="mine__stat-visual" style="width:50px;left:-5px;bottom:-1px;" src="./assets/ui/mine/stats-hourglass.png" alt="">
            <div class="mine__stat-overlay">
              <div class="mine__stat-row">
                <img style="width:30px;" src="./assets/ui/mine/stats-duration.png" alt="100">
                <img style="width:7px;margin-top:6px;margin-left:2px;" src="./assets/ui/mine/stats-h.png" alt="h">
              </div>
              <div class="mine__stat-text" style="position:absolute;top:35px;">时长</div>
            </div>
          </div>
        </div>

        <div class="mine__menu">${menus}</div>
      </div>
    </section>
  `;
}

function detailPage() {
  return `
    <section class="page page--detail detail is-active">
      <div class="detail__float">
        <button class="detail__back bounce" data-action="back-mall">
          <img src="./assets/ui/mall-detail/back-button.png" alt="返回">
        </button>
        <div class="detail__top-actions">
          <button class="detail__top-action bounce" data-action="toast" data-message="敬请期待">
            <img src="./assets/ui/mall-detail/share-button.png" alt="分享">
          </button>
          <button class="detail__top-action bounce" data-action="toast" data-message="敬请期待">
            <img src="./assets/ui/mall-detail/cart-button.png" alt="购物车">
          </button>
        </div>
      </div>

      <div class="detail__content">
        <div class="detail__hero">
          <img src="./assets/ui/mall-detail/hero-image.jpg" alt="商品图">
        </div>

        <section class="detail__summary">
          <div class="detail__price-row">
            <span class="detail__price-symbol">¥</span>
            <span class="detail__price-value">59.3</span>
            <span class="detail__price-unit">¥ 1/盒</span>
          </div>
          <div class="detail__title">山海一味 Sea Mountain Flavor 农场系列盲盒 潮玩有趣盲盒</div>
          <div class="detail__desc">
            <span class="detail__desc-highlight">全国可配送</span>
            <span> | 高约 8.2-10.4cm，材质 PVC 包装：一款一盒包装 有概率抽中稀有隐藏款</span>
          </div>
        </section>

        <button class="detail__rank bounce" data-action="toast" data-message="敬请期待">
          <div class="detail__rank-left">
            <span class="detail__rank-fire">🔥</span>
            <span class="detail__rank-text">热度排行榜</span>
            <span class="detail__rank-top">TOP 1</span>
          </div>
          <span class="detail__rank-arrow">›</span>
        </button>

        <section class="detail__info">
          <div class="detail__info-row">
            <div class="detail__info-label">配送</div>
            <div class="detail__info-main">
              <img class="detail__info-view" src="./assets/ui/mall-detail/delivery-view.png" alt="">
              <div class="detail__info-text">福州市 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
            </div>
            <span class="detail__info-arrow">›</span>
          </div>
          <div class="detail__info-sub">立即下单，按时段预约，最快11:30送达</div>
          <div class="detail__info-row">
            <div class="detail__info-label">保障</div>
            <div class="detail__info-text" style="margin-left:7px;">支持7天无理由退货/商品完好标准</div>
            <span class="detail__info-arrow">›</span>
          </div>
        </section>

        <section class="detail__review">
          <div class="detail__review-head">
            <div class="detail__review-title">商品评价 <span class="detail__review-count">(1000+)</span></div>
            <div class="detail__review-rate">97.9%<small>好评率 ›</small></div>
          </div>
          <div class="detail__review-tags">
            <div class="detail__review-tag">商品品质好(26)</div>
            <div class="detail__review-tag">性价比高(21)</div>
          </div>
          <div class="detail__review-user">
            <img class="detail__review-avatar" src="./assets/ui/mall-detail/review-avatar.png" alt="">
            <div class="detail__review-main">
              <div class="detail__review-top">
                <div class="detail__review-name">阿布蚊子</div>
                <div class="detail__review-date">2026/4/18 发布于福建</div>
              </div>
              <img class="detail__review-stars" src="./assets/ui/mall-detail/review-star.png" alt="满星">
              <div class="detail__review-content">太幸运了，终于抽到了鼎鼎，做工精致没瑕疵，颜值和质感都在线，完全从超出预期，太满意啦！</div>
            </div>
          </div>
        </section>

        <img class="detail__heading" src="./assets/ui/mall-detail/detail-heading.png" alt="商品详情">

        <div class="detail__gallery">
          <img class="detail__long-image" src="./assets/ui/mall-detail/detail-1-baozi.png" alt="商品详情图1">
          <img class="detail__long-image" src="./assets/ui/mall-detail/detail-2-diaoyu.png" alt="商品详情图2">
          <img class="detail__long-image" src="./assets/ui/mall-detail/detail-3-jiaoshui.png" alt="商品详情图3">
          <img class="detail__long-image" src="./assets/ui/mall-detail/detail-4-nitu.png" alt="商品详情图4">
          <img class="detail__long-image" src="./assets/ui/mall-detail/detail-5-zhongshu.png" alt="商品详情图5">
          <img class="detail__long-image" src="./assets/ui/mall-detail/detail-6-pangxie.png" alt="商品详情图6">
        </div>
      </div>

      <div class="detail__footer">
        <button class="detail__favorite bounce" data-action="toast" data-message="敬请期待">
          <span class="detail__favorite-icon">☆</span>
          <span class="detail__favorite-text">收藏</span>
        </button>
        <button class="detail__action bounce" data-action="toast" data-message="敬请期待">加入购物车</button>
      </div>
    </section>
  `;
}

function renderPage() {
  switch (state.page) {
    case "theater":
      return theaterPage();
    case "explore":
      return explorePage();
    case "mall":
      return mallPage();
    case "mine":
      return minePage();
    case "mall-detail":
      return detailPage();
    case "home":
    default:
      return homePage();
  }
}

function renderTabbar() {
  if (state.page === "mall-detail") {
    tabbar.classList.add("is-hidden");
    tabbar.innerHTML = "";
    return;
  }

  tabbar.classList.remove("is-hidden");
  tabbar.innerHTML = tabItems
    .map((item) => {
      const active = item.key === state.page;
      return `
        <button class="tabbar__item" data-action="switch-page" data-key="${item.key}" aria-label="${item.text}">
          <img class="tabbar__icon" src="${active ? item.activeIcon : item.icon}" alt="${item.text}">
        </button>
      `;
    })
    .join("");
}

function renderApp() {
  pageContainer.innerHTML = renderPage();
  renderTabbar();
  pageContainer.scrollTop = 0;
  initExplorePreviewDrag();
}

function initExplorePreviewDrag() {
  const previews = pageContainer.querySelectorAll(".explore__preview");
  previews.forEach((preview) => {
    let isDragging = false;
    let startX = 0;
    let startScrollLeft = 0;

    const handlePointerMove = (event) => {
      if (!isDragging) return;
      const deltaX = event.clientX - startX;
      preview.scrollLeft = startScrollLeft - deltaX;
      event.preventDefault();
    };

    const endDrag = () => {
      if (!isDragging) return;
      isDragging = false;
      preview.classList.remove("is-dragging");
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerup", endDrag);
      document.removeEventListener("pointercancel", endDrag);
    };

    preview.addEventListener("pointerdown", (event) => {
      isDragging = true;
      startX = event.clientX;
      startScrollLeft = preview.scrollLeft;
      preview.classList.add("is-dragging");
      document.addEventListener("pointermove", handlePointerMove, { passive: false });
      document.addEventListener("pointerup", endDrag);
      document.addEventListener("pointercancel", endDrag);
    });

    preview.addEventListener("wheel", (event) => {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        preview.scrollLeft += event.deltaY;
        event.preventDefault();
      }
    }, { passive: false });
  });
}

function syncHashFromState() {
  const nextHash = `#${state.page}`;
  if (window.location.hash !== nextHash) {
    window.location.hash = nextHash;
  }
}

function setPage(page) {
  state.page = page;
  renderApp();
  syncHashFromState();
}

function resolveHash() {
  const value = window.location.hash.replace("#", "");
  const allowed = new Set(["home", "theater", "explore", "mall", "mine", "mall-detail"]);
  if (allowed.has(value)) {
    state.page = value;
  }
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;

  const action = target.dataset.action;
  if (action === "switch-page") {
    setPage(target.dataset.key);
    return;
  }

  if (action === "news-tab") {
    state.newsTab = target.dataset.key;
    renderApp();
    return;
  }

  if (action === "toast") {
    showToast(target.dataset.message || "敬请期待");
    return;
  }

  if (action === "open-detail") {
    setPage("mall-detail");
    return;
  }

  if (action === "back-mall") {
    setPage("mall");
  }
});

window.addEventListener("hashchange", () => {
  resolveHash();
  renderApp();
});

function initSplash() {
  if (splashVideo) {
    splashVideo.muted = true;
    splashVideo.addEventListener("error", () => {
      if (!splashFallbackTried) {
        splashFallbackTried = true;
        splashVideo.src = "./assets/intro/intro.mp4";
        splashVideo.load();
        const fallbackPromise = splashVideo.play();
        if (fallbackPromise && typeof fallbackPromise.catch === "function") {
          fallbackPromise.catch(() => {});
        }
        return;
      }
    });
    const playPromise = splashVideo.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {});
    }
  }

  setTimeout(() => {
    splashCanEnter = true;
  }, 8000);

  splash.addEventListener("click", () => {
    if (!splashCanEnter) return;
    splash.classList.remove("is-visible");
  });
}

resolveHash();
renderApp();
initSplash();
