const reviews = [
    {
        review: "Value to money for Mustang lovers. Affordable sports car in India with 5.0 specifications. Comfortable driving experience. Looks are muscular and sporty. The thrust you get when you push down the throttle is overwhelming.",
        name : "Rohit K"
    },
    {
        review: "The time i saw it,I was amazed. Its exterior and interior all are superb. Its a muscular car. Its a sport so it needs medium maintenance .Its performance, mileage, safety all are mlnext level.",
        name : "Carl"
    },  
    {
        review: "I love this car I love its body design I see this car on road I just like to drive this car but this car is luxurious and costly also that's why I didn't buy this car this is my dream car",
        name : "Joey"
    },   
    {
        review: "The car is really powerful also it's very comfortable and smooth to drive..The main thing you have to be very careful while cornering at high speed",
        name : "Chandler"
    },    
    {
        review: "Very elegant inside but holds a powerful beast.The Roar on the road..... Only one experience with this beast made me on high adrenaline... Wanna ride something powerful go for it.",
        name : "Ross"
    },   
    {
        review: "The car is excellent. I liked its engine capacity, pickup, horsepower, bhp, speed and average. The car goes on at very high speed nearly about 180km/hr. It's look is very sporty and good.",
        name : "Monica"
    }
];
let index = 0;
const myfun = (btn) =>{
    index+=btn;
    if(index>(reviews.length-1)){
        index=index%5;
    }
    if(index<0){
        index=0;
    }
    let Cname = document.getElementById("Cname");
    let Review = document.getElementById("feedback");
    Cname.textContent = reviews[index].name;
    Review.textContent = reviews[index].review;
}