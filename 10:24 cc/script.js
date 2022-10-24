let dogImg;

function setup() {
  createCanvas(windowWidth, windowHeight)

fetch("https://dog.ceo/api/breeds/image/random").
then((response)=> {
console.log("response received")
console.log(response)
return response.json()
})
.then((data)=> {
  console.log("json parsed")
  console.log(data)

  dogImg = loadImage(data.message) 
})

}

function draw(){
  background(220);
  if(dogImg != undefined) {
    image (dogImg,0,0)
  }
  
}

