
export default function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      {/* <a href="https://pmnd.rs/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
        pmnd.rs
        <br />
        dev collective
      </a> */}
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '28px',fontWeight:'bold' }}>META WORLD</div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>ZIMA BLUE TEAM</div>
    </div>
  )
}