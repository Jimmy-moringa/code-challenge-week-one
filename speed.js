

function mySpeed(speed) {
    let speedLimit = 70;
//the if statements
    if (speed <= speedLimit) {
        document.getElementById("book").innerHTML = "OK";
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / 5);
        document.getElementById("book").innerHTML = `Demerit points: ${demeritPoints}`;
        console.log(`Points: ${demeritPoints}`);

        if (demeritPoints > 12) {
            document.getElementById("book").innerHTML = "Your license has been suspended";
        }
    }
}

const speed = parseInt(prompt("Enter the speed of the car: "));
mySpeed(speed);
