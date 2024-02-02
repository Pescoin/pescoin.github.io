'use strict';

// 프로젝트 필터링 관련 로직 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');
categories.addEventListener('click', (event) => {
  const filter = event.target.dataset.category;
  if (filter == null) {
    return;
  }

  handleActiveSelection(event.target);
  filterProjects(filter);
});

function handleActiveSelection(target) {
  // Active 메뉴를 재설정
  const active = document.querySelector('.category--selected');
  active.classList.remove('category--selected');
  event.target.classList.add('category--selected');
}

function filterProjects(filter) {
  // 프로젝트 필터링
  projectsContainer.classList.add('anim-out');
  projects.forEach((project) => {
    console.log(project.dataset.type);
    if (filter === 'all' || filter === project.dataset.type) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
  setTimeout(() => {
    projectsContainer.classList.remove('anim-out');
  }, 250);
}

// const categoryAll = document.querySelector('.category__all');
// const categoryFront = document.querySelector('category__front');
// const categoryBack = document.querySelector('category__back');
// const categoryMobile = document.querySelector('category__mobile');

// const project = document.querySelector('.project');
// const projectFront = document.querySelector('.project__front');
// const projectBack = document.querySelector('.project__back');
// const projectMobile = document.querySelector('.project__Mobile');
// const projects = document.querySelector('.projects');

// categoryAll.addEventListener('click', () => {
//   console.log('all');
// });

// categoryFront.addEventListener('click', () => {
//   projectFront.style.opacity = 0;
// });
