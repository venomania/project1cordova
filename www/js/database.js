var matable = [{
        id: "1",
        titre: "WEAK HERO",
        url_image: "https://i.mydramalist.com/2PXyR_4f.jpg",
        link: "https://www.webtoons.com/en/action/weakhero/list?title_no=1726",
        liste: "webtoon"
    },
    {
        id: "2",
        titre: "THE ADVANCED PLAYER OF THE TUTORIAL TOWER",
        url_image: "https://muctau.com/wp-content/uploads/2021/07/anh_featured-431.png",
        link: "https://www.webtoons.com/en/action/the-advanced-player-of-the-tutorial-tower/list?title_no=2409",
        liste: "webtoon"
    },
    {
        id: "3",
        titre: "FC SILMI",
        url_image: "https://pbs.twimg.com/media/EwFfvJFWgAE4n07.png",
        link: "https://www.webtoons.com/fr/challenge/fc-silmi-rise-to-the-moon/list?title_no=694947",
        liste: "webtoon"
    },
    {
        id: "4",
        titre: "dragon ball z",
        url_image: "https://www.kamehashop.fr/27763-large_default/poster-dragon-ball-z-chapitre-cell.jpg",
        link: "https://www.db-z.com",
        liste: "shonen"
    },
    {
        id: "5",
        titre: "GTO",
        url_image: "http://www.abystyle.com/18318-large_default/gto-poster-onizuka-52-x-38-cm.jpg",
        link: "https://fr.wikipedia.org/wiki/Great_Teacher_Onizuka",
        liste: "shonen"
    },
    {
        id: "6",
        titre: "Black Lagoon",
        url_image: "https://www.manga-news.com/public/images/vols/coffret_black_lagoon.jpg",
        link: "https://fr.wikipedia.org/wiki/Black_Lagoon",
        liste: "seinen"
    },
    {
        id: "7",
        titre: "L'Attaque des Titans",
        url_image: "https://www.manga-news.com/public/images/dvd/L-Attaque-des-Titans-Final-Season-visual-3_4.jpg",
        link: "https://fr.wikipedia.org/wiki/L%27Attaque_des_Titans",
        liste: "seinen"
    },
]






function aficher() {


    var myboject = JSON.parse(localStorage.getItem("table"));
    let n = 0;
    while (myboject[n]) {

        // filtre pour la 1 liste qui est webtoon
        if (myboject[n].liste == "webtoon") {
            $("#page1").append(`
           
            <div class="card border-secondary mb-3" style="max-width: 20rem;">
            <a href="` + myboject[n].link + `">
             <div class='card-header back-color' style='background: purple;'>` + myboject[n].titre + `</div>
              <div class='card-body'>
                  <img src="` + myboject[n].url_image + `" class='ta' alt=''>
                <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              </a>
            </div>
       
        `);
        }

        // filtre pour la 2 liste qui est shonen
        if (myboject[n].liste == "shonen") {
            $("#page2").append(`
            
                <div class="card border-secondary mb-3" style="max-width: 20rem;">
                <a href="` + myboject[n].link + `">
                <div class='card-header back-color' style='background: purple;'>` + myboject[n].titre + `</div>
                <div class='card-body'>
                    <img src="` + myboject[n].url_image + `" class='ta' alt=''>
                    <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </a>
                </div>
           
            `);
        }
        // filtre pour la 3 liste qui est shonen
        if (myboject[n].liste == "seinen") {
            $("#page3").append(`
            
                <div class="card border-secondary mb-3" style="max-width: 20rem;">
                <a href="` + myboject[n].link + `">
                <div class='card-header back-color' style='background: purple;'>` + myboject[n].titre + `</div>
                <div class='card-body'>
                    <img src="` + myboject[n].url_image + `" class='ta' alt=''>
                    <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </a>
                </div>
                
            `);
        }


        n++
    }

}

function rest() {

    document.getElementById("page1").innerHTML = ""
    document.getElementById("page2").innerHTML = ""
    document.getElementById("page3").innerHTML = ""
}

function ajout() {
    let n_id = 0;
    var myboject = JSON.parse(localStorage.getItem("table"));
    while (myboject[n_id]) {
        n_id++;
    }

    var titrerec = document.getElementById("titre").value;
    var linkrec = document.getElementById("link").value;
    var urlrec = document.getElementById("url").value;
    var mangarec = document.getElementById("manga-select").value;
    n_id++;
    console.log(titrerec + " " + linkrec + " " + urlrec + " " + mangarec);
    matable.push({
        id: n_id,
        titre: titrerec,
        link: linkrec,
        url_image: urlrec,
        liste: mangarec
    });
    console.log(matable);
    localStorage.setItem("table", JSON.stringify(matable));
    rest();
    aficher();


    var from = document.getElementById("from");

    if (getComputedStyle(from).display != "none") {
        from.style.display = "none";
        top.innerHTML = "Top"
    } else {
        elem.style.display = "none";
        elem2.style.display = "none";
        elem3.style.display = "none";
        top.innerHTML = "fromuaire"
        from.style.display = "block";
    }
}




document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    localStorage.setItem("table", JSON.stringify(matable));
    aficher();
}