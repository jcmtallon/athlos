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

const H1 = styled.div`
  ${props => props.theme.typography.header.h1}
`
const H2 = styled.div`
  ${props => props.theme.typography.header.h2}
`
const H3 = styled.div`
  ${props => props.theme.typography.header.h3}
`
const H4 = styled.div`
  ${props => props.theme.typography.header.h4}
`
const H5 = styled.div`
  ${props => props.theme.typography.header.h5}
`
const H6 = styled.div`
  ${props => props.theme.typography.header.h6}
`
const H7 = styled.div`
  ${props => props.theme.typography.header.h7}
`

const Lg = styled.div`
  ${props => props.theme.typography.body.lg}
`

const Base = styled.div`
  ${props => props.theme.typography.body.base}
`

const BaseStrong = styled.div`
  ${props => props.theme.typography.body.base.strong}
`

const Md = styled.div`
  ${props => props.theme.typography.body.md}
`

const Sm = styled.div`
  ${props => props.theme.typography.body.sm}
`

const Xs = styled.div`
  ${props => props.theme.typography.body.xs}
`

const Xxs = styled.div`
  ${props => props.theme.typography.body.xxs}
`

export {
  ActionButtonWrapper,
  Header,
  Wrapper,
  Filters,
  FilterRow,
  TopRow,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  H7,
  Lg,
  Base,
  BaseStrong,
  Md,
  Sm,
  Xs,
  Xxs,
}
