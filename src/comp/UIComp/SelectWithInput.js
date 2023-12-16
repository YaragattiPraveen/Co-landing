import { useMemo } from 'react';
import { autoUpdate, flip, shift, useFloating } from '@floating-ui/react-dom-interactions';
import { Combobox, Transition } from '@headlessui/react';
import { ReactComponent as Arrow } from '../../assets/svg/arrows/dropdown.svg';

function isMatching(value, query) {
  return value
    ?.toLowerCase()
    ?.replace(/\s+/g, '')
    ?.includes(query?.toLowerCase()?.replace(/\s+/g, ''))
}

function SelectWithInput({
  contentCls = "", btnCls = "",
  arrowCls = "mr-2", optionCls = "py-2 px-4",
  activeCls = "bg-[#a3dc5d]", unactiveCls = "text-gray-800",
  selectedCls = "font-medium", unselectedCls = "font-normal",
  list = [], value = "", onChange = () => { }, placeholder = "",
  lable = "", lableCls = "", inputCls = '',
  transition = {}, strategy = 'absolute', placement = 'bottom-end',
  query = '', setQuery = () => { }, NotFoundComp = null, disabled = false
}) {
  const { x, y, reference, floating, strategy: floatStrategy } = useFloating({
    placement,
    strategy,
    middleware: [flip(), shift()],
    whileElementsMounted: autoUpdate
  })

  const contentTransition = useMemo(() => {
    let newTransition = {
      enter: "transition-opacity duration-300",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "transition-opacity duration-300",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0",
    }
    if (Object.keys(transition).length > 0) {
      newTransition = {
        ...newTransition,
        ...transition
      }
    }

    return newTransition
  }, [transition])

  const filteredList = list
    .filter(l => typeof l === "string"
      ? isMatching(l, query)
      : l.displayValue
        ? isMatching(l.displayValue, query)
        : isMatching(l.key, query)
    )

  return (
    <Combobox value={value} onChange={onChange} disabled={disabled}>
      {
        lable &&
        <Combobox.Label className={`select-label ${lableCls}`}>
          {lable}
        </Combobox.Label>
      }

      <div
        ref={reference}
        className={`df select-btn-box ${btnCls}`}
      >
        <Combobox.Input
          displayValue={l => typeof l === "string" ? l : l.displayValue || l.key}
          placeholder={placeholder}
          className={`select-input-box ${inputCls}`}
          onChange={e => setQuery(e.target.value)}
        />
        <Combobox.Button className='p-0'>
          <Arrow className={`select-arrow ${arrowCls}`} />
        </Combobox.Button>
      </div>

      <Transition
        appear
        className='relative'
        {...contentTransition}
      >
        <Combobox.Options
          ref={floating}
          style={{
            position: floatStrategy,
            top: y ?? "",
            left: x ?? "",
          }}
          className={`select-options mini-scroll-bar ${strategy === 'absolute' ? "w-full" : ''} ${contentCls}`}
        >
          {
            filteredList.length === 0 && query !== ''
              ? (
                NotFoundComp ||
                <div className="select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredList
                  .map(l => (
                    <Combobox.Option
                      key={typeof l === "string" ? l : l.key}
                      className={({ active, selected }) => `cursor-pointer ${optionCls} ${active ? activeCls : unactiveCls} ${selected ? selectedCls : unselectedCls}`}
                      // value={typeof l === "string" ? l : l.key}
                      value={l}
                    >
                      {typeof l === "string" ? l : l.Comp || l.displayValue}
                    </Combobox.Option>
                  ))
              )}
        </Combobox.Options>
      </Transition>
    </Combobox>
  )
}

export default SelectWithInput