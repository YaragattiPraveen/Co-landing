function Btns({ step, type, loading, setStep, onSubmit }) {
  return (
    <div className='df'>
      {
        step > 0 &&
        <button
          className='bg-[#a3dc5d] hover:scale-105'
          onClick={() => setStep(p => p - 1)}
        >
          Previous
        </button>
      }

      {
        step < 5 &&
        <button
          className='ml-auto bg-[#a3dc5d] hover:scale-105'
          onClick={() => setStep(p => p + 1)}
        >
          Next
        </button>
      }

      {
        step === 5 && type !== "View" &&
        <button
          className='ml-auto bg-[#a3dc5d] hover:scale-105 disabled:opacity-70'
          onClick={onSubmit}
          disabled={loading}
        >
          {type}
        </button>
      }
    </div>
  )
}

export default Btns