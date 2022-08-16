const argv = process.argv;

console.log(timeWord(argv[2]));

function timeWord(clock){
    const hour = clock.slice(0,2);
    const minute = clock.slice(3);
    let time = []

    if(hour < "12"){
        time[3] = "AM";
    }
    else{
        time[3] = "PM";
    }

    switch(hour){
        case '00':
        case '12':
            time[0] = "Twelve";
            break;
        
        case '01':
        case '13':
            time[0] = 'One';
            break;
        
        case '02':
        case '14':
            time[0] = 'Two';
            break;

        case '03':
        case '15':
            time[0] = 'Three';
            break;

        case '04':
        case '16':
            time[0] = 'Four';
            break;

        case '05':
        case '17':
            time[0] = 'Five';
            break;

        case '06':
        case '18':
            time[0] = 'Six';
            break;

        case '07':
        case '19':
            time[0] = 'Seven';
            break;

        case '08':
        case '20':
            time[0] = 'Eight';
            break;

        case '09':
        case '21':
            time[0] = 'Nine';
            break;

        case '10':
        case '22':
            time[0] = 'Ten';
            break;

        case '11':
        case '23':
            time[0] = 'Eleven';
            break;
        
        default:
            console.log('Please Enter A Valid Number');
            break;
    }

    switch(minute[1]){
        case '0':
            if(minute[0] == '0'){
                time[2] = 'Clock';
            }
            break;

        case '1':
            time[2] = 'One';
            break;

        case '2':
            time[2] = 'Two';
            break;

        case '3':
            time[2] = 'Three';
            break;

        case '4':
            time[2] = 'Four';
            break;

        case '5':
            time[2] = 'Five';
            break;

        case '6':
            time[2] = 'Six';
            break;

        case '7':
            time[2] = 'Seven';
            break;

        case '8':
            time[2] = 'Eight';
            break;

        case '9':
            time[2] = 'Nine';
            break;

        default:
            console.log("Please Enter A Valid Number");
            break;
    }

    switch(minute[0]){
        case '0':
            time[1] = 'O';
            break;

        case '1':
            switch(minute[1]){
                case '0':
                    time.splice(2,1);
                    time[1] = 'Ten';
                    break;

                case '1':
                    time.splice(2,1);
                    time[1] = 'Eleven';
                    break;

                case '2':
                    time.splice(2,1);
                    time[1] = 'Twelve';
                    break;

                case '3':
                    time.splice(2,1);
                    time[1] = 'Thirteen';
                    break;

                case '4':
                    time.splice(2,1);
                    time[1] = 'Fourteen';
                    break;

                case '5':
                    time.splice(2,1);
                    time[1] = 'Fifteen';
                    break;

                case '6':
                    time.splice(2,1);
                    time[1] = 'Sixteen';
                    break;

                case '7':
                    time.splice(2,1);
                    time[1] = 'Seventeen';
                    break;

                case '8':
                    time.splice(2,1);
                    time[1] = 'Eighteen';
                    break;

                case '9':
                    time.splice(2,1);
                    time[1] = 'Nineteen';
                    break;
            }
            break;

        case '2':
            if(minute[1] == '0'){
                time.splice(2,1);
            }
            time[1] = 'Twenty';
            break;

        case '3':
            if(minute[1] == '0'){
                time.splice(2,1);
            }
            time[1] = 'Thirty';
            break;

        case '4':
            if(minute[1] == '0'){
                time.splice(2,1);
            }
            time[1] = 'Forty';
            break;

        case '5':
            if(minute[1] == '0'){
                time.splice(2,1);
            }
            time[1] = 'Fifty';
            break;
    }

    let Time = time.join(" ");

    if(hour == "00" && minute == "00" && time[3] == "AM"){
        Time = "Midnight";
    }
    else if(hour == "12" && minute == "00" && time[3] == "PM"){
        Time = "Noon";
    }

    return Time;
}
