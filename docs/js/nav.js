const div = document.getElementById('navigation-pannel');
const margin = document.getElementById('margin-pannel');
const fields = div.querySelectorAll('.navigation-field');
let expanded = false;

document.addEventListener('click', (e) => {
    if(expanded && e.clientX > window.innerHeight * 0.40 + 10){
    ChangeE();
  }
});

const ChangeE = () => {
  expanded = !expanded;
  if(!expanded)
  {
    fields.forEach((f, i) => {
      f.classList.remove('show');
    });
  
    setTimeout(() => {
      div.classList.toggle('expanded');
      margin.classList.toggle('expanded');
    }, 200)
  }
  else {
    div.classList.toggle('expanded');
    margin.classList.toggle('expanded');
  }
  if(expanded){
    // Fade in après la transition de taille
    fields.forEach((f, i) => {
    setTimeout(() => {
      f.classList.add('show');
    }, (i + 0.5) * 200) // correspond à la durée de transition
    });
  } else {

  }
};


ChangeE();
