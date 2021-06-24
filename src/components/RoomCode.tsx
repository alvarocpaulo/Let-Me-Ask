import copyImg from '../assets/images/copy.svg';

import '../styles/room-code.scss';

export function RoomCode() {
    return (
        <button className="room-cosw">
            <div>
                <img src={copyImg} alt="Copiar o código da Sala" />
            </div>
            <span>Sala #242424</span>
        </button>
    )
}