const signUpForm = document.querySelector('.signUpForm');
const signUpPage = document.querySelector('.main');

//오타방지
const HIDDEN_CLASS = 'hidden';

//비밀번호 서로 맞는지 체크
function isPasswordCorrect() {
  const [pwd, pwdDoubleChk] = document.querySelectorAll('#floatingPassword');
  if (pwd.value !== pwdDoubleChk.value) {
    alert('password incorrect');
    pwdDoubleChk.value = '';
    return false;
  } else {
    return true;
  }
}

//회원가입 성공 후 추가 정보 입력란으로 가기
//새로고침 방지
function handlesignUpFormSubmit(event) {
  event.preventDefault();
  if (!isPasswordCorrect()) return; //비밀번호 체크
  const extraInfoPage = document.querySelector('.sub');
  signUpPage.classList.add(HIDDEN_CLASS);
  extraInfoPage.classList.remove(HIDDEN_CLASS);
}

signUpForm.addEventListener('submit', handlesignUpFormSubmit);
