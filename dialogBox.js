var dialogBox = {
    alert: function (title, message) {
        new ChoicesBox(title, message, [{label:"OK"}]);
    },
    choices: function (title, message, buttons, callback) {
        new ChoicesBox(title, message, buttons, callback);
    },
    info: function (message, level) {
        new InfoBox(message, level);
    },
    checkbox: function (title, checkboxes, callback) {
        new CheckBox(title, checkboxes, callback);
    },
    prompt: function (title, message, placeholder, callback) {
        new PromptBox(title, message, placeholder, callback);
    }
};

var InfoBox = function (message, level) {
    this.box = elements.generic("div", null, null, "infoBox");
    this.box.addEventListener("click", function () {
        this.close();
    }.bind(this))
    var modal = elements.generic("div", message, level, null);
    var closeButton = document.createElement("span");
    closeButton.innerHTML = "&times;";
    closeButton.addEventListener("click", function(event) {
        this.close();
        event.stopPropagation();
    }.bind(this));
    modal.appendChild(closeButton);
    this.box.appendChild(modal);
    document.body.appendChild(this.box);
    this.box.style.transform = "scale(1)";
};

InfoBox.prototype.close = function () {
    document.body.removeChild(this.box);
};

var ChoicesBox = function (title, message, buttons, callback) {
    this.box = elements.generic("div", null, null, "shadow");
    this.dialogBox = elements.generic("div", null, null, "dialogBox");
    this.callback = callback;

    var header = elements.generic("header", title, "modal-header", null);
    this.dialogBox.appendChild(header);

    var body = elements.generic("div", message, "modal-body" + " " + "text", null);
    this.dialogBox.appendChild(body);

    var footer = elements.generic("footer", null, "modal-footer", null);
    if (buttons) {
        buttons.forEach(function(item) {
            var button = elements.generic("td", item.label, null, null);
            button.addEventListener("click", function() {
                if (callback)
                    callback(item.value);
                    document.body.removeChild(this.box);
            }.bind(this));
            footer.appendChild(button);
        }.bind(this));
    }

    this.dialogBox.appendChild(footer);
    this.box.appendChild(this.dialogBox);
    document.body.appendChild(this.box);
    this.dialogBox.style.transform = "scale(1)";
};

var CheckBox = function (title, checkboxes, callback) {
    this.callback = callback;
    this.elements = [];

    this.box = elements.generic("div", null, null, "shadow");

    var element = elements.generic("div", null, null, "dialogBox");

    var header = elements.generic("header", "titre", "modal-header", null);
    element.appendChild(header);

    this.body = elements.generic("div", null, "modal-body", null);
    for (var i = 0, len = checkboxes.length ; i < len ; i ++) {
        var li = elements.generic('label', checkboxes[i].label, "li", null);
        var input = elements.input("checkbox", checkboxes[i].value, checkboxes[i].checked, null);
        this.elements.push(input);
        li.appendChild(input);
        this.body.appendChild(li);
    }

    element.appendChild(this.body);

    var footer = elements.generic("footer", null, "modal-footer", null);
    var buttonCancel = elements.generic("td", "Cancel", null, null);
    buttonCancel.addEventListener("click", function() {
        this.close();
    }.bind(this));
    var buttonSelect = elements.generic("td", "Select", null, null);
    buttonSelect.addEventListener("click", function() {
        this.validate();
    }.bind(this))
    footer.appendChild(buttonCancel);
    footer.appendChild(buttonSelect);
    element.appendChild(footer);


    this.box.appendChild(element);
    document.body.appendChild(this.box);
    element.style.transform = "scale(1)";
};

CheckBox.prototype.close = function () {
    document.body.removeChild(this.box);
};

CheckBox.prototype.validate = function () {
    var selectedItems = [];

    for (var i = 0, len = this.elements.length; i < len ; i++) {
        if (this.elements[i].checked) {
            selectedItems.push(this.elements[i].value);
        }
    }

    this.callback(selectedItems);
    this.close();
};

var PromptBox = function (title, message, placeholder, callback) {
    this.callback = callback;
    this.box = elements.generic("div", null, null, "shadow");
    this.element = elements.generic("div", null, null, "dialogBox");

    var header = elements.generic("header", title, "modal-header", null);
    this.element.appendChild(header);

    var body = elements.generic("div", null, "modal-body", null);

    var textContainer = document.createElement("p");
    textContainer.textContent = message;
    body.appendChild(textContainer);

    this.inputText = elements.input("text", "", placeholder, null, "inputText");
    body.appendChild(this.inputText);

    this.element.appendChild(body);

    var footer = elements.generic("footer", null, "modal-footer", null);

    var cancelButton = document.createElement("td");
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", function () {
        this.cancel();
    }.bind(this));
    footer.appendChild(cancelButton);
    var validationButton = document.createElement("td");
    validationButton.textContent = "Ok";
    validationButton.addEventListener("click", function () {
        this.validate();
    }.bind(this));
    footer.appendChild(validationButton);
    this.element.appendChild(footer);

    this.box.appendChild(this.element);
    document.body.appendChild(this.box);
    this.inputText.focus();
    this.element.style.transform = "scale(1)";
};

PromptBox.prototype.cancel = function () {
    document.body.removeChild(this.box);
};

PromptBox.prototype.validate = function () {
    this.callback(this.inputText.value);
    this.cancel();
};

var elements = {
    generic: function (type, text, className, id) {
        var elem = document.createElement(type);

        if (className)
            elem.className = className;

        if (id)
            elem.id = id;

        if (text)
            elem.textContent = text;

        return elem;
    },
    input: function (type, value, checked, placeholder, className, id) {
        var elem = document.createElement("input");
        elem.type = type;

        if (className)
            elem.className = className;

        if (id)
            elem.id = id;

        if (placeholder)
            elem.textContent = placeholder;

        if (value)
            elem.value = value;

        elem.checked = checked;

        return elem;
    }
};
