/*
Solution of assignment 4:
Expected output:
Hello Anam
Good Bye John
Good Bye Jen
Good Bye Jell
Hello Pooh
Hello Frank
Hello Lora
Hello Paula
Hello Laura
Good Bye Jack
*/

(function() {
    var names = ["Anam", "John", "Jen", "Jell", "Pooh", "Frank", "Lora", "Paula", "Laura", "Jack"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();