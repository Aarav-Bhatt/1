function voicepermission(){
    //
    navigator.mediaDevices.getUserMedia({
        audio: true
    })
    Classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/GygoS1LAw/model.json',modelReady)
}
function modelReady(){
    Classifier.classify(gotResults)
    console.log(modelReady)
}

function gotResults(error,results){
    if(error) {
        console.log(error)
    }
    else{
        console.log(results)
        R=Math.floor(Math.random()*255)
        G=Math.floor(Math.random()*255)
        B=Math.floor(Math.random()*255)
        document.getElementById("name").innerHTML="I can Hear "+results[0].label;
        document.getElementById("Accuracy").innerHTML="Accuracy "+results[0].confidence;
        document.getElementById("Accuracy").style.color="rgb("+R+","+G+","+B+")";
        document.getElementById("name").style.color="rgb("+R+","+G+","+B+")";
    }
    img1=document.getElementById("a")
    img1=document.getElementById("b")
    img1=document.getElementById("c")
    img1=document.getElementById("d")
    
}



