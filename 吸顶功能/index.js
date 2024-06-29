/**
 * 元素滚动到某位置有吸顶效果
 */
function fixedTop() {
    const contentEl = document.getElementById('content') // 能滚动的元素
    const fixedEl = document.getElementsByClassName('scroll-to-fixed-top')[0] // 吸顶元素
    const headerHeight = 54 // 吸顶距离，头部高度

    const contentLeft = contentEl.offsetLeft
    const styleEl = document.createElement('style');
    styleEl.type = 'text/css';
    styleEl.innerHTML = `.xx-scroll-fixed {left: ${contentLeft}px; width: calc(100vw - ${contentLeft}px); position: fixed; box-sizing: border-box; top: ${headerHeight}px;z-index: 555; box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.1);}`
    document.head.appendChild(styleEl);

    const startPosition = fixedEl.getBoundingClientRect().top
    contentEl.onscroll = function() {
        const fixedElTop = fixedEl.getBoundingClientRect().top
        const contentElTop = contentEl.scrollTop
        if (!fixedEl.classList.contains('xx-scroll-fixed')) {
        if (fixedElTop <= headerHeight) {
            fixedEl.classList.add('xx-scroll-fixed')
        }
        } else if (contentEl.scrollTop < startPosition + 5) {
        fixedEl.classList.remove('xx-scroll-fixed')
        }
    }
}

window.onload = fixedTop