const loadingJoke = async () => {
  try{
    const res = await fetch('https://api.chucknorris.io/jokes/random', {
      headers: {
        Accept: 'application/json'
      }
    });
    
    const jokeData = await res.json();
    document.getElementById('loadJokes').innerHTML = jokeData.value;
  }

  catch(error) {
    console.log(error)
  }
}

document.getElementById('loadingBtn').addEventListener("click", loadingJoke);