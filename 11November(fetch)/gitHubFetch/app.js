let form = document.querySelector("#form");
let wrapper = document.querySelector(".wrapper");
form.addEventListener("submit",function(e){
    e.preventDefault();
    let username = document.querySelector(".form-control").value;
    fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
        if (data.id) {
            wrapper.innerHTML = `<div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${data.avatar_url}" alt="${data.login}">
            <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              <p class="card-text">${data.bio}</p>
              <a href="${data.html_url}" target="_blank" class="btn btn-primary">Account of ${data.login}</a>
            </div>
          </div>`
    
          document.querySelector(".form-control").value = "";
        }
        else{
            wrapper.innerHTML = `<div class="text-danger">Not Found!</div>`
        }
    })
})