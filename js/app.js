/* service worker registraion */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../serviceworker.js')
        .then(function () {
            console.log('Service Worker Registered');
        });
}

/* app script */

let titleText = document.querySelector('#titleText');
let navText = document.querySelector('#navText');
let err = document.querySelector('#err');

const input = document.querySelector("#search");
const btn = document.querySelector("#btn");
const main = document.querySelector("#div");

window.addEventListener('load', event => {
    const default_value = 'ManalLiaquat';
    myFollowers(default_value);
})
input.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        if (input.value !== '') {
            myFollowers(input.value);
            input.value = "";
        } else {
            alert('Please enter a username');
        }
    }
});
btn.addEventListener('click', e => {
    if (input.value !== '') {
        myFollowers(input.value);
        input.value = "";
    } else {
        alert('Please enter a username');
    }
})

// async function countFollowers(username) {
//     const res = await fetch(`https://api.github.com/users/${username}/followers`)
//     const json = await res.json();
//     return json.length;
// }
// async function countFollowings(username) {
//     const res = await fetch(`https://api.github.com/users/${username}/following`)
//     const json = await res.json();
//     return json.length;
// }
// async function countRepos(username) {
//     var res = await fetch(`https://api.github.com/users/${username}/repos`)
//     const json = await res.json();
//     return json.length;
// }

async function myFollowers(val) {

    const res = await fetch(`https://api.github.com/users/${val}/followers`)
    const json = await res.json();
    console.log(json);

    if (!(json.message)) {
        titleText.innerHTML = `${val}  | Github Followers`;
        navText.innerHTML = `${val}  | Github Followers`;
        err.innerHTML = '';
    } else {
        main.innerHTML = '';
        err.innerHTML = `THIS ID (${val}) IS NOT EXIST ON GITHUB.COM`
    }
    if (json.length === 0) {
        err.innerHTML = `THIS ID (${val}) DOESN'T HAVE FOLLOWERS`
    }

    // for (let i = 0; i < json.length; i++) {
    //     const followersRes = await fetch(json[i].followers_url);
    //     const followersJson = await followersRes.json();
    //     console.log(followersJson.length)   
    // }

    main.innerHTML = json.map((v, i) => {


        return `
        <div class="card" style="width: 18rem; margin:10px;">
            <img class="card-img-top" src="${v.avatar_url}" alt="Card image cap">
            <div class="card-body" style="padding:10px;">
                <h6 class="card-title">${v.login}</h6>
                <p class="card-text">UserID: ${v.id}</p>
                <p>
                    <a href="https://github.com/${v.login}?tab=followers" class="btn btn-link text-danger" title="Followers">
                        <i class="fa fa-users fa-sm"></i> <span class="badge badge-pill badge-dark">Followers</span>
                    </a>
                    <a href="https://github.com/${v.login}?tab=following" class="btn btn-link text-danger" title="Followings">
                        <i class="fa fa-user-check fa-sm"></i> <span class="badge badge-pill badge-dark">Following</span>
                    </a>
                    <a href="https://github.com/${v.login}?tab=repositories" class="btn btn-link text-danger" title="Repos">
                        <i class="fa fa-angle-double-up fa-sm"></i> <span class="badge badge-pill badge-dark">Repositories</span>
                    </a>
                </p>
                <a href="${v.html_url}" target="_blank" class="btn btn-success btn-block">Goto Profile</a>
            </div>
        </div>
        `
    });

}

/* alternate method */

// if (i % 5 == 0) {
        //     cardDeck = document.createElement("div");
        //     cardDeck.className = "card-deck";
        //     main.appendChild(cardDeck);
        // }

        // var card = document.createElement('div');
        // card.className = 'card';
        // card.style.width = '18rem';
        // card.style.margin = '20px';
        // cardDeck.appendChild(card);

        // var img = document.createElement('img');
        // img.className = 'card-img-top';
        // img.setAttribute('src', v.avatar_url);
        // card.appendChild(img);

        // var card_body = document.createElement('div');
        // card_body.style.padding = '10px';
        // card.appendChild(card_body);

        // var name = document.createElement('h5');
        // name.className = 'card-title';
        // name.innerHTML = v.login;
        // card_body.appendChild(name);

        // var id = document.createElement('p');
        // id.className = 'card-text';
        // id.innerHTML = `UserID: ${v.id}`;
        // card_body.appendChild(id);

        // var link = document.createElement('a');
        // link.className = 'btn btn-primary';
        // link.href = v.html_url;
        // link.target = '_blank';
        // link.innerHTML = 'Goto Profile';
        // card_body.appendChild(link);