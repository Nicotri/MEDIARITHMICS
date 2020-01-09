//Cette application se lance en allant à l'adresse locale
//http://localhost:8080/Chateau

var express = require('express');
var router = express.Router();
var axios = require('axios');

//Pour double checker les données les adresse des coffres sont stockées dans des array
//Un dernier array contient tous les coffres plein
var treasureChestList = [];
var idChests1 = [];
var idChests2 = [];
var idChests3 = [];
var idChests4 = [];
var idChests5 = [];
var idChests6 = [];
var idChests7 = [];
var idChests8 = [];
var idChests9 = [];
var idChests10 = [];


//Le principe est d'utilisé les promises Javascript afin d'enchainer les call axios à l'api et de récupérer
// les data de la resolve de la promise pour les utiliser sur une nouvelle promise et ainsi de suite.
// De cette manière on utilise les informations de chaques endpoints pour avancer dans les suivants.
router.get('/', function(req, res, next) {
    function MakeAPICall() {
        return axios.get("http://mediarithmics.francecentral.cloudapp.azure.com:3000/castles/1/rooms/entry").catch((err) => Promise.reject(new StepError('basic')))
    }

    MakeAPICall()
    .then(function (response) {
        console.log("ENTRY LEVEL 1")
        console.log(response.data.rooms)
//On utilise le même principe que pour aller d'une room à l'autre mais ici on utilise le passage de data par promise pour ouvrir les coffres.
        idChests1.push(response.data.chests)
        idChests1[0].forEach(chest => {
    axios.get("http://mediarithmics.francecentral.cloudapp.azure.com:3000" + chest)

//on utilise la data suite à l'ouverture des coffres pour voir si le coffre est vide ou pas
// Pour cela on check si la string "This chest is empty :/ Try another one!" est présente ou non
//Si le coffre est plein on le push dans un array recensant les coffres plein.
    .then(function(responseStatus) {
        console.log(responseStatus.data)
        if (responseStatus.data.status.includes("This chest is empty :/ Try another one!")) {
            console.log("Ce coffre est vide ! : " + responseStatus.data.id)
    } else {
            console.log("That chest is full ! JACKPOT ! : " + responseStatus.data.id)
            treasureChestList.push(responseStatus.data.id)
    }

//Toujours grace aux promises on avance d'un étage en passant les informations.
        response.data.rooms.forEach(room => {
    axios.get("http://mediarithmics.francecentral.cloudapp.azure.com:3000" + room)


//On avance au long de l'API toujours de la même manière.
    .then(function(response2) {
        console.log("LEVEL 2")
        console.log(response2.data.rooms)
        idChests2.push(response2.data.chests)
        idChests2[0].forEach(chest2 => {
    axios.get("http://mediarithmics.francecentral.cloudapp.azure.com:3000" + chest2)

    .then(function(responseStatus2) {
        if (responseStatus2.data.status.includes("This chest is empty :/ Try another one!")) {
            console.log("Ce coffre est vide ! : " + responseStatus2.data.id)
    } else {
            console.log("That chest is full ! JACKPOT ! : " + responseStatus2.data.id)
            treasureChestList.push(responseStatus2.data.id)
    }

        response2.data.rooms.forEach(room2 => {
    axios.get("http://mediarithmics.francecentral.cloudapp.azure.com:3000" + room2)



    .then(function(response3) {
        console.log("LEVEL 3")
        console.log(response3.data.rooms)
        idChests3.push(response3.data.chests)
        idChests3[0].forEach(chest3 => {
    axios.get("http://mediarithmics.francecentral.cloudapp.azure.com:3000" + chest3)

    .then(function(responseStatus3) {
        if (responseStatus3.data.status.includes("This chest is empty :/ Try another one!")) {
            console.log("Ce coffre est vide ! : " + responseStatus3.data.id)
    } else {
            console.log("That chest is full ! JACKPOT ! : " + responseStatus3.data.id)
            treasureChestList.push(responseStatus3.data.id)
    }

        response3.data.rooms.forEach(room3 => {
    axios.get("http://mediarithmics.francecentral.cloudapp.azure.com:3000" + room3)



    .then(function(response4) {
        console.log("LEVEL 4")
        console.log(response4.data.rooms)
        idChests4.push(response4.data.chests)
        idChests4[0].forEach(chest4 => {
    axios.get("http://mediarithmics.francecentral.cloudapp.azure.com:3000" + chest4)

    .then(function(responseStatus4) {
        if (responseStatus4.data.status.includes("This chest is empty :/ Try another one!")) {
            console.log("Ce coffre est vide ! : " + responseStatus4.data.id)
    } else {
            console.log("That chest is full ! JACKPOT ! : " + responseStatus4.data.id)
            treasureChestList.push(responseStatus4.data.id)
    }

        response4.data.rooms.forEach(room4 => {
    axios.get("http://mediarithmics.francecentral.cloudapp.azure.com:3000" + room4)



    .then(function(response5) {
        console.log("LEVEL 5")
        console.log(response5.data.rooms)
        idChests5.push(response5.data.chests)
        idChests5[0].forEach(chest5 => {
    axios.get("http://mediarithmics.francecentral.cloudapp.azure.com:3000" + chest5)

    .then(function(responseStatus5) {
        if (responseStatus5.data.status.includes("This chest is empty :/ Try another one!")) {
            console.log("Ce coffre est vide ! : " + responseStatus5.data.id)
    } else {
            console.log("That chest is full ! JACKPOT ! : " + responseStatus5.data.id)
            treasureChestList.push(responseStatus5.data.id)
    }

    response5.data.rooms.forEach(room5 => {
        axios.get("http://mediarithmics.francecentral.cloudapp.azure.com:3000" + room5)



    .then(function(response6) {
        console.log("LEVEL 6")
        console.log(response6.data.rooms)
        idChests6.push(response6.data.chests)
        idChests6[0].forEach(chest6 => {
    axios.get("http://mediarithmics.francecentral.cloudapp.azure.com:3000" + chest6)

    .then(function(responseStatus6) {
        if (responseStatus6.data.status.includes("This chest is empty :/ Try another one!")) {
            console.log("Ce coffre est vide ! : " + responseStatus6.data.id)
    } else {
            console.log("That chest is full ! JACKPOT ! : " + responseStatus6.data.id)
            treasureChestList.push(responseStatus6.data.id)
    }

    response6.data.rooms.forEach(room6 => {
        axios.get("http://mediarithmics.francecentral.cloudapp.azure.com:3000" + room6)



    .then(function(response7) {
        console.log("LEVEL 7")
        console.log(response7.data.rooms)
        idChests7.push(response7.data.chests)
        idChests7[0].forEach(chest7 => {
    axios.get("http://mediarithmics.francecentral.cloudapp.azure.com:3000" + chest7)

    .then(function(responseStatus7) {
        if (responseStatus7.data.status.includes("This chest is empty :/ Try another one!")) {
            console.log("Ce coffre est vide ! : " + responseStatus7.data.id)
    } else {
            console.log("That chest is full ! JACKPOT ! : " + responseStatus7.data.id)
            treasureChestList.push(responseStatus7.data.id)
    }

    response7.data.rooms.forEach(room7 => {
        axios.get("http://mediarithmics.francecentral.cloudapp.azure.com:3000" + room7)




    .then(function(response8) {
        console.log("LEVEL 8")
        console.log(response8.data.rooms)
        idChests8.push(response8.data.chests)
        idChests8[0].forEach(chest8 => {
    axios.get("http://mediarithmics.francecentral.cloudapp.azure.com:3000" + chest8)

    .then(function(responseStatus8) {
        if (responseStatus8.data.status.includes("This chest is empty :/ Try another one!")) {
            console.log("Ce coffre est vide ! : " + responseStatus8.data.id)
    } else {
            console.log("That chest is full ! JACKPOT ! : " + responseStatus8.data.id)
            treasureChestList.push(responseStatus8.data.id)
    }

    response8.data.rooms.forEach(room8 => {
        axios.get("http://mediarithmics.francecentral.cloudapp.azure.com:3000" + room8)



    .then(function(response9) {
        console.log("LEVEL 9")
        console.log(response9.data.rooms)
        idChests9.push(response9.data.chests)
        idChests9[0].forEach(chest9 => {
    axios.get("http://mediarithmics.francecentral.cloudapp.azure.com:3000" + chest9)

    .then(function(responseStatus9) {
        if (responseStatus9.data.status.includes("This chest is empty :/ Try another one!")) {
            console.log("Ce coffre est vide ! : " + responseStatus9.data.id)
    } else {
            console.log("That chest is full ! JACKPOT ! : " + responseStatus9.data.id)
            treasureChestList.push(responseStatus9.data.id)
    }

    response8.data.rooms.forEach(room9 => {
        axios.get("http://mediarithmics.francecentral.cloudapp.azure.com:3000" + room9)



    .then(function(response10) {
        console.log("FINAL LEVEL")
        console.log(response10.data.rooms)
        idChests10.push(response10.data.chests)
        idChests10[0].forEach(chest10 => {
    axios.get("http://mediarithmics.francecentral.cloudapp.azure.com:3000" + chest10)

    .then(function(responseStatus10) {
        if (responseStatus10.data.status.includes("This chest is empty :/ Try another one!")) {
            console.log("Ce coffre est vide ! : " + responseStatus10.data.id)
    } else {
            console.log("That chest is full ! JACKPOT ! : " + responseStatus10.data.id)
            treasureChestList.push(responseStatus10.data.id)
    }
//On fait appraitre l'array contenant toutes les adresses de coffres plein
            console.log("$$$$$$$$$$$$$$$$")
            console.log("----------------")
            console.log(treasureChestList)
            console.log("----------------")
            console.log("$$$$$$$$$$$$$$$$")
//Pour le render des resultats on envoi l'array de coffres plein par id HTML
            document.getElementById("ChateauResults").innerHTML = treasureChestList
                                            })
                                        })
                                    })
                                    })
                                    })
                                    })
                                })
                                })
                                })
                                })
                            })
                            })
                            })
                            })
                        })
                        })
                        })
                        })
                    })
                    })
                    })
                    })
                    })
                })
                })
                })
                })
                })
            })
            })
            })
            })
        })
        })
        })
        })
    })
    })
// Récupération générale des erreurs de promises
}).catch((err) => {console.log(err)})
//retour de la fonction router.get et render de la page.
return res.render('index', {layout: false})
})

module.exports = router;
