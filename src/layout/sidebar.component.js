import React from 'react';
import logo from '../app_logo.png'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export default function Sidebar(){
    const { t, i18n } = useTranslation();
    return (
        <nav id="sidebar">
        <div class="sidebar-header mt-3">
            <img src={logo}  height={50}/>
        </div>

        <ul class="list-unstyled components">
            <li className="active">
                <Link to="/">{t('profile')}</Link>
            </li>
            <li className="active">
                <Link to="/contact">{t('help')}</Link>
            </li>
        </ul>
    </nav>
    )
}