// Header에 페이지 아래로 스크롤시 다크 스타일링 적용

const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  console.log(window.scrollY);
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});

// Home 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;

document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Arrow up버튼을 아래로 스크롤시 투명하게 처리함

const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});

// 모바일 버전: 창의 크기가 모바일 크기가 되면 메뉴 사라지고 메뉴바가 나타남

// const headerMenu = document.querySelector('.header__menu');
// window.addEventListener('resize', () => {
//   if (window.innerWidth > 768) {
//     headerMenu.style.opacity = 0;
//   } else {
//     headerMenu.style.opacity = 1;
//   }

//   headerMenu.innerHTML = '';
// });

// Navbar 토글버튼 클릭 처리
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

//Navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌

navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open');
});
