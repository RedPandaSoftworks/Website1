let buttonpressed = false;

function ButtonPressed() {
    const closeBtn = document.createElement('button');
    const panel = document.createElement('div');

    if (buttonpressed == false) {

        panel.setAttribute('class', 'text-center');
        document.getElementById("buttonstuff").appendChild(panel);

        const msg = document.createElement('p');
        msg.setAttribute('class', 'red');
        msg.textContent = 'Why would you do this?';
        panel.appendChild(msg);

        closeBtn.setAttribute('type', 'button');
        closeBtn.setAttribute('class', 'btn btn-info');
        closeBtn.textContent = 'Okay, sorry :(';
        panel.appendChild(closeBtn);
        buttonpressed = true
    }

    closeBtn.onclick = function () {
        panel.parentNode.removeChild(panel);
        buttonpressed = false
    }
}            