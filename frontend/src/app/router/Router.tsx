import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

import { AppLayout } from '@/shared/components/app-layout'

const FormContracs = lazy(
  () => import('@/features/contracts/pages/contract-create-page')
)

const ListContracs = lazy(
  () => import('@/features/contracts/pages/contract-list-page')
)

const ReportsPenalty = lazy(
  () => import('@/features/contracts/pages/reports/penalty')
)

const ReportsTotalInstallment = lazy(
  () => import('@/features/contracts/pages/reports/total-installment')
)

const NotMatch = lazy(
  () => import('@/features/not-match/pages/NotMatch')
)

export default function Router() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="" element={<ListContracs />} />
        <Route path="create" element={<FormContracs />} />

        <Route path="/reports/penalty" element={<ReportsPenalty />} />
        <Route
          path="/reports/total-installment"
          element={<ReportsTotalInstallment />}
        />

        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  )
}