import styled from 'styled-components'

const Wrapper = styled.div``

const Header = styled.div`
  font-weight: bold;
`

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
`

const Table = styled.table`
  padding: 6px;
  width: 100%;
  margin-top: 20px;
  margin: 10px;
  border: 1px solid gray;
  background-color: white;
`

const Cell = styled.td`
  text-align: center;
  padding: 6px;
`

export { Header, Wrapper, TopRow, Table, Cell }
