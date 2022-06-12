import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  // TODO(theme): use theme color
  z-index: 100;

  // Prevents the transformation on the Panel from forcing the browser to show a scrollbar.
  overflow: hidden;
`

const Backdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  // TODO(theme): use theme color
  background-color: black;
`

const Panel = styled.div`
  // TODO(theme): use theme color
  background-color: white;

  width: 1200px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
`

export { Container, Backdrop, Panel }
