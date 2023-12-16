import AppWrapper from "../Template/AppWrapper";
import { ReactComponent as Dashboard } from '../../assets/svg/common/dashboard.svg';
import { ReactComponent as Loan } from '../../assets/svg/common/loan.svg';
import { ReactComponent as Dpr } from '../../assets/svg/common/dpr.svg';

const list = [
  {
    title: "Dashboard",
    icon: <Dashboard />,
    to: 'dashboard'
  },
  {
    title: "FPO Info",
    icon: <Dpr />,
    to: 'fpo'
  },
  {
    title: "FPO Loan",
    icon: <Loan />,
    to: 'loan'
  },
  {
    title: "Loan-details",
    icon: <Loan />,
    to: 'loan-details'
  },
  {
    title: "SBI Loan",
    icon: <Loan />,
    to: 'sbi-loan-details'
  },
]

function Operations() {
  return <AppWrapper role="sbi" list={list} />
}

export default Operations