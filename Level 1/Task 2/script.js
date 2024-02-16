const btn= document.getElementById("btn"); 
console.log("asdgfk")

var index = 0;
function change() {

  let color = ['#00ffff', '#f08080','#ffb6c1', '#d4ad58', '#c55edf', '#dc143c', '#b22222', 'ff7f50', '#6495ed', '00008b', '#b8860b', '#006400', '#2f4f4f','#6a5acd'];
  let name1 = document.getElementById("btn");
      document.body.style.backgroundColor= color[index+3];
      name1.style.backgroundColor = color[index];
      console.log(name1)

      index = (index + 1) % color.length;
 
   }


        var time= new Date();
        console.log(time.getHours());
    
    
        if(time.getHours()< 12){
            window.alert("Hello, Good Morning"+ " " + time);
        }
        else if(time.getHours()>=12 && time.getHours()<18){
            window.alert("Hello, Good Afternoon"+ " "+ time );
        }
        else{
            window.alert("Hello, Good Evening"+ ' ' + time);
        }
    
    
function add(){
    //  e.preventDefault();
    let one= parseFloat(document.getElementById("first").value);
    console.log(one);
    let two = parseFloat(document.getElementById("second").value);
    console.log(two);

    if(!one || !two){
        
     window.alert("Please enter valid number");
    }
    else if(one===NaN || two===NaN){
        window.alert("Please enter valid number");
    }
    else{
        let result =  one + two;
    console.log(result);
     document.getElementById("result").innerText = result;
    }
    

}

function sub(){
    //  e.preventDefault();
    let one= parseFloat(document.getElementById("first").value);
console.log(one);
let two = parseFloat(document.getElementById("second").value);
console.log(two);
if(!one || !two){
        
    window.alert("Please enter valid number");
   }
   else if(one===NaN || two===NaN){
    window.alert("Please enter valid number");
}
   else{
let result =  one - two;
     
     console.log(result);
     document.getElementById("result").innerText = result;
   }
}

function product(){
    //  e.preventDefault();
    let one= parseFloat(document.getElementById("first").value);
console.log(one);
let two = parseFloat(document.getElementById("second").value);
console.log(two);
if(!one || !two){
        
    window.alert("Please enter valid number");
   }
   else if(one===NaN || two===NaN){
    window.alert("Please enter valid number");
}
   else{
let result =  one * two;
     
     console.log(result);
     document.getElementById("result").innerText = result;
   }

}
function div(){
    //  e.preventDefault();
    let one= parseFloat(document.getElementById("first").value);
console.log(one);
let two = parseFloat(document.getElementById("second").value);
console.log(two);
if(!one || !two){
        
    window.alert("Please enter valid number");
   }
   else if(one===NaN || two===NaN){
    window.alert("Please enter valid number");
}
   else{
let result =  one / two;
     
     console.log(result);
     document.getElementById("result").innerText = result;
   }
}
 
// 
// 