window.addEventListener('load', ()=> {

  // Отображение циферблата часов
  
  const p = document.getElementsByTagName('p');
  let delta = Math.PI * 2 / p.length;
  let angle = 0;
  
  for (let i = 0; i < p.length; i++) {
    p[i].style.position = 'absolute';
    p[i].style.left =  20 * Math.cos(angle) + 'vh';
    p[i].style.top = 20 * Math.sin(angle) + 'vh';
    angle += delta;
  }
  
  // Работа|анимация стрелок часов

  const deg = 6;
  const hr = document.querySelector('#hr');
  const mn = document.querySelector('#mn');
  const sc = document.querySelector('#sc');
  
  setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    
    hr.style.transform = 'rotateZ(' + (hh+(mm/12)) + 'deg)';
    mn.style.transform = 'rotateZ(' + mm + 'deg)';
    sc.style.transform = 'rotateZ(' + ss + 'deg)';
  })
});
