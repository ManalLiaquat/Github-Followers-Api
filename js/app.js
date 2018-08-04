/* service worker registraion */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../serviceworker.js')
        .then(function () {
            console.log('Service Worker Registered');
        });
}

/* app script */
const main = document.querySelector("#div");
window.addEventListener('load', async e => {
    myFollowers();
})


async function myFollowers() {
    const res = await fetch(`https://api.github.com/users/ManalLiaquat/followers`)
    const json = await res.json();
    console.log(json);

    main.innerHTML = json.map((v, i) => {

        return `
        <div class="card" style="width: 18rem; margin:10px;">
            <img class="card-img-top" src="${v.avatar_url}" alt="Card image cap">
            <div class="card-body" style="padding:10px;">
                <h6 class="card-title">${v.login}</h6>
                <p class="card-text">UserID: ${v.id}</p>
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