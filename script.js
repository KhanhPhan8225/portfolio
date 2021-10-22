async function getImage(){
  const URL = 'https://api.giphy.com/v1/gifs/random'
  const API_KEY = 'Nv6mvO4VUU9qils4LvpVKjgsNcgaCIqx'
  
  const FULL_URL = URL + '?api_key' + API_KEY + '&tag=happy-birthday'
  
  const result = await fetch(FULL_URL).then(res =>res.json())
  return result.data.image_url
}

async fuction run() {
  const image = await getImage()
  
  const img = document.querySelector("#sn")
  img.setAttribute('src', image)
}
  
  run()
