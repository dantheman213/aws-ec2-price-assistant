console.log('Starting AWS Price Assistant...');

setTimeout( function() {
    console.log('Reading Page Data For AWS Price Assistant...');
    var elements = document.getElementsByTagName('*');

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue.toLowerCase();
                if (text.search('per hour') > -1) {
                    if (/(?=.*\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|0)?(\.\d{1,8})? per hour$/.test(text)) {
                        console.log('VALID' + text);

                    } else {
                        console.log('INVALID ' + text);
                    }
                }
                // var replacedText = text.replace(/[word or phrase to replace here]/gi, '[new word or phrase]');
                //
                // if (replacedText !== text) {
                //     element.replaceChild(document.createTextNode(replacedText), node);
                // }
            }
        }
    }

}, 5000);
