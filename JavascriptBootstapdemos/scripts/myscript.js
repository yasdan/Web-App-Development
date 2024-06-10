let st_name="Ramesh";
 document.getElementById("demo").innerHTML = "Hello World! student name is "+            st_name;
let x=100;
document.getElementById("d1").innerHTML=x;
            x="Ramesh";
            document.getElementById("d2").innerHTML=x;
            const names =["Anand","Minnu","Krish"];
            let txt="";
            for(let n in names){
                txt += names[n]+" ";
            };
            document.getElementById("d5").innerHTML=txt;
            let date = new Date();

            function gettime(){
                let date = Date();
                document.getElementById("d4").innerHTML=date;
            }

            function displayName(){
                document.getElementById('d3').innerHTML="Abdul";
            }
            function hideName(){
                document.getElementById('d3').innerHTML="hi";
            }
            const person={
                fname:"Salamna", lname:" Khan",
                fullname:function(){
                    return this.fname+this.lname;
                }
            }
            function showname(){
            let name= person.fullname();
            document.getElementById("d6").innerHTML=name;
            }

            function Student(fullname, course, college){
                this.fullname=fullname;
                this.course=course;
                this.college=college;
            }
            const student1= new Student("Anand"," B.Tech 2nd Year", " P ES Engineering college");
           
            function showstudent(){
            let s= student1.fullname+student1.course+student1.college;
            document.getElementById('d7').innerHTML=s;
            }