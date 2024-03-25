function MainButton({text, clickAction, className}) {
  return(
    <button className={"py-3 px-5 bg-violet text-white rounded-3xl " + className} onClick={clickAction}>{text}</button>
  )
}

export default MainButton;