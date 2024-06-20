function loadOthersHtml(elementoId, arquivo, basePath) {
  fetch(arquivo)
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser()
      const doc = parser.parseFromString(data, 'text/html')
      
      const images = doc.querySelectorAll('img')
      images.forEach(img => {
        const src = img.getAttribute('src')
        if (src && !src.startsWith('http') && !src.startsWith('/')) {
          img.setAttribute('src', basePath + src)
        }
      })

      const links = doc.querySelectorAll('link[rel="stylesheet"]')
      links.forEach(link => {
        const href = link.getAttribute('href')
        if (href && !href.startsWith('http') && !href.startsWith('/')) {
          link.setAttribute('href', basePath + href)
        }
        document.head.appendChild(link)
      })

      document.getElementById(elementoId).innerHTML = doc.body.innerHTML
    })
    .catch(error => console.error('Erro ao carregar o arquivo:', error))
}

loadOthersHtml('header', '../header/index.html', '../header/')
