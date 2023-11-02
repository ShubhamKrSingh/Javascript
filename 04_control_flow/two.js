// switch

const month = "March";

switch(month){
    case 1:{
        console.log("January");
        break;
    }
    case 2:{
        console.log("February");
        break;
    }
    case 3:{
        console.log("March");
        break;
    }
    case 4:{
        console.log("February");
        break;
    }
    default:{
        console.log("Not in Option!");
    }
}

switch(month){
    case "Jan":{
        console.log("January");
        break;
    }
    case "Feb":{
        console.log("February");
        break;
    }
    case "March":{
        console.log("March");
        break;
    }
    case "April":{
        console.log("February");
        break;
    }
    default:{
        console.log("Not in Option!");
    }
}