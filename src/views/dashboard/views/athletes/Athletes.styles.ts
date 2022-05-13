import styled from 'styled-components'

const Wrapper = styled.div``

const Header = styled.div`
  font-weight: bold;
`

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
`

const FilterRow = styled.div`
  display: flex;
  justify-content: space-between;
`

const Filters = styled.div`
  display: grid;
  grid-column-gap: 14px;
  grid-template-columns: auto auto auto auto;
`

const ActionButtonWrapper = styled.div`
  display: grid;
  grid-column-gap: 8px;
  grid-template-columns: auto auto;
`

const Table = styled.table`
  width: 100%;
  margin-top: 20px;
`

const Cell = styled.td`
  text-align: center;
  padding: 6px;
`

export { ActionButtonWrapper, Header, Wrapper, Filters, FilterRow, TopRow, Table, Cell }
