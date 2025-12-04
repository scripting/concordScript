function runScriptText (scriptText, callback) {
	if (callback == null) {
		callback = function () {};
		}
	function visitCodeTree (theTree, visit) {
		var stack = new Array ();
		function doVisit (node) { //depth-first traversal
			for (var x in node) {
				if (typeof node [x] == "object") {
					stack.push (node);
					doVisit (node [x], visit);
					stack.pop ();
					}
				}
			if (node != null) {
				visit (node, stack);
				}
			}
		doVisit (theTree);
		}
	function fixSpecialFunctionCalls (theTree) {
		visitCodeTree (theTree, function (node, stack) {
			if (node.type == "FunctionDeclaration" || node.type == 'FunctionExpression') {
				node.async = true;
				}
			if (node.type == "CallExpression" && node.callee !== undefined) {
				var nodecopy = Object.assign(new Object (), node);
				for (var x in node) {
					delete node [x];
					}
				node.type = "AwaitExpression";
				node.argument = nodecopy;
				}
			return (undefined); // don't replace
			});
		}
	function preprocessScript(scriptText) {
		var scriptBody = '', tokens, i, info;
		var code = acorn.parse (scriptText, {ecmaVersion: 2020});
		fixSpecialFunctionCalls (code);
		scriptBody = escodegen.generate (code);
		return "(async function () {" + scriptBody + "})()";
		}
	(async function () {
		var processedScriptText = preprocessScript (scriptText);
		var scriptVal = eval (processedScriptText);
		return (scriptVal);
		})()
		.then(function (response) {
			callback(null, response);
			})
		.catch(function (error) {
			callback(error);
			});
	}
