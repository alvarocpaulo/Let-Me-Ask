import { useParams } from 'react-router';
import { string } from 'yargs';
import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import '../styles/room.scss';

type RoomParms = {
    id: string;
}

export function Room() {

    const parms = useParams<RoomParms>();

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <RoomCode code={parms.id} />
                </div>
            </header>

            <main>
                <div className="room-titile">
                    <h1>Sala React</h1>
                    <span>4 perguntas</span>
                </div>
                <form>
                    <textarea placeholder="O que você quer perguntar?"
                    />

                    <div className="form-footer">
                        <span>Para enviar sua perguntar, <button>faça seu login.
                        </button>
                        </span>
                        <Button type="submit">Enviar pergunta</Button>
                    </div>
                </form>
            </main>
        </div>

    );
}