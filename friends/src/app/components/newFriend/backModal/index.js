import React from 'react'
import ReactDOM from 'react-dom'
import { EmoLink, Button } from '../../../../emotionalThings/EmoTools'
import { EmoModalDiv } from './EmoBackModal'

const BackModal = ({ visible, close }) => {
  return (
    visible &&
    ReactDOM.createPortal(
      <>
        <EmoModalDiv>
          <EmoLink to='/home'>
            <Button m='15px' h='40px' br='15px' p='0 10px'>
              Go Home
            </Button>
          </EmoLink>
          <Button m='15px' h='40px' br='15px' p='0 10px' onClick={() => close('addNewFriend', false)}>
            Add Another Friend
          </Button>
        </EmoModalDiv>
      </>,
      document.body
    )
  )
}
export default BackModal
