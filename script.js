replaceText(document.body)

function replaceText(element) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {
        const badWords = ["fuck","porn","sex", "Tits", "Shit", "Bullshit", "Dick", "Dickhead", "Pussy", "Motherfucker", "Bastard"];
        badWords.forEach( e =>
            {
                const badRegex=new RegExp(e,'gi')
            element.textContent = element.textContent.replace(badRegex, " 🥺")
        }
        )
    }
}
