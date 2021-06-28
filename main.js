Webcam.set ({
    height:350,
    width:350,
    image_format:"jpeg",
    jpeg_quality:90

})
Webcam.attach("#camera")
function capture() {
    Webcam.snap(
        function(img){
            document.getElementById("snapshot").innerHTML = `<img src=${img} id="capturedImage">`
        }
    )
}

console.log("Version of ML5 = "+ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/--6yBoYRb/model.json",getModel)

function getModel() {
    console.log("Model Uploaded")
}

function speak() {
    API = window.speechSynthesis
    speakdata1 = "The First Prediction Is "+prediction1
    speakdata1 = "The Second Prediction Is "+prediction2
    utterthis= new SpeechSynthesisUtterance(speechData1 + speechData2)
    API.speaK(utterthis)
}
function identify() {
    image = document.getElementById("capturedImage")
    classifier.classify(image, gotResult)
}
function gotResult(error, result) {
    
    if (error) {
        console.error(error)
    }else {
        console.log(result)
        prediction1 = result[0].label
        prediction2 = result[1].label
        document.getElementById("emotion1").innerHTML = prediction1
        document.getElementById("emotion2").innerHTML = prediction2
        speak()
        if (prediction1 == "Thumbs Up") {
            document.getElementById("emoji1").innerHTML = "&#128546"
        } 
        if (prediction1 == "Thumbs Down" ) {
            document.getElementById("emoji1").innerHTML = "&#128545;"

        }
        if (prediction1 == "Yo") {
            document.getElementById("emoji1").innerHTML = "&#128532;"
        }
        if (prediction1 == "Victory/ Peace") {
            document.getElementById("emoji1").innerHTML = "&#128512;"
        }
        if (prediction2 == "Thumbs Up") {
            document.getElementById("emoji2").innerHTML = "&#128546"
        } 
        if (prediction2 == "Thumbs Down" ) {
            document.getElementById("emoji2").innerHTML = "&#128545;"

        }
        if (prediction2 == "Yo") {
            document.getElementById("emoji2").innerHTML = "&#128532;"
        }
        if (prediction2 == "Victory/ Peace") {
            document.getElementById("emoji2").innerHTML = "&#128512;"
        }
    }
}
