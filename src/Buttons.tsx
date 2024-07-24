import {useButton, AriaButtonOptions} from 'react-aria';
import {useRef} from 'react';

function Buttons() {
  return (
  <ButtonHook onPress={()=>alert('Button pressed')}>Button Hook</ButtonHook>
  )
}

interface ButtonHookProps extends AriaButtonOptions<'button'> {
  // children is a special prop in React that refers to the child elements passed to a react component
  children?: string
}

function ButtonHook(props: ButtonHookProps) {
  const {
    children,
    ...otherProps
  } = props
  const ref = useRef(null);
  const {buttonProps} = useButton(otherProps, ref);
  // console.log(children);
  return (
    <button {...buttonProps} ref={ref}>
      {children}
    </button>
  )
}

export default Buttons;

// just adding some comments
// add comment