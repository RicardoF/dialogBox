(function () {

    document.getElementById("alertButton").addEventListener("click", function () {
        dialogBox.alert("Warning", "Connection lost");
    });

    document.getElementById("checkboxesButton").addEventListener("click", function () {
        var itemsToShow = [
                    {'label':'label0','value':'value0','checked':true},
                    {'label':'label1','value':'value1','checked':false},
                    {'label':'label2','value':'value2','checked':true},
                    {'label':'label3','value':'value3','checked':false},
                    {'label':'label4','value':'value4','checked':true},
                    {'label':'label5','value':'value5','checked':false},
                    {'label':'label6','value':'value6','checked':true},
                    {'label':'label7','value':'value7','checked':false},
                    {'label':'label8','value':'value8','checked':true},
                    {'label':'label9','value':'value9','checked':false},
                    {'label':'label10','value':'value10','checked':true},
                    {'label':'label11','value':'value11','checked':false},
                    {'label':'label12','value':'value12','checked':true},
                    {'label':'label13','value':'value13','checked':false},
                    {'label':'label14','value':'value14','checked':true},
                    {'label':'label15','value':'value15','checked':false},
                    {'label':'label16','value':'value16','checked':true},
                    {'label':'label17','value':'value17','checked':false},
                    {'label':'label18','value':'value18','checked':true},
                    {'label':'label19','value':'value19','checked':false}
        ];

        dialogBox.checkbox("Select title", itemsToShow, function(selectedItems) {
            // Do whatever you want with the result.
        });
    });

    document.getElementById("promptButton").addEventListener("click", function () {
        dialogBox.prompt("You win !!", "Please enter your name", "name", function (value) {
            // Do whatever you want with the result.
        });
    });

    document.getElementById("choicesButton").addEventListener("click", function () {
        dialogBox.choices("You win !!!", "Congratulations !",
            [{label:"New game", value:"new"}, {label:"Home", value:"home"}, {label:"Cancel", value:"cancel"}],
            function (value) {
                // Do whatever you want with the result.
        });
    });

    document.getElementById("infoButton").addEventListener("click", function () {
        dialogBox.info("Modifications enregistrees", "orange");
    });
})()

