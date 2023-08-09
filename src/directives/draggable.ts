import type { App, Directive } from 'vue'

export function useRegisterDraggable(app: App) {
  const dragScrollDirective: Directive<HTMLButtonElement, string> = {
    mounted(el) {
      /**
       * 滚动使页面显示在中间
       */
      const elementRect = el.getBoundingClientRect()
      const elementOffsetTop = elementRect.top + window.scrollY
      const elementOffsetLeft = elementRect.left + window.scrollX
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      const scrollX = elementOffsetLeft - windowWidth / 2 + elementRect.width / 2
      const scrollY = elementOffsetTop - windowHeight / 2 + elementRect.height / 2
      
      window.scrollTo(scrollX, scrollY)

      let isDragging = false
      let startX: any, startY: any

      el.addEventListener('mousedown', (e) => {
        e.preventDefault()
        isDragging = true
        startX = e.clientX
        startY = e.clientY
      })

      el.addEventListener('mousemove', (e) => {
        e.preventDefault()

        if (isDragging) {
          const dx = e.clientX - startX
          const dy = e.clientY - startY

          window.scrollBy(-dx, -dy)

          startX = e.clientX
          startY = e.clientY
        }
      })

      el.addEventListener('mouseup', () => {
        isDragging = false
      })

      el.addEventListener('mouseleave', () => {
        isDragging = false
      })
    }
  }

  app.directive('dragScroll', dragScrollDirective)
}
