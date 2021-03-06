import React from 'react';
import {MdChevronRight,MdRefresh} from 'react-icons/md';

import heroesImage from '../../assets/heroes.png';
import logoImage from '../../assets/logo.svg';

import './style.css';

export default function Logon(){
    return(
        <div className="logon-container">
            <img src={heroesImage} alt='heroes image' />
            
            <section className="form">
                
                <img src={logoImage} alt="logo 'Be The Hero' " />

                <form>
                    <h1>Faça seu Logon</h1>
                    <input type="text" name='id' placeholder='Sua ID'/>
                    <input type="password" name='pass' placeholder='Sua Senha'/>
                    <button type="submit" className='button'>Entrar</button>
                    
                    <div>
                        <a href="http://">
                            <MdRefresh size={16} color={'#8C20E0'} />
                            Esqueci a senha
                        </a>

                        <a href="http://">
                            <MdChevronRight size={16} color={'#8C20E0'} />
                            Não tenho cadastro
                        </a>
                    </div>
                </form>
            
            </section>
        </div>
    )
}