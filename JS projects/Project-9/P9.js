let raceNumber = Math.floor(Math.random() * 1000);
let isearly = true;
let runnerAge = 15;
  
if(runnerAge>18 && isearly){
    raceNumber = raceNumber+1000;
}

if(runnerAge>18 && isearly){
    console.log(`Your race number is ${raceNumber}. You will race at 9:30 am `);
}

else if(runnerAge>18 && !isearly){
    console.log(`Your race number is ${raceNumber}. You will race at 11:00 am` );
    }

else if(runnerAge<18){
    console.log(`Your race number is ${raceNumber}. You will race at 12:30 am`); 
}

else{
    console.log(`Please see the registration desk.`)
}
