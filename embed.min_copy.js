var TagAppEmbed = TagAppEmbed || function (w, u) {
    var AppPath = "https://widget.tagembed.com/embed.json";
    var InheritPath = "https://widget.tagembed.com/inherit.json";
    function randomID(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }

    return {
        init: function () {
            var socialwall = document.getElementsByClassName('tagembed-socialwall').length
            var tagembed = document.getElementsByClassName('tagembed-widget').length
            if (socialwall && tagembed) {
                if (document.getElementsByClassName('tagembed-socialwall')) {
                    const tagembedSocial = document.getElementsByClassName('tagembed-socialwall')[0]
                    if (tagembedSocial && tagembedSocial.getAttribute("data-render-id") && tagembedSocial.getAttribute("data-is-load")) {
                        socialwall = 0
                    }
                }
            }

            var container = socialwall && socialwall > 0 ? document.getElementsByClassName('tagembed-socialwall') : document.getElementsByClassName('tagembed-widget');



            for (var i = 0; i < container.length; i++) {
                if (container[i].getAttribute("data-is-load") == undefined || container[i].getAttribute("data-is-load") == "0" || container[i].getAttribute("data-is-load") == null) {

                    const checkWallId = ["83425", "51815", "107721", "52985", "141747", "92865", "62165", "120236", "140700", "104941", "133785", "142678", "134207", "109523", "132736", "128260", "139151", "117305", "124883", "135863", "136274", "120066", "110735", "112076", "127765", "113597", "111225", "135350", "111751", "123263", "121935", "124617", "99606", "123766", "141233", "123856", "133475", "143052"]
                    const existWallId = container[i].getAttribute("data-wall-id") ? container[i].getAttribute("data-wall-id") : container[i].getAttribute("data-widget-id")
                    const url = AppPath;

                    //window.wall_Id = container[i].getAttribute("data-wall-id");
                    const rootID = `root_${randomID(5)}`
                    container[i].setAttribute("data-render-id", rootID)
                    container[i].setAttribute("data-is-load", 0)
                    container[i].setAttribute("id", `co_${rootID}`)
                    window.isTagEmbd = true;
                    var isTagEmbd = true
                    fetch(url)
                        .then(response => response.json())
                        .then(json => {
                            const { css, id, script } = json;

                            let myScript = document.createElement("div");
                            myScript.setAttribute("id", rootID);

                            if (document.getElementById(`co_${rootID}`)) {
                                document.getElementById(`co_${rootID}`).appendChild(myScript);
                                //document.getElementsByClassName('taggbox-socialwall')[0].appendChild(myScript);


                                let myCss = document.createElement("link");
                                myCss.setAttribute("type", 'text/css');
                                myCss.setAttribute("rel", 'stylesheet');
                                myCss.setAttribute("href", css);
                                document.head.appendChild(myCss);


                                let myreact = document.createElement("script");
                                myreact.setAttribute("src", script);
                                document.body.appendChild(myreact);
                            }
                        })
                }
            }

        }
    };
}(window, undefined);
TagAppEmbed.init();