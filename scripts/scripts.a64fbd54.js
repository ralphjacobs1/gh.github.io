"use strict";angular.module("angularApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).otherwise({redirectTo:"/"})}]),angular.module("angularApp").controller("MainCtrl",function(){this.awesomeThings=["Home","Artists","Songs","ContactUs"]});var app=angular.module("angularApp",["ngRoute"]);app.config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html"}).when("/artists",{templateUrl:"Artists.htm"}).when("/songs",{templateUrl:"songs.htm"}).when("/contactUs",{templateUrl:"contactUs.htm"})}]),angular.module("angularApp").run(["$templateCache",function(a){a.put("views/Artists.html",'<!-- About Section --> <div class="responsive"> <div class="w3-row-padding" style="margin:0 -16px" id="artists"> <div class="w3-padding-64 w3-content" id="about"> <h2 class="w3-text-light-grey">The Crew</h2> <hr style="width:200px" class="w3-opacity"> <!-- Grid for photos --> <div class="container-fluid" style="margin:0 -16px"> <div class="col-sm-12"> <div class="col-md-4"> <div class="thumbnail"> <a href="/w3images/lights.jpg"> <img src="/images/2pac.ea5898ed.jpg" alt="Lights" style="width:100%"> <div class="caption"> <p>Lorem ipsum...</p> </div> </a> </div> </div> <div class="col-md-4"> <div class="thumbnail"> <a href="/w3images/lights.jpg"> <img src="/images/Cube.5c4ae013.jpg" alt="Lights" style="width:100%"> <div class="caption"> <p>Lorem ipsum...</p> </div> </a> </div> </div> <div class="col-md-4"> <div class="thumbnail"> <a href="/w3images/lights.jpg"> <img src="/images/DMX1.764bb826.jpg" alt="Lights" style="width:100%"> <div class="caption"> <p>Lorem ipsum...</p> </div> </a> </div> </div> </div> <div class="col-sm-12"> <div class="col-md-4"> <div class="thumbnail"> <a href="/w3images/lights.jpg"> <img src="/images/singer.6d82c247.jpg" alt="Lights" style="width:100%"> <div class="caption"> <p>Lorem ipsum...</p> </div> </a> </div> </div> <div class="col-md-4"> <div class="thumbnail"> <a href="/w3images/lights.jpg"> <img src="/images/RapRatz.23641d38.jpg" alt="Lights" style="width:100%"> <div class="caption"> <p>Lorem ipsum...</p> </div> </a> </div> </div> <div class="col-md-4"> <div class="thumbnail"> <a href="/w3images/lights.jpg"> <img src="/images/easyE.2278af25.jpg" alt="Lights" style="width:100%"> <div class="caption"> <p>Lorem ipsum...</p> </div> </a> </div> </div> </div> <!-- End photo grid --> </div> </div> </div> </div>'),a.put("views/contactUs.html",'<!-- Contact Section --> <div class="w3-padding-64 w3-content w3-text-grey" id="contact"> <h2 class="w3-text-light-grey">Contact Me</h2> <hr style="width:200px" class="w3-opacity"> <div class="w3-section"> <p><i class="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> George, WesternCape</p> <p><i class="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Phone: 072 527 6545</p> <p><i class="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> Email: majorwipz@georgerappers.com</p> </div><br> <p>Lets get in touch. Send me a message:</p> <form action="form.asp" target="_blank"> <p><input class="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name"></p> <p><input class="w3-input w3-padding-16" type="text" placeholder="Email" required name="Email"></p> <p><input class="w3-input w3-padding-16" type="text" placeholder="Subject" required name="Subject"></p> <p><input class="w3-input w3-padding-16" type="text" placeholder="Message" required name="Message"></p> <p> <button class="w3-btn w3-light-grey w3-padding-large" type="submit"> <i class="fa fa-paper-plane"></i> SEND MESSAGE </button> </p> </form> <!-- End Contact Section --> </div>'),a.put("views/gallery.html",'<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <title>Title</title> </head> <body> </body> </html>'),a.put("views/main.html",'<div class="jumbotron" id="home"> <h1>George Artists</h1> <p class="lead"> <img src="images/skull.bd574ff2.png" alt="We are George" width="100%"><br> Taking George To another Level... </p> <!--<p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p>--> </div> <div class="mainContent" id="wrapper"> <div ng-include="\'views/Artists.html\'"></div> <div ng-include="\'views/songs.html\'"></div> <div ng-include="\'views/contactUs.html\'"></div> </div>'),a.put("views/songs.html",'<div class="w3-padding-64 w3-content w3-text-grey" id="songs"> <h2 class="w3-text-light-grey">Realeased Songs</h2> <hr style="width:200px" class="w3-opacity"> </div> <div class="container"> <div class="panel-group"> <div class="panel panel-default"> <div class="panel-heading"> <h4 class="panel-title"> <a data-toggle="collapse" href="#collapse1">IAmSmash</a> </h4> </div> <div id="collapse1" class="panel-collapse collapse"> <div class="panel-body">Waves</div> <div class="panel-footer">Tshumani</div> </div> </div> </div> </div> <div class="container"> <div class="panel-group"> <div class="panel panel-default"> <div class="panel-heading"> <h4 class="panel-title"> <a data-toggle="collapse" href="#collapse2">MaJoR WiPz</a> </h4> </div> <div id="collapse2" class="panel-collapse collapse"> <div class="panel-body">Afrikaans</div> <div class="panel-footer">Jy Moetit Glu</div> </div> </div> </div> </div> <div class="container"> <div class="panel-group"> <div class="panel panel-default"> <div class="panel-heading"> <h4 class="panel-title"> <a data-toggle="collapse" href="#collapse2">Kaede Heynes</a> </h4> </div> <div id="collapse3" class="panel-collapse collapse"> <div class="panel-body">Afrikaans</div> <div class="panel-footer">Jy Moetit Glu</div> </div> </div> </div> </div> <script>function myFunction(id) {\n    var x = document.getElementById(id);\n    if (x.className.indexOf("w3-show") == -1) {\n        x.className += " w3-show";\n        x.previousElementSibling.className += " w3-red";\n    } else {\n        x.className = x.className.replace(" w3-show", "");\n        x.previousElementSibling.className =\n        x.previousElementSibling.className.replace(" w3-red", "");\n    }\n}</script>')}]);