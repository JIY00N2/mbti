import { results, mbtis } from "./data.js";

// 쿼리스트링
// https://127.0.0.~/results.html?mbti=isfj
const mbti = new URLSearchParams(location.search).get('mbti'); // isfj

const result = results[mbtis[mbti]];

const titleEl = document.querySelector('.page-title');
const characterEl = document.querySelector('.character');
const boxEls = document.querySelectorAll('.box');
const jobEls = document.querySelectorAll('.job');
const lectureEl = document.querySelector('.lecture');
const lectureImgEl = document.querySelector('.lecture img');

titleEl.innerHTML = result.title;
// 이미지태그는 src
characterEl.src = result.character;
// 여러개의 박스 처리 -> forEach와 인덱스 이용
boxEls.forEach(function(boxEl, index){
  boxEl.innerHTML = result.results[index];
});
// 여러개의 직업 처리 -> forEach와 인덱스 이용
jobEls.forEach(function(jobEl, index){
  jobEl.innerHTML = result.jobs[index];
})
// 링크 href
lectureEl.href = result.lectureUrl;
// 이미지태그는 src
lectureImgEl.src = result.lectureImg;