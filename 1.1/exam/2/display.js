function display(content) {
    if (content === null || content === undefined) {
        return 'no message'
    }
    if (content) {
        return 'your message is ' + content
    }
}

module.exports = display
