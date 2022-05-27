const extraInfoForm = document.querySelector('.extraInfoForm');
const chkAll = document.getElementById('chkAll');
const deleteBtn = document.querySelector('i');
const welcomePage = document.querySelector('.welcome');

//오타방지
const USERNAME_KEY = 'username';

//유저네임 입력시 이름 로컬저장소에 저장, 미입력시 랜덤숫자를 유저네임으로 저장
function saveUsername() {
  const userName = document.querySelector('#floatingUsername');
  if (userName.value === '') {
    localStorage.setItem(USERNAME_KEY, new Date().getMilliseconds());
  } else {
    localStorage.setItem(USERNAME_KEY, userName.value);
  }
}
const welcomeMsg = document.createElement('h1');

//웰컴 페이지 프린트
function printWelcom() {
  const subPage = document.querySelector('.sub');
  subPage.classList.add(HIDDEN_CLASS);
  signUpPage.classList.add(HIDDEN_CLASS);
  welcomePage.classList.remove(HIDDEN_CLASS);
  welcomeMsg.innerText = `Welcome ${localStorage.getItem(USERNAME_KEY)}!`;
  welcomePage.appendChild(welcomeMsg);
}

//prevent submit
function handleExtraInfoFormSubmit(event) {
  event.preventDefault();
  saveUsername();
  printWelcom();
  location.reload();
  //페이지 새로고침(가입 완료와 동시에 배경사진 바뀌게 하고싶음)
}
extraInfoForm.addEventListener('submit', handleExtraInfoFormSubmit);

//전체체크 누르면 장르 모두 선택
function handleChkAllBtnClick() {
  const genreChks = document.querySelectorAll('[value^=option]');
  genreChks.forEach((e) => (e.checked = chkAll.checked));
}

chkAll.addEventListener('click', handleChkAllBtnClick);

//회원탈퇴(로컬 저장소에서 유저네임 삭제)
function handledeleteAcount() {
  localStorage.removeItem(USERNAME_KEY);
  welcomePage.classList.add(HIDDEN_CLASS);
  signUpPage.classList.remove(HIDDEN_CLASS);
  location.reload();
}

deleteBtn.addEventListener('click', handledeleteAcount);

//로컬저장소에 이미 가입한 기록 있으면 웰컴페이지, 아니면 회원가입 페이지 출력
if (localStorage.getItem(USERNAME_KEY)) {
  printWelcom();
}
