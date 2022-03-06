function calculateBirthday(){
    const fullName=document.getElementById("full_name").value;
    const myGender=document.getElementById("gender").value;
    const dateOfBirth=document.getElementById("date_of_birth").value;

    //extract data

    let cc= year/100;
    yy=year-((year/100)*100);

    c=(cc/4)-2*cc-1;
    y= 5*yy/4;
    m=26*(month+1)/10;
    d= day;

    dayofweek =(c+y+m+d)%7;

    switch(dayofweek){
        case 0: dayString="Sunday";
        break;
        case 1: dayString="Monday";
        break;
        case 2: dayString="Tuseday";
        break;
        case 3: dayString="Wednesday";
        break;
        case 4: dayString="Thursday";
        break;
        case 5: dayString="Friday";
        break;
        case 6: dayString="Saturday";
        break;
    }

    return dayString;




}