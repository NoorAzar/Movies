var favmovies=prompt("who's your fav actor?")
while(favmovies !=='tom and jerry'&&favmovies!=='spongebob'){
    favmovies=prompt('please pick tom and jerry or spongebob');
}

var movie='';
var numberofmovies = prompt("how many pictures do you need to show up?")
for(var i=0;i<numberofmovies;i++){

    if(favmovies=='tom and jerry')
    {
        movie +='<img src="javaascript/pic/TomandJerryTitleCardc.jpg"/>';
        
        console.log(movie);
    }

else if(favmovies=='spongebob'){
movie +='<img src="javaascript/pic/piccc.jpg"/>';
}
else{
    alert('pick between tom and jerry or spongebob');
}



}
document.write(movie);

 var favmovies=prompt("whats your fav movie?");
 function getfavmovie(param){

 console.log(favmovies);

 if(favmovies==='tom and jerry'){
     document.write('<img src="javaascript/pic/TomandJerryTitleCardc.jpg"/>');
     }else if(favmovies==='spongebob'){
     document.write('<img src="javaascript/pic/piccc.jpg"/>');
 }else{
   alert('get out of here');
 }}
 getfavmovies(favmovies;)


var movies =confirm("do you likes movies?");
Function getfavmovie(param){

if(movies ==true){
    alert('welcome to my website');
}
else{
        alert('get out of here');
    }

var i=0;
while(i<8)
{
    console.log('Hello to movies'+i);
i++
}

} getfavmovie(movie);



var age=prompt("whats your age?");
if(age>=18 && age<=35){
    alert('welcome to the site');

}else if(age<18 || age>35){
    alert('sorry your not allowed');
}else{
    alert('please input a number');
}
}
getage(age);
