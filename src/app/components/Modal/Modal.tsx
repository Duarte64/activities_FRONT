
import { AiOutlineClose } from 'react-icons/ai';	
import { Fragment } from 'preact';
import { Container, ModalZone } from './style';
import { createPortal } from 'preact/compat';

type Props = {
    isShowing: boolean;
    hide: () => void;
    children: any;
}

const Modal = ({isShowing, hide, children}: Props) => isShowing ? createPortal(
    <ModalZone>
        <Container>
            <AiOutlineClose onClick={hide} color="#FFFFFF" />
            {children}
        </Container>
    </ModalZone>, document.body
  ) : null;

export default Modal;