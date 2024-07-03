/**
 * 吸顶效果
 * @param {*} containerElement 能滚动的元素
 * @param {*} placeholderElement 吸顶元素的父元素（占位元素）
 * @param {*} fixedElement 吸顶元素
 * @param {*} positionTop 吸顶距离，头部高度
 * @returns 
 */
function scrollFixed(containerElement, placeholderElement, fixedElement, positionTop) {

    if (!(containerElement instanceof HTMLElement)) {
        console.error(new TypeError('scrollFixed函数参数错误，第1个参数应为HTML元素').message)
        return
    }

    if (!(placeholderElement instanceof HTMLElement)) {
        console.error(new TypeError('scrollFixed函数参数错误，第2个参数应为HTML元素').message)
        return
    }

    if (!(fixedElement instanceof HTMLElement)) {
        console.error(new TypeError('scrollFixed函数参数错误，第3个参数应为HTML元素').message)
        return
    }

    if (typeof positionTop !== 'number') {
        console.error(new TypeError('scrollFixed函数参数错误，第4个参数应为数字').message)
        return
    }

    const contentLeft = containerElement.offsetLeft
    const styleEl = document.createElement('style');
    styleEl.type = 'text/css';
    styleEl.innerHTML = `.xx-scroll-fixed {left: ${contentLeft}px; width: calc(100vw - ${contentLeft}px); position: fixed; box-sizing: border-box; top: ${positionTop}px;z-index: 555; box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.1);}`
    document.head.appendChild(styleEl);

    placeholderElement.style.height = `${fixedElement.getBoundingClientRect().height}px`

    const startPosition = fixedElement.getBoundingClientRect().top
    containerElement.onscroll = function() {
        const fixedElTop = fixedElement.getBoundingClientRect().top
        if (!fixedElement.classList.contains('xx-scroll-fixed')) {
            if (fixedElTop <= positionTop) {
                fixedElement.classList.add('xx-scroll-fixed')
            }
        } else if (containerElement.scrollTop < startPosition + 5) {
            fixedElement.classList.remove('xx-scroll-fixed')
        }
    }
}