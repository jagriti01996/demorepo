var time1 = document.getElementById("time1");
      scroll = window.pageYOffset;
      document.addEventListener("scroll", function (e) {
        var offset = window.pageYOffset;
        scroll = offset;
        time1.style.left = 100 + scroll + "px";
      });
      var time2 = document.getElementById("time2");
      scroll = window.pageYOffset;
      document.addEventListener("scroll", function (e) {
        var offset = window.pageYOffset;
        scroll = offset;
        time2.style.left = 100 + scroll + "px";
      });