const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// Featured speakers
// TODO change the var name
const projects = [
  {
    src: './images/kingSalman.jpeg',
    title: 'King Salman Al Saud',
    headTitle: 'King of Saudi Arabia',
    description: 'A well-known investor.',
  },

  {
    src: './images/MBS.jpeg',
    title: 'Mohammed bin Salman',
    headTitle: 'A prince from a royal family.',
    description: 'A well-known investor.',
  },

  {
    src: './images/binTalal.jpeg',
    title: 'Al-Waleed bin Talal',
    headTitle: 'A prince from a royal family.',
    description: 'A well-known investor.',
  },

  {
    src: './images/amoudi.jpeg',
    title: 'Mohammed Hussein Al Amoudi',
    headTitle: 'A prince from a royal family.',
    description: 'A well-known investor.',
  },

  {
    src: './images/salehKamel.jpeg',
    title: 'Saleh Kamel',
    headTitle: 'A prince from a royal family.',
    description: 'A well-known investor.',
  },

  {
    src: './images/modelRoz.jpeg',
    title: 'Rawan Abdullah',
    headTitle: 'A model.',
    description: 'A well-known investor.',
  },
];

const speakers = document.querySelector('.speaers'); // TODO don't forget you misspelled here

// speakers.innerHTML += projects.map((item) => `<article class="row">
// <div class="col my-4">
// <img class="img-speakers" src="${item.src}" alt="A Saudi Prince">
// </div>
// <div class="col  my-4">
//   <h2>${item.title}</h2>
//   <p class="feature-text">${item.headTitle}</p>
//   <hr style="width: 13%; height: 3px; color: black; margin-bottom: 8%" />
//   <p class="fst-italic">${item.description}</p>
//   </div>
//   </article>`).join('');

// Desktop Featured speakers
const speakersDesktop = document.querySelector('.speakers-desktop');

const speakersDesktopSections = (projects) => {
  let allSections = '';
  for (let i = 0; i < projects.length; i += 1) {
    allSections += `<section class="mt-5">
  <div class="row">
  <div class="col-3">
  <img class="img-speakers" src="${projects[i].src}" alt="A Saudi Prince">
  </div>
  <div class="col-3">
  <h4>${projects[i].title}</h4>
    <p class="feature-text">${projects[i].headTitle}</p>
    <hr style="width: 13%; height: 3px; color: black; margin-bottom: 8%" />
    <p class="fst-italic">${projects[i].description}</p>
  </div>

 <div class="col-3">
 <img class="img-speakers" src="${projects[i + 1].src}" alt="A Saudi Prince">
 </div>
 <div class="col-3">
 <h4>${projects[i + 1].title}</h4>
   <p class="feature-text">${projects[i + 1].headTitle}</p>
   <hr style="width: 13%; height: 3px; color: black; margin-bottom: 8%" />
   <p class="fst-italic">${projects[i + 1].description}</p>
 </div>
 </div>
 </section>
`;
    i += 1;
  }
  return allSections;
};

// speakersDesktop.innerHTML += speakersDesktopSections(projects);
