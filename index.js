let button=document.getElementById('btn');

button.addEventListener('click',()=>{
    const height=parseInt(document.getElementById('height').value);
    const weight=parseInt(document.getElementById('weight').value);
    const result=document.getElementById('output');
    let height_status=false, weight_status=false;
    if(height=='' || isNaN(height)  || height<=0)
    {
        document.getElementById('height_error').innerHTML='Enter Valid Height'
    }
    else
    {
        document.getElementById('height_error').innerHTML='';
        height_status=true;
    }
    if(weight=='' || isNaN(weight)  || weight<=0)
    {
        document.getElementById('weight_error').innerHTML='Enter Valid weight'
    }
    else
    {
        document.getElementById('weight_error').innerHTML='';
        weight_status=true;
    }
    if(height_status && weight_status)
    {
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        if(bmi<=18.5)
        {
            result.innerHTML='BMI = '+bmi+'<br>'+ 'You are Underweight';
        }
        else if(bmi>18.5 && bmi<25)
        {
            result.innerHTML='BMI = '+bmi+'<br>'+'BMI is normal';
        }
        else if(bmi>=25 && bmi<30)
        {
            result.innerHTML='BMI = '+bmi+'<br>'+ 'You are Overweight';
        }
        else
        {
            result.innerHTML='BMI = '+bmi+'<br>'+'Obesity';
        }

    }
    else
    {
        alert('Invalid input');
        result.innerHTML='';
    }
});
