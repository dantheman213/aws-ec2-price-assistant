const hoursInMonth = 730.001;
const hoursInYear = 8760;

let convertedElementCount = 0;

function updatePricing() {
    console.log('Reading Page Data For AWS Price Assistant...');
    const elements = document.getElementsByTagName('*');

    for (var i = 0; i < elements.length; i++) {
        const element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            const node = element.childNodes[j];

            if (node.nodeType === 3) {
                const text = node.nodeValue.toLowerCase();
                if (text.indexOf('per hour') > -1) {
                    if (/(?=.*\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|0)?(\.\d{1,8})? per hour$/.test(text)) {
                        convertedElementCount++;

                        const hourlyPrice = parseFloat(text.substring(1, text.indexOf(' ')));
                        const maxDecimalCount = (hourlyPrice.toString().length - hourlyPrice.toString().indexOf('.') - 1);

                        const monthlyPrice = parseFloat((hourlyPrice * hoursInMonth).toFixed(maxDecimalCount));
                        const yearlyPrice = parseFloat((hourlyPrice * hoursInYear).toFixed(maxDecimalCount));

                        let payloadHTML = `<div style="text-align: left;">$${hourlyPrice} <strong>per hour</strong><br>`;
                        payloadHTML += `$${monthlyPrice} <strong>per month</strong><br>`;
                        payloadHTML += `$${yearlyPrice} <strong>per year</strong><br></div>`;

                        element.innerHTML = payloadHTML;
                    }
                }
            }
        }
    }

    if (convertedElementCount < 1) {
        startDelayedFunc();
    }
}

function startDelayedFunc() {
    setTimeout(updatePricing, 500);
}

console.log('Starting AWS Price Assistant...');
startDelayedFunc();
