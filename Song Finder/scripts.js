let term = '';
const songCont = document.getElementById('songs')

const updateTerm = () =>{
  term = document.getElementById('searchInput').value;
  if (!term || term === '') {
    alert('please enter a search term')
  }else{

    // while (songCont.firstChild) {
       //songCont.removeChild(songCont.firstChild);
    // }

    const url = `https://itunes.apple.com/search?limit=30&media=music&term=${term}`
fetch(url)
.then((response)=> response.json)
.then((data)=>{
   console.log(data);
  //const artists = data.results;
  // return artists.map( result =>{

  //   const article = document.createElement('article'),
  //   artist = document.createElement('p'),
  //   song = document.createElement('p'),
  //   img = document.createElement('img')
  //   audio = document.createElement('audio'),
  //   audioSrc = document.createElement('source')

  //   artist.innerHTML = result.artistName
  //   song.innerHTML = result.trackName
  //   img.src = result.artworkUrl100
  //   audioSrc.src = result.previewUrl
  //   audio.setArttribute('controls', '')

  //   article.appendChild(img)
  //   article.appendChild(artist)
  //   article.appendChild(song)
  //   article.appendChild(audio)
  //   audio.appendChild(audioSrc)
  //   songCont.appendChild(article)
  // })
})
.catch(error => console.log('request failed: /n', error))
  }
}

const searchBtn = document.querySelector('button')
searchBtn.addEventListener('click', updateTerm)

document.addEventListener('play', event =>{
  const audio = document.getElementsByTagName('audio');

  for (let i = 0; i < audio.length; i++) {
    if (audio[i] != event.target) {
      audio[i].pause();
    }
    
  }
}, true)
