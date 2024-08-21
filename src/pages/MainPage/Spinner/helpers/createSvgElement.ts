export function createSvgElement<K extends keyof SVGElementTagNameMap>(
  name: K
) {
  const xmlns = 'http://www.w3.org/2000/svg'

  return document.createElementNS(xmlns, name)
}
