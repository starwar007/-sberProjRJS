export function formatDate(str) { 
    const month = str.slice(5, 7);
    let datemonth = '';
    switch (month) {
        case '01' : datemonth ='января';
        break;
        case '02' : datemonth ='февраля';
        break;
        case '03' : datemonth ='марта';
        break;
        case '04' : datemonth ='апреля';
        break;
        case '05' : datemonth ='мая';
        break;
        case '06' : datemonth ='июня';
        break;
        case '07' : datemonth ='июля';
        break;
        case '08' : datemonth ='августа';
        break;
        case '09' : datemonth ='сентября';
        break;
        case '10' : datemonth ='октября';
        break;
        case '11' : datemonth ='ноября';
        break;
        case '12' : datemonth ='декабря';
        break;
        default: console.log('Что то не то');
    } 
    let string = (str.slice(8, 10) + ' ' + datemonth + ' ' + str.slice(0, 4));
    return string.startsWith('0') ? string.slice(1) : string;
}