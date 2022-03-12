function StartSound(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/qgbI7CDvM/model.json", modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error)
    }else{
        console.log(results)
        document.getElementById("SoundOutput").innerHTML = results[0].label;
        percent = results[0].confidence * 100;
        document.getElementById("AccuracyOutput").innerHTML = percent.toFixed(2) + " % ";

        i1 = document.getElementById("alien1");
        i2 = document.getElementById("alien2");
        i3 = document.getElementById("alien3");
        i4 = document.getElementById("alien4");
        if(results[0].label == "Background Noise"){
            i1.src = "aliens-01.gif";
            i2.src = "aliens-02.png";
            i3.src = "aliens-03.png";
            i4.src = "aliens-04.png";
        }
        if(results[0].label == "Flute"){
            i1.src = "aliens-01.png";
            i2.src = "aliens-02.gif";
            i3.src = "aliens-03.png";
            i4.src = "aliens-04.png";
        }
        if(results[0].label == "Hair dryer"){
            i1.src = "aliens-01.png";
            i2.src = "aliens-02.png";
            i3.src = "aliens-03.gif";
            i4.src = "aliens-04.png";
        }
        if(results[0].label == "Tapping"){
            i1.src = "aliens-01.png";
            i2.src = "aliens-02.png";
            i3.src = "aliens-03.png";
            i4.src = "aliens-04.gif";
        }
    }
}