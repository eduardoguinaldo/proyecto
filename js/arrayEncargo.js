var tipoencargo = {};
				tipoencargo['cosplay'] = ['Armas', 'Trajes', 'Cascos', 'Máscaras'];
				tipoencargo['decor'] = ['Jarrón', 'Cajas', 'Marcos de fotos'];
				tipoencargo['utiles'] = ['Carcasa Nintendo Switch', 'Funda Nintendo Switch', 'Joycon Grip Izq.', 'Joycon Grip Dch.', 'Joycon Grip (par)'];
				tipoencargo['encargo'] = ['Modelado e impresión 3D'];

				function cambiopedido3d() {
				  var tipoencLista = document.getElementById("tipoenc");
				  var pedido3dLista = document.getElementById("pedido3d");
				  var selenc = tipoencLista.options[tipoencLista.selectedIndex].value;
				  while (pedido3dLista.options.length) {
				    pedido3dLista.remove(0);
				  }
				  var enc = tipoencargo[selenc];
				  if (enc) {
				    var i;
				    for (i = 0; i < enc.length; i++) {
				      var tipoenc = new Option(enc[i], i);
				      pedido3dLista.options.add(tipoenc);
				    }
				  }
				}