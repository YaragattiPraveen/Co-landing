import { ReactComponent as DropDownArrow } from '../../assets/svg/arrows/dropdown.svg';
// import { ReactComponent as Arrow } from '../../assets/svg/arrows/down.svg';
import { ReactComponent as Dot } from '../../assets/svg/common/dot.svg';

// import { activeAlerts, activeLoggers } from '../../dummy/manager/dashboard';

function Dashboard() {
  return (
    <section className='grid grid-cols-4 grid-rows-[auto_auto_1fr] gap-6 h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className='col-span-4 px-8 py-4 bg-white'>
        <h1 className='text-2xl font-medium'>Welcome back Raj kumar</h1>
        <p>Last seen 1d ago</p>
      </div>

      <div className='col-span-3 pl-8'>
        <div className='bg-white shadow-md rounded'>
          <div className='df py-2 px-4 border-b'>
            <h2 className='text-lg font-medium'>Summary</h2>
            <Dot className='w-4 h-4 shrink-0 ml-auto' />
          </div>

          <div className='grid grid-cols-4 text-center'>
            <div className='border-r font-medium'>
              <p className='mt-4 text-sm'>No. of Loans</p>
              <p className='my-1 text-2xl'>624</p>
              <button className='p-0 mb-2 text-[#678b3b] font-medium'>
                See all
              </button>
            </div>

            <div className='border-r font-medium'>
              <p className='mt-4 text-sm'>Accepted Loans</p>
              <p className='my-1 text-2xl'>42</p>
              <button className='p-0 mb-2 text-[#678b3b] font-medium'>
                See all
              </button>
            </div>

            <div className='border-r font-medium'>
              <p className='mt-4 text-sm'>Rejected Loans</p>
              <p className='my-1 text-2xl'>10</p>
              <button className='p-0 mb-2 text-[#678b3b] font-medium'>
                See all
              </button>
            </div>

            <div className='font-medium'>
              <p className='mt-4 text-sm'>Pending Loans</p>
              <p className='my-1 text-2xl'>2</p>
              <button className='p-0 mb-2 text-[#678b3b] font-medium'>
                See all
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='pr-8'>
        <div className='h-full py-2 px-4 bg-slate-500 text-white [--svg-color:#fff] shadow-md rounded'>
          <p className='text-2xl font-medium'>We are here to <br /> help you!</p>
          <p className='df my-2 cursor-pointer'>Contact us <DropDownArrow className='shrink-0 ml-auto -rotate-90' /></p>
          <p className='df cursor-pointer'>FAQ <DropDownArrow className='shrink-0 ml-auto -rotate-90' /></p>
        </div>
      </div>

      {/* <div className='h-full col-span-2 p-1 pl-8 pb-4 pr-10 overflow-y-hidden'>
        <div className='dfc gap-0 h-[inherit] bg-white shadow-md rounded'>
          <h3 className='py-2 px-4 text-lg font-medium'>Latest 5 Active Loggers</h3>

          <div className='scroll-y'>
            <table className='w-full'>
              <thead>
                <tr className='sticky top-0 z-1 bg-white text-left shadow'>
                  <td className='py-2 px-4'>DPR number</td>
                  <td className='py-2 px-4'>Last measurement</td>
                  <td></td>
                </tr>
              </thead>

              <tbody>
                {
                  activeLoggers.map(l => (
                    <tr key={l.id}>
                      <td className='py-2 px-4 align-text-top'>{l.name}</td>
                      <td className='py-2 px-4'>
                        <div>
                          <p className='mb-1'><strong>{l.points}&deg;C</strong> ({l.time})</p>
                          <p className='df'>
                            <Arrow className='w-4 h-4 [--svg-color:#b91c1c] rotate-180' /> {l.up}&deg;C <Arrow className='w-4 h-4 [--svg-color:#22c55e]' /> {l.down}&deg;C = {l.equal}&deg;C
                          </p>
                        </div>
                      </td>
                      <td className='py-2 px-4'>
                        <button className='text-sm bg-[#678b3b] text-white hover:scale-105 transition-transform'>
                          Open
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>

          <div className='border-t pt-2'>
            <button className='dc mx-auto mb-2 bg-[#678b3b] text-white font-medium hover:scale-105 transition-transform'>
              See All (634) <DropDownArrow className='[--svg-color:#fff] -rotate-90' />
            </button>
          </div>
        </div>
      </div>

      <div className='h-full col-span-2 p-1 pr-8 pb-4 pl-10 overflow-y-hidden'>
        <div className='dfc gap-0 h-[inherit] bg-white shadow-md rounded'>
          <h3 className='py-2 px-4 text-lg font-medium'>Latest 5 Alerts</h3>

          <div className="scroll-y">
            <table className='w-full'>
              <thead>
                <tr className='sticky top-0 bg-white text-left shadow'>
                  <td className='py-2 px-4'>DPR number</td>
                  <td className='py-2 px-4'>Problem</td>
                  <td></td>
                </tr>
              </thead>

              <tbody>
                {
                  activeAlerts.map(a => (
                    <tr key={a.id}>
                      <td className='py-2 px-4'>{a.mission}</td>
                      <td className='py-2 px-4'>{a.problem}</td>
                      <td className='py-2 px-4'>
                        <button className='text-sm bg-[#678b3b] text-white hover:scale-105 transition-transform'>
                          Open
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>

          <div className='border-t pt-2'>

          </div>
          <button className='dc mx-auto mb-2 bg-[#678b3b] text-white font-medium hover:scale-105 transition-transform'>
            See All (33) <DropDownArrow className='[--svg-color:#fff] -rotate-90' />
          </button>
        </div>
      </div> */}
    </section>
  )
}

export default Dashboard