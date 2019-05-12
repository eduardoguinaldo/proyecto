window.addEventListener("load", function() {
			getRows();
		});

		function getRows() {
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.open("get", "XML/masvendido.xml", true);
			xmlhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					showResult(this);
				}
			};
			xmlhttp.send(null);
		}

		function showResult(xmlhttp) {
			var xmlDoc = xmlhttp.responseXML.documentElement;
			removeWhitespace(xmlDoc);
			var outputResult = document.getElementById("FilasTienda");
			var rowData = xmlDoc.getElementsByTagName("item");

			addTableRowsFromXmlDoc(rowData,outputResult);
		}

		function addTableRowsFromXmlDoc(nodosXml,nodosTabla) {
			var laTabla = nodosTabla.parentNode;
			var nuevaFila, nuevaCelda, i;
			console.log ("Numero de nodos: " + nodosXml.length);
			for (i=0; i<nodosXml.length; i++) {
				nuevaFila = nodosTabla.insertRow(i);
				nuevaFila.className = (i%2) ? "OddRow" : "EvenRow";
				for (j=0; j<nodosXml[i].childNodes.length; j++) {
					nuevaCelda = nuevaFila.insertCell(nuevaFila.cells.length);
					if (nodosXml[i].childNodes[j].firstChild) {
						nuevaCelda.innerHTML = nodosXml[i].childNodes[j].firstChild.nodeValue;
					} else {
						nuevaCelda.innerHTML = "-";
					}
					console.log("cell: " + nuevaCelda);
				}
				}
				laTabla.appendChild(nodosTabla);
		}

		function removeWhitespace(xml) {
			var loopIndex;
			for (loopIndex = 0; loopIndex < xml.childNodes.length; loopIndex++)
			{
				var currentNode = xml.childNodes[loopIndex];
				if (currentNode.nodeType == 1)
				{
					removeWhitespace(currentNode);
				}
				if (!(/\S/.test(currentNode.nodeValue)) && (currentNode.nodeType == 3))
				{
					xml.removeChild(xml.childNodes[loopIndex--]);
				}
			}
		}