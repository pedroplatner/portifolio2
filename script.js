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



/////////////////////////////informações de cada linguagem//////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
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

////////////////// Função para alternar a visibilidade das hotspots ao clicar////////////////////////////////
function toggleHotspotVisibility(event) {
  event.target.classList.toggle('active');
}

document.querySelectorAll('.hotspot').forEach(function(hotspot) {
  hotspot.addEventListener('click', toggleHotspotVisibility);
});

const title = document.getElementById("info-title");
  const text = document.getElementById("info-text");

  function atualizarTextoPorTamanhoDeTela() {
    if (window.matchMedia("(max-width: 768px)").matches) {
      // Mobile
      title.textContent = "CLIQUE NAS LINGUAGENS";
      text.textContent = "";
    } else {
      // Desktop
      title.textContent = "PASSE O MOUSE";
      text.textContent = "SOBRE UMA LINGUAGEM";
    }
  }
  atualizarTextoPorTamanhoDeTela();
  window.addEventListener("resize", atualizarTextoPorTamanhoDeTela);



  


