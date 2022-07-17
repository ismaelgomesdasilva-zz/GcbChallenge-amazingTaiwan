
import { Button } from '../../components'
import { theme } from '../../utils/styles/theme'
import { Container, Modal } from './styles'


export const Subscribe = () => (



    <Container>
        <Modal>
            <div>
                <h1>Subscribe our newsletter</h1>
                <p>Receive latest news, update, and many other things
                    every week.</p>
                <form action='/' method='post'>
                    <input type='text' name='pesquisa' placeholder='Your email here' />
                    <Button title='Join Now' width={9.61} height={2.8519} color={theme.color.black} />
                </form>
            </div>
        </Modal>
    </Container>
)
