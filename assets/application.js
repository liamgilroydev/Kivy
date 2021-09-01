// Put your application javascript here

if( document.getElementById('sort_by') != null ) {
document.querySelector('#sort_by').addEventListener('change', function(e) {
    var url = new URL(window.location.href);
    url.searchParams.set('sort_by', e.currentTarget.value);

    window.location = url.href;
});
}

if( document.getElementById('AddressCountryNew') != null ) {
    document.getElementById('AddressCountryNew').addEventListener('change', function(e) {
        var provinces = this.options[this.selectedIndex].getAttribute('data-provinces');
        var provinceSelector = document.getElementById('AddressProvinceNew');
        var provinceArray = JSON.parse(provinces);

        //console.log(provinceArray);
        if(provinceArray.length < 1) {
            provinceSelector.setAttribute('disabled','disabled');
        } else {
            provinceSelector.removeAttribute('disabled');
        }

        provinceSelector.innerHTML = '';
        var options = '';
        for(var i = 0; i < provinceArray.length; i++) {
            options += '<option value="' + provinceArray[i][0] + '">' + provinceArray[i][0] + '</option>';

        }

        provinceSelector.innerHTML = options;
    });
}

if(document.getElementById("forgotPassword") != null) {
    document.getElementById("forgotPassword").addEventListener("click", function(e) {
            const element = document.querySelector("#forgot_password_form");
            if(element.classList.contains("d-none")){
                element.classList.remove("d-none");
                element.classList.add("d-block");
            }
    });
}

var localeItems = document.querySelectorAll("#localeItem");
if (localeItems.lenth > 0) {
    localeItems.forEach(item => {
        item.addEventListener("click", event => {
            document.getElementById("localeCode").value = item.getAttribute("lang");
            document.getElementById("localization_form_tag").submit();
        });
    });
}



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 

// Image swaps // 

    // Image swaps - Shop All // 
    function onHoverShopAll()
    {
        $("#featuredimg").attr('src', 'https://i.picsum.photos/id/296/320/200.jpg?hmac=hAMpl4d9x-7qX7HOp2NpHfcZyVDqSxNVarHYoIV7MgQ');
        document.getElementById("menuimagealt").innerHTML = "SHOP ALL";
    }

    // Image swaps - Ceramics // 
    function onHoverCeramics()
    {
        $("#featuredimg").attr('src', 'https://i.picsum.photos/id/680/320/200.jpg?hmac=-_M46qLfvM-lNW7P5UQO5ekTBoGKG6wlGqXNchZg7qc');
        document.getElementById("menuimagealt").innerHTML = "SHOP CERAMICS";
    }

    // Image swaps - Glass // 
    function onHoverGlass()
    {
        $("#featuredimg").attr('src', 'https://i.picsum.photos/id/863/320/200.jpg?hmac=Gx-BDWh5dl1Q46X4V3lVyuSFBLOHeua8vN70KMaHu2k');
        document.getElementById("menuimagealt").innerHTML = "GLASS CONTAINERS";
    }

    // Image swaps - Mugs // 
    function onHoverMugs()
    {
        $("#featuredimg").attr('src', 'https://i.picsum.photos/id/452/320/200.jpg?hmac=1GAHQ1Qvw9IYvqKfB8nBaLJacLaKrt-uw2TvqWLUDvg');
        document.getElementById("menuimagealt").innerHTML = "MUGS & BOWLS";
    }
    


// Search Input Show & Hide // 
    function showDiv() {
        document.getElementById('searchfield').style.display = "block";
      }
      
      function hideDiv() {
        document.getElementById('searchfield').style.display = "none";
      }
      

// Dropdown Box Show & Hide // 
      function showDropdown() {
        document.getElementById('dropdown').style.display = "block";
        document.getElementById('shoplinkopen').style.display = "none";
        document.getElementById('shoplinkclose').style.display = "block";
      }
      
      function hideDropdown() {
        document.getElementById('dropdown').style.display = "none";
        document.getElementById('shoplinkopen').style.display = "block";
        document.getElementById('shoplinkclose').style.display = "none";
      }
    