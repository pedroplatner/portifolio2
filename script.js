const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

/////////////////////////////ESCREVENDO SOZINHO//////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
    const texto = "Transformando ideias em interfaces incríveis com código limpo e design moderno.";
    const elemento = document.getElementById("descricao");
    let index = 0;

    function digitar() {
        if (index < texto.length) {
            elemento.innerHTML += texto.charAt(index);
            index++;
            setTimeout(digitar, 70); // Velocidade da digitação (50ms)
        }
    }

    digitar();
});

/////////////////////////////ESTRELAS//////////////////////////////
const container = document.getElementById('estrelas');

for (let i = 0; i < 50; i++) {
  const estrela = document.createElement('div');
  estrela.classList.add('estrela');

  // Posição aleatória
  estrela.style.top = Math.random() * 100 + 'vh';
  estrela.style.left = Math.random() * 100 + 'vw';

  // Delay aleatório pra animação
  estrela.style.animationDelay = Math.random() * 2 + 's';

  container.appendChild(estrela);
}




document.addEventListener("DOMContentLoaded", function () {
  // Definir um objeto com as informações de cada linguagem
  const skillsInfo = {
      HTML: {
          title: "HTML",
          description: "HTML (HyperText Markup Language) é a linguagem de marcação padrão usada para criar páginas web. Ele descreve a estrutura e o conteúdo de uma página, como cabeçalhos, parágrafos, links e outros elementos.",
      },
      CSS: {
          title: "CSS",
          description: "CSS (Cascading Style Sheets) é usado para estilizar páginas HTML. Ele define como os elementos HTML são apresentados, incluindo layout, cores, fontes, espaçamento e muito mais.",
      },
      JavaScript: {
          title: "JavaScript",
          description: "JavaScript é uma linguagem de programação que permite criar páginas web interativas. Com JavaScript, você pode manipular elementos da página, fazer requisições assíncronas, e muito mais.",
      },
      Bootstrap: {
          title: "Bootstrap",
          description: "Bootstrap é um framework front-end que facilita o desenvolvimento de sites responsivos e modernos. Ele fornece componentes e classes pré-estilizadas que ajudam na criação de layouts rápidos.",
      }
  };

  const hotspots = document.querySelectorAll('.hotspot');
  const infoTitle = document.getElementById('info-title');
  const infoText = document.getElementById('info-text');

  hotspots.forEach(hotspot => {
      hotspot.addEventListener('mouseover', function () {
          // Pega o nome da habilidade de data-skill
          const skill = hotspot.getAttribute('data-skill');

          
          infoTitle.textContent = skillsInfo[skill].title;
          infoText.textContent = skillsInfo[skill].description;
      });

      hotspot.addEventListener('mouseout', function () {
          
          infoTitle.textContent = "PASSE O MOUSE";
          infoText.textContent = "SOBRE UMA LINGUAGEM";
      });
  });
});



  


