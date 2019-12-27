var promise = new Promise(function(resolve, reject) { 
  const x = 7; 
  const y = 7;
  if(x === y) { 
    resolve(); 
  } else { 
    reject(); 
  } 
}); 
  
promise. 
    then(function () { 
        console.log('Success.....'); 
    }). 
    catch(function () { 
        console.log('Some error has occured'); 
    }); 