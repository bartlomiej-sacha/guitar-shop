import React from 'react'
import { Container } from 'react-bootstrap';
function Parallax({ height, url }) {
    return (
        <Container fluid className={'p-0'}>
            <div className="parallax"
                style={{
                    height: height,
                    backgroundImage: "linear-gradient(to bottom, rgba(250, 61, 103, 0.1), rgba(197, 16, 16, 0.73)),url(" + url + ")",
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}>
            </div>
        </Container>
    )
}

export default Parallax;