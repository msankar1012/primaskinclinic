import logo from '../../images/logo-prima-skin-clinic.svg'
import pkg from '../../../package.json'
import './style.css'

export const Header = () => {
    return (
        <header className='psc-header'>
            <div className="container d-flex align-items-center justify-content-center">
                <div className="logo">
                    <img className={'me-4'} src={ logo } alt={pkg.name} />
                    <h1>Transform your beauty and well-being with Prima Beauty Aesthetics</h1>
                </div>
            </div>
        </header>
    )
}
