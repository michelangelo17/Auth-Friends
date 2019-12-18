import { useState } from 'react'

const useModal = () => {
  const [visible, setVisible] = useState({
    delete: false,
    update: false,
    addNewFriend: false,
  })
  // can pass in some kind of data to use in modal
  const [value, setValue] = useState({
    delete: null,
    update: null,
    addNewFriend: null,
  })
  const showHideModal = (key, bool, e) => {
    setVisible({
      ...visible,
      [key]: bool,
    })
    e
      ? setValue({
          ...value,
          [key]: e.target.value,
        })
      : setValue({
          ...value,
          [key]: null,
        })
  }
  return {
    visible,
    showHideModal,
    value,
  }
}

export default useModal
