import styled from 'styled-components'

const FilterRow = styled.div`
  display: flex;
  justify-content: space-between;
`

const Filters = styled.div`
  display: grid;
  grid-column-gap: 14px;
  grid-template-columns: auto auto auto auto auto auto;
`

const ActionButtonWrapper = styled.div`
  display: grid;
  grid-column-gap: 8px;
  grid-template-columns: auto auto;
`

export { FilterRow, Filters, ActionButtonWrapper }
