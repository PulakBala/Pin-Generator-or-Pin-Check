// function isBestFriend (person1,person2){
//     if(person1.name == person2.friend && person1.friend == person2.name){
//     return true;
//     }
//     //error massage
//     else if(typeof person1.name=='number' ||typeof person2.friend=='number' ||typeof person1.friend=='number'||typeof person2.name=='number'){
//     return "error: please enter the right name";
//     }
//     else{
//     return false;
//     }
//     };
//     // object 1
//     let person1={ name:"mahdi", friend:'tamim'  };
//     //object 2
//     let person2={ name:'tamim', friend:'mahdi'};
//     let getResult=isBestFriend(person1,person2);
//     console.log(getResult);
//     //Problem 5: has ended.

function isBestFriend (person1,person2){
    if(person1.Name==person2.Friend && person1.Friend==person2.Name){
    return true;
    }
    //error massage
    else if(typeof person1.Name=='number' ||typeof person2.Friend=='number' ||typeof person1.Friend=='number'||typeof person2.Name=='number'){
    return "error: please enter the right name";
    }
    else{
    return false;
    }
    }
    // object 1
    let person1={
    Name:"mahdi",
    Friend:'tamim'
    }
    //object 2
    let person2={
    Name:'tamim',
    Friend:'mahdi'
    }
    let getResult=isBestFriend(person1,person2);
    console.log(getResult);
    //Problem 5: has ended.