import supportImg from '../../assets/svg/common/support2.svg';

function Support() {
  return (
    <section className='df gap-12 h-full p-8 overflow-y-hidden bg-[#f7f7f7]'>
      <div className='flex-1'>
        <textarea className="mb-8 h-96" placeholder='Enter your queries...'>
        </textarea>

        <button
          className="w-40 block mx-auto bg-[#a3dc5d] hover:bg-[#74a03e]"
        >
          Submit
        </button>
      </div>

      <div className='df px-8 h-[inherit]'>
        <img
          className='w-96'
          src={supportImg}
          alt="Support"
        />
      </div>
    </section>
  )
}

export default Support