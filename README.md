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
  // Do whatever you want with the result.
});
```
![alt text](https://github.com/RicardoF/dialogBox/blob/master/img/prompt.JPG "Prompt")

###Checkbox

```javascript
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
    {'label':'label10','value':'value6','checked':true},
    {'label':'label10','value':'value6','checked':true},
    {'label':'label10','value':'value6','checked':true},
    {'label':'label10','value':'value6','checked':true},
    {'label':'label10','value':'value6','checked':true},
    {'label':'label10','value':'value6','checked':true},
];

dialogBox.checkbox("Select title", itemsToShow, function(selectedItems) {
    // Do whatever you want with the result.
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
    // Do whatever you want with the result.
});
```
![alt text](https://github.com/RicardoF/dialogBox/blob/master/img/choices.JPG "Choices")

