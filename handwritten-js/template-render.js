const render = function (template, data) {
    return template.replace(/{{\s*?(\w+)\s*?}}/g, (match, key) => {
        return key && data.hasOwnProperty(key) ? data[key] : ''
    })
}

const data = {
    name: 'xxx',
    age: 10
}

const template = `
  I am {{ name }}, {{ age }} years old.
`

console.log(render(template, data))