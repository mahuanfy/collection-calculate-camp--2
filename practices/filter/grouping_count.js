'use strict';

function grouping_count(collection) {

  //在这里写入代码
 var result ={};

 for(var index in collection){
   if(result[collection[index]]){
     result[collection[index]] +=1;
   }else{
     result[collection[index]]=1;
   }

 }

   return result;
}

module.exports = grouping_count;
