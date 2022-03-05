import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  padding-left: 10rem;
`

const TopBar = styled.div`
  height: 6rem;
  z-index: 10;
`

const SideBar = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 10rem;
  overflow: auto;
  border-right: 1px solid #dedddc;
`

const Body = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  padding: 1rem;

  background-color: #f6f6f4;
`

export { Body, SideBar, Wrapper, TopBar }
