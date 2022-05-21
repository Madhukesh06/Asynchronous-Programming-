let image=["https://images6.alphacoders.com/714/thumbbig-714381.webp","https://images4.alphacoders.com/909/thumbbig-909185.webp","https://images5.alphacoders.com/689/thumbbig-689398.webp","https://images7.alphacoders.com/653/thumbbig-653797.webp","https://images5.alphacoders.com/677/thumbbig-677723.webp","https://images4.alphacoders.com/900/thumbbig-900361.webp","https://images2.alphacoders.com/685/thumbbig-685536.webp"]
let i=0;

id= setInterval(function(){
    if(i===image.length){  //slideshow time 3sec
        i=0;
    }
    document.getElementById("slideshow").innerHTML="";
    let images=image[i] // accessing the image url
    let im=document.createElement("img")
    im.src=images;

    document.getElementById("slideshow").append(im);
    i++;
},2000)

//Array of obejct creation-start

let moviesdata =  [];

let obj1 = new Movies("Top Gun: Maverick","24 may 2022","https://assetscdn1.paytm.com/images/cinema/Top-Gun--Maverick-705x750-9f0557d0-cd09-11ec-b6d4-abcf25c3dd54.jpg",8.4)
moviesdata.push(obj1)
  
let obj2 = new Movies("Jurassic World: Dominion","11 may 2022","https://assetscdn1.paytm.com/images/cinema/Jurassic-World--Dominion-705x750-b554ee90-cd51-11ec-8d22-2363945d80ef.jpg",8.1)
moviesdata.push(obj2)

let obj3 = new Movies("Sarkaru Vaari Paata","31 may 2022","https://assetscdn1.paytm.com/images/cinema/Sarkaru-Vaari-Paata-705x750-395d2010-cbbb-11ec-a71e-b7825cbc9ee5.jpg",6.1)
moviesdata.push(obj3)

let obj4 = new Movies("Bhool Bhulaiyaa 2","30 may 2022","https://assetscdn1.paytm.com/images/cinema/Bb2-705x750-36a68220-d65c-11ec-8386-030f3d92e055.jpg",8.2)
moviesdata.push(obj4)

let obj5 = new Movies("Dhaakad","10 may 2022","https://assetscdn1.paytm.com/images/cinema/Dhaakad-705x750-e84ea150-d37e-11ec-8679-ab26124c1c6e.png",7.2)
moviesdata.push(obj5)

let obj6 = new Movies("Shekar","1 april 2022","https://assetscdn1.paytm.com/images/cinema/Shekar--705x750-3eeb2390-d6a8-11ec-b2b4-b70973efa5a2.jpg",7)
moviesdata.push(obj6)

let obj7 = new Movies("K.G.F. Chapter 2","1 feb 2022","https://assetscdn1.paytm.com/images/cinema/KGF-705x750%20(1)-b216cd70-b6fe-11ec-8665-6d654dc679e6.jpg",9)
moviesdata.push(obj7)

let obj8 = new Movies("RRR","2 feb 2022","https://assetscdn1.paytm.com/images/cinema/RRR-south-705x750-b93cbdd0-693d-11ec-9b0b-ebc9d4ff7995.jpg",8)
moviesdata.push(obj8)

let obj9 = new Movies("RRR","2 feb 2022","https://assetscdn1.paytm.com/images/cinema/RRR-south-705x750-b93cbdd0-693d-11ec-9b0b-ebc9d4ff7995.jpg",8)
moviesdata.push(obj9)

//Array of obejct creation-end

// construction function start
function Movies(name,release,url,imdb){
  this.name = name;
  this.release = release;
  this.url = url;
  this.imdb = imdb;
}
// construction function end

localStorage.setItem("moviesdata",JSON.stringify(moviesdata));

displaydata(moviesdata);

console.log(moviesdata)

// sorting part start

function sorthandle(){
  let select = document.querySelector("#sort").value ;
  if(select == "lth"){
  moviesdata.sort(function(a,b){
    let x= a.imdb;
    let y = b.imdb;
    if(x<y){
      return -1;
    }if(x>y){
      return 1;
    }
    return 0;
  })
  displaydata(moviesdata);
  }
   if(select == "htl"){
    moviesdata.sort(function(a,b){
      let x = a.imdb
      let y = b.imdb;
      if(x<y){
        return 1;
      }if(x>y){
        return -1
      }
      return 0;
    })
    displaydata(moviesdata);
  }
  
}

// sorting part end


// display movie cards in DOM - start
function displaydata(moviesdata){
   document.querySelector("#movies").innerHTML="";
   moviesdata.forEach(function(el){
 
   let card = document.createElement("div");
   let img =  document.createElement("img");
   let h3 = document.createElement("h3");
   let h5 = document.createElement("h5");
   let h6 = document.createElement("h5");

   img.setAttribute("src",el.url);
   h3.innerText = el.name;
   h5.innerText = "Release Date : "+el.release;
   h6.innerText = "Imdb rating: "+el.imdb;

  card.append(img,h3,h5,h6);
  document.querySelector("#movies").append(card);   
})
}

// display movie cards in DOM - end
