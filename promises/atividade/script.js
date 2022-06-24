const BASE_URL = 'https://api.thecatapi.com/v1/images/search'
const imgGato = document.getElementById('img-gato')
const btnGato = document.getElementById('mudar-gato')
/*
const getCats = async () => {
  try {
    const data = await fetch(BASE_URL)
    const json = await data.json()
    return json[0].url
  } catch (e) {
    console.log(e.message)
  }
}
*/
const getCats = async () => {
  const data = await fetch(BASE_URL)
    .then(res => res.json())
    .catch(e => console.log(e))

  return data[0].url
}

const loadImg = async () => {
  imgGato.src = await getCats()
}

btnGato.addEventListener('click', loadImg)

loadImg()
