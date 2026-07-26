/* =========================================
REITOON DRAMA DATABASE
Dipakai bersama oleh:

- watch.html
- detail.html
  ========================================= */

const REITOON_TOTAL_VIDEOS = 500;

const REITOON_CATEGORIES = [
"romance",
"fantasy",
"wuxia",
"historical",
"modern"
];

const REITOON_ICONS = [
"❤️",
"✨",
"⚔️",
"🏯",
"🌸",
"🔥",
"🌙",
"💫",
"🐉",
"👑"
];

/*

VIDEO LEGAL

Tambahkan video yang:

- Milik Reitoon
- Public Domain
- CC0
- Memiliki izin redistribusi
- Memiliki lisensi yang sesuai

Jangan memasukkan URL video tanpa izin.
*/

const REITOON_LEGAL_VIDEOS = [

/*
CONTOH:

{
id: "legal-001",
title: "Judul Drama Legal",
category: "romance",
type: "licensed",
year: "2026",
episodes: 1,
rating: "⭐ 8.5",
icon: "❤️",
description: "Deskripsi drama.",
videoUrl: "URL_VIDEO_LEGAL",
posterUrl: "",
sourceUrl: "URL_SUMBER_ASLI",
license: "CC0 / Public Domain / Lisensi tertulis"
}

Jangan gunakan contoh ini sebelum URL dan lisensinya benar-benar valid.
*/

];

/* =========================================
BUAT KATALOG 500
========================================= */

const REITOON_GENERATED_CATALOG = [];

for(
let i = 1;
i <= REITOON_TOTAL_VIDEOS;
i++
){

const category =
REITOON_CATEGORIES[
(i - 1) %
REITOON_CATEGORIES.length
];

REITOON_GENERATED_CATALOG.push({

id:
  "reitoon-" +
  String(i).padStart(3,"0"),

title:
  "Chinese Drama Collection " +
  String(i).padStart(3,"0"),

category:
  category,

type:
  "free",

year:
  "Legal Catalog",

episodes:
  1,

rating:
  "⭐ " +
  (
    8 +
    ((i % 20) / 10)
  ).toFixed(1),

icon:
  REITOON_ICONS[
    (i - 1) %
    REITOON_ICONS.length
  ],

description:
  "Drama Asia dalam katalog Reitoon. Video hanya dapat ditayangkan apabila memiliki hak penggunaan atau izin redistribusi yang sesuai.",

/*
URL VIDEO KOSONG
sampai video legal dimasukkan
*/

videoUrl:
  "",

posterUrl:
  "",

sourceUrl:
  "",

license:
  "Belum diverifikasi"

});

}

/* =========================================
DATABASE UTAMA
========================================= */

const REITOON_DRAMAS = [

...REITOON_LEGAL_VIDEOS,

...REITOON_GENERATED_CATALOG

];

/* =========================================
FUNGSI DATABASE
========================================= */

function getReitoonDramaById(id){

return REITOON_DRAMAS.find(function(drama){

return drama.id === id;

});

}

function getReitoonDramasByCategory(category){

if(
!category ||
category === "all"
){

return REITOON_DRAMAS;

}

return REITOON_DRAMAS.filter(function(drama){

return drama.category === category;

});

}

function searchReitoonDramas(keyword){

const search =
String(keyword || "")
.toLowerCase()
.trim();

if(!search){

return REITOON_DRAMAS;

}

return REITOON_DRAMAS.filter(function(drama){

return (

  drama.title
  .toLowerCase()
  .includes(search)

  ||

  drama.category
  .toLowerCase()
  .includes(search)

  ||

  drama.description
  .toLowerCase()
  .includes(search)

);

});

}

function getReitoonRecommendations(
currentId,
limit = 5
){

return REITOON_DRAMAS

.filter(function(drama){

  return drama.id !== currentId;

})

.slice(0,limit);

}
