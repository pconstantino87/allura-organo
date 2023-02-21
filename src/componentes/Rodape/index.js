import './Rodape.css'

const rodape = () => {
    return (
        <footer className='footer'>
            <div>
                <ul>
                    <li><a href="#"><img src="/images/fb.png" alt="facebook" /></a></li>
                    <li><a href="#"><img src="/images/tw.png" alt="twitter" /></a></li>
                    <li><a href="#"><img src="/images/ig.png" alt="instagram" /></a></li>
                </ul>
            </div>
            <div><img src="/images/logo.png" alt="organo" /></div>
            <div><p>Alura - Desenvolvido por <a href="https://www.linkedin.com/in/pedro-tiago-constantino-a71966252/" target="_blank" rel="noopener noreferrer">Pedro Constantino</a></p></div>
        </footer>
    )
}

export default rodape