{
  const submitBtn = document.querySelector('#submit');
  async function getRequest(){
    const requestJokes = await fetch("https://icanhazdadjoke.com/slack");
    if(requestJokes.status !== 200){
      throw new Error("Can't find new Joke");
    }
    const eachJokes = await requestJokes.json();
    return eachJokes;
  }
  getRequest().then((value) => {
    const list = document.getElementById('text');
    list.innerHTML = `<li class="list-group-item lead rounded shadow-sm d-flex justify-content-between">${value.attachments[0]["text"]}
    <button class="btn btn-warning text-white btn-sm">
        Report Joke
    </button>
    </li>`;
    submitBtn.addEventListener('click', function(){
      setTimeout(location.reload(), 60);
    })
  }).catch(function(err){
    const list = document.getElementById('text');
    list.innerHTML = `<li class="list-group-item rounded lead d-flex justify-content-between">${err.message}
    <button class="btn btn-danger text-white btn-sm" id="submit">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
          class="mb-1 bi bi-arrow-repeat" viewBox="0 0 16 16">
          <path
              d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
          <path fill-rule="evenodd"
              d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
      </svg>
        Reload Page
    </button>
    </li>`;
    submitBtn.addEventListener('click', function(){
      setTimeout(location.reload(), 60);
    })
  });
}