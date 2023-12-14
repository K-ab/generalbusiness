const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


const html = `
 
 <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Points de relais |General Business</title>
        <link rel="stylesheet" href="styles/style.css">
    
  </head>
    <body>
        <header>
            
             <h3>NOS POINTS DE RELAIS GENERAL BUSINESS |Cell: (+225) 05 94 18 79 75</h3>
             
              
             
           
        </header>
        <main>
<!--------------------------------Start Area--------------------------------------->

 <div class="container">
         <div class="ringring"><h3>Treichville</h3>
         </div>
      </div>
      </div>

<div class="container3">
        <div class="ringring"><h3>Grand Bassam</h3>
        </div>
     </div>
     </div>


<div class="container4">
        <div class="ringring">
         <h3>Bouaké</h3>
         
        </div>
     </div>
     </div>

     <div class="container5">
        <div class="ringring"><h3>Bonoua</h3>
        </div>
     </div>
     </div>

<br><br><br><br><br>

<div class="container7">
    <div class="ringring"><h3>Khorogo</h3>
    </div>
 </div>
 </div>

<div class="container6">
    <div class="ringring"><h3>Adzopé</h3>
    </div>
 </div>
 </div>



<div class="container">
    <div class="ringring"><h3>Bouaflé</h3>
    </div>
 </div>
 </div>

 <div class="container11">
    <div class="ringring"><h3>Aboisso</h3>
    </div>
 </div>
</div>


<div class="container10">
    <div class="ringring"><h3>Touba</h3>
    </div>
 </div>
</div>

  

 <div class="container8">
    <div class="ringring"><h3>Yamoussoukro</h3>
    </div>
 </div>
</div>

<div class="container9">
    <div class="ringring"><h3>Ferke</h3>
    </div>
 </div>
</div>

 <div class="container">
    <div class="ringring"><h3>Abidjan</h3>
    </div>
 </div>
 </div>

 <br><br><br>
 <br><br><br><br><br><br>

 <div>
            
   

    <img class="welc" src="images/christmas.png" alt="icon">

 
    <img class="welc" src="images/christmas.png" alt="icon">


    <img class="welc" src="images/christmas.png" alt="icon">


    <img class="welc" src="images/christmas.png" alt="icon">

</div>


<!--------------------------------End Area--------------------------------------->


        </main>
        <footer>
            &copy;2023 KAB|General Business Sarl
        </footer>

        <script src="scripts/index.js"></script>
    </body>
</html>
 
