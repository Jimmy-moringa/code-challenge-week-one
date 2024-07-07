function netSalary(){

    const grossSalary = document.getElementById ('input').value;
    
    // asuming that no one is taxed below 3000 shillings
    if( grossSalary>=3000 && grossSalary  <=5999){
        let NHIF=150;
        let NSSF =grossSalary*0.06;
        let PAYE = grossSalary*0.1;
        document.getElementById ("output").innerHTML = grossSalary -(NHIF +NSSF + PAYE);
    }
    
    else if(grossSalary>=6000 && grossSalary<=7999){
        let NHIF=300;
        let NSSF =grossSalary*0.06;
        let PAYE =grossSalary*0.13;
        document.getElementById ("nhif").innerHTML = NHIF;
        document.getElementById ("output").innerHTML = grossSalary -(NHIF +NSSF + PAYE);
    }
    
    else if(grossSalary>=8000 && grossSalary<=11999){
        let NHIF=400;
        let NSSF =grossSalary*0.06;
        let PAYE =grossSalary*0.17;
        document.getElementById ("output").innerHTML = grossSalary -(NHIF +NSSF + PAYE);
    }
    else if(grossSalary>=12000 && grossSalary<=14900){
        let NHIF=500;
        let NSSF =grossSalary*0.06;
        let PAYE =grossSalary*0.23;
        document.getElementById ("output").innerHTML = grossSalary -(NHIF +NSSF + PAYE);
    }
    else if(grossSalary>=15000 && grossSalary<=19999){
        let NHIF=600;
        let NSSF =grossSalary*0.06;
        let PAYE =grossSalary*0.27;
        document.getElementById ("output").innerHTML = grossSalary -(NHIF +NSSF + PAYE);
    }
    
    else if(grossSalary>=20000 && grossSalary<=24999){
        let NHIF=750;
        let NSSF =grossSalary*0.06;
        document.getElementById ("output").innerHTML = grossSalary -(NHIF +NSSF + PAYE);
    }
    else if(grossSalary>=25000 && grossSalary<=29999){
        let NHIF=850;
        let NSSF =grossSalary*0.06;
        let PAYE =grossSalary*0.32;
        document.getElementById ("output").innerHTML = grossSalary -(NHIF +NSSF + PAYE);
    }
    else if(grossSalary>=30000 && grossSalary <=99999){
        let NHIF=1200;
        let NSSF =grossSalary*0.06;
        let PAYE =grossSalary*0.37;
        document.getElementById ("output").innerHTML = grossSalary -(NHIF +NSSF + PAYE);
    }
    
    
    else if(grossSalary>=100000){
        let NHIF=3200;
        let NSSF =grossSalary*0.06;
        let PAYE =grossSalary*0.40;
        document.getElementById ("output").innerHTML = grossSalary -(NHIF +NSSF + PAYE);
    }
    // asuming that no one is taxed below 3000 shillings.
    else if( grossSalary<3000) {
        document.getElementById ("output").innerHTML = "YOU CAN NOT ADD A VALUE BELOW 3000";
    }
    }
    
