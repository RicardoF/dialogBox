(function () {

    document.getElementById("alertButton").addEventListener("click", function () {
        dialogBox.alert("Warning", "Connection lost");
    });

    document.getElementById("checkboxesButton").addEventListener("click", function () {
        var itemsToShow = [];
        var a;
        for (var i = 0; i < 40 ;  i++) {
            a = (i % 2 === 0);
            itemsToShow.push({
                value: "value" + i,
                label: "label" + i,
                checked: a
            });
        }

        dialogBox.checkbox("Select title", itemsToShow, function(selectedItems) {
            console.log("you selected", selectedItems);
        });
    });

    document.getElementById("promptButton").addEventListener("click", function () {
        dialogBox.prompt("You win !!", "Please enter your name", "name", function (value) {
            console.log(value);
        });
    });

    document.getElementById("choicesButton").addEventListener("click", function () {
        dialogBox.choices("You win !!!", "Congratulations !",
            [{label:"New game", value:"new"}, {label:"Home", value:"home"}, {label:"Cancel", value:"cancel"}],
            function (value) {
                console.log(value);
        });
    });

    document.getElementById("infoButton").addEventListener("click", function () {
        dialogBox.info("Modifications enregistrees", "orange");
    });
})()

