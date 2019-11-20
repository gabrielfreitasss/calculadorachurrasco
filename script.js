

        function calcularValores(){
	        var s1 = document.getElementById("s1").value;
			var ns1 = s1 * 400
			var bs1 = s1 * 6
	        var s2 = document.getElementById("s2").value;
			var ns2 = s2 * 200
	        var s3 = ((parseInt(ns1) + parseInt(ns2))/1000);
	        alert('Você vai precisar de pelo menos ' + s3 + 'kg de carne e '+ bs1 + ' latas de cerveja');
        }

