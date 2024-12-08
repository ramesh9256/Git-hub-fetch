let button = document.querySelector("button");
let container = document.querySelector(".container");
let output = document.querySelector(".box-output");

button.addEventListener("click", () => {
    let username = document.querySelector("input").value;
    let api = "https://api.github.com/users/";

    let API = api + username;

    fetch(API)
        .then(response => response.json())
        .then(data => {
            console.log(data);

           
            let avatar_url = data.avatar_url;
            let name = data.name;
            let followers = data.followers;
            let following = data.following;

            
            output.innerHTML = `
                <div class="box">
                    <img src="${avatar_url}" alt="">
                    <h1>${name}</h1>
                    <p>Followers: ${followers}</p>
                    <p>Following: ${following}</p>
                </div>
            `;
        })
        
});
