
import IconButton from '../IconButton';
import { createPortal } from 'preact/compat';
import { AiOutlineClose } from 'react-icons/ai';	
import { Container, ModalZone } from './style';

type Props = {
    isShowing: boolean;
    hide: () => void;
    children: any;
}

const Modal = ({isShowing, hide, children}: Props) => isShowing ? createPortal(
    <ModalZone>
        <Container>
            <IconButton onClick={hide} icon={<AiOutlineClose color="#FFFFFF" />}/>
            {children}
        </Container>
    </ModalZone>, document.body
  ) : null;

export default Modal;