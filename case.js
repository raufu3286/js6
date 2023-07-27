const song= "Ami banglar Gan gai";
//console.log (song);
//console.log(song.toLocaleLowerCase());
//console.log(song.toLocaleUpperCase());
//console.log(song.toLowerCase());


//console.log(song.split(" "));
//console.log(song.split("b"));
//console.log(song.slice(5,11));
//console.log(song.substring(4,7));




const input = "blackCow";
const saveinfo = "blackcow";
 if(input.toLowerCase( ) == saveinfo.toLowerCase()){
    //console.log("info exit");

 }
 else{
    //console.log("info not exit");
 }


 //const books = [
 //   'Himu','C Programming','Data structure and Algorithm','Assembly',' Problem solving with someone'
 //];

 //const searching = 'problem';
 //const output = [];

 //for (const book of books){
   // console.log(books);
  // if (book.toLowerCase().indexOf(searching.toLowerCase()) != -1){
  //  output.push(book);
  // }
 //}

// console.log(output);

 //for (const book of books){
    // console.log(books);
   // if (book.toLowerCase().includes(searching.toLowerCase()) != -1){
    // output.push(book);
    //}
  //}
 
 // console.log(output);



  //for (const book of books){
    // console.log(books);
  //  if (book.toLowerCase().startsWith('assembly')){
   //  output.push(book);
   // }
  //}
 
  //console.log(output);






  //const firstName ="Raufu" ;
  //const lastName = " umme";
  //const fullname = firstName.concat(lastName).concat(' Rhidi');
  //console.log(fullname);


  

  const books = [
"Himu","C Programming","Data structure and Algorithm","Assembly", "Problem solving with someone"
 ];

 //function biggestName(array) {
   // if(Array.isArray(array)== false){
  //      return "please provide a valid array"
  //  }
  //  else{
   //     let biggest = '';
    
   // for(const book of array){
   //     if (book.length > biggest.length){
   //         biggest = book;
    //    }
   // }
    //return biggest;
   // }
 //}
//console.log(biggestName(books));



const firstNumber = [1,2,3,4,5];
const lastNumber = [4,5,6,7,8];
const combined = firstNumber.concat(lastNumber);
//console.log(combined);




function number(num1,num2) {
   // console.log(arguments);
   // console.log(arguments[4]);
   let total = 0;
   for(const number of arguments){
   // console.log(number);
   total= total+number;
   }
   return total;
}
const result = number (10,20,30,40,50,60,70);
console.log(result);
































