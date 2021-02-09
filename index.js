
        function openHome() {
            document.getElementById("buffer").style.width = "100%";
            document.getElementById("typing").innerText ="C:\\>CD FT";
            document.getElementById("typing").classList.remove("hidden");
            document.getElementById("typing").classList.add("typing");
            setTimeout(function(){
            document.getElementById("page1").classList.remove("hidden");
            document.getElementById("page2").classList.add("hidden");
            document.getElementById("page3").classList.add("hidden");
            document.getElementById("buffer").style.width = "0%";
            document.getElementById("typing").classList.remove("typing");
            document.getElementById("typing").classList.add("hidden");
        }, 1500);
        

        }
        function openAbout() {

            document.getElementById("buffer").style.width = "100%";
            document.getElementById("typing").innerText ="C:\\>CD FT\\ABOUT";
            document.getElementById("typing").classList.remove("hidden");
            document.getElementById("typing").classList.add("typing");
            setTimeout(function(){
            document.getElementById("page2").classList.remove("hidden");
            document.getElementById("page1").classList.add("hidden");
            document.getElementById("page3").classList.add("hidden");
            document.getElementById("buffer").style.width = "0%";
            document.getElementById("typing").classList.remove("typing");
            document.getElementById("typing").classList.add("hidden");
        }, 1500);

        }
        
        function openContact() {
            document.getElementById("buffer").style.width = "100%";
            document.getElementById("typing").innerText ="C:\\>CD FT\\CONTACT";
            document.getElementById("typing").classList.remove("hidden");
            document.getElementById("typing").classList.add("typing");
            setTimeout(function(){
            document.getElementById("page3").classList.remove("hidden");
            document.getElementById("page2").classList.add("hidden");
            document.getElementById("page1").classList.add("hidden");
            document.getElementById("buffer").style.width = "0%";
            document.getElementById("typing").classList.remove("typing");
            document.getElementById("typing").classList.add("hidden");
        }, 1500);
        }
        openHome();