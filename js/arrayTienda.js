var tipoimpresion = {};
				tipoimpresion['llave'] = ['Pupo articulado', 'Figura Pokémon', 'Figura Pokémon Lowpoly', 'Trifuerza', 'Imagen a 3D'];
				tipoimpresion['deco'] = ['Jarrón', 'Figura Lowpoly', 'Figura'];
				tipoimpresion['figu'] = ['DeadPool', 'Spyro', 'T-800', 'Calavera Venom'];

				function cambioobjeto3d() {
				  var tipoimprLista = document.getElementById("tipoimpr");
				  var objeto3dLista = document.getElementById("objeto3d");
				  var selimpr = tipoimprLista.options[tipoimprLista.selectedIndex].value;
				  while (objeto3dLista.options.length) {
				    objeto3dLista.remove(0);
				  }
				  var impr = tipoimpresion[selimpr];
				  if (impr) {
				    var i;
				    for (i = 0; i < impr.length; i++) {
				      var tipoimpr = new Option(impr[i], i);
				      objeto3dLista.options.add(tipoimpr);
				    }
				  }
				}