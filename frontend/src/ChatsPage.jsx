import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'cbe864c5-7702-4cfa-a07f-07f8519c8f4f',
        props.user.username,
        props.user.secret
    );
    return (
         <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
        </div>
    )
  }

  export default ChatsPage;