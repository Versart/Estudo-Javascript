function getAdmins(map) {
  let admins = []

  for ([key, value] of map) {
    if (value === 'Admin') {
      admins.push(key)
    }
  }
  return admins
}

let usuarios = new Map()

usuarios.set('Jayce', 'Admin')
usuarios.set('Tryndamare', 'User')
usuarios.set('Lux', 'Admin')

console.log(getAdmins(usuarios))
