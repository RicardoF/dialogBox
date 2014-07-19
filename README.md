#dialogBox

dialogBox is a **standalone**, **vanilla javascript library** for building and extending the functionality of your application.


##Features

* Alert 
* Prompt
* Checkbox
* Info
* Choices


##Examples

###Alert

```javascript
dialogBox.alert("Warning", "Connection lost");
```
![alt text](https://github.com/RicardoF/dialogBox/blob/master/img/alert.JPG "Alert")

###Prompt

```javascript
dialogBox.prompt("You win !!", "Please enter your name", "name", function (value) {
  console.log(value);
});
```
![alt text](https://github.com/RicardoF/dialogBox/blob/master/img/prompt.JPG "Prompt")

###Checkbox

```javascript
var itemsToShow = [];
  var a;
  for (var i = 0; i < 20 ;  i++) {
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
```
![alt text](https://github.com/RicardoF/dialogBox/blob/master/img/checkbox.JPG "Checkbox")

###Info

```javascript
dialogBox.info("Modifications enregistrees", "orange");
```
![alt text](https://github.com/RicardoF/dialogBox/blob/master/img/info.JPG "Info")

###Choices

```javascript
dialogBox.choices("You win !!!", "Congratulations !",
  [{label:"New game", value:"new"}, {label:"Home", value:"home"}, {label:"Cancel", value:"cancel"}],
  function (value) {
    console.log(value);
});
```
![alt text](https://github.com/RicardoF/dialogBox/blob/master/img/choices.JPG "Choices")

