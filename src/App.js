import { lazy, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import Loader from './comp/Common/Loader';

const ForgetPass = lazy(() => import("./comp/Auth/ForgetPass"))
const Signup = lazy(() => import("./comp/Auth/Signup"))
const Login = lazy(() => import("./comp/Auth/Login"))

const TemplateSBILoanDetails = lazy(() => import("./comp/Template/SBILoanDetails"))
const TemplateLoanDetails = lazy(() => import("./comp/Template/LoanDetails"))
const TemplateDashboard = lazy(() => import("./comp/Template/Dashboard"))
const TemplateSettings = lazy(() => import("./comp/Template/Settings"))
const TemplateSupport = lazy(() => import("./comp/Template/Support"))
const TemplateFPO = lazy(() => import("./comp/Template/FPO"))

const AdminSubscription = lazy(() => import("./comp/Admin/Subscription"))
const AdminUser = lazy(() => import("./comp/Admin/User"))
const Admin = lazy(() => import("./comp/Admin"))

const RMLoan = lazy(() => import("./comp/RelationshipManager/Loan"))
const RM = lazy(() => import("./comp/RelationshipManager"))

const CMLoan = lazy(() => import("./comp/CreditManager/Loan"))
const CM = lazy(() => import("./comp/CreditManager"))

const CCLULoan = lazy(() => import("./comp/CentralCoLendingUnit/Loan"))
const CCLU = lazy(() => import("./comp/CentralCoLendingUnit"))

const CADLoan = lazy(() => import("./comp/CreditAdminDepartment/Loan"))
const CAD = lazy(() => import("./comp/CreditAdminDepartment"))

const CCLoan = lazy(() => import("./comp/CreditCommitte/Loan"))
const CC = lazy(() => import("./comp/CreditCommitte"))

const COLoan = lazy(() => import("./comp/CreditOperations/Loan"))
const CO = lazy(() => import("./comp/CreditOperations"))

const OpLoan = lazy(() => import("./comp/Operations/Loan"))
const Op = lazy(() => import("./comp/Operations"))

const SBILoan = lazy(() => import("./comp/SBI/Loan"))
const SBI = lazy(() => import("./comp/SBI"))

function App() {
  return (
    <Suspense fallback={<Loader wrapperCls='h-screen' />}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forget-password" element={<ForgetPass />} />

        <Route path="admin" element={<Admin />}>
          <Route path='user' element={<AdminUser />} />
          <Route path='support' element={<TemplateSupport />} />
          <Route path='setting' element={<TemplateSettings />} />
          <Route path='subscription' element={<AdminSubscription />} />
        </Route>

        <Route path="relationship_manager" element={<RM />}>
          <Route path='fpo' element={<TemplateFPO />} />
          <Route path='loan' element={<RMLoan />} />
          <Route path='setting' element={<TemplateSettings />} />
          <Route path='support' element={<TemplateSupport />} />
          <Route path='dashboard' element={<TemplateDashboard />} />
          <Route path='loan-details' element={<TemplateLoanDetails role="relationship_manager" />} />
          <Route path='sbi-loan-details' element={<TemplateSBILoanDetails />} />
        </Route>

        <Route path="credit_manager" element={<CM />}>
          <Route path='fpo' element={<TemplateFPO />} />
          <Route path='loan' element={<CMLoan />} />
          <Route path='support' element={<TemplateSupport />} />
          <Route path='setting' element={<TemplateSettings />} />
          <Route path='dashboard' element={<TemplateDashboard />} />
          <Route path='loan-details' element={<TemplateLoanDetails />} />
          <Route path='sbi-loan-details' element={<TemplateSBILoanDetails />} />
        </Route>

        <Route path="central_co_lending_unit" element={<CCLU />}>
          <Route path='fpo' element={<TemplateFPO />} />
          <Route path='loan' element={<CCLULoan />} />
          <Route path='support' element={<TemplateSupport />} />
          <Route path='setting' element={<TemplateSettings />} />
          <Route path='dashboard' element={<TemplateDashboard />} />
          <Route path='loan-details' element={<TemplateLoanDetails />} />
          <Route path='sbi-loan-details' element={<TemplateSBILoanDetails />} />
        </Route>

        <Route path="credit_admin_department" element={<CAD />}>
          <Route path='fpo' element={<TemplateFPO />} />
          <Route path='loan' element={<CADLoan />} />
          <Route path='support' element={<TemplateSupport />} />
          <Route path='setting' element={<TemplateSettings />} />
          <Route path='dashboard' element={<TemplateDashboard />} />
          <Route path='loan-details' element={<TemplateLoanDetails />} />
          <Route path='sbi-loan-details' element={<TemplateSBILoanDetails />} />
        </Route>

        <Route path="credit_committee" element={<CC />}>
          <Route path='fpo' element={<TemplateFPO />} />
          <Route path='loan' element={<CCLoan />} />
          <Route path='support' element={<TemplateSupport />} />
          <Route path='setting' element={<TemplateSettings />} />
          <Route path='dashboard' element={<TemplateDashboard />} />
          <Route path='loan-details' element={<TemplateLoanDetails />} />
          <Route path='sbi-loan-details' element={<TemplateSBILoanDetails />} />
        </Route>

        <Route path="credit_operations" element={<CO />} >
          <Route path='fpo' element={<TemplateFPO />} />
          <Route path='loan' element={<COLoan />} />
          <Route path='support' element={<TemplateSupport />} />
          <Route path='setting' element={<TemplateSettings />} />
          <Route path='dashboard' element={<TemplateDashboard />} />
          <Route path='loan-details' element={<TemplateLoanDetails />} />
          <Route path='sbi-loan-details' element={<TemplateSBILoanDetails />} />
        </Route>

        <Route path="operations" element={<Op />} >
          <Route path='fpo' element={<TemplateFPO />} />
          <Route path='loan' element={<OpLoan />} />
          <Route path='support' element={<TemplateSupport />} />
          <Route path='setting' element={<TemplateSettings />} />
          <Route path='dashboard' element={<TemplateDashboard />} />
          <Route path='loan-details' element={<TemplateLoanDetails />} />
          <Route path='sbi-loan-details' element={<TemplateSBILoanDetails />} />
        </Route>

        <Route path="sbi" element={<SBI />} >
          <Route path='fpo' element={<TemplateFPO />} />
          <Route path='loan' element={<SBILoan />} />
          <Route path='dashboard' element={<TemplateDashboard />} />
          <Route path='loan-details' element={<TemplateLoanDetails role='sbi' />} />
          <Route path='sbi-loan-details' element={<TemplateSBILoanDetails />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App;