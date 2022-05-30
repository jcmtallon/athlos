import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { AthleteList } from '../views/AthleteList'
import { AthleteDetails } from '../views/AthleteDetails'

function AthletesRouter() {
  return (
    <Routes>
      <Route path="/" element={<AthleteList />} />
      <Route path=":athleteId" element={<AthleteDetails />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export { AthletesRouter }

// function RecurringReservationsRouter() {
//     const { path, url } = useRouteMatch()
//     const history = useHistory()
//     const dispatch = useDispatch()

//     const fallback = (
//       <Criteria
//         requiresPermission={PermissionName.CUSTOMER_RECURRING_RESERVATIONS}
//         requiresPermissionLevel={PermissionLevel.READ_ONLY}
//         fallback={<Redirect to="/" />}>
//         <Redirect to={url} />
//       </Criteria>
//     )

//     return (
//       <>
//         <Route path={path} component={RecurringReservationsList} />

//         <SlidePanelRoute
//           path={[
//             `${path}/add`,
//             `${path}/:recurringMatchConfigurationId/reservations/:matchId`,
//             `${path}/:recurringMatchConfigurationId`,
//           ]}>
//           <ErrorBoundary error={<ErrorDisplay text=" " />}>
//             <Switch>
//               <Route path={`${path}/add`}>
//                 <Criteria
//                   requiresPermission={PermissionName.CUSTOMER_RECURRING_RESERVATIONS}
//                   requiresPermissionLevel={PermissionLevel.READ_WRITE}>
//                   <AddRecurringReservation />
//                 </Criteria>
//               </Route>

//               <Route
//                 path={`${path}/:recurringMatchConfigurationId/reservations/:matchId`}
//                 render={props => {
//                   const matchId = getRouteMatchPathParam(props, 'matchId')
//                   const recurringMatchConfigurationId = getRouteMatchPathParam(
//                     props,
//                     'recurringMatchConfigurationId',
//                   )

//                   const navigateToEditRecurringReservationModal = () => {
//                     dispatch(push(`${path}/${recurringMatchConfigurationId}/reservations`))
//                   }

//                   return (
//                     <EditReservationModal
//                       onEditMatchRecurrenceClick={recurrenceId => {
//                         history.push(`${url}/${recurrenceId}`)
//                       }}
//                       matchId={matchId}
//                       onNavigateBackClick={navigateToEditRecurringReservationModal}
//                     />
//                   )
//                 }}
//               />

//               <Route
//                 path={`${path}/:recurringMatchConfigurationId`}
//                 render={props => (
//                   <RecurringMatchConfigurationConsumer
//                     recurringMatchConfigurationId={getRouteMatchPathParam(
//                       props,
//                       'recurringMatchConfigurationId',
//                     )}
//                     includeConflicts={true}
//                     fetchOnMount={true}>
//                     {recurringMatchConfiguration => (
//                       <RecurringReservationDetails
//                         recurringReservation={recurringMatchConfiguration}
//                         onRecurringReservationUpdated={() => history.replace(url)}
//                         onRecurringReservationCancelled={() => history.replace(url)}
//                       />
//                     )}
//                   </RecurringMatchConfigurationConsumer>
//                 )}
//               />
//             </Switch>
//           </ErrorBoundary>
//         </SlidePanelRoute>

//         <Route>{fallback}</Route>
//       </>
//     )
//   }

//   export { RecurringReservationsRouter }
