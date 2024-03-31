document.getElementById("yesButton").addEventListener("mouseover", function () {
    var dialogBox = document.getElementById("dialogBox");
    var container = document.getElementById("container");
    var newPositionX = Math.max(0, Math.min(window.innerWidth - dialogBox.offsetWidth, Math.floor(Math.random() * (container.offsetWidth - dialogBox.offsetWidth - 600))));
    var newPositionY = Math.max(0, Math.min(window.innerHeight - dialogBox.offsetHeight, Math.floor(Math.random() * (container.offsetHeight - dialogBox.offsetHeight - 600))));
    dialogBox.style.left = newPositionX + "px";
    dialogBox.style.top = newPositionY + "px";
});

document.getElementById("noButton").addEventListener("click", function () {
    document.getElementById("message").innerText = "Ahh, it's sad to know you don't want to be.";
    document.getElementById("yesButton").style.display = "none";
    document.getElementById("noButton").style.display = "none";
    var text = document.createElement("h3");
    text.innerHTML = "I got you ... Here is Solution 👇";
    document.getElementById("dialogBox").appendChild(text);
    var br = document.createElement("br");
    document.getElementById("dialogBox").appendChild(br);

    var gif = document.createElement("img");
    gif.src = "https://media.giphy.com/media/O9a1pIYTaqPu0/giphy.gif?cid=790b7611t8kb8amnv6is8akba6oalpxo15yxh1qv7r5vzrux&ep=v1_gifs_search&rid=giphy.gif&ct=g";
    document.getElementById("dialogBox").appendChild(gif);
    var link = document.createElement("a");
    link.href = "https://rb.gy/yzd8yb";
    link.innerText = "Click here";


    document.getElementById("dialogBox").appendChild(br);
    document.getElementById("dialogBox").appendChild(link);
});

