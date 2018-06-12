const Treehouse = require('./Treehouse')

const template = (content) => {
  return `
    <div class="row">
      <div class="col">
        <div class="card-group justify-content-around">
          ${content}
        </div>
      </div>
    </div>
  `
}

const render = (container, treehouses) => {
  const treehousesHTML = treehouses.map(Treehouse.template).join('')
  container.innerHTML = template(treehousesHTML)
}

module.exports = {
  template,
  render
}
