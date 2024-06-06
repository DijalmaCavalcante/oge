function loadOthersHtml(elementoId, arquivo) {
  fetch(arquivo)
    .then(response => response.text())
    .then(data => {
      document.getElementById(elementoId).innerHTML = data
    })
    .catch(error => console.error('Erro ao carregar o arquivo:', error))
}

loadOthersHtml('dijalma', '../dijalma/index.html')
loadOthersHtml('cinthia', '../cinthia/index.html')