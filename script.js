function startTime(){
        const today = new Date();
        let day = today.getUTCDate();
        let mon = today.getMonth()+1;
        let year = today.getFullYear();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        am_pm = "AM";

        if(h > 12) {
            h -= 12;
            am_pm = "PM";
        }
        if(h == 0) {
            h = 12;
            am_pm = "AM";
        }
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('timer').innerHTML = day+"/"+mon+"/"+year+", "+h+":"+m+":"+s + " "+am_pm;
        setTimeout(startTime,1000);
    }

    function checkTime(i){
        if(i<10){
            i = "0" + i;
        }
        return i;
    }