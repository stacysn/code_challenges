function kangaroo(x1, v1, x2, v2) {

    let fasterRoo;
    let slowerRoo;
    if(v1 > v2){
        fasterRoo = {location: x1, speed: v1}
        slowerRoo = {location: x2, speed: v2}
    }
    else {
       fasterRoo = {location: x2, speed: v2}
        slowerRoo = {location: x1, speed: v1}
    }

    while(slowerRoo.location >= fasterRoo.location){
         slowerRoo.location += slowerRoo.speed;
         fasterRoo.location += fasterRoo.speed;

        if(slowerRoo.location === fasterRoo.location){
          return "YES"
        }
    }

    return "NO"
}