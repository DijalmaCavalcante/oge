function loadOthersHtml(elementoId, arquivo, basePath) {
  fetch(arquivo)
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'text/html');
      const images = doc.querySelectorAll('img');
      images.forEach(img => {
        const src = img.getAttribute('src');
        if (src && !src.startsWith('http') && !src.startsWith('/')) {
          img.setAttribute('src', basePath + src);
        }
      });
      document.getElementById(elementoId).innerHTML = doc.body.innerHTML;
    })
    .catch(error => console.error('Erro ao carregar o arquivo:', error));
}

loadOthersHtml('dijalma', '../dijalma/index.html', '../dijalma/');
loadOthersHtml('cinthia', '../cinthia/index.html', '../cinthia/');
