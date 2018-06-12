const template = ({ img, title, description, contributor }) => {
  return `
    <div class="card m-3 border" style="min-width: 30%; max-width: 20%;">
      <div style="height: 200px; overflow: hidden;">
        <img class="card-img-top" src="${img}" alt="${title}" style="width: 100%;">
      </div>
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p>${description}</p>
      </div>
      <div class="card-footer text-muted">
        Added by <strong>${contributor}</strong>
      </div>
    </div>
  `
}

module.exports = {
  template
}
