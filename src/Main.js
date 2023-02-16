function Main(){
    return(
        <div className="App">
            <div className='main'>
                <div className='center'>
                    <div className='menu'>
                        <div className='logo'>
                            <h3>Gregório de lucca</h3>
                        </div>
                        <div className='item-menu'>
                            <a href="#">login</a>
                        </div>
                    </div>
                    <div className="form">
                        <form>
                            <h2> entre em contato</h2>
                            <div className='items-form'>
                                <input placeholder='seu nome' type="text" />
                                <input placeholder='seu e-email' type="text" />
                                <input type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='conteudo'>
                <div className='center'>
                    <div className='conteudo-single'>
                        <h3>reactjs</h3>
                        <p> estudando reactjs </p>
                    </div>
                    <div className='conteudo-single'>
                        <h3>sass</h3>
                        <p> estudando  sass</p>
                    </div>
                    <div className='conteudo-single'>
                        <h3>nodejs</h3>
                        <p> estudando nodejs</p>
                    </div>
                    <div className='conteudo-single'>
                        <h3>MySql</h3>
                        <p> estudando banco relacional</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;