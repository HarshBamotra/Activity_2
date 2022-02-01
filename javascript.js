var result , input1 , input2;

function codeChanger()
    {
        var op = document.getElementById("option");
        var choice = op.options[op.selectedIndex].value;
        if(choice == "add1")
            {
                document.getElementById("sub").style.display = "none";
                document.getElementById("mul").style.display = "none";
                document.getElementById("div").style.display = "none";
                document.getElementById("add").style.display = "block";
                document.getElementById("r5_1").innerHTML = "The Addition is :";
            }
        else if(choice == "sub1")
            {
                document.getElementById("mul").style.display = "none";
                document.getElementById("div").style.display = "none";
                document.getElementById("add").style.display = "none";
                document.getElementById("sub").style.display = "block";
                document.getElementById("r5_1").innerHTML = "The Subtraction is :";
            }
        else if(choice == "mul1")
            {
                document.getElementById("div").style.display = "none";
                document.getElementById("add").style.display = "none";
                document.getElementById("sub").style.display = "none";
                document.getElementById("mul").style.display = "block";
                document.getElementById("r5_1").innerHTML = "The Multiplication is :";
            }
        else if(choice == "div1")
            {
                document.getElementById("add").style.display = "none";
                document.getElementById("sub").style.display = "none";
                document.getElementById("mul").style.display = "none";
                document.getElementById("div").style.display = "block";
                document.getElementById("r5_1").innerHTML = "The Division is :";
            }
        else
            {
                document.getElementById("add").style.display = "none";
                document.getElementById("sub").style.display = "none";
                document.getElementById("mul").style.display = "none";
                document.getElementById("div").style.display = "none";
                document.getElementById("r5_1").innerHTML = "";
            }
    }

function reset()
    {
        document.getElementById("input_1").value="";
        document.getElementById("input_2").value="";
        document.getElementById("r1_1").innerHTML="";
        document.getElementById("r2_2").innerHTML="";
        document.getElementById("r3_3").innerHTML="";
        document.getElementById("r5_2").innerHTML="";
        var x = document.getElementsByClassName("4")
            for(var i=0 ; i<x.length ; i++)
                x[i].style.color="black";

        clearTimeout(t1);clearTimeout(t2);
        clearTimeout(t3);clearTimeout(t4);
    }

function start()
    {
        calculate();
        const t1 = setTimeout(function(){
            var x = document.getElementsByClassName("4")
            for(var i=0 ; i<x.length ; i++)
                x[i].style.color="black";
            document.getElementById("r1_1").innerHTML=input1;
            var x = document.getElementsByClassName("1")
            for(var i=0 ; i<x.length ; i++)
                x[i].style.color="red";
        } , 2000);

        const t2 = setTimeout(function(){
            var x = document.getElementsByClassName("1")
            for(var i=0 ; i<x.length ; i++)
                x[i].style.color="black";
            document.getElementById("r2_2").innerHTML=input2;
            var x = document.getElementsByClassName("2")
            for(var i=0 ; i<x.length ; i++)
                x[i].style.color="red";
        } , 4000);

        const t3 = setTimeout(function(){
            var x = document.getElementsByClassName("2")
            for(var i=0 ; i<x.length ; i++)
                x[i].style.color="black";
            document.getElementById("r3_3").innerHTML=result;
            var x = document.getElementsByClassName("3")
            for(var i=0 ; i<x.length ; i++)
                x[i].style.color="red";
        } , 6000);

        const t4 = setTimeout(function(){
            var x = document.getElementsByClassName("3")
            for(var i=0 ; i<x.length ; i++)
                x[i].style.color="black";
            document.getElementById("r5_2").innerHTML=result;
            var x = document.getElementsByClassName("4")
            for(var i=0 ; i<x.length ; i++)
                x[i].style.color="red";
        } , 8000);        
    }

function calculate()
    {
        result = 0;
        input1 = document.getElementById("input_1").value;
        input2 = document.getElementById("input_2").value;

        var op = document.getElementById("option");
        var choice = op.options[op.selectedIndex].value;
        if(choice == "add1")
            {
                result =  input1+input2;
            }
        else if(choice == "sub1")
            {
                result =  input1-input2;
            }
        else if(choice == "mul1")
            {
                result =  input1*input2;
            }
        else if(choice == "div1")
            {
                result = input1/input2;
            }
        else
            {
                result=0;
            }

        console.log(result);
    }
