var movies=[
    {
        title:"Godfather II",
        rating:5,
        seen:true,
    },
    {
        title:"Fantastic Beasts",
        rating:3.5,
        seen:false,
    },
    {
        title:"Donnie Brasco",
        rating:4,
        seen:true,
    },
    {
        title:"Terminator I",
        rating:4.6,
        seen:false,
    }
];
for(var i=0;i<movies.length;i++){
    if(movies[i].seen===true){
        console.log("You have seen "+movies[i].title+" with the rating of: "+movies[i].rating);
    }
    else{
        console.log("You have not seen "+movies[i].title+" with the rating of: "+movies[i].rating);
    }
}