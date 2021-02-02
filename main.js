// var binary = 0b11111111; // code for 104
      // console.log(binary); // prints 104
      function conv() {
        let dec = document.getElementById("bin");

        let decn = Number(dec.value);
        let decna = parseInt(decn, 2);

        if (dec.value.length == 0) {
            res.innerHTML = `por favor digite algo`;
            res.style.fontSize = "30px";
          } else if(isNaN(decna)) {
          res.innerHTML = `por favor digite um número binário valido`;
          res.style.fontSize = "30px";
        } else {
          res.innerHTML = parseInt(decn, 2);
        }

      }
      function dec() {
        let nr = document.getElementById("deci");
        let str = nr.value;
        resu.innerHTML = (+str).toString(2);

        //let valbin = document.getElementById('bin')
        let valdec = document.getElementById("deci");
        if (valdec.value.length == 0) {
          resu.innerHTML = `por favor digite algo`;
          resu.style.fontSize = "30px";
        }
      }
