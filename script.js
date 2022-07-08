
/*-------------------- toggleSection --------------------*/
function toggleSection(section, li) {

  const sections = document.querySelectorAll('.show');
  const lis      = document.querySelectorAll('ul li');

  const currentsection = document.getElementById(section);
  const currentli      = document.getElementById(li); console.log(currentli);

  sections.forEach( section => {
    section.classList.remove('show');
  })

  lis.forEach( li => {
    li.classList.remove('current');
  })

  currentsection.classList.add('show');
  currentli.classList.add('current');
}



/*-------------------- toggleCollapsedMenu --------------------*/
function toggleCollapsedMenu() {

  const logo   = document.querySelector('.logo');
  const logout = document.querySelector('.logout');
  const aside  = document.querySelector('aside');
  const body   = document.querySelector('body');

  const items  = document.querySelectorAll('.menuitems span');
  const titles = document.querySelectorAll('.title');
  const users  = document.querySelectorAll('.user');

  logo.classList.toggle('collapsed');
  logout.classList.toggle('collapsed');
  aside.classList.toggle('collapsed');
  body.classList.toggle('collapsed');

  items.forEach( item => {
    item.classList.toggle('collapsed');
  })

  titles.forEach( title => {
    title.classList.toggle('collapsed');
  })

  users.forEach( user => {
    user.classList.toggle('collapsed');
  })
}