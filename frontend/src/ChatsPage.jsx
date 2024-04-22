import { PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
         <div style={{ height: '100vh' }}>
            <PrettyChatWindow
            projectId='cbe864c5-7702-4cfa-a07f-07f8519c8f4f'
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100%'}}
            />
        </div>
    )
  }

  export default ChatsPage;