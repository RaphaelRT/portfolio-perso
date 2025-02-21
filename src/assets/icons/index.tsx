const Linkedin = () => (
  <svg id="Calque_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 225 175">
    <rect className="st0" x="37.5" y="75" width="25" height="75"/>
    <rect className="st0" x="37.5" y="25" width="25" height="25"/>
    <rect className="st0" x="87.5" y="75" width="25" height="75"/>
    <rect className="st0" x="112.5" y="50" width="50" height="25"/>
    <rect className="st0" x="162.5" y="75" width="25" height="75"/>
  </svg>
);

const Mail = () => (
  <svg viewBox="0 0 225 175">
    <rect className="st0" x="125" y="62.5" width="25" height="25"/>
    <rect className="st0" x="200" y="37.5" width="25" height="100"/>
    <rect className="st0" x="25" y="137.5" width="175" height="25"/>
    <rect className="st0" x="100" y="87.5" width="25" height="25"/>
    <rect className="st0" x="75" y="62.5" width="25" height="25"/>
    <polygon className="st0" points="200 12.5 200 37.5 175 37.5 175 62.5 150 62.5 150 37.5 75 37.5 75 62.5 50 62.5 50 37.5 25 37.5 25 12.5 200 12.5"/>
    <rect className="st0" y="37.5" width="25" height="100"/>
  </svg>
)
const Phone = () => (
  <svg id="Calque_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 225 175">
    <rect className="st0" x="87.5" y="112.5" width="25" height="25"/>
    <rect className="st0" x="62.5" y="87.5" width="25" height="25"/>
    <polygon className="st0" points="187.5 112.5 187.5 162.5 112.5 162.5 112.5 137.5 137.5 137.5 137.5 112.5 187.5 112.5"/>
    <polygon className="st0" points="187.5 37.5 187.5 62.5 137.5 62.5 137.5 12.5 162.5 12.5 162.5 37.5 187.5 37.5"/>
    <polygon className="st0" points="87.5 12.5 87.5 62.5 62.5 62.5 62.5 87.5 37.5 87.5 37.5 12.5 87.5 12.5"/>
  </svg>
)
const Download = () => (
  <svg id="Calque_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 225 175">
    <rect className="st0" x="25" y="150.13" width="175" height="24.73"/>
    <rect className="st0" x="50" y="50.13" width="25" height="25"/>
    <polygon className="st0" points="150 74.96 150 99.86 125 99.86 125 125.13 100.05 125.13 100.05 100.13 75 100.13 75 75.13 100.05 75.13 100.05 .13 125 .13 125 74.96 150 74.96"/>
    <rect className="st0" x="150" y="50.13" width="25" height="25"/>
  </svg>
)
const Github = () => (
  <svg id="Calque_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 225 175">
    <polygon className="st0" points="175 0 175 50 75 50 75 0 100 0 100 24.83 150 24.83 150 0 175 0"/>
    <rect className="st0" x="50" y="50" width="25" height="50"/>
    <rect className="st0" x="25" y="125" width="25" height="25"/>
    <polygon className="st0" points="175 100 175 175 150 175 150 125 100 125 100 175 50 175 50 150 75 150 75 100 175 100"/>
    <rect className="st0" x="175" y="50" width="25" height="50"/>
  </svg>
)
const BulletArrow = ({className}: { className?: string }) => (
  <svg className={className} viewBox="0 0 11.7 19.51">
    <path className="st0" d="M3.9,3.9H0V0h3.9v3.9ZM7.8,7.8h-3.9v-3.9h3.9v3.9ZM11.7,11.7h-3.9v-3.9h3.9v3.9ZM7.8,15.6h-3.9v-3.9h3.9v3.9ZM3.9,19.51H0v-3.9h3.9v3.9Z"/>
  </svg>
)
const Arrow = ({className}: { className?: string }) => (
<svg className={className} id="Calque_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="25 0 125 125">
  <rect className="st0" x="24.73" y="49.74" width="25" height="25"/>
  <polygon className="st0" points="124.73 74.57 124.73 99.47 99.73 99.47 99.73 124.74 74.78 124.74 74.78 99.74 49.73 99.74 49.73 74.74 74.78 74.74 74.78 -.26 99.73 -.26 99.73 74.57 124.73 74.57"/>
  <rect className="st0" x="124.73" y="49.74" width="25" height="25"/>
</svg>
)

export {
    Linkedin,
    Github,
    Phone,
    Mail,
    Download,
    BulletArrow,
    Arrow
}