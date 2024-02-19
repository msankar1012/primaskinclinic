import logoFooter from '../../images/logo-prima-skin-clinic.svg'
import pkg from '../../../package.json'
import './style.css'
export const Footer = () => {
    return (
        <>
            <footer className='psc-footer'>
                <div className="container text-center py-5">
                    <div className="logo-footer mb-4">
                        <img src={ logoFooter } alt={ pkg.name } />
                    </div>

                    <p className='pb-0'>&copy; { new Date().getFullYear() },&nbsp; All rights reserved</p>

                </div>
            </footer>
        </>
    )
}
