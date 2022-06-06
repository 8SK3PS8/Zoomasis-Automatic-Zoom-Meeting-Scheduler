// var zoomList = JSON.parse(zoomLinks);
setInterval(function(){
    var now = new Date();

    //first period
    var number1 = document.getElementById('first_ZoomLink').value;
    var timeperiod1 = document.getElementById('firstPeriod').value;
    var timeComp1 = timeperiod1.split(":");
    var hours = parseInt(timeComp1[0]);
    var minutes = parseInt(timeComp1[1]);
    var millisTill1 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0, 0) - now;
    if (-1000 <= millisTill1 && millisTill1 < 0) {
        window.open(number1);
    }

    //second period
    var number2 = document.getElementById('second_ZoomLink').value;
    var timeperiod2 = document.getElementById('secondPeriod').value;
    var timeComp2 = timeperiod2.split(":");
    var hours2 = parseInt(timeComp2[0]);
    var minutes2 = parseInt(timeComp2[1]);
    var millisTill2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours2, minutes2, 0, 0) - now;
    if (-1000 <= millisTill2 && millisTill2 < 0) {
        window.open(number2);
    }

    //third period
    var number3 = document.getElementById('third_ZoomLink').value;
    var timeperiod3 = document.getElementById('thirdPeriod').value;
    var timeComp3 = timeperiod3.split(":");
    var hours3 = parseInt(timeComp3[0]);
    var minutes3 = parseInt(timeComp3[1]);
    var millisTill3 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours3, minutes3, 0, 0) - now;
    if (-1000 <= millisTill3 && millisTill3 < 0) {
        window.open(number3);
    }

    //fourth period
    var number4 = document.getElementById('fourth_ZoomLink').value;
    var timeperiod4 = document.getElementById('fourthPeriod').value;
    var timeComp4 = timeperiod4.split(":");
    var hours4 = parseInt(timeComp4[0]);
    var minutes4 = parseInt(timeComp4[1]);
    var millisTill4 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours4, minutes4, 0, 0) - now;
    if (-1000 <= millisTill4 && millisTill4 < 0) {
        window.open(number4);
    }

    //fifth period
    var number5 = document.getElementById('fifth_ZoomLink').value;
    var timeperiod5 = document.getElementById('fifthPeriod').value;
    var timeComp5 = timeperiod5.split(":");
    var hours5 = parseInt(timeComp5[0]);
    var minutes5 = parseInt(timeComp5[1]);
    var millisTill5 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours5, minutes5, 0, 0) - now;
    if (-1000 <= millisTill5 && millisTill5 < 0) {
        window.open(number5);
    }

    //sixth period
    var number6 = document.getElementById('sixth_ZoomLink').value;
    var timeperiod6 = document.getElementById('sixthPeriod').value;
    var timeComp6 = timeperiod6.split(":");
    var hours6 = parseInt(timeComp6[0]);
    var minutes6 = parseInt(timeComp6[1]);
    var millisTill6 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours6, minutes6, 0, 0) - now;
    if (-1000 <= millisTill6 && millisTill6 < 0) {
        window.open(number6);
    }

    //seventh period
    var number7 = document.getElementById('seventh_ZoomLink').value;
    var timeperiod7 = document.getElementById('seventhPeriod').value;
    var timeComp7 = timeperiod7.split(":");
    var hours7 = parseInt(timeComp7[0]);
    var minutes7 = parseInt(timeComp7[1]);
    var millisTill7 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours7, minutes7, 0, 0) - now;
    if (-1000 <= millisTill7 && millisTill7 < 0) {
        window.open(number7);
    }
    
    // zoomList.Period1.push(number1);
    // zoomList.Period2.push(number2);
    // zoomList.Period3.push(number3);
    // zoomList.Period4.push(number4);
    // zoomList.Period5.push(number5);
    // zoomList.Period6.push(number6);
    // zoomList.Period7.push(number7);
}, 1000); // every second call a method to check the time