/**
 * Custom Scriptestingservices.
 * Note: use this file to add or override any other scriptestingservices.
 * DON'T EDIT TEMPLATE JS FILES DIRECTLY, JUST USE THIS FILE.
 */

const contactUsBtn = document.getElementById('tq-contact-us');
const webdevelopment = document.getElementById('webdevelopment')
const mobiledevelopemnt = document.getElementById('mobiledevelopemnt')
const crossplatformmobileappdevelopemnt = document.getElementById('crossplatformmobileappdevelopemnt')
const qaandtestingservices = document.getElementById('qaandtestingservices')
const testingservices = document.getElementById('testingservices')
const digitalmarketingservices = document.getElementById('digitalmarketingservices')

function toggle_wdc() {
  webdevelopment.style.display = 'block';
  mobiledevelopemnt.style.display = 'none';
  crossplatformmobileappdevelopemnt.style.display = 'none';
  qaandtestingservices.style.display = 'none';
  testingservices.style.display = 'none';
  digitalmarketingservices.style.display = 'none';
  contactUsBtn.href = 'contactus.html#WebDevelopemnt'

}

function toggle_mdc() {
  console.log(mobiledevelopemnt, webdevelopment, crossplatformmobileappdevelopemnt,)
  webdevelopment.style.display = 'none';
  mobiledevelopemnt.style.display = 'block';
  crossplatformmobileappdevelopemnt.style.display = 'none';
  qaandtestingservices.style.display = 'none';
  testingservices.style.display = 'none';
  digitalmarketingservices.style.display = 'none';
  contactUsBtn.href = 'contactus.html#MobileDevelopemnt'

}

function toggle_cmd() {
  webdevelopment.style.display = 'none';
  mobiledevelopemnt.style.display = 'none';
  crossplatformmobileappdevelopemnt.style.display = 'block';
  qaandtestingservices.style.display = 'none';
  testingservices.style.display = 'none';
  digitalmarketingservices.style.display = 'none';
  contactUsBtn.href = 'contactus.html#CrossPlatformMobileAppDevelopemnt'

}

function toggle_qta() {
  webdevelopment.style.display = 'none';
  mobiledevelopemnt.style.display = 'none';
  crossplatformmobileappdevelopemnt.style.display = 'none';
  qaandtestingservices.style.display = 'block';
  testingservices.style.display = 'none';
  digitalmarketingservices.style.display = 'none';
  contactUsBtn.href = 'contactus.html#QAandTesting'

}

function toggle_ts() {
  webdevelopment.style.display = 'none';
  mobiledevelopemnt.style.display = 'none';
  crossplatformmobileappdevelopemnt.style.display = 'none';
  qaandtestingservices.style.display = 'none';
  testingservices.style.display = 'block';
  digitalmarketingservices.style.display = 'none';
  contactUsBtn.href = 'contactus.html#TestingService'

}

function toggle_dms() {
  webdevelopment.style.display = 'none';
  mobiledevelopemnt.style.display = 'none';
  crossplatformmobileappdevelopemnt.style.display = 'none';
  qaandtestingservices.style.display = 'none';
  testingservices.style.display = 'none';
  digitalmarketingservices.style.display = 'block';
  contactUsBtn.href = 'contactus.html#DigitalMarketingService'

}


function toggle_php_tab() {
  document.getElementById('php_tab_w').style.display = 'block';
  document.getElementById('phptab').className = 'active';
  document.getElementById('asp_tab_w').style.display = 'none';
  document.getElementById('asptab').className = '';
  document.getElementById('htmlcss_tab_w').style.display = 'none';
  document.getElementById('htmltab').className = '';
  document.getElementById('java_tab_w').style.display = 'none';
  document.getElementById('javatab').className = '';
  document.getElementById('Opensource_tab_w').style.display = 'none';
  document.getElementById('opensourcetab').className = '';
  document.getElementById('js_tab_w').style.display = 'none';
  document.getElementById('jstab').className = '';
}

function toggle_asp_tab() {
  document.getElementById('php_tab_w').style.display = 'none';
  document.getElementById('phptab').className = '';
  document.getElementById('asp_tab_w').style.display = 'block';
  document.getElementById('asptab').className = 'active';
  document.getElementById('htmlcss_tab_w').style.display = 'none';
  document.getElementById('htmltab').className = '';
  document.getElementById('java_tab_w').style.display = 'none';
  document.getElementById('javatab').className = '';
  document.getElementById('Opensource_tab_w').style.display = 'none';
  document.getElementById('opensourcetab').className = '';
  document.getElementById('js_tab_w').style.display = 'none';
  document.getElementById('jstab').className = '';
}

function toggle_htmlcss_tab() {
  document.getElementById('php_tab_w').style.display = 'none';
  document.getElementById('phptab').className = '';
  document.getElementById('asp_tab_w').style.display = 'none';
  document.getElementById('asptab').className = '';
  document.getElementById('htmlcss_tab_w').style.display = 'block';
  document.getElementById('htmltab').className = 'active';
  document.getElementById('java_tab_w').style.display = 'none';
  document.getElementById('javatab').className = '';
  document.getElementById('Opensource_tab_w').style.display = 'none';
  document.getElementById('opensourcetab').className = '';
  document.getElementById('js_tab_w').style.display = 'none';
  document.getElementById('jstab').className = '';
}

function toggle_Opensource_tab() {
  document.getElementById('php_tab_w').style.display = 'none';
  document.getElementById('phptab').className = '';
  document.getElementById('asp_tab_w').style.display = 'none';
  document.getElementById('asptab').className = '';
  document.getElementById('htmlcss_tab_w').style.display = 'none';
  document.getElementById('htmltab').className = '';
  document.getElementById('java_tab_w').style.display = 'none';
  document.getElementById('javatab').className = '';
  document.getElementById('Opensource_tab_w').style.display = 'block';
  document.getElementById('opensourcetab').className = 'active';
  document.getElementById('js_tab_w').style.display = 'none';
  document.getElementById('jstab').className = '';
}

function toggle_java_tab() {
  document.getElementById('php_tab_w').style.display = 'none';
  document.getElementById('phptab').className = '';
  document.getElementById('asp_tab_w').style.display = 'none';
  document.getElementById('asptab').className = '';
  document.getElementById('htmlcss_tab_w').style.display = 'none';
  document.getElementById('htmltab').className = '';
  document.getElementById('java_tab_w').style.display = 'block';
  document.getElementById('javatab').className = 'active';
  document.getElementById('Opensource_tab_w').style.display = 'none';
  document.getElementById('opensourcetab').className = '';
  document.getElementById('js_tab_w').style.display = 'none';
  document.getElementById('jstab').className = '';
}

function toggle_js_tab() {
  document.getElementById('php_tab_w').style.display = 'none';
  document.getElementById('phptab').className = '';
  document.getElementById('asp_tab_w').style.display = 'none';
  document.getElementById('asptab').className = '';
  document.getElementById('htmlcss_tab_w').style.display = 'none';
  document.getElementById('htmltab').className = '';
  document.getElementById('java_tab_w').style.display = 'none';
  document.getElementById('javatab').className = '';
  document.getElementById('Opensource_tab_w').style.display = 'none';
  document.getElementById('opensourcetab').className = '';
  document.getElementById('js_tab_w').style.display = 'block';
  document.getElementById('jstab').className = 'active';
}
//End of Tech Anim script

//Rate-Card
/*function dynamicdropdown(listindex)
      {   
          document.getElementById("subcategory").length = 0;
          switch (listindex)
          {
              case "was" :
                  document.getElementById("subcategory").options[0]=new Option("Select Technology","");
                  document.getElementById("subcategory").options[1]=new Option("HTML5","HTML5");
                  document.getElementById("subcategory").options[2]=new Option("CSS3","CSS3");
                  document.getElementById("subcategory").options[3]=new Option("GridSystem","GridSystem");
                  document.getElementById("subcategory").options[4]=new Option("Foundation3","Foundation3");
                  document.getElementById("subcategory").options[5]=new Option("HTML5Boilerplate","HTML5Boilerplate");
                  break;
              
              case "mas" :
                  document.getElementById("subcategory").options[0]=new Option("Select Technology","");
                  document.getElementById("subcategory").options[1]=new Option("Android","Android");
                  document.getElementById("subcategory").options[2]=new Option("iOS","iOS");
                  document.getElementById("subcategory").options[3]=new Option("CrossPlatform","CrossPlatform");
                  break;
              case "nts" :
                  document.getElementById("subcategory").options[0]=new Option("Select Technology","");
                  document.getElementById("subcategory").options[1]=new Option("IOTDevelopment","IOTDevelopment");
                  document.getElementById("subcategory").options[2]=new Option("AR/VR","AR/VR");
                  document.getElementById("subcategory").options[3]=new Option("BlockChain","BlockChain");
                  document.getElementById("subcategory").options[4]=new Option("BigData","BigData");
                  break;
          }
          return true;
      }

function resourceCount(rcount)
{
  var r = document.getElementById("subcategory").selectedOptions.length;
  document.getElementById("resources").innerHTML = r;
}*/

function calculateprices() {
  var price = 0;
  var manhour = 160;
  var pricePerResource = 0;
  var c = document.getElementById("category");
  var r = document.getElementById("resources");
  var e = document.getElementById("experience");
  var resources = r.options[r.selectedIndex].value;
  var selSer = c.options[c.selectedIndex].value;
  var selExp = e.options[e.selectedIndex].value;
  if (selSer == "was" && selExp == "3") {
    price = 15;
    pricePerResource = price * manhour;
  }
  if (selSer == "was" && selExp == "6") {
    price = 18;
    pricePerResource = price * manhour;
  }
  if (selSer == "was" && selExp == "10") {
    price = 22;
    pricePerResource = price * manhour;
  }
  if (selSer == "was" && selExp == "15") {
    price = 25;
    pricePerResource = price * manhour;
  }
  if (selSer == "mas" && selExp == "3") {
    price = 18;
    pricePerResource = price * manhour;
  }
  if (selSer == "mas" && selExp == "6") {
    price = 22;
    pricePerResource = price * manhour;
  }
  if (selSer == "mas" && selExp == "10") {
    price = 25;
    pricePerResource = price * manhour;
  }
  if (selSer == "mas" && selExp == "15") {
    price = 28;
    pricePerResource = price * manhour;
  }
  if (selSer == "nts" && selExp == "3") {
    price = 22;
    pricePerResource = price * manhour;
  }
  if (selSer == "nts" && selExp == "6") {
    price = 30;
    pricePerResource = price * manhour;
  }
  if (selSer == "nts" && selExp == "10") {
    price = 40;
    pricePerResource = price * manhour;
  }
  if (selSer == "nts" && selExp == "15") {
    price = 63;
    pricePerResource = price * manhour;
  }
  var total = pricePerResource * resources;
  document.getElementById("price").innerHTML = '$' + price;
  document.getElementById("manhour").innerHTML = '$' + manhour;
  document.getElementById("pricePerResource").innerHTML = '$' + pricePerResource;
  document.getElementById("total").innerHTML = '$' + total;
}
//End of Rate Card script


;
(function ($, window, document, undefined) {

  'use strict';

  $(document).ready(function () {

    /**
     * Start Add Your New Scripts Below.
     */

    $("#owl-demo").owlCarousel({
      navigation: false, // Show next and prev buttons
      slideSpeed: 9000,
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      singleItem: true,
      loop: true,
      responsiveClass: true
    });

    $('.listings .is-3').mouseover(function () {
      $(this).find(".hoverText").css("top", "0");
    });
    $('.listings .is-3').mouseout(function () {
      $(this).find(".hoverText").css("top", "265px");
    });


  });

})(jQuery, window, document);
