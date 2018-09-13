var d = document;
var body = d.getElementsByTagName("body")[0];
console.log(body)
var nameResizerThing = (function(){
	var firstName = {
		node: document.getElementById("js-first-name"),
		maxFontSize: 114
	};
	var lastName = {
		node: document.getElementById("js-last-name"),
		maxFontSize: 166
	};
	var backFistName = {
		node: document.getElementById("js-back-first-name"),
		maxFontSize: 70
	};
	var backLastName = {
		node: document.getElementById("js-back-last-name"),
		maxFontSize: 70
	};


	setTimeout(function(){
		seperateString(firstName);
		seperateString(lastName);
		seperateString(backFistName);
		seperateString(backLastName);
	}, 1000)

	/**
		* seperateString() always returns false
		* and accepts html node as parameter.
		* seperateString will resize elements
		* font-size value until all text fits on one line.
		*/
	function seperateString(obj){
		obj.text = obj.node.innerHTML;
		var list = [];
		var playerName = obj.text.split("");
		var addSpans = inputSpan(obj.node, list);
		obj.currentFontSize = obj.maxFontSize;
		obj.offset = obj.node.getBoundingClientRect();

		// clears element
		obj.node.innerHTML = "";

		playerName.forEach(addSpans);

		var firstObj = list[0];
		var lastObj = list[list.length-1];
		resetOffsets()
		var timer = setInterval(function(){
			console.log(firstObj.offset.top, lastObj.offset.top)
			if(obj.offset.right+20 < lastObj.offset.right){
				resetOffsets()
				minimizeFontSize(obj);
			} else{
				finalizeElement(obj);
				clearInterval(timer);
			}
		},400)

		function resetOffsets(){
			firstObj.offset = firstObj.node.getBoundingClientRect();
			lastObj.offset = lastObj.node.getBoundingClientRect();
		}

		return false;
	}

	function inputSpan(element, list){
		return function(letter){
			var node = d.createElement("span");
			var textNode = d.createTextNode(letter+"");
			node.appendChild(textNode);
			element.appendChild(node);
			list.push({
				node: node
			});
		}
	}
	function minimizeFontSize(obj){
		console.log(obj.node)
		obj.currentFontSize -= 3;
		obj.node.style.fontSize = obj.currentFontSize+"px";
	}
	function finalizeElement(obj){
		obj.node.classList.add("done");
		obj.node.innerHTML = obj.text+"";
	}
})();
var goldenPicketThing = (function(){
	(Math.floor(Math.random() * 76) + 1) > 75 && body.classList.add("gold");
})();
