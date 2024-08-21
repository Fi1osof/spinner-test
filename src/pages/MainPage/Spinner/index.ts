import { spinnerConfig } from './config'
import { createSvgElement } from './helpers/createSvgElement'

export class Spinner {
  config = spinnerConfig
  container: HTMLDivElement
  svg: SVGSVGElement
  wheel: SVGGElement
  marker: SVGElement
  spinning = false
  spinningTime = 12

  constructor(selector: string) {
    const container = document.querySelector(selector)

    if (!container || !(container instanceof HTMLDivElement)) {
      throw new Error('Can not get container')
    }
    // else
    this.container = container

    this.container.innerHTML = ''
    this.container.classList.add('spinner-container')

    this.svg = this.createSvg()

    this.wheel = this.createWheel()

    this.marker = this.createMarker()
  }

  createWheel = () => {
    const wheel = createSvgElement('g')

    Object.assign(wheel.style, {
      cursor: 'pointer',
      transformBox: 'fill-box',
      transformOrigin: '50% 50%',
    })

    const pieces = this.config.sectors.length * 2

    this.svg.appendChild(wheel)

    this.config.sectors.forEach((n, i) => {
      this.drSegment(
        wheel,
        `fill:${n.color}; stroke:black; stroke-width:1;`,
        (i * 2) / pieces,
        (i * 2 + 2) / pieces,
        n.text,
        this.config.sectors.length,
        i
      )
    })

    wheel.addEventListener('click', this.onStart)

    return wheel
  }

  createMarker = () => {
    const marker = createSvgElement('polygon')

    const xOffset = 5

    marker.setAttribute(
      'points',
      `340,${0 + xOffset} 360,${0 + xOffset} 350,${40 + xOffset}`
    )

    Object.assign(marker.style, {
      fill: 'brown',
    })

    this.svg.appendChild(marker)

    return marker
  }

  createSvg = () => {
    const boxWidth = 700
    const boxHeight = 700

    const svg = createSvgElement('svg')
    svg.setAttributeNS(null, 'viewBox', '0 0 ' + boxWidth + ' ' + boxHeight)
    svg.setAttributeNS(null, 'width', '100%')

    this.container.appendChild(svg)

    return svg
  }

  drSegment = (
    svg: SVGGElement,
    style: string,
    ange1: number,
    ange2: number,
    label: string,
    sectionsCount: number,
    index: number
  ) => {
    const dir = '0'
    const angle1 = Math.PI * 2 * ange1
    const angle2 = Math.PI * 2 * ange2

    const sectionHalfAngle = 360 / sectionsCount
    const angle3deg = sectionHalfAngle * index + sectionHalfAngle / 2

    const rad = 300,
      cx = 350,
      cy = 350

    const dx1 = Math.sin(angle1) * rad + cx
    const dy1 = -Math.cos(angle1) * rad + cy

    const dx2 = Math.sin(angle2) * rad + cx
    const dy2 = -Math.cos(angle2) * rad + cy

    const path = createSvgElement('path')

    path.setAttribute('style', style)
    path.setAttribute(
      'd',
      ' M ' +
        dx1 +
        ',' +
        dy1 +
        ' A ' +
        rad +
        ',' +
        rad +
        ' 0 ' +
        dir +
        ' 1 ' +
        dx2 +
        ',' +
        dy2 +
        ' L ' +
        cx +
        ',' +
        cy +
        ' Z' +
        ''
    )

    svg.appendChild(path)

    const text = createSvgElement('text')

    text.innerHTML = label

    text.setAttribute('x', '350')
    text.setAttribute('y', '80')

    Object.assign(text.style, {
      transform: `rotate(${angle3deg}deg)`,
      transformOrigin: '50% 50%',
      textAnchor: 'middle',
    })

    svg.appendChild(text)
  }

  onStart = () => {
    const { wheel, spinning } = this

    if (spinning) {
      return
    }

    this.spinning = true

    const spinningTimeRandom = this.spinningTime - 2 * Math.random()

    const priceSectionIndex = Math.floor(
      Math.random() * this.config.sectors.length
    )

    const sectionAngle = 360 / this.config.sectors.length

    const rotateOffset =
      (sectionAngle * priceSectionIndex + sectionAngle / 2) * -1

    const rotate = 360 * (this.config.sectors.length * 3) + rotateOffset

    wheel.style.transition = `transform ${spinningTimeRandom}s cubic-bezier(0.2, 0.1, 0.2, 1)`
    wheel.style.transform = `rotate(${rotate}deg)`

    wheel.addEventListener(
      'transitionend',
      () => {
        this.spinning = false

        wheel.attributeStyleMap.delete('transition')

        wheel.style.transform = `rotate(${rotateOffset}deg)`
      },
      {
        once: true,
      }
    )
  }
}
