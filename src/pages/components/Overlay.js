
export default function Overlay(props) {
  console.log(props)
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '28px', fontWeight: 'bold' }}>META WORLD</div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>ZIMA BLUE TEAM</div>
      <button style={{ position: 'absolute', bottom: 40, left: 40, fontSize: '13px', zIndex: 999, background: 'yellow' }} onClick={props.TogoCameraView}>
        ZOOM IT
      </button>
    </div>
  )
}