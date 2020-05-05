(function(window) {
    var helloSpeaker = new Object();
    var Word = "Hello";
    helloSpeaker.speak = function(name) {
        console.log(Word + " " + name);
    };
    window.helloSpeaker = helloSpeaker;
})(window)