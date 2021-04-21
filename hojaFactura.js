let hojaFactura = `<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>CodePen - Factura</title>
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'>
  
  <link rel="stylesheet" href="script/imprimircss/style.css">

</head>
<body>

<!-- partial:index.partial.html -->
</div><div id="app" class="col-md-11">


    <h2 align="center">Ficha de deposito</h2>

    <div class="row my-3">
      <div class="col-10">
        <h5>Universidad </5>

      </div>
      <div class="col-2">
        <img src="" />
      </div>
    </div>
  
    <hr />
  
    <div class="row fact-info mt-3">
      <div class="col-3">
        <h5>Expediente</h5>
        <p id="ejemplo"></p>
      </div>
      <div class="col-3">
        <h5>id del alumno</h5>
        <p id="ejemplo"></p>
      </div>
      <div class="col-3">
        <h5>N° de factura</h5>
        <h5></h5>
      </div>
    </div>
  
    <div class="row my-5">
      <table class="table table-borderless factura">
        <thead>
          <tr>
            <th>Bancos</th>
            <th>Referencia</th>
             <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Banamex</td>
            <td>1578 0000 0000 0000 0000 0000 4202 1523 1042 3088 0218</td>
            <td>3,340.00</td>
          </tr>
          <tr>
            <td>Scotiabank</td>
            <td>5475 0000 0000 0000 0000 0000 6740 0936 7452 9374 </td>
            <td>3,340.00</td>
          </tr>
          <tr>
            <td>BBVA</td>
            <td>9674 0000 0000 0000 0000 0000 8563 9573 1538 4865 </td>
            <td>3,340.00</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th>Total </th>
            <th>3,340.00</th>
          </tr>
        </tfoot>
      </table>
    </div>
  
    <div class="cond row">
      <div class="col-12 mt-3">
        <h4>Condiciones y formas de pago</h4>
        <p>El pago se debe realizar en un plazo de 15 dias.</p>
        <p>
          Banco Banreserva
          <br />
          IBAN: DO XX 0075 XXXX XX XX XXXX XXXX
          <br />
          Código SWIFT: BPDODOSXXXX
        </p>
      </div>
    </div>
</div>
<!-- partial -->
  <script src="script/imprimircss/script.js"></script>
</body>
</html>`;