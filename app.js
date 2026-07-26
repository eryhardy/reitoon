/* =========================================
   REITOON GLOBAL APP SYSTEM V1
========================================= */


/* ================================
   DEFAULT USER
================================ */

const defaultUser = {

  loggedIn: false,

  name: "Reitoon Creator",

  email: "",

  phone: "",

  avatar: "",

  credit: 0,

  balance: 0

};


/* ================================
   USER SYSTEM
================================ */

function getUser() {

  const savedUser =
    localStorage.getItem("reitoon_user");

  if (!savedUser) {

    return defaultUser;

  }

  return JSON.parse(savedUser);

}


function saveUser(user) {

  localStorage.setItem(

    "reitoon_user",

    JSON.stringify(user)

  );

}


function isLoggedIn() {

  const user = getUser();

  return user.loggedIn === true;

}


function loginUser(data = {}) {

  const user = {

    ...getUser(),

    ...data,

    loggedIn: true

  };

  saveUser(user);

}


function logoutUser() {

  const user = getUser();

  user.loggedIn = false;

  saveUser(user);

  window.location.href =
    "login.html";

}


/* ================================
   CREDIT SYSTEM
================================ */

function getCredit() {

  const user = getUser();

  return Number(user.credit || 0);

}


function addCredit(amount) {

  const user = getUser();

  user.credit =
    Number(user.credit || 0)
    + Number(amount);

  saveUser(user);

}


function useCredit(amount) {

  const user = getUser();

  if (
    Number(user.credit || 0)
    < Number(amount)
  ) {

    showToast(
      "Credit AI tidak cukup"
    );

    return false;

  }

  user.credit -= Number(amount);

  saveUser(user);

  return true;

}


/* ================================
   BALANCE SYSTEM
================================ */

function getBalance() {

  const user = getUser();

  return Number(user.balance || 0);

}


function addBalance(amount) {

  const user = getUser();

  user.balance =
    Number(user.balance || 0)
    + Number(amount);

  saveUser(user);

}


function withdrawBalance(amount) {

  const user = getUser();

  amount = Number(amount);

  if (amount < 100000) {

    showToast(
      "Minimum penarikan adalah Rp100.000"
    );

    return false;

  }

  if (
    Number(user.balance || 0)
    < amount
  ) {

    showToast(
      "Saldo tidak mencukupi"
    );

    return false;

  }

  user.balance -= amount;

  saveUser(user);

  return true;

}


/* ================================
   STORY SYSTEM
================================ */

function getStories() {

  const stories =
    localStorage.getItem(
      "reitoon_stories"
    );

  if (!stories) {

    return [];

  }

  return JSON.parse(stories);

}


function saveStories(stories) {

  localStorage.setItem(

    "reitoon_stories",

    JSON.stringify(stories)

  );

}


function createStory(data) {

  const stories =
    getStories();

  const story = {

    id:
      Date.now(),

    ...data,

    createdAt:
      new Date().toISOString()

  };

  stories.push(story);

  saveStories(stories);

  return story;

}


function getStoryById(id) {

  const stories =
    getStories();

  return stories.find(

    story =>
      String(story.id)
      === String(id)

  );

}


/* ================================
   FORMAT MONEY
================================ */

function formatMoney(amount) {

  return new Intl.NumberFormat(

    "id-ID",

    {

      style: "currency",

      currency: "IDR",

      maximumFractionDigits: 0

    }

  ).format(amount);

}


/* ================================
   TOAST
================================ */

function showToast(message) {

  let toast =
    document.getElementById(
      "reitoonToast"
    );

  if (!toast) {

    toast =
      document.createElement(
        "div"
      );

    toast.id =
      "reitoonToast";

    toast.className =
      "toast";

    document.body.appendChild(
      toast
    );

  }

  toast.textContent =
    message;

  toast.classList.add(
    "show"
  );

  setTimeout(

    () => {

      toast.classList.remove(
        "show"
      );

    },

    2500

  );

}


/* ================================
   AUTH CHECK
================================ */

function requireLogin() {

  if (!isLoggedIn()) {

    window.location.href =
      "login.html";

    return false;

  }

  return true;

}
